// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import { defineNuxtConfig } from 'nuxt/config'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineNuxtConfig({
	devtools: { enabled: true },
  build: {
    transpile: ['element-plus']
  },
	css: ["element-plus/theme-chalk/dark/css-vars.css"],
	modules: ["@element-plus/nuxt", "@nuxtjs/i18n", "@nuxtjs/robots"],
	vite: {
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), "assets/svg")]
			})
		],
		optimizeDeps: {
			include: [
        // optimizeDeps使用element-plus报错 - https://github.com/element-plus/element-plus/issues/17524
				// "element-plus/es/components/**",
				"@element-plus/icons-vue",
				"@unhead/vue"
			]
		}
	}
});
