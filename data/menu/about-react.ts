import next from "~/assets/images/next.ico";
import reactRouter from "~/assets/images/react-router.png";
import { Menu as IconMenu } from "@element-plus/icons-vue";

export default {
  title: "React",
  icon: IconMenu,
  children: [
    {
      title: "React",
      icon: "react",
      url: "https://beta.react.jscn.org"
    },
    {
      title: "React Router",
      logo: reactRouter,
      url: "https://reactrouter.com/en/main"
    },
    {
      title: "Redux",
      icon: "redux",
      url: "https://redux.js.org/introduction/getting-started"
    },
    {
      title: "Next",
      logo: next,
      url: "https://nextjs.org"
    },
    {
      title: "Ant Design",
      icon: "antd",
      url: "https://ant-design.antgroup.com/index-cn"
    }
  ]
}