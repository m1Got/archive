import { BiHomeAlt2 } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineContacts } from "react-icons/md";
import { PiChatCircleBold } from "react-icons/pi";
import { RiAlignItemRightLine } from "react-icons/ri";
import { SiGooglephotos } from "react-icons/si";

export const routesLinks = [
  {
    title: {
      ru: "Главная",
      uz: "Bosh sahifa",
      eng: "Home",
    },
    href: "/",
    icon: BiHomeAlt2,
  },
  {
    title: {
      ru: "О Нас",
      uz: "Biz haqimizda",
      eng: "About us",
    },
    href: "/about",
    icon: PiChatCircleBold,
  },
  {
    title: {
      ru: "Наша продукция",
      uz: "Mahsulotlar",
      eng: "Products",
    },
    href: "/products",
    icon: RiAlignItemRightLine,
  },
  {
    title: {
      ru: "Фотогалерея",
      uz: "Fotogalereya",
      eng: "Photogallery",
    },
    href: "/gallery",
    icon: SiGooglephotos,
  },
  {
    title: {
      ru: "Новости",
      uz: "Yangiliklar",
      eng: "News",
    },
    href: "/news",
    icon: IoNewspaperOutline,
  },
  {
    title: {
      ru: "Контакты",
      uz: "Kontaktlar",
      eng: "Contacts",
    },
    href: "/contacts",
    icon: MdOutlineContacts,
  },
];
