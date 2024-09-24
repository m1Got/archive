import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

import { TfiWallet } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Title } from "src/app/components/Title";

export const Order = () => {
  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_200px)] pb-[min(8vw,_80px)]">
        <Container>
          <Title>Оформление заказа</Title>
          <Paper
            sx={{
              my: "20px",
              p: "min(5vw, 15px)",
              bgcolor: "#fff",
              borderRadius: "20px",
            }}
          >
            <h5 className="text-[#363636] font-bold text-xl pb-3">
              Ваши данные
            </h5>
            <FormGroup
              sx={{
                flexDirection: "row",
                gap: "20px",
                "& > label": { flex: "1 1 340px" },
              }}
            >
              <label className="flex flex-col gap-2">
                <span className="text-info-main self-start cursor-pointer">
                  Ф.И.О.
                </span>
                <TextField
                  sx={{ "& fieldset": { border: "none" } }}
                  variant="outlined"
                  InputProps={{
                    size: "small",
                    sx: {
                      borderRadius: "20px",
                      backgroundColor: "#F2F2F2",
                    },
                  }}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-info-main self-start cursor-pointer">
                  Телефон
                </span>
                <TextField
                  sx={{ "& fieldset": { border: "none" } }}
                  variant="outlined"
                  InputProps={{
                    size: "small",
                    sx: {
                      borderRadius: "20px",
                      backgroundColor: "#F2F2F2",
                    },
                  }}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-info-main self-start cursor-pointer">
                  Город
                </span>
                <Select
                  size="small"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#F2F2F2",
                    "& fieldset": { border: "none" },
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-info-main self-start cursor-pointer">
                  Адрес 1
                </span>
                <TextField
                  sx={{ "& fieldset": { border: "none" } }}
                  variant="outlined"
                  InputProps={{
                    size: "small",
                    sx: {
                      borderRadius: "20px",
                      backgroundColor: "#F2F2F2",
                    },
                  }}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-info-main self-start cursor-pointer">
                  Адрес 2
                </span>
                <TextField
                  sx={{ "& fieldset": { border: "none" } }}
                  variant="outlined"
                  InputProps={{
                    size: "small",
                    sx: {
                      borderRadius: "20px",
                      backgroundColor: "#F2F2F2",
                    },
                  }}
                />
              </label>
            </FormGroup>
          </Paper>
          <div className="grid sm:grid-cols-2 gap-5 py-5">
            <Paper
              sx={{
                p: "min(5vw, 15px)",
                bgcolor: "#fff",
                borderRadius: "20px",
              }}
            >
              <h5 className="text-[#363636] font-bold text-xl pb-3">
                Ваши данные
              </h5>
              <div className="flex flex-wrap gap-4">
                <RadioGroup
                  row
                  defaultValue="cash"
                  sx={{ gap: "20px", color: "secondary.main" }}
                >
                  <label className="flex items-center cursor-pointer">
                    <FormControlLabel
                      value="cash"
                      control={<Radio />}
                      label={<FaWallet size={25} />}
                      sx={{ mr: "5px" }}
                    />
                    Наличка
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <FormControlLabel
                      value="creditCard"
                      control={<Radio />}
                      label={<BsFillCreditCardFill size={25} />}
                      sx={{ mr: "5px" }}
                    />
                    Терминал
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <FormControlLabel
                      value="onlinePayment"
                      control={<Radio />}
                      label={<RiSecurePaymentFill size={30} />}
                      sx={{ mr: "5px" }}
                    />
                    Онлайн-оплата
                  </label>
                </RadioGroup>
              </div>
            </Paper>
            <Paper
              sx={{
                p: "min(5vw, 15px)",
                bgcolor: "#fff",
                borderRadius: "20px",
              }}
            >
              <h5 className="text-[#363636] font-bold text-xl pb-3">
                Способ доставки
              </h5>
              <RadioGroup
                row
                defaultValue="pickup"
                sx={{ gap: "20px", color: "secondary.main" }}
              >
                <FormControlLabel
                  value="pickup"
                  control={<Radio />}
                  label="Самовывоз"
                />
                <FormControlLabel
                  value="delivery"
                  control={<Radio />}
                  label="Доставка"
                />
              </RadioGroup>
            </Paper>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150027.47512405546!2d69.16091273549881!3d41.32103778693177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8997d4faaa71%3A0xe943d6ec7817ded7!2sNOVEY%20mobile!5e0!3m2!1sru!2s!4v1695712702238!5m2!1sru!2s"
            style={{
              border: 0,
              width: "100%",
              height: "clamp(320px, 30vw, 420px)",
              borderRadius: "10px",
            }}
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
          <div className="flex justify-end py-5">
            <Button
              variant="contained"
              sx={{ minWidth: "200px", borderRadius: "20px", height: "50px" }}
            >
              Оплатить
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};
