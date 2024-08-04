/**
 * 获取主题模式或切换明亮/暗黑主题
 */
export const useDark = () => {
	// 兼容ssr
	if (!isClient) return { isDark: false };

	const isDark = useState("isDark", () => {
		return (
			localStorageUtil.get("isDark") ??
			document.documentElement.classList.contains("dark")
		);
	});
	const toggerDark = () => {
		isDark.value = !isDark.value;
		document.documentElement.classList.toggle("dark", isDark.value);
		localStorageUtil.set("isDark", isDark.value);
	};
	onMounted(() => {
		document.documentElement.classList.toggle("dark", isDark.value);
	});
	return {
		isDark,
		toggerDark
	};
};
