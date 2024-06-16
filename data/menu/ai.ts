import lobe from "~/assets/images/lobe.ico";
import Gemini from "~/assets/svg/gemini.svg";
import DouBao from "~/assets/images/doubao.png";
import kimiai from "~/assets/images/kimiai.ico";
import WaytoAGI from "~/assets/images/waytoagi.ico";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
	title: "AI",
	icon: IconMenu,
	children: [
		{
			title: "LobeChat(科学上网)",
			logo: lobe,
			url: "https://chat-preview.lobehub.com/welcome"
		},
		{
			title: "Poe Chat(科学上网)",
			icon: "poe",
			url: "https://poe.com/explore"
		},
		{
			title: "Gemini(科学上网)",
			logo: Gemini,
			url: "https://gemini.google.com"
		},
		{
			title: "豆包",
			logo: DouBao,
			url: "https://www.doubao.com"
		},
		{
			title: "Kimi",
			logo: kimiai,
			url: "https://kimi.moonshot.cn"
		},
		{
			title: "WaytoAGI",
			logo: WaytoAGI,
			url: "https://www.waytoagi.com"
		},
		{
			title: "Gpt-4o",
			logo: "",
			url: "https://gpt4o.so/zh-CN"
		}
	]
};
