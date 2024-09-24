import { useEffect, useState } from "react";
import { PiHeart } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingBasket, CiUser } from "react-icons/ci";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

import { useTranslation } from "react-i18next";

import {
  Box,
  Modal,
  Slide,
  AppBar,
  Toolbar,
  TextField,
  Container,
  IconButton,
  useScrollTrigger,
} from "@mui/material";

import "./Header.scss";

import logo from "src/assets/logo.svg";
import { MobileMenu } from "../MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import Register from "./Auth/Register";
import { Login } from "@mui/icons-material";
import LoginPage from "./Auth/Login";
import VerifyCodePage from "../Header/Auth/VerifyCodePage";
import { Badge } from "@mui/material";
import { api, changeContentLanguage } from "src/helpers/request";
import toast, { Toaster } from "react-hot-toast";
import ContentTranslate from "src/app/components/ContentTranslate";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const isLoggedIn = false;

export const Header = () => {
  const [search, setSearch] = useState(false);

  const [lng, setLng] = useState("ru");

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let [query, setQuery] = useState("");

  const navigateSearch = () => {
    navigate(`/filter?query=${query}`);
    dispatch.productSlice.productSearchLoad(query);
    setQuery("");
  };
  const { t, i18n } = useTranslation();

  const { isAuthenticated, modalVerify, authModal, loginModal } = useSelector(
    // @ts-ignore
    (state) => state.authSlice
  );

  const tokenVerify = (page: string) => {
    if (localStorage.getItem("@token")) {
      navigate(page);
    } else {
      dispatch.authSlice.setAuthModal(true);
    }
  };

  const handleChangeLanguage = (e) => {
    setLng(e.target.value);
    // i18n.changeLanguage(lng);
    changeContentLanguage(e.target.value);
    window.location.reload();
  };

  useEffect(() => {
    dispatch.basketSlice.loadGetFavouriteProduct();
    dispatch.basketSlice.loadGetBasketProducts();
  }, []);
  // @ts-ignore
  const { getFavouriteProduct } = useSelector((state) => state.basketSlice);
  // @ts-ignore
  const { getBasketProductsList } = useSelector((state) => state.basketSlice);

  return (
    <HideOnScroll>
      <AppBar color="inherit" data-aos="fade-down">
        <Toolbar sx={{ px: { xs: 0 } }}>
          <div className="py-1 md:py-3 w-full">
            <Container maxWidth="pc">
              <div className="flex items-center">
                <Link to="/" className="mt-1 flex-grow-0 flex-[130px]">
                  <img src={logo} />
                </Link>
                <nav className="headerMenu">
                  {/* <NavLink to="/catalog">Каталог</NavLink> */}
                  <NavLink to="/about">
                    <ContentTranslate
                      nameRu={"О нас"}
                      nameUz={"Biz haqimizda"}
                    />
                  </NavLink>
                  <Link to="/catalog">
                    <ContentTranslate nameRu={"Кнопочные"} nameUz={"Tugmali"} />
                  </Link>
                  <Link to="/by-category?id=22">
                    {/* /soon?type=smartphone */}
                    <ContentTranslate
                      nameRu={"Смартфоны"}
                      nameUz={"Smartfonlar"}
                    />
                  </Link>
                  <Link to="/soon?type=planchet">
                    <ContentTranslate
                      nameRu={"Планшеты"}
                      nameUz={"Planshetlar"}
                    />
                  </Link>
                  {/* <button onClick={navigateSearch}>Кнопочные</button> */}
                  <NavLink to="/career">
                    <ContentTranslate nameRu={"Карьера"} nameUz={"Karyera"} />
                  </NavLink>
                  <NavLink to="/service">
                    <ContentTranslate
                      nameRu={"Сервисный центр"}
                      nameUz={"Xizmat ko'rsatish markazi"}
                    />
                  </NavLink>
                  <NavLink to="/news">
                    <ContentTranslate
                      nameRu={"Новости"}
                      nameUz={"Yangiliklar"}
                    />
                  </NavLink>
                </nav>
                <select
                  className="ml-auto cursor-pointer text-lg mr-3"
                  value={localStorage.getItem("noveyLanguage")}
                  onChange={handleChangeLanguage}
                >
                  <option value="ru">RU</option>
                  <option value="uz">UZ</option>
                </select>
                <div className="headerSearch">
                  <button onClick={navigateSearch}>
                    <FiSearch size={22} />
                  </button>
                  <input
                    placeholder="Поиск..."
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                </div>
                <IconButton
                  sx={{ display: { lg: "none", md: "flex", xs: "none" } }}
                  onClick={() => setSearch(true)}
                >
                  <FiSearch size={25} />
                </IconButton>
                <Modal open={search} onClose={() => setSearch(false)}>
                  <Box
                    sx={{
                      transform: "translate(-50%, -50%)",
                      bgcolor: "medium.main",
                      position: "absolute",
                      maxWidth: "500px",
                      borderRadius: 1,
                      boxShadow: 16,
                      width: "100%",
                      left: "50%",
                      top: "30%",
                      p: 1,
                    }}
                  >
                    <TextField fullWidth></TextField>
                  </Box>
                </Modal>
                <ul className="hidden gap-1 ml-2 md:flex [&>a.active]:text-primary-main">
                  {/* 
                  <IconButton onClick={() => tokenVerify("/favorites")}>
                    <Badge
                      color="secondary"
                      badgeContent={getFavouriteProduct.length}
                      showZero={true}
                    >
                      <PiHeart size={25} />
                    </Badge>
                  </IconButton>
                  <IconButton onClick={() => tokenVerify("/cart")}>
                    <Badge
                      color="secondary"
                      badgeContent={getBasketProductsList.length}
                      showZero={true}
                    >
                      <CiShoppingBasket size={25} />
                    </Badge>
                  </IconButton>
                  */}
                  <>
                    {/* <IconButton onClick={() => tokenVerify("/profile")}>
                      <CiUser size={25} />
                    </IconButton> */}
                  </>
                </ul>
                <MobileMenu />
              </div>
              {authModal && <Register />}
              {loginModal && <LoginPage />}
              {modalVerify && <VerifyCodePage />}
            </Container>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
