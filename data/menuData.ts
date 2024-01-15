import { Menu as IconMenu } from "@element-plus/icons-vue";

const menuDataList = [
  {
    title: "Search",
		icon: IconMenu,
  },
	{
		title: "TouchedFish",
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
			},
			{
				title: "GitHub",
				logo: "https://github.githubassets.com/favicons/favicon.png",
				url: "https://github.com"
			}
		]
	},
	{
		title: "Vue",
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
				title: "CSS Grid Generator",
				logo: "https://cssgrid-generator.netlify.app/favicon.ico",
				url: "https://cssgrid-generator.netlify.app/"
			},
			{
				title: "Tailwind Css Cheat Sheet",
				logo: "https://nerdcave.com/tailwind-cheat-sheet/favicon.ico",
				url: "https://nerdcave.com/tailwind-cheat-sheet"
			},
			{
				title: "Can I use",
				logo: "https://caniuse.com/img/favicon-128.png",
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
				logo: "https://zh.javascript.info/img/favicon/favicon.png",
				url: "https://zh.javascript.info"
			},
			{
				title: "ES6 入门教程",
				logo: "https://es6.ruanyifeng.com/favicon.ico",
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
				logo: "https://cn.rollupjs.org/favicon.png",
				url: "https://cn.rollupjs.org"
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
		title: "OnlineMovie",
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
			},
      {
        
        title: "茶杯狐影视",
				logo: "https://picx.zhimg.com/80/v2-5393cb76a824b11d7771ecdce592c87d.png",
				url: "https://cupfox.love"
      },
			{
				title: "风车动漫",
				logo: "",
				url: "https://dm530.org"
			},
      {
        
        title: "999影视",
				icon: "",
				url: "https://www.999ys.top"
      }
		]
	},
	{
		title: "AI",
		icon: IconMenu,
		children: [
			{
				title: "LobeChat(科学上网)",
				logo: "https://registry.npmmirror.com/@lobehub/assets-favicons/1.4.0/files/assets/favicon.ico",
				url: "https://chat.aivvm.com/chat"
			},
      {
				title: "Poe Chat(科学上网)",
				icon: "poe",
				url: "https://poe.com/explore"
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
				logo: "https://api.oioweb.cn/favicon.ico",
				url: "https://api.oioweb.cn"
			},
      {
				title: "宋子宪免费API",
				logo: "",
				url: "https://api.songzixian.com/"
			}
		]
	}
];

menuDataList.forEach((item, index) => {
	Object.assign(item, { index: index + "" });
});

export default menuDataList;
