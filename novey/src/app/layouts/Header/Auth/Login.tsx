import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

import {
  TextField,
  IconButton,
  DialogContent,
  DialogActions,
  Dialog,
  DialogTitle,
  Button,
} from "@mui/material";

import "../Header.scss";

import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    control,
    formState: {},
  } = useForm();

  const { loading } = useSelector(
    // @ts-ignore
    (state) => state.loading.effects.authSlice.loadLoginData
  );

  const {
    authSlice: { loadLoginData },
  } = useDispatch();

  const { loginModal } = useSelector((state: any) => state.authSlice);

  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");

  const handlePhoneInputChange = (value, country) => {
    setPhone(value);
  };

  const onSubmit = async (data) => {
    await loadLoginData({ phone: "+" + phone, password });
  };

  return (
    <Dialog open={loginModal} maxWidth={"md"} fullWidth={true}>
      <DialogTitle
        sx={{
          p: 2,
          m: 0,
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Авторизация
      </DialogTitle>
      <IconButton
        onClick={() => dispatch.authSlice.setLoginModal(false)}
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
              Номер телефона
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
          <label className="flex flex-col gap-2">
            <span className="text-info-main self-start cursor-pointer">
              Пароль
            </span>
            <TextField
              autoFocus
              sx={{ "& fieldset": { border: "none" } }}
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
        </div>
      </DialogContent>
      <DialogActions sx={{ flexWrap: "wrap", justifyContent: "center", mb: 3 }}>
        <Button
          onClick={onSubmit}
          sx={{
            borderRadius: "18px",
            height: "45px",
            minWidth: "200px",
          }}
          variant="contained"
        >
          {loading ? "Loading..." : "Войти"}
        </Button>
        <Button
          onClick={() => {
            dispatch.authSlice.setLoginModal(false);
            dispatch.authSlice.setAuthModal(true);
          }}
          sx={{
            borderRadius: "18px",
            height: "45px",
            minWidth: "200px",
          }}
          variant="text"
        >
          Регистрация
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginPage;
