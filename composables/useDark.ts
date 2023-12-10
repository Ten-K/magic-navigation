/**
 * 获取主题模式或切换明亮/暗黑主题
 */
export const useDark = () => {
	// 兼容ssr
	if (!process.client) return { isDark: false };

	const isDark = useState("isDark", () =>
		// 判断html元素上是否存在 class="dark"
		document.documentElement.classList.contains("dark")
	);
	const toggerDark = () => {
		isDark.value = !isDark.value;
		document.documentElement.classList.toggle("dark", isDark.value);
	};
	return {
		isDark,
		toggerDark
	};
};
