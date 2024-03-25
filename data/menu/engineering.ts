import rollup from "~/assets/images/rollup.png";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
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
}