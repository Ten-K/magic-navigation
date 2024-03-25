import AI from "./ai";
import Css from "./css";
import FreeApi from "./free-api";
import AboutVue from "./about-vue";
import JavaScript from "./javaScript";
import AboutReact from "./about-react";
import Engineering from "./engineering";
import TouchedFish from "./touched-fish";
import OnlineMovie from "./online-movie";
import { Menu as IconMenu } from "@element-plus/icons-vue";


interface menuDataListItem {
	title: string;
	icon?: any;
	index?: string;
	children?: menuDataListItem[];
	url?: string;
	logo?: string;
}

const menuDataList: menuDataListItem[] = [
	{
		title: "Search",
		icon: IconMenu
	},
	TouchedFish,
	AboutVue,
	AboutReact,
	Engineering,
	Css,
	JavaScript,
	AI,
	FreeApi,
	OnlineMovie
];

menuDataList.forEach((item, index) => {
	Object.assign(item, { index: index + "" });
});

export default menuDataList;
