import v2ex from "~/assets/images/v2ex.ico";
import popper from '~/assets/svg/popper.svg';
import github from "~/assets/images/github.png";
import twitter from "~/assets/images/twitter.ico";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
  title: "TouchedFish",
  icon: IconMenu,
  children: [
    {
      title: "掘金",
      icon: "juejin",
      url: "https://juejin.cn"
    },
    {
      title: "GitHub",
      logo: github,
      url: "https://github.com"
    },
    {
      title: "v2ex(科学上网)",
      logo: v2ex,
      url: "https://www.v2ex.com"
    },
    {
      title: "Twitter(科学上网)",
      logo: twitter,
      url: "https://twitter.com"
    },
    {
      title: "Component Party",
      logo: popper,
      url: "https://component-party.dev/#reactivity.declare-state"
    }
  ]
}