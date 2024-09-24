import { useEffect, useState } from "react";
import { Avatar, Button, Fab, Rating, TextField } from "@mui/material";
import ImageGallery from "react-image-gallery";
import { Button as ButtonBase } from "@mui/base";
import {
  GoArrowLeft,
  GoArrowRight,
  GoHeart,
  GoHeartFill,
} from "react-icons/go";
import { LiaCalendarAltSolid } from "react-icons/lia";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Tab, Tabs, TabPanel, TabsList } from "@mui/base";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Box,
  Checkbox,
  Chip,
  Container,
  Divider,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { Product } from "src/app/components/Product";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl, getContentLanguage } from "../../../helpers/request";

import { Title } from "src/app/components/Title";
import "./ProductDetail.scss";
import ContentTranslate from "src/app/components/ContentTranslate";

import productBuyLinks from "./buy-links.json";

import recBanner1 from "src/assets/imgs/reclama-banner-01.jpg";
import recBanner2 from "src/assets/imgs/reclama-banner-02.jpg";

import rec01 from "src/assets/imgs/rec/01.png";
import rec02 from "src/assets/imgs/rec/02.png";
import rec03 from "src/assets/imgs/rec/03.png";
import rec04 from "src/assets/imgs/rec/04.png";
import rec01Large from "src/assets/imgs/rec/01-large.png";
import rec02Large from "src/assets/imgs/rec/02-large.png";
import rec03Large from "src/assets/imgs/rec/03-large.png";
import rec04Large from "src/assets/imgs/rec/04-large.png";

