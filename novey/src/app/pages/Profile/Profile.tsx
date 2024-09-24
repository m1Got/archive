import { Tab, TabPanel, Tabs, TabsList } from "@mui/base";
import {
  Avatar,
  Button,
  Container,
  FormGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

import { HiOutlineUser } from "react-icons/hi";
import { PiUploadLight, PiUserList } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { Button as ButtonBase } from "@mui/base";

import { Title } from "src/app/components/Title";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../helpers/request";
import PhoneInput from "react-phone-input-2";
import { Controller, useForm } from "react-hook-form";

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const tokenDelete = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    dispatch.profileSlice.getUserInformLoad();
  }, []);

  // @ts-ignore
  const { userList } = useSelector((state) => state.profileSlice);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [main_address, setAddress] = useState([]);
  const [photo, setPhoto] = useState({});

  const handlePhoneInputChange = (value, country) => {
    setPhone(value);
  };

  useEffect(() => {
    if (userList) {
      setName(userList.name);
      setPhone(`${userList.phone}`);
      setAddress(userList.main_address);
      setPhoto(userList.photo);
    }
  }, [userList]);

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  useEffect(() => {
    dispatch.basketSlice.loadStatus();
  }, []);
  // @ts-ignore
  const { statusInfo } = useSelector((state) => state.basketSlice);

  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_200px)] pb-[min(8vw,_80px)] min-h-[700px]">
        <Container>
          <Title>Профиль</Title>
          <Tabs defaultValue={2} className="tab lg:flex items-start py-6 gap-5">
            <TabsList className="lg:flex-col items-center flex-grow-0 !flex-nowrap lg:flex-wrap flex-[290px] max-w-sm">
              <Paper
                sx={{
                  width: "100%",
                  p: "5px",
                  gap: "5px",
                  borderRadius: "20px",
                }}
                className="flex lg:grid"
              >
                <Tab
                  value={1}
                  style={{
                    width: "100%",
                    justifyContent: "start",
                    borderRadius: "20px",
                  }}
                >
                  <HiOutlineUser size={25} />
                  <span className="hidden md:block">Личные данные</span>
                </Tab>
                <Tab
                  value={2}
                  style={{
                    width: "100%",
                    justifyContent: "start",
                    borderRadius: "20px",
                  }}
                >
                  <PiUserList size={25} />
                  <span className="hidden md:block">Мои заказы</span>
                </Tab>
              </Paper>
              <ButtonBase
                className="MuiTab-root ml-5 lg:ml-0"
                onClick={tokenDelete}
                style={{
                  width: "100%",
                  justifyContent: "start",
                  borderRadius: "20px",
                  background: "transparent",
                }}
              >
                <IoIosLogOut size={25} />
                Выйти
              </ButtonBase>
            </TabsList>
            <TabPanel value={1} className="flex-auto">
              <Paper
                sx={{
                  display: "grid",
                  p: "min(5vw, 20px)",
                  borderRadius: "20px",
                  gap: "20px",
                }}
              >
                <div className="relative justify-self-start">
                  <Avatar
                    sx={{ width: 80, height: 80 }}
                    src={`${baseUrl}/${userList?.photo}`}
                    id="img_file"
                  />
                  <Button
                    component="label"
                    variant="contained"
                    sx={{
                      bottom: "-10px",
                      right: "-10px",
                      position: "absolute",
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  >
                    <PiUploadLight color="white" size={22} />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        convertBase64(
                          e.target.files[0],
                          document.querySelectorAll("#img_file")[0]
                        );
                        setPhoto(e.target.files[0]);
                      }}
                    />
                  </Button>
                </div>
                <FormGroup className="!grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-info-main self-start cursor-pointer">
                      Имя
                    </span>
                    <TextField
                      sx={{ "& fieldset": { border: "none" } }}
                      variant="outlined"
                      defaultValue={name}
                      onChange={(e) => setName(e.target.value)}
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
                      Адресс
                    </span>
                    <TextField
                      sx={{ "& fieldset": { border: "none" } }}
                      variant="outlined"
                      type="text"
                      placeholder="Введите адресс"
                      defaultValue={userList?.main_address}
                      // @ts-ignore
                      onChange={(e) => setAddress(e.target.value)}
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
                          value={phone}
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
                  {/* <label className="flex flex-col gap-2">
                    <span className="text-info-main self-start cursor-pointer">
                      Пароль
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
                  </label> */}
                </FormGroup>
                <div className="flex flex-wrap justify-end gap-5 pt-5">
                  {/* <Button
                    variant="outlined"
                    sx={{
                      minWidth: "200px",
                      borderRadius: "20px",
                      height: "45px",
                    }}
                  >
                    Изменить пароль
                  </Button> */}
                  <Button
                    variant="contained"
                    onClick={() =>
                      dispatch.profileSlice.renameUserLoad({
                        phone: "+" + phone,
                        name,
                        main_address,
                        photo,
                      })
                    }
                    sx={{
                      minWidth: "200px",
                      borderRadius: "20px",
                      height: "45px",
                    }}
                  >
                    Редактировать
                  </Button>
                </div>
              </Paper>
            </TabPanel>
            <TabPanel value={2} className="flex-auto">
              <TableContainer
                component={Paper}
                sx={{ p: "15px", borderRadius: "20px" }}
              >
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow sx={{ "& > th": { padding: "5px" } }}>
                      <TableCell align="right">ID</TableCell>
                      <TableCell align="right">Товар</TableCell>
                      <TableCell align="right">Кол-во</TableCell>
                      <TableCell align="right">Цена</TableCell>
                      <TableCell align="right">Адрес доставки</TableCell>
                      <TableCell align="right">Статус доставки</TableCell>
                      <TableCell align="right">Статус оплаты</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {statusInfo.map((item) =>
                      item.orderProducts.map((item) => (
                        <TableRow sx={{ "& > th,td": { padding: "5px" } }}>
                          <TableCell align="right">
                            {item.product?.id}
                          </TableCell>
                          <TableCell align="right">
                            {item.product?.name}
                          </TableCell>
                          <TableCell align="right">
                            {item.product?.amount}
                          </TableCell>
                          <TableCell align="right">
                            {item.product.price?.toLocaleString("ru-RU")}
                          </TableCell>
                          <TableCell align="right">{`${
                            item.address ? item.address : "--"
                          }`}</TableCell>
                          {item.status === 1 ? (
                            <TableCell
                              align="right"
                              sx={{ color: "#C10707", fontWeight: "500" }}
                            >
                              Не доставлено
                            </TableCell>
                          ) : (
                            <TableCell
                              align="right"
                              sx={{ color: "#00CF84", fontWeight: "500" }}
                            >
                              Доставлено
                            </TableCell>
                          )}
                          {item.status_payment === 0 ? (
                            <TableCell
                              align="right"
                              sx={{ color: "#C10707", fontWeight: "500" }}
                            >
                              Не оплачено
                            </TableCell>
                          ) : (
                            <TableCell
                              align="right"
                              sx={{ color: "#28B948", fontWeight: "500" }}
                            >
                              Оплачено
                            </TableCell>
                          )}
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </Tabs>
        </Container>
      </section>
    </>
  );
};
