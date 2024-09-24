import React from "react";

import { useState } from "react";
import { PiHeart } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingBasket, CiUser } from "react-icons/ci";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

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
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
  Button,
  useMediaQuery,
} from "@mui/material";

import "../Header.scss";

import logo from "src/assets/logo.svg";
// import { MobileMenu } from "../MobileMenu";
import { useDispatch, useSelector } from "react-redux";

const VerifyCodePage = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, modalVerify, authModal, loginModal } = useSelector(
    // @ts-ignore
    (state) => state.authSlice
  );

  const [code, setCode] = useState("");

  const {
    authSlice: { loadVerifyCode },
  } = useDispatch();

  const { loading, error } = useSelector(
    // @ts-ignore
    (state) => state.loading.effects.authSlice.loadVerifyCode
  );

  const onSubmit = (data) => {
    loadVerifyCode({ code });
  };

  return (
    <Dialog
      open={modalVerify}
      maxWidth={"sm"}
      fullWidth={true}
      // @ts-ignore
      onClose={() => setModalCode(false)}
    >
      <DialogTitle
        sx={{
          p: 2,
          m: 0,
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Введите код
      </DialogTitle>
      <IconButton
        // @ts-ignore
        onClick={() => setModalCode(false)}
        sx={{
          top: 8,
          right: 8,
          position: "absolute",
        }}
      >
        <AiOutlineClose size={25} />
      </IconButton>
      <DialogContent sx={{ px: 8, py: 2 }}>
        <label className="flex flex-col gap-2">
          <span className="text-info-main self-start cursor-pointer">Код</span>
          <TextField
            autoFocus
            sx={{ "& fieldset": { border: "none" } }}
            variant="outlined"
            onChange={(e) => setCode(e.target.value)}
            InputProps={{
              size: "small",
              sx: {
                height: "45px",
                borderRadius: "20px",
                backgroundColor: "#F2F2F2",
              },
            }}
          />
        </label>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Button
          sx={{
            borderRadius: "18px",
            height: "45px",
            minWidth: "200px",
          }}
          onClick={onSubmit}
          variant="contained"
        >
          {loading ? "Loading..." : "Подтвердить"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default VerifyCodePage;
