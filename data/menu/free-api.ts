import oioweb from "~/assets/images/oioweb.ico";
import bilibiliApi from "~/assets/images/bilibiliApi.png";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
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