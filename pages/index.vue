<script lang="ts" setup>
import { ElScrollbar } from "element-plus";
import menuDataList from "@/data/menuData";

useSeoMeta({
	title: "神奇导航",
	ogTitle: "神奇导航",
	description: "这是我的神奇导航，让我来告诉你关于它的一切。",
	ogDescription: "这是我的神奇导航，让我来告诉你关于它的一切。",
	ogImage: "https://example.com/image.png",
	twitterCard: "summary_large_image"
});

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

const { isDark } = useDark();

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
			<TheAside @handle-select="handleSelect" />

			<el-container direction="vertical">
				<TheHeader />
				<el-main>
					<el-scrollbar ref="scrollbarRef">
						<template v-for="menu in menuDataList" :key="menu.title">
							<div class="main-container" ref="navBlockItem">
								<h4>
									{{ useTransformI18n(menu.title) }}
								</h4>
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