export const ProductDetail = () => {
  const [otherSwiper, setOtherSwiper] = useState<SwiperType>();

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.productSlice.loadGetProductId(id);
    dispatch.messageSlice.GetReviewLoad(id);
    dispatch.productSlice.loadGetSimilarProduct(id);
  }, []);

  // @ts-ignore
  const { reviewList } = useSelector((state) => state.messageSlice);
  // @ts-ignore
  const { viewProductIdList } = useSelector((state) => state.productSlice);

  // @ts-ignore
  const { similarProductList } = useSelector((state) => state.productSlice);
  // @ts-ignore
  const { isAuthenticated } = useSelector((state) => state.authSlice);

  const basketTokenVerify = () => {
    if (isAuthenticated) {
      dispatch.basketSlice.loadPostProductToBasket({
        product_id: viewProductIdList?.id,
        amount: 1,
      });
    } else {
      dispatch.authSlice.setAuthModal(true);
    }
  };

  const favoriteTokenVerify = () => {
    if (isAuthenticated) {
      dispatch.basketSlice.loadPostFavouriteProduct({
        product_id: viewProductIdList?.id,
      });
    } else {
      dispatch.authSlice.setAuthModal(true);
    }
  };

  const colors = viewProductIdList?.productColors ?? [];

  const [color, setColor] = useState({});
  useEffect(() => {
    setColor(colors[0]);
  }, [colors]);

  let gallery = [];

  const galleryImage = async () => {
    // @ts-ignore
    await color?.photos?.forEach((item) => {
      gallery.push({
        original: `${baseUrl}/${item.photo}`,
        thumbnail: `${baseUrl}/${item.photo}`,
      });
    });
  };

  galleryImage();

  const [review, setReview] = useState("");
  const [rate, setRate] = useState("");
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_150px)] pb-[min(4vw,_20px)]">
        <Container>
          <Title>{viewProductIdList?.name}</Title>
          {/* {viewProductIdList?.id} */}
          <div className="grid lg:flex gap-5 pt-6">
            <div className="flex-[45%] flex-grow-0">
              <ImageGallery
                items={gallery}
                autoPlay={true}
                lazyLoad={true}
                infinite={true}
                slideInterval={5000}
                slideDuration={300}
                showPlayButton={false}
                showFullscreenButton={false}
                additionalClass="product-gallery"
              />
            </div>
            <div className="flex-grow grid lg:grid-cols-2 gap-5">
              <div>
                <ul className="grid gap-3 mb-5 pr-[min(10vw,_70px)] lg:pr-0">
                  {viewProductIdList?.productProperties?.map((item, index) => (
                    <li className="flex items-center" key={index}>
                      <span className="pr-1">
                        {getContentLanguage === "ru"
                          ? item.key_name
                          : item.key_name_uz}
                      </span>
                      <Divider className="flex-auto pt-3" />
                      <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                        {item?.value_name}
                      </b>
                    </li>
                  ))}
                </ul>
                {/* 
                <ul className="grid gap-3 mb-5 pr-[min(10vw,_70px)] lg:pr-0">
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="CPU" nameUz="CPU" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      MTK 6261D
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Габариты" nameUz="Gabaritlar" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      97.3*49.5*18.7 mm
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Частота 2G"
                        nameUz="2G Chastotasi"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      GSM 850/900/1800/1900MHZ
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Количество SIM-карт"
                        nameUz="SIM-kartalarning soni"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      2 sim
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="LCD дюйм" nameUz="LCD dyuym" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      1.3”/2.0”
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Память" nameUz="Xotira" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      ROM 32MB, RAM 32MB
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Камера" nameUz="Kamera" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Ёмкость принятия дополнительной памяти"
                        nameUz="Qo'shimcha xotirani qabul qilish sig’imi"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate
                        nameRu="Micro SD до 32ГБ"
                        nameUz="Micro SD 32GBgacha"
                      />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="USB порт" nameUz="USB port" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      Micro USB
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="FM радио" nameUz="FM Radion" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">Bluetooth</span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Фонарь" nameUz="Fonar" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Зарядчик"
                        nameUz="Quvvatlovchi qurilma"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Мощный аккумулятор"
                        nameUz="Kuchli akkumulyator"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      1000 mAh ≈ ±100mAh
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Экран" nameUz="Ekran" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      6.8
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Модель процессора"
                        nameUz="Protsessor modeli"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      Snapdragon 8
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Встроенная память"
                        nameUz="O’rnatilgan xotira"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      256 Гб
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Оперативная память"
                        nameUz="Operativ xotira"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      12 Гб
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Разрешение камеры"
                        nameUz="Kamera ruxsati"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate
                        nameRu="12 Мп, 10/10 Мп, 200 Мп"
                        nameUz="12 Mp, 10/10 Mp, 200 Mp"
                      />
                    </b>
                  </li>
                </ul>
                */}
                {/* <ButtonBase className="border-b-2 text-primary-main py-1 border-primary-main font-bold">
                  Все характеристики
                </ButtonBase> */}
                <div className="flex items-center gap-3 my-5">
                  <b className="text-secondary-main">Цвет:</b>
                  <ToggleButtonGroup
                    exclusive
                    value={color}
                    onChange={(event, value) => setColor(value)}
                  >
                    {colors?.map((item, index) => (
                      <ToggleButton
                        key={index}
                        value={item}
                        sx={{
                          border: "0",
                          padding: "3px",
                        }}
                        onClick={() => setColor(item)}
                      >
                        <Chip
                          sx={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "50%",
                          }}
                          style={{ backgroundColor: `${item?.color}` }}
                        />
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </div>
              </div>
              <div>
                <Box
                  sx={{
                    p: "min(5vw, 15px)",
                    bgcolor: "#F2F2F2",
                    borderRadius: "20px",
                  }}
                >
                  <div className="flex items-center">
                    <div className="mr-auto">
                      <h2 className="text-[#363636] font-bold text-2xl">
                        {viewProductIdList?.price?.toLocaleString("ru-RU")} сум
                      </h2>
                    </div>
                    {/* <IconButton
                      size="medium"
                      sx={{ p: "0" }}
                      onClick={() => favoriteTokenVerify()}
                    >
                      <Checkbox
                        sx={{
                          color: "primary.main",
                          bgcolor: "transparent",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderColor: "primary.main",
                          p: "8px",
                        }}
                        icon={<GoHeart size={25} />}
                        checkedIcon={<GoHeartFill size={25} />}
                        checked={viewProductIdList?.isFavorite}
                      />
                    </IconButton> */}
                  </div>
                  <div className="flex gap-3 pt-6">
                    <Button
                      variant="outlined"
                      target="_blank"
                      href={
                        productBuyLinks[0][viewProductIdList.id]?.link ??
                        "https://uzum.uz/ru"
                      }
                      sx={{
                        flex: "1 1 auto",
                        fontSize: "18px",
                        fontWeight: "bold",
                        borderRadius: "30px",
                        textTransform: "capitalize",
                      }}
                    >
                      <ContentTranslate nameRu="Купить" nameUz="Sotib olmoq" />
                    </Button>
                    {/* <IconButton
                      color="primary"
                      onClick={() => basketTokenVerify()}
                      sx={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "primary.main",
                      }}
                    >
                      <AiOutlineShoppingCart size={25} />
                    </IconButton> */}
                  </div>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                    bgcolor: "#F2F2F2",
                    borderRadius: "20px",
                    p: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    height: "320px",
                  }}
                >
                  <img
                    className="w-full h-full object-cover rounded-[15px]"
                    src={rec03}
                  />
                  {/* <Title>РЕКЛАМА</Title> */}
                </Box>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Box
              sx={{
                mt: "40px",
                p: "5px",
                bgcolor: "#F2F2F2",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                height: "300px",
              }}
            >
              {/* <Title>РЕКЛАМА</Title> */}
              <img
                className="w-[95%] h-full object-cover rounded-[15px]"
                src={rec03Large}
              />
            </Box>
          </div>
        </Container>
      </section>
      <section className="py-[min(5vw,_30px)]">
        <Container>
          <Tabs defaultValue={1} className="tab">
            <TabsList>
              <Tab value={1}>Характеристики</Tab>
              <Tab value={2}>Отзывы</Tab>
            </TabsList>
            <TabPanel value={1}>
              <div className="grid md:grid-cols-2 md:gap-5">
                {/* <ul className="grid content-start gap-3 mb-3 columns-2">
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="CPU" nameUz="CPU" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      MTK 6261D
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Габариты" nameUz="Gabaritlar" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      97.3*49.5*18.7 mm
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Частота 2G"
                        nameUz="2G Chastotasi"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      GSM 850/900/1800/1900MHZ
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Количество SIM-карт"
                        nameUz="SIM-kartalarning soni"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      2 sim
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="LCD дюйм" nameUz="LCD dyuym" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      1.3”/2.0”
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Память" nameUz="Xotira" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      ROM 32MB, RAM 32MB
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Камера" nameUz="Kamera" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Ёмкость принятия дополнительной памяти"
                        nameUz="Qo'shimcha xotirani qabul qilish sig’imi"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate
                        nameRu="Micro SD до 32ГБ"
                        nameUz="Micro SD 32GBgacha"
                      />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="USB порт" nameUz="USB port" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      Micro USB
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="FM радио" nameUz="FM Radion" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                </ul>
                <ul className="grid content-start gap-3 mb-3 columns-2">
                  <li className="flex items-center">
                    <span className="pr-1">Bluetooth</span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Фонарь" nameUz="Fonar" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Зарядчик"
                        nameUz="Quvvatlovchi qurilma"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate nameRu="Есть" nameUz="Bor" />
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Мощный аккумулятор"
                        nameUz="Kuchli akkumulyator"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      1000 mAh ≈ ±100mAh
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu="Экран" nameUz="Ekran" />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      6.8
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Модель процессора"
                        nameUz="Protsessor modeli"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      Snapdragon 8
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Встроенная память"
                        nameUz="O’rnatilgan xotira"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      256 Гб
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Оперативная память"
                        nameUz="Operativ xotira"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      12 Гб
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu="Разрешение камеры"
                        nameUz="Kamera ruxsati"
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                      <ContentTranslate
                        nameRu="12 Мп, 10/10 Мп, 200 Мп"
                        nameUz="12 Mp, 10/10 Mp, 200 Mp"
                      />
                    </b>
                  </li>
                </ul> 
                */}
                <ul className="grid content-start gap-3 mb-3 columns-2">
                  {viewProductIdList?.productProperties
                    ?.slice(0, 10)
                    .map((item, index) => (
                      <li className="flex items-center" key={index}>
                        <span className="pr-1">
                          {getContentLanguage === "ru"
                            ? item.key_name
                            : item.key_name_uz}
                        </span>
                        <Divider className="flex-auto pt-3" />
                        <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                          {item?.value_name}
                        </b>
                      </li>
                    ))}
                </ul>
                <ul className="grid content-start gap-3 mb-3 columns-2">
                  {viewProductIdList?.productProperties
                    ?.slice(11, viewProductIdList?.productProperties?.length)
                    .map((item, index) => (
                      <li className="flex items-center" key={index}>
                        <span className="pr-1">
                          {getContentLanguage === "ru"
                            ? item.key_name
                            : item.key_name_uz}
                        </span>
                        <Divider className="flex-auto pt-3" />
                        <b className="pl-4 font-medium text-[#363636] flex-auto flex-grow-0 text-right">
                          {item?.value_name}
                        </b>
                      </li>
                    ))}
                </ul>
              </div>
            </TabPanel>
            <TabPanel value={2}>
              {reviewList.map((item) => (
                <article className="grid md:flex gap-5">
                  <Avatar src={`${baseUrl}/${item?.user?.photo}`} />
                  <div className="">
                    <div className="flex items-center flex-wrap gap-[min(4vw,_35px)]">
                      <h6 className="font-bold text-xl">{item?.user?.name}</h6>
                      <Rating
                        readOnly
                        value={3}
                        precision={0.5}
                        icon={<StarIcon color="primary" fontSize="large" />}
                        emptyIcon={
                          <StarBorderIcon color="primary" fontSize="large" />
                        }
                      />
                      <p className="flex items-center ml-auto">
                        <LiaCalendarAltSolid size={30} />
                        <span className="font-bold text-lg px-1">
                          {item?.date}
                        </span>
                      </p>
                    </div>
                    <p className="py-3 text-base">{item?.review}</p>
                  </div>
                </article>
              ))}

              <div className="flex justify-center py-6">
                <ButtonBase className="border-b-2 text-primary-main py-1 border-primary-main font-bold">
                  Посмотреть ещё
                </ButtonBase>
              </div>
              <div className="pt-5">
                <h6 className="font-bold text-2xl text-secondary-main">
                  Оставить комментарий
                </h6>
                <TextField
                  rows={5}
                  multiline
                  sx={{ width: "100%", py: "10px" }}
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                />
                <div className="flex items-center flex-wrap gap-5">
                  <div className="flex items-center mr-auto">
                    <span className="font-bold pr-4">Оценка</span>
                    <Rating
                      precision={0.5}
                      icon={<StarIcon color="primary" fontSize="large" />}
                      onChange={ratingChanged}
                      emptyIcon={
                        <StarBorderIcon color="primary" fontSize="large" />
                      }
                    />
                  </div>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: "200px",
                      borderRadius: "20px",
                      minHeight: "50px",
                    }}
                    onClick={() => {
                      if (isAuthenticated) {
                        dispatch.messageSlice.sendReviewLoad({
                          rate,
                          review,
                          product_id: id,
                        });
                        setReview("");
                      } else {
                        dispatch.authSlice.setAuthModal(true);
                      }
                    }}
                  >
                    Оставить
                  </Button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </Container>
      </section>
      <section className="py-[min(5vw,_40px)]">
        <Container>
          <div className="h-[clamp(300px,_40vw,_530px)] p-[min(6vw,_50px)] relative overflow-hidden rounded-[20px] z-10">
            <div className="sm:w-[400px] relative z-10">
              <h5 className="pb-6 text-white text-3xl font-bold">
                {viewProductIdList?.photoBannerDescriptionA?.ru}
              </h5>
              {/* <p className="text-lg">
                У нас большой выбор различных цветов специально под ваш вкус.
                Каждый найдет для себя подходящий цвет!
              </p> */}
            </div>
            <img
              src={`${baseUrl}/${viewProductIdList?.photoBannerA}`}
              className="absolute w-full h-full top-0 left-0 object-contain z-[-1]"
            />
          </div>
          <div
            className="md:h-[clamp(300px,_40vw,_530px)] rounded-2xl mt-10 overflow-hidden"
            style={{ backgroundColor: "#EEF0F4" }}
          >
            <div className="h-full flex">
              <div className="relative flex-1">
                <img
                  src={`${baseUrl}/${viewProductIdList?.photoBannerB}`}
                  className="relative md:absolute bottom-0 left-1/2 -translate-x-1/2 object-contain h-[300px] md:h-[100%] rounded-2xl"
                />
              </div>
              {viewProductIdList?.photoBannerDescriptionB?.ru ? (
                <div className="p-[min(6vw,_50px)] flex flex-col justify-center flex-1">
                  <h5 className="pb-3 text-black text-3xl font-bold">
                    {viewProductIdList?.photoBannerDescriptionB?.ru}
                  </h5>
                  {/* <p className="text-lg">
                  У нас большой выбор различных цветов специально под ваш вкус.
                  Каждый найдет для себя подходящий цвет!
                </p> */}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Container>
      </section>
      <section data-aos="fade-up" className="py-[min(5vw,_40px)]">
        <Container>
          <div className="flex justify-between pb-8">
            <h5 className=" text-black text-3xl font-bold">
              Показать другие товары
            </h5>
            <div className="flex gap-2">
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => otherSwiper?.slidePrev()}
              >
                <GoArrowLeft size={25} />
              </Fab>
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => otherSwiper?.slideNext()}
              >
                <GoArrowRight size={25} />
              </Fab>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            breakpoints={{
              0: { slidesPerView: 1.3 },
              480: { slidesPerView: 2.3 },
              768: { slidesPerView: 3.3 },
              992: { slidesPerView: 4 },
              1500: { slidesPerView: 4.5 },
            }}
            onSwiper={(swiper) => setOtherSwiper(swiper)}
            className="px-5 py-3"
          >
            {similarProductList.map((product, index) => (
              <SwiperSlide key={index}>
                <Product productItem={product} indexOf={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
};
