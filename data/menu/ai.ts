import lobe from "~/assets/images/lobe.ico";
import kimiai from "~/assets/images/kimiai.ico";
import WaytoAGI from '~/assets/images/waytoagi.ico';
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
  title: "AI",
  icon: IconMenu,
  children: [
    {
      title: "LobeChat(科学上网)",
      logo: lobe,
      url: "https://chat.aivvm.com/chat"
    },
    {
      title: "Poe Chat(科学上网)",
      icon: "poe",
      url: "https://poe.com/explore"
    },
    {
      title: "Kimi",
      logo: kimiai,
      url: "https://kimi.moonshot.cn"
    },
    {
      title: "WaytoAGI",
      logo: WaytoAGI,
      url: "https://www.waytoagi.com"
    }
  ]
}