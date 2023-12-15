<script lang="ts" setup>
import { ElScrollbar } from "element-plus";
import menuDataList from "@/data/menuData";
import { Search } from "@element-plus/icons-vue";

type searchEngineType = keyof typeof searchEngineUrlMap;

useSeoMeta({
	title: "神奇导航",
	ogTitle: "神奇导航",
	description: "神奇导航, 一个集开发工具与摸鱼于一身的神奇导航",
	ogDescription: "神奇导航, 一个集开发工具与摸鱼于一身的神奇导航",
	keywords: "摸鱼, 导航, 神奇导航, 程序员导航"
});

// header 的高度
const HEADER_HEIGHT = 60;
// 获取所有的导航块
const navBlockItem = ref<Array<null | HTMLDivElement>>([]);
// 保存所有的导航块需要滚动的高度
const scrollHeightArr = ref<number[]>([]);
// 获取滚动条真实的dom元素
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

// 跳转到点击的导航块
const handleSelect = (index: string) => {
	// 跳转到对应的导航块
	nextTick(() =>
		scrollbarRef.value!.scrollTo({
			behavior: "smooth",
			top: scrollHeightArr.value[index as unknown as number]
		})
	);
};

// 跳转到点击的文档
const handleSelectDoc = (url: string) => {
	window.open(url);
};

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

// 是否处于暗黑主题
const { isDark } = useDark();
// 搜索关键字
const keyword = ref("");
// 搜索引擎
const searchEngine = ref("baidu");
const searchEngineOptions = [
	{
		label: "百 度",
		value: "baidu"
	},
	{
		label: "谷 歌",
		value: "google"
	},
	{
		label: "必 应",
		value: "bing"
	},
	{
		label: "掘 金",
		value: "juejin"
	}
];
const searchEngineUrlMap = {
	baidu: "https://www.baidu.com/s?wd=",
	google: "https://www.google.com/search?q=",
	bing: "https://www.bing.com/search?q=",
	juejin: "https://juejin.cn/search?query="
};

// 搜索方法
const search = () => {
	if (!keyword.value) return;
	window.open(
		searchEngineUrlMap[searchEngine.value as searchEngineType] + keyword.value
	);
	keyword.value = "";
};
</script>

<template>
	<ClientOnly>
		<el-container class="layout-container">
			<TheAside @handle-select="handleSelect" />

			<el-container direction="vertical">
				<TheHeader />
				<el-main>
					<el-scrollbar ref="scrollbarRef">
						<template v-for="menu in menuDataList" :key="menu.title">
							<div ref="navBlockItem">
								<div class="main-container">
									<h4>
										{{ useTransformI18n(menu.title) }}
									</h4>

									<div
										v-if="menu.title === 'Search'"
										style="height: 60px; display: flex; align-items: center"
									>
										<el-input
											v-model="keyword"
											@keydown.enter="search"
											clearable
											placeholder="请输入关键字"
											input-style="height: 48px;"
										>
											<template #prepend>
												<el-select
													v-model="searchEngine"
													class="input-with-select"
												>
													<el-option
														v-for="item in searchEngineOptions"
														:key="item.value"
														:label="item.label"
														:value="item.value"
													/>
												</el-select>
											</template>
											<template #append>
												<el-button :icon="Search" @click="search" />
											</template>
										</el-input>
									</div>
									<div v-else class="main-container-content">
										<template
											v-for="menuChildren in menu.children"
											:key="menuChildren.title"
										>
											<el-tooltip
												effect="dark"
												:content="menuChildren.url"
												placement="top"
											>
												<div
													class="main-container-content-card"
													@click="handleSelectDoc(menuChildren.url)"
												>
													<el-image
														v-if="menuChildren.logo"
														lazy
														class="main-container-content-card-icon"
														:src="menuChildren.logo"
														fit="fill"
													>
														<template #error>
															<SvgIcon
																name="fish"
																class="main-container-content-card-icon"
															/>
														</template>
													</el-image>
													<SvgIcon
														v-else
														:name="(menuChildren?.icon as string) || 'fish'"
														class="main-container-content-card-icon"
													/>
													<span class="main-container-content-card-span">{{
														menuChildren.title
													}}</span>
												</div>
											</el-tooltip>
										</template>
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

	.el-main {
		padding: unset;
		height: auto;

		.main-container {
			margin: 20px;
			h4 {
				margin-bottom: 15px;
			}

			.input-with-select {
				width: 115px;

				:deep(.el-input) {
					height: 48px;
					text-align: center;

					.el-input__inner {
						text-align: center;
					}
				}
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
					cursor: pointer;
					&:hover {
						transform: translateY(-5px);
						box-shadow: v-bind(
							"isDark ? '0px 0px 12px #fff' : 'var(--el-box-shadow-dark)'"
						);
					}

					.main-container-content-card-icon {
						width: 50px;
						height: 50px;
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
