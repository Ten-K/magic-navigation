<script setup lang="ts">
import { Fold, Expand } from "@element-plus/icons-vue";

// 是否折叠菜单
const { isCollapse, toggerCollapse } = useCollapse();
// 暗黑主题
const { isDark, toggerDark } = useDark();

// #region 国际化
const { locale } = useI18n();

// 切换语言
function toggerLocale() {
	locale.value === "zh" ? (locale.value = "en") : (locale.value = "zh");
	localStorageUtil.set("locale", locale.value);
}
// #endregion
</script>

<template>
	<el-header class="el-header">
		<div @click="toggerCollapse" class="el-header-iscollapse">
			<el-icon v-if="isCollapse" title="展开"><Expand /></el-icon>
			<el-icon v-else title="收起"><Fold /></el-icon>
		</div>
		<div class="el-header-right">
			<div @click="toggerLocale" class="el-header-right-item" title="切换语言">
				<SvgIcon
					v-if="locale === 'zh'"
					name="chinese"
					class="el-header-right-item-icon"
				/>
				<SvgIcon v-else name="english" class="el-header-right-item-icon" />
			</div>
			<div @click="toggerDark" class="el-header-right-item" title="主题模式">
				<SvgIcon v-if="isDark" name="dark" class="el-header-right-item-icon" />
				<SvgIcon v-else name="sun" class="el-header-right-item-icon" />
			</div>
			<el-link
				:underline="false"
				href="https://github.com/Ten-K/magic-navigation"
				target="_blank"
				><SvgIcon
					name="github"
					class="el-header-right-item-icon"
				/>GitHub</el-link
			>
		</div>
	</el-header>
</template>

<style scoped lang="scss">
@mixin hoverActive {
	cursor: pointer;
	color: #409eff;
}
.el-header {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #dcdfe6;
	.el-header-iscollapse:hover {
		@include hoverActive;
	}
	.el-header-right {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #606266;

		.el-header-right-item {
			margin-right: 15px;
			line-height: 50%;
			&:hover {
				@include hoverActive;
			}
		}

		.el-header-right-item-icon {
			width: 24px;
			height: 24px;
		}
	}
}
</style>
