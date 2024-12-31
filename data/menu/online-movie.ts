import agedm from "~/assets/images/agedm.ico";
import cupfox from "~/assets/images/cupfox.png";
import fenche from "~/assets/images/fenche.jpg";
import fre123 from "~/assets/images/fre123.png";
import yinhuadm from "~/assets/images/yinhuadm.png";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
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
      url: "https://www.fre321.com/anime/s"
    }
  ]
}