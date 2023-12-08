import ChatbotUi from "~/assets/chatbot-ui.ico";
import { Menu as IconMenu } from "@element-plus/icons-vue";

const menuDataList = [
	{
		title: "摸鱼",
		icon: IconMenu,
		children: [
			{
				title: "掘金",
				logo: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg",
				url: "https://juejin.cn"
			},
			{
				title: "v2ex(科学上网)",
				logo: "https://www.v2ex.com/static/favicon.ico",
				url: "https://www.v2ex.com"
			}
		]
	},
	{
		title: "vue",
		icon: IconMenu,
		children: [
			{
				title: "Vue",
				logo: "https://img0.baidu.com/it/u=2696654273,9521079&fm=253&fmt=auto&app=138&f=PNG?w=400&h=400",
				url: "https://cn.vuejs.org/guide/introduction.html"
			},
			{
				title: "Vue Router",
				logo: "https://img0.baidu.com/it/u=2696654273,9521079&fm=253&fmt=auto&app=138&f=PNG?w=400&h=400",
				url: "https://router.vuejs.org/zh"
			},
			{
				title: "Vuex",
				logo: "https://img0.baidu.com/it/u=2696654273,9521079&fm=253&fmt=auto&app=138&f=PNG?w=400&h=400",
				url: "https://vuex.vuejs.org/zh"
			},
			{
				title: "VueUse",
				logo: "https://vueuse.org/favicon.svg",
				url: "https://vueuse.org"
			},
			{
				title: "Pinia",
				logo: "https://pinia.vuejs.org/logo.svg",
				url: "https://pinia.vuejs.org/zh"
			},
			{
				title: "Nuxt3",
				logo: "https://nuxt.com.cn/assets/design-kit/icon-green.svg",
				url: "https://nuxt.com.cn/docs/getting-started/introduction"
			},
			{
				title: "Element Plus",
				logo: "https://element-plus.org/images/element-plus-logo-small.svg",
				url: "https://element-plus.org/zh-CN"
			},
			{
				title: "Naive UI",
				logo: "https://www.naiveui.com/assets/naivelogo-93278402.svg",
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
				logo: "https://reactrouter.com/favicon-light.png",
				url: "https://reactrouter.com/en/main"
			},
			{
				title: "Redux",
				logo: "https://redux.js.org/img/redux.svg",
				url: "https://redux.js.org/introduction/getting-started"
			},
			{
				title: "Next",
				logo: "https://nextjs.org/favicon.ico",
				url: "https://nextjs.org"
			},
			{
				title: "Ant Design",
				logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
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
				logo: "https://unocss.dev/logo.svg",
				url: "https://unocss.dev"
			},
			{
				title: "Tailwindcss",
				logo: "https://tailwindcss.com/favicons/favicon.ico?v=3",
				url: "https://tailwindcss.com"
			},
			{
				title: "Tailwind Css Cheat Sheet",
				logo: "https://nerdcave.com/tailwind-cheat-sheet/favicon.ico",
				url: "https://nerdcave.com/tailwind-cheat-sheet"
			}
		]
	},
	{
		title: "JavaScript",
		icon: IconMenu,
		children: [
			{
				title: "现代 JavaScript 教程",
				logo: "https://zh.javascript.info/img/favicon/favicon.png",
				url: "https://zh.javascript.info"
			},
			{
				title: "ES6 入门教程",
				logo: "https://es6.ruanyifeng.com/favicon.ico",
				url: "https://es6.ruanyifeng.com"
			}
		]
	},
	{
		title: "工程化",
		icon: IconMenu,
		children: [
			{
				title: "Webpack",
				logo: "https://webpack.docschina.org/icon-square-small.85ba630cf0c5f29ae3e3.svg",
				url: "https://webpack.docschina.org"
			},
			{
				title: "Vite",
				logo: "https://cn.vitejs.dev/logo.svg",
				url: "https://cn.vitejs.dev"
			},
			{
				title: "Vitest",
				logo: "https://cn.vitest.dev/logo-shadow.svg",
				url: "https://cn.vitest.dev"
			}
		]
	},
	{
		title: "在线影视",
		icon: IconMenu,
		children: [
			{
				title: "Age动漫",
				logo: "https://www.agedm.org/favicon.ico",
				url: "https://www.agedm.org"
			},
			{
				title: "樱花动漫",
				logo: "https://oss-cdn.meowa.cn/mxtheme/images/favicon.png",
				url: "https://www.yinhuadm.cc"
			}
		]
	},
	{
		title: "AI",
		icon: IconMenu,
		children: [
			{
				title: "Chatbot UI",
				logo: ChatbotUi,
				url: "https://chat.aivvm.com/chat"
			}
		]
	}
];

menuDataList.forEach((item, index) => {
	Object.assign(item, { index: index + "" });
});

export default menuDataList;
