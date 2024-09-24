import { AppBar, Toolbar, IconButton } from "@mui/material";
import { CiShoppingBasket, CiUser } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { PiHeart } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const TabBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [query, setQuery] = useState("");

  const navigateSearch = () => {
    navigate(`/filter?query=${query}`);
    dispatch.productSlice.productSearchLoad(query);
    setQuery("");
  };

  const tokenVerify = (page: string) => {
    if (localStorage.getItem("@token")) {
      navigate(page);
    } else {
      dispatch.authSlice.setAuthModal(true);
    }
  };

  return (
    <AppBar
      color="secondary"
      sx={{
        top: "auto",
        bottom: 0,
        display: { md: "none" },
        boxShadow: "0 -4px 1px rgb(226 226 226 / 10%)",
        borderEndStartRadius: "0",
        borderEndEndRadius: "0",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between" }}
        className="[&>a.active]:text-primary-main"
      >
        <NavLink to="/">
          <IconButton color="inherit">
            <GoHome size={30} />
          </IconButton>
        </NavLink>
        {/* <NavLink to="/filter"> */}
        <IconButton color="inherit" onClick={navigateSearch}>
          <FiSearch size={30} />
        </IconButton>
        {/* </NavLink> */}
        <NavLink to="/favorites">
          <IconButton color="inherit">
            <PiHeart size={30} />
          </IconButton>
        </NavLink>
        <NavLink to="/cart">
          <IconButton color="inherit">
            <CiShoppingBasket size={30} />
          </IconButton>
        </NavLink>
        <IconButton color="inherit" onClick={() => tokenVerify("/profile")}>
          <CiUser size={30} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
