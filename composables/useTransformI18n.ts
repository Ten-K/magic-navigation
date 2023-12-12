import messages from "@/data/localeMessage";

type localeType = "zh" | "en";
type localeItem = keyof (typeof messages)["zh"];

/**
 * 国际化转换工具函数 - 兼容不使用i8n的情况
 * @param message i18n message
 * @returns {string} translated message
 */
export const useTransformI18n = (message: string) => {
	const { locale } = useI18n();
	locale.value = localStorageUtil.get("locale") ?? "zh";
	return messages[locale.value as localeType][message as localeItem] ?? message;
};
