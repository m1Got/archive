import React from "react";
import { useState } from "react";
import { PiHeart } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingBasket, CiUser } from "react-icons/ci";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import toast, { Toaster } from "react-hot-toast";

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
import ContentTranslate from "src/app/components/ContentTranslate";

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { loading, error } = useSelector(
    (state: any) => state.loading.effects.authSlice.loadData
  );

  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const { isAuthenticated, modalVerify, authModal, loginModal } = useSelector(
    (state: any) => state.authSlice
  );

  const handlePhoneInputChange = (value, country) => {
    setPhone(value);
  };

  const onSubmit = async (data) => {
    try {
      await dispatch.authSlice.loadData({
        name,
        phone: "+" + phone,
      });
    } catch (error) {
      toast.error("Номер телефона уже занят", {
        style: { zIndex: "2000" },
        duration: 2000,
      });
    }
  };
  return (
    <form>
      <Dialog
        open={authModal}
        maxWidth={"md"}
        fullWidth={true}
        onClose={() => dispatch.authSlice.setAuthModal(false)}
      >
        <DialogTitle
          sx={{
            p: 2,
            m: 0,
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          <ContentTranslate
            nameRu={"Регистрация"}
            nameUz={"Ro'yxatdan o'tish"}
          />
        </DialogTitle>
        <IconButton
          onClick={() => dispatch.authSlice.setAuthModal(false)}
          sx={{
            top: 8,
            right: 8,
            position: "absolute",
          }}
        >
          <AiOutlineClose size={25} />
        </IconButton>
        <DialogContent className="p-2 md:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-info-main self-start cursor-pointer">
                <ContentTranslate nameRu={"Имя"} nameUz={"Ism"} />
              </span>
              <TextField
                autoFocus
                sx={{ "& fieldset": { border: "none" } }}
                variant="outlined"
                // {...register("name", {
                //   required: true,
                // })}
                // @ts-ignore
                onChange={(e) => setName(e.target.value)}
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
            <label className="flex flex-col gap-2">
              <span className="text-info-main self-start cursor-pointer">
                <ContentTranslate
                  nameRu={"Номер телефона"}
                  nameUz={"Telefon raqam"}
                />
              </span>
              <Controller
                control={control}
                name="phone"
                rules={{ required: true }}
                render={({ field: { ref, ...field } }) => (
                  <PhoneInput
                    {...field}
                    country={"uz"}
                    defaultMask={"(..) ...-..-.."}
                    placeholder="+998"
                    onChange={handlePhoneInputChange}
                    alwaysDefaultMask={true}
                    inputStyle={{
                      height: "45px",
                      borderRadius: "20px",
                      backgroundColor: "#F2F2F2",
                      width: "100%",
                      padding: "0 15px",
                    }}
                    //@ts-ignore
                    name="phone"
                    specialLabel={""}
                    inputExtraProps={{
                      ref,
                      required: true,
                      autoFocus: true,
                    }}
                  />
                )}
              />
            </label>
          </div>
        </DialogContent>
        <DialogActions
          sx={{ flexWrap: "wrap", justifyContent: "center", mb: 3 }}
        >
          <Button
            sx={{
              borderRadius: "18px",
              height: "45px",
              minWidth: "200px",
            }}
            variant="contained"
            onClick={onSubmit}
          >
            {loading ? (
              "Loading..."
            ) : (
              <ContentTranslate
                nameRu={"Запросить код"}
                nameUz={"Kodni so'rash"}
              />
            )}
          </Button>
          <Button
            onClick={() => {
              dispatch.authSlice.setAuthModal(false);
              dispatch.authSlice.setLoginModal(true);
            }}
            sx={{
              borderRadius: "18px",
              height: "45px",
              minWidth: "200px",
            }}
            type="submit"
          >
            <ContentTranslate nameRu={"Войти"} nameUz={"Kirish"} />
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default Register;
