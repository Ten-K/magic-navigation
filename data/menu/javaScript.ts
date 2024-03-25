import es6 from "~/assets/images/es6.ico";
import jsinfo from "~/assets/images/jsinfo.png";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
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
}