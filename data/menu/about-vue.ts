import vueWebp from "~/assets/images/vue.webp";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
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
}