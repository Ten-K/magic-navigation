<script setup lang="ts">
import menuDataList from "@/data/menu";

defineEmits<{
	"handle-select": [key: string];
}>();

const { isCollapse } = useCollapse();
const { isDark } = useDark();
</script>

<template>
	<el-aside width="auto">
		<el-scrollbar>
			<el-menu
				class="el-menu-vertical-demo"
				default-active="2"
				text-color="#979898"
				active-text-color="#fff"
				:background-color="isDark ? '#121212' : '#2c2e2f'"
				:collapse="isCollapse"
				@select="(index) => $emit('handle-select', index)"
			>
				<template v-for="(menu, index) in menuDataList" :key="menu.index">
					<el-menu-item :index="index + ''">
						<el-icon><component :is="menu.icon"></component></el-icon>
						<template #title>{{ useTransformI18n(menu.title) }}</template>
					</el-menu-item>
				</template>
			</el-menu>
		</el-scrollbar>
	</el-aside>
</template>

<style scoped lang="scss">
.el-aside {
	background: v-bind("isDark ? '#121212' : '#2c2e2f'");
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.el-menu {
		border-right: none;
	}
}
</style>
