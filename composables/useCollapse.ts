/**
 * 菜单展开与收起
 * @returns {isCollapse, toggerCollapse}
 */
export const useCollapse = () => {
	const isCollapse = useState("isCollapse", () => false);

	const toggerCollapse = () => {
		isCollapse.value = !isCollapse.value;
	};
	return {
		isCollapse,
		toggerCollapse
	};
};
