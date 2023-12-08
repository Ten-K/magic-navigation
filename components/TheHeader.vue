<script setup lang="ts">
import { Fold, Expand } from "@element-plus/icons-vue";
// 是否折叠菜单
const { isCollapse, toggerCollapse } = useCollapse();
const { isDark, toggerDark } = useDark();
</script>

<template>
	<el-header class="el-header">
		<div @click="toggerCollapse" class="el-header-iscollapse">
			<el-icon v-if="isCollapse" title="展开"><Expand /></el-icon>
			<el-icon v-else title="收起"><Fold /></el-icon>
		</div>
		<div class="el-header-right">
			<div @click="toggerDark" class="el-header-right-dark" title="主题模式">
				<SvgIcon v-if="isDark" name="dark" />
				<SvgIcon v-else name="sun" />
			</div>
			<el-link
				:underline="false"
				href="https://github.com/Ten-K/magic-navigation"
				target="_blank"
				><SvgIcon name="github" />GitHub</el-link
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
		.el-header-right-dark {
      margin-right: 10px;
      line-height: 50%;
			&:hover {
				@include hoverActive;
			}
		}
	}
}
</style>
