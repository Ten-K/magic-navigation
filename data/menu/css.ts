import caniuse from "~/assets/images/caniuse.png";
import cssGrid from "~/assets/images/css-grid.ico";
import tailwindcss from "~/assets/images/tailwindcss.ico";
import { Menu as IconMenu } from "@element-plus/icons-vue";
import tailwindCheatSheet from "~/assets/images/tailwind-cheat-sheet.ico";

export default {
  title: "Css",
  icon: IconMenu,
  children: [
    {
      title: "UnoCss",
      icon: "unocss",
      url: "https://unocss.dev"
    },
    {
      title: "Tailwindcss",
      logo: tailwindcss,
      url: "https://tailwindcss.com"
    },
    {
      title: "CSS Grid Generator",
      logo: cssGrid,
      url: "https://cssgrid-generator.netlify.app/"
    },
    {
      title: "Tailwind Css Cheat Sheet",
      logo: tailwindCheatSheet,
      url: "https://nerdcave.com/tailwind-cheat-sheet"
    },
    {
      title: "Can I use",
      logo: caniuse,
      url: "https://caniuse.com/"
    }
  ]
}