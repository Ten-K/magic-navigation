// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@element-plus/nuxt"],
	css: [
		"element-plus/dist/index.css",
		"element-plus/theme-chalk/dark/css-vars.css"
	],
	app: {
		head: {
			script: [
				{
					type: "text/javascript",
					src: "https://webapi.amap.com/maps?v=2.0&key=c95bd7c58c6a3233adccce9a1b826685&plugin=AMap.Scale,AMap.HawkEye,AMap.ToolBar,AMap.ControlBar,AMap.Geocoder,AMap.MapType,AMap.CitySearch,AMap.Geolocation"
				}
			]
		}
	},
	vite: {
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), "assets/svg")]
			})
		]
	}
});
