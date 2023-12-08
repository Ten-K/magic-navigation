export const useDark = () => {
	const isDark = useState("isDark", () =>
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
