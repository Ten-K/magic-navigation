<script lang="ts" setup>
import { ElScrollbar } from "element-plus";
import menuDataList from "@/data/menuData";
import { ref, onMounted, nextTick } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";

useSeoMeta({
	title: "神奇导航",
	ogTitle: "神奇导航",
	description: "这是我的神奇导航，让我来告诉你关于它的一切。",
	ogDescription: "这是我的神奇导航，让我来告诉你关于它的一切。",
	ogImage: "https://example.com/image.png",
	twitterCard: "summary_large_image"
});

// 是否折叠菜单
const isCollapse = ref(false);

// 获取滚动条真实的dom元素
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

// 菜单
const menuData = markRaw<
	Array<{
		title: string;
		index?: string;
		icon: typeof Fold;
		children: Array<{
			logo?: string;
			icon?: string;
			title: string;
			url: string;
		}>;
	}>
>(menuDataList);

// 跳转到点击的导航块
const handleSelect = (key: string) => {
	// 跳转到对应的导航块
	nextTick(() =>
		scrollbarRef.value!.scrollTo({
			behavior: "smooth",
			top: scrollHeightArr.value[key as unknown as number]
		})
	);
};

// 跳转到点击的文档
const handleSelectDoc = (url: string) => {
	window.open(url);
};

// header 的高度
const HEADER_HEIGHT = 60;

// 获取所有的导航块
const navBlockItem = ref<Array<null | HTMLDivElement>>([]);

// 保存所有的导航块需要滚动的高度
const scrollHeightArr = ref<number[]>([]);

// 计算所有导航块需要滚动的高度
const getScrollHeightArr = () => {
	navBlockItem.value.forEach((item) => {
		// 通过 getBoundingClientRect 方法, 获取每个导航块到顶部的距离
		const { top } = JSON.parse(JSON.stringify(item?.getBoundingClientRect()));

		// 因为只需要滚动到 header 下面就算切换, 而不需要完全滚动到页面之外, 所以需要去掉 header 的高度
		scrollHeightArr.value.push(top - HEADER_HEIGHT);
	});
};

onMounted(() => {
	// 在页面渲染完成后计算所有导航块需要滚动的高度
	nextTick(() => {
		getScrollHeightArr();
	});
});
</script>

<template>
	<ClientOnly>
		<el-container class="layout-container">
			<el-aside width="auto">
				<el-scrollbar>
					<el-menu
						class="el-menu-vertical-demo"
						default-active="2"
						text-color="#979898"
						active-text-color="#fff"
						background-color="#2c2e2f"
						:collapse="isCollapse"
						@select="handleSelect"
					>
						<template v-for="item in menuData" :key="item.index">
							<el-menu-item :index="item.index">
								<el-icon><component :is="item.icon"></component></el-icon>
								<template #title>{{ item.title }}</template>
							</el-menu-item>
						</template>
					</el-menu>
				</el-scrollbar>
			</el-aside>

			<el-container>
				<el-header class="el-header">
					<div @click="isCollapse = !isCollapse" class="el-header-iscollapse">
						<el-icon v-if="isCollapse" title="展开"><Expand /></el-icon>
						<el-icon v-else title="收起"><Fold /></el-icon>
					</div>
					<el-link
						:underline="false"
						href="https://element-plus.org"
						target="_blank"
						><SvgIcon name="github" />GitHub</el-link
					>
				</el-header>

				<el-main>
					<el-scrollbar ref="scrollbarRef">
						<template v-for="menu in menuData" :key="menu.title">
							<div class="main-container" ref="navBlockItem">
								<h4>{{ menu.title }}</h4>
								<div class="main-container-content">
									<div
										class="main-container-content-card"
										v-for="menuChildren in menu.children"
										:key="menuChildren.title"
										@click="handleSelectDoc(menuChildren.url)"
									>
										<el-image
											v-if="menuChildren.logo"
											lazy
											style="width: 50px; height: 50px"
											:src="menuChildren.logo"
											fit="fill"
										/>
										<SvgIcon
											v-else
											:name="menuChildren.icon"
											color="color: rgb(8 126 164)"
											style="width: 50px; height: 50px"
										/>
										<span class="main-container-content-card-span">{{
											menuChildren.title
										}}</span>
									</div>
								</div>
							</div>
						</template>
					</el-scrollbar>
				</el-main>
			</el-container>
		</el-container>
	</ClientOnly>
</template>

<style scoped lang="scss">
.layout-container {
	height: 100vh;
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.el-aside {
		background: #2c2e2f;
		.el-menu {
			border-right: none;
		}
	}
	.el-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #dcdfe6;
		.el-header-iscollapse:hover {
			cursor: pointer;
			color: #409eff;
		}
	}
	.el-main {
		padding: unset;
		.main-container {
			margin: 20px;
			h4 {
				margin-bottom: 15px;
			}
			.main-container-content {
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				gap: 20px 30px;

				.main-container-content-card {
					display: flex;
					align-items: center;
					padding: 16px;
					border: 1px solid #dcdfe6;
					border-radius: 4px;
					&:hover {
						transform: translateY(-5px);
						box-shadow: var(--el-box-shadow-dark);
					}

					.main-container-content-card-span {
						margin-left: 16px;
					}
				}
			}
		}
	}
}
</style>
