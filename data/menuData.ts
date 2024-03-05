import { Menu as IconMenu } from "@element-plus/icons-vue";

import es6 from "~/assets/images/es6.ico";
import v2ex from "~/assets/images/v2ex.ico";
import next from "~/assets/images/next.ico";
import lobe from "~/assets/images/lobe.ico";
import agedm from "~/assets/images/agedm.ico";
import vueWebp from "~/assets/images/vue.webp";
import github from "~/assets/images/github.png";
import jsinfo from "~/assets/images/jsinfo.png";
import rollup from "~/assets/images/rollup.png";
import cupfox from "~/assets/images/cupfox.png";
import kimiai from "~/assets/images/kimiai.ico";
import oioweb from "~/assets/images/oioweb.ico";
import fenche from "~/assets/images/fenche.jpg";
import fre123 from "~/assets/images/fre123.png";
import caniuse from "~/assets/images/caniuse.png";
import twitter from "~/assets/images/twitter.ico";
import cssGrid from "~/assets/images/css-grid.ico";
import yinhuadm from "~/assets/images/yinhuadm.png";
import bilibiliApi from "~/assets/images/bilibiliApi.png";
import tailwindcss from "~/assets/images/tailwindcss.ico";
import reactRouter from "~/assets/images/react-router.png";
import tailwindCheatSheet from "~/assets/images/tailwind-cheat-sheet.ico";

const menuDataList = [
	{
		title: "Search",
		icon: IconMenu
	},
	{
		title: "TouchedFish",
		icon: IconMenu,
		children: [
			{
				title: "掘金",
				icon: "juejin",
				url: "https://juejin.cn"
			},
			{
				title: "GitHub",
				logo: github,
				url: "https://github.com"
			},
			{
				title: "v2ex(科学上网)",
				logo: v2ex,
				url: "https://www.v2ex.com"
			},
			{
				title: "Twitter(科学上网)",
				logo: twitter,
				url: "https://twitter.com"
			}
		]
	},
	{
		title: "Vue",
		icon: IconMenu,
		children: [
			{
				title: "Vue",
				logo: vueWebp,
				url: "https://cn.vuejs.org/guide/introduction.html"
			},
			{
				title: "Vue Router",
				logo: vueWebp,
				url: "https://router.vuejs.org/zh"
			},
			{
				title: "Vuex",
				logo: vueWebp,
				url: "https://vuex.vuejs.org/zh"
			},
			{
				title: "VueUse",
				icon: "vueuse",
				url: "https://vueuse.org"
			},
			{
				title: "Pinia",
				icon: "pinia",
				url: "https://pinia.vuejs.org/zh"
			},
			{
				title: "Nuxt3",
				icon: "nuxt3",
				url: "https://nuxt.com.cn/docs/getting-started/introduction"
			},
			{
				title: "Element Plus",
				icon: "element-plus",
				url: "https://element-plus.org/zh-CN"
			},
			{
				title: "Naive UI",
				icon: "naive-ui",
				url: "https://www.naiveui.com/zh-CN/os-theme"
			}
		]
	},
	{
		title: "React",
		icon: IconMenu,
		children: [
			{
				title: "React",
				icon: "react",
				url: "https://beta.react.jscn.org"
			},
			{
				title: "React Router",
				logo: reactRouter,
				url: "https://reactrouter.com/en/main"
			},
			{
				title: "Redux",
				icon: "redux",
				url: "https://redux.js.org/introduction/getting-started"
			},
			{
				title: "Next",
				logo: next,
				url: "https://nextjs.org"
			},
			{
				title: "Ant Design",
				icon: "antd",
				url: "https://ant-design.antgroup.com/index-cn"
			}
		]
	},
	{
		title: "Css",
		icon: IconMenu,
		children: [
			{
				title: "UnoCss",
				icon: "unocss",
				url: "https://unocss.dev"
			},
			{
				title: "Tailwindcss",
				logo: tailwindcss,
				url: "https://tailwindcss.com"
			},
			{
				title: "CSS Grid Generator",
				logo: cssGrid,
				url: "https://cssgrid-generator.netlify.app/"
			},
			{
				title: "Tailwind Css Cheat Sheet",
				logo: tailwindCheatSheet,
				url: "https://nerdcave.com/tailwind-cheat-sheet"
			},
			{
				title: "Can I use",
				logo: caniuse,
				url: "https://caniuse.com/"
			}
		]
	},
	{
		title: "JavaScript",
		icon: IconMenu,
		children: [
			{
				title: "现代 JavaScript 教程",
				logo: jsinfo,
				url: "https://zh.javascript.info"
			},
			{
				title: "ES6 入门教程",
				logo: es6,
				url: "https://es6.ruanyifeng.com"
			},
			{
				title: "JSDoc 入门",
				icon: "",
				url: "https://jsdoc.bootcss.com/index.html"
			}
		]
	},
	{
		title: "Engineering",
		icon: IconMenu,
		children: [
			{
				title: "Webpack",
				icon: "webpack",
				url: "https://webpack.docschina.org"
			},
			{
				title: "Rollup",
				logo: rollup,
				url: "https://cn.rollupjs.org"
			},
			{
				title: "Vite",
				icon: "vite",
				url: "https://cn.vitejs.dev"
			},
			{
				title: "Vitest",
				icon: "vitest",
				url: "https://cn.vitest.dev"
			}
		]
	},
	{
		title: "OnlineMovie",
		icon: IconMenu,
		children: [
			{
				title: "Age动漫",
				logo: agedm,
				url: "https://www.agedm.org"
			},
			{
				title: "樱花动漫",
				logo: yinhuadm,
				url: "https://www.yinhuadm.cc"
			},
			{
				title: "茶杯狐影视",
				logo: cupfox,
				url: "https://cupfox.love"
			},
			{
				title: "风车动漫",
				logo: fenche,
				url: "https://dm530.org"
			},
			{
				title: "999影视",
				icon: "",
				url: "https://www.999ys.top"
			},
			{
				title: "FRE123 动漫搜索引擎",
				logo: fre123,
				url: "https://www.fre123.com/anime/n"
			}
		]
	},
	{
		title: "AI",
		icon: IconMenu,
		children: [
			{
				title: "LobeChat(科学上网)",
				logo: lobe,
				url: "https://chat.aivvm.com/chat"
			},
			{
				title: "Poe Chat(科学上网)",
				icon: "poe",
				url: "https://poe.com/explore"
			},
			{
				title: "Kimi",
				logo: kimiai,
				url: "https://kimi.moonshot.cn"
			}
		]
	},
	{
		title: "FreeApi",
		icon: IconMenu,
		children: [
			{
				title: "UomgAPI",
				logo: "",
				url: "https://api.uomg.com"
			},
			{
				title: "教书先生API",
				logo: oioweb,
				url: "https://api.oioweb.cn"
			},
			{
				title: "宋子宪免费API",
				logo: "",
				url: "https://api.songzixian.com"
			},
			{
				title: "哔哩哔哩API",
				logo: bilibiliApi,
				url: "https://socialsisteryi.github.io/bilibili-API-collect"
			}
		]
	}
];

menuDataList.forEach((item, index) => {
	Object.assign(item, { index: index + "" });
});

export default menuDataList;
