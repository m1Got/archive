import { useState, forwardRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { TransitionProps } from "@mui/material/transitions";
import { IconButton, MenuList, MenuItem, Dialog, Slide } from "@mui/material";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import ContentTranslate from "../components/ContentTranslate";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const navigateSearch = () => {
    navigate(`/filter?query=${query}`);
    dispatch.productSlice.productSearchLoad(query);
    setQuery("");
  };
  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        onClick={() => setMenu(true)}
        sx={{ ml: 2, display: { md: "none" } }}
      >
        <CgMenuRight size={30} />
      </IconButton>
      <Dialog
        fullScreen
        open={menu}
        onClose={() => setMenu(false)}
        TransitionComponent={Transition}
        sx={{ display: { md: "none" } }}
      >
        <IconButton
          onClick={() => setMenu(false)}
          sx={{
            zIndex: "10",
            position: "absolute",
            right: "20px",
            top: "10px",
          }}
        >
          <AiOutlineClose size={26} />
        </IconButton>
        <MenuList sx={{ py: 8 }} className="[&>a.active]:text-primary-main">
          <NavLink to="/about" onClick={() => setMenu(false)}>
            <MenuItem sx={{ fontSize: 26 }}>
              <ContentTranslate nameRu={"О нас"} nameUz={"Biz haqimizda"} />
            </MenuItem>
          </NavLink>
          <Link to="/catalog" onClick={() => setMenu(false)}>
            <MenuItem sx={{ fontSize: 26 }}>
              <ContentTranslate nameRu={"Кнопочные"} nameUz={"Tugmali"} />
            </MenuItem>
          </Link>
          <Link to="/by-category?id=22" onClick={() => setMenu(false)}>
            <MenuItem sx={{ fontSize: 26 }}>
              <ContentTranslate nameRu={"Смартфоны"} nameUz={"Smartfonlar"} />
            </MenuItem>
          </Link>
          <Link to="/soon?type=planchet" onClick={() => setMenu(false)}>
            <MenuItem sx={{ fontSize: 26 }}>
              <ContentTranslate nameRu={"Планшеты"} nameUz={"Planshetlar"} />
            </MenuItem>
          </Link>
          <NavLink to="/career" onClick={() => setMenu(false)}>
            <MenuItem sx={{ fontSize: 26 }}>
              <ContentTranslate nameRu={"Карьера"} nameUz={"Karyera"} />
            </MenuItem>
          </NavLink>
          <NavLink to="/service" onClick={() => setMenu(false)}>
            <MenuItem sx={{ fontSize: 26 }}>
              <ContentTranslate
                nameRu={"Сервисный центр"}
                nameUz={"Xizmat ko'rsatish markazi"}
              />
            </MenuItem>
          </NavLink>
          <NavLink to="/news" onClick={() => setMenu(false)}>
            <MenuItem sx={{ fontSize: 26 }}>
              <ContentTranslate nameRu={"Новости"} nameUz={"Yangiliklar"} />
            </MenuItem>
          </NavLink>
        </MenuList>
      </Dialog>
    </>
  );
};
