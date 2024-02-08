// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		"element-plus/theme-chalk/dark/css-vars.css"
	],
	modules: ["@element-plus/nuxt", "@nuxtjs/i18n", "@nuxtjs/robots"],
	vite: {
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), "assets/svg")]
			})
		],
		optimizeDeps: {
			include: ["element-plus/es/components/**", "@element-plus/icons-vue"]
		}
	}
});
