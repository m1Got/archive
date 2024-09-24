import React, { useEffect, useState } from "react";
import { Container, Box, Fab } from "@mui/material";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import moment from "moment";

import { GoButton } from "src/app/components/GoButton";
import { Product } from "src/app/components/Product";
import { Title } from "src/app/components/Title";

// import firstPhones from "src/assets/imgs/home-01.png";
import firstPhones from "src/assets/imgs/N880.png";
import secondPhones from "src/assets/imgs/home-02.png";
import logoImage from "src/assets/imgs/logo-image.png";

import hexagon from "src/assets/imgs/hexagon.png";
import polygon from "src/assets/imgs/polygon.png";

import ellipseGreenMoreFilled from "src/assets/imgs/ellipse-green-more-filled.png";
import restangleMoreFilled from "src/assets/imgs/restangle-more-filled.png";
import polygonMoreFilled from "src/assets/imgs/polygon-more-filled.png";
import hexagonPremium from "src/assets/imgs/hexagon-premium.png";

import { useDispatch, useSelector } from "react-redux";
import { baseUrl, getContentLanguage } from "../../../helpers/request";
import styled from "styled-components";
import ContentTranslate from "src/app/components/ContentTranslate";

const BgShadowTexture = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36.46%, #000 100%);
  position: absolute;
  height: 70%;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const Home = () => {
  const dispatch = useDispatch();

  const [hitSwiper, setHitSwiper] = useState<SwiperType>();
  const [noveltySwiper, setNoveltySwiper] = useState<SwiperType>();
  const [saleSwiper, setSaleSwiper] = useState<SwiperType>();

  const { loading, error } = useSelector(
    // @ts-ignore
    (state) => state.loading.effects.productSlice.loadGetPopularProduct
  );

  useEffect(() => {
    dispatch.productSlice.productFetchCategoryLoad();
    dispatch.productSlice.loadGetPopularProduct();
    dispatch.productSlice.loadNewProductFunction();
    dispatch.productSlice.productPriceDownLoad();
    dispatch.OtherSlice.loadNews();
  }, []);

  const {
    categoryProductList,
    popularProductList,
    newProductList,
    productPriceDownList,
    // @ts-ignore
  } = useSelector((state) => state.productSlice);

  // @ts-ignore
  const { newList } = useSelector((state) => state.OtherSlice);

  const navigate = useNavigate();

  const navigateSearch = (id) => {
    navigate(`/by-category?id=${id}`);
  };

  const bgImages = (categoryName: number) => {
    if (categoryName === 1) return restangleMoreFilled;
    if (categoryName === 2) return ellipseGreenMoreFilled;
    if (categoryName === 3) return polygonMoreFilled;
    if (categoryName === 5) return hexagonPremium;
  };

  return (
    <>
      <section className="min-h-[100dvh] grid relative z-10">
        <Container className="h-full flex">
          <img
            src={firstPhones}
            data-aos="fade-right"
            className="top-20 md:top-[20%] absolute z-10 left-16 md:left-[10%] object-contain w-[clamp(230px,_40vw,_450px)]"
          />
          <div
            data-aos="fade-left"
            className="h-[90%] md:h-full flex flex-col justify-end md:justify-center items-end ml-auto text-right relative z-10 md:w-1/2"
          >
            <h3 className="text-[clamp(25px,_6vw,_65px)] font-mono text-secondary-main">
              <ContentTranslate
                nameUz="Klassikaga o'zgacha nazar tashlang"
                nameRu="Взгляните на классику по-новому"
              />
            </h3>
            <p className="py-[min(5vw,_40px)] w-[88%] md:text-[18px] leading-6">
              <ContentTranslate
                nameUz="Kameraning yorqin tasvirlari borliqni yanada go'zallashtiradi. Undagi o'ziga xoslik barcha yoshdagilar uchun qulayligida. Betakror va jilvador!"
                nameRu="Яркие изображения камеры делают жизнь прекраснее. Уникальность модели заключается в удобстве для всех возрастов. Неповторимый и стильный!"
              />
            </p>
            <GoButton to="/product/161" />
          </div>
          <img
            src={hexagon}
            data-aos="fade-left"
            className="w-[70%] h-[80%] object-contain opacity-80 absolute right-[min(-10vw,_-100px)] top-20 z-[-1] "
          />
        </Container>
        <img
          data-aos="fade-right"
          src={logoImage}
          className="absolute left-0 bottom-[min(6vw,_120px)] w-[clamp(400px,_50vw,_900px)]"
        />
      </section>
      <section data-aos="zoom-in-up" className="md:min-h-[97dvh] grid relative">
        <Container className="h-full flex-col-reverse md:flex-row !flex relative">
          <div className="pb-[min(10vw,_100px)] md:pb-0 md:h-full flex flex-col justify-end md:justify-center relative z-10 md:w-1/2">
            <h3 className="text-[clamp(27px,_7vw,_75px)] font-mono text-secondary-main">
              <ContentTranslate
                nameUz="Bardoshli korpus va ishonchli klaviatura"
                nameRu="Прочный корпус и надежная клавиатура."
              />
            </h3>
            <p className="py-[min(5vw,_40px)] md:text-[18px] leading-6">
              <ContentTranslate
                nameUz="Kameraning yorqin tasvirlari borliqni yanada go'zallashtiradi. Undagi o'ziga xoslik barcha yoshdagilar uchun qulayligida. Betakror va jilvador!"
                nameRu="Яркие изображения с камеры делают жизнь прекраснее. Уникальность модели заключается в удобстве для всех возрастов. Неповторимый и стильный!"
              />
            </p>
            <GoButton to="/product/166" />
          </div>
          <div className="md:absolute right-[min(3vw,_40px)] md:right-[-20px] top-0 md:top-2/3 md:translate-y-[-70%] w-full md:w-[clamp(420px,_40vw,_800px)]">
            <img src={secondPhones} className="w-full h-full object-contain" />
            {/* <span className="rounded-[50%] bg-[#FBFBFB] h-[min(8vw,_200px)] absolute top-[95%] left-[-20px] w-[115%] blur-sm"></span> */}
          </div>
          <img
            src={logoImage}
            className="absolute hidden md:block right-[-20px] top-[min(4vw,_20px)] w-[clamp(400px,_45vw,_800px)]"
          />
        </Container>
      </section>
      <section
        data-aos="fade-up"
        className="pt-[min(3vw,_30px)] pb-[min(8vw,_80px)]"
      >
        <Container>
          <Title>
            <ContentTranslate nameRu={"Каталог"} nameUz={"Katalog"} />
          </Title>
          <div className="grid sm:grid-cols-2 gap-5 pt-9">
            {categoryProductList
              .filter((item) => item.id !== 8 && item.id !== 22)
              .map((item, index) => (
                <Box
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={((index + 1) / 2) * 350}
                  sx={{
                    p: "min(3vw, 30px)",
                    position: "relative",
                    minHeight: "clamp(400px, 45vw, 500px)",
                    borderRadius: "20px",
                    backgroundColor: "#eaeaea",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={bgImages(item.id)}
                    style={{ transform: "rotateY(180deg)" }}
                    className="absolute h-[80%] object-contain top-10 right-5"
                  />
                  <div className="relative z-10 h-full flex flex-col">
                    <h5 className="font-bold text-3xl text-secondary-main">
                      {item.name}
                    </h5>
                    <p className="pt-3 pb-4 flex-auto w-2/3">
                      {item.description}
                    </p>
                    <button
                      onClick={() => {
                        dispatch.productSlice.productFetchByCategoryLoad(
                          item.id
                        );
                        navigateSearch(item.id);
                      }}
                    >
                      <GoButton text="" color="info.main" />
                    </button>
                  </div>
                  <img
                    src={`${baseUrl}/${item?.photo}`}
                    className="absolute object-contain -bottom-10 md:-bottom-20 right-0 md:right-10 w-[80%] md:w-auto h-[80%] md:h-[90%]"
                  />
                </Box>
              ))}
          </div>
        </Container>
      </section>
      <section
        data-aos="fade-up"
        className="pt-[min(7vw,_70px)] pb-[min(6vw,_60px)]"
      >
        <Container>
          <div className="flex justify-between pb-8">
            <Title>
              <ContentTranslate nameRu={"Хит продаж"} nameUz={"Ommabop"} />
            </Title>
            <div className="flex gap-2">
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => hitSwiper?.slidePrev()}
              >
                <GoArrowLeft size={25} />
              </Fab>
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => hitSwiper?.slideNext()}
              >
                <GoArrowRight size={25} />
              </Fab>
            </div>
          </div>
        </Container>
        <Swiper
          observer={true}
          observeParents={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            992: { slidesPerView: 4.5 },
            1500: { slidesPerView: 5.5 },
          }}
          onSwiper={(swiper) => setHitSwiper(swiper)}
          className="px-5 py-3"
        >
          {loading
            ? "Loading..."
            : popularProductList.map((item, index) =>
                item?.photo?.includes(
                  "assets_files/images/no-photo.png"
                ) ? null : (
                  <SwiperSlide key={index}>
                    <Product productItem={item} indexOf={index} />
                  </SwiperSlide>
                )
              )}
        </Swiper>
      </section>
      <section
        data-aos="fade-up"
        className="pt-[min(7vw,_70px)] pb-[min(6vw,_60px)]"
      >
        <Container>
          <div className="flex justify-between pb-8">
            <Title>
              <ContentTranslate nameRu={"Новинки"} nameUz={"Yangi"} />
            </Title>
            <div className="flex gap-2">
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => noveltySwiper?.slidePrev()}
              >
                <GoArrowLeft size={25} />
              </Fab>
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => noveltySwiper?.slideNext()}
              >
                <GoArrowRight size={25} />
              </Fab>
            </div>
          </div>
        </Container>
        <Swiper
          spaceBetween={20}
          observer={true}
          observeParents={true}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            992: { slidesPerView: 4.5 },
            1500: { slidesPerView: 5.5 },
          }}
          onSwiper={(swiper) => setNoveltySwiper(swiper)}
          className="px-5 py-3"
        >
          {newProductList
            .filter((product) => product.category.id !== 22)
            .map((product, index) => (
              <SwiperSlide key={index}>
                <Product productItem={product} indexOf={index} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section
        data-aos="fade-up"
        className="pt-[min(7vw,_70px)] pb-[min(6vw,_60px)]"
      >
        <Container>
          <div className="flex justify-between pb-8">
            <Title>
              <ContentTranslate
                nameRu={"Акционные товары"}
                nameUz={"Hamyonbop tovarlar"}
              />
            </Title>
            <div className="flex gap-2">
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => saleSwiper?.slidePrev()}
              >
                <GoArrowLeft size={25} />
              </Fab>
              <Fab
                sx={{ boxShadow: "none" }}
                size="medium"
                onClick={() => saleSwiper?.slideNext()}
              >
                <GoArrowRight size={25} />
              </Fab>
            </div>
          </div>
        </Container>
        <Swiper
          spaceBetween={20}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            992: { slidesPerView: 4.5 },
            1500: { slidesPerView: 5.5 },
          }}
          onSwiper={(swiper) => setSaleSwiper(swiper)}
          className="px-5 py-3"
        >
          {productPriceDownList
            .filter((product) => product.category.id !== 22)
            .map((product, index) => (
              <SwiperSlide key={index}>
                <Product productItem={product} indexOf={index} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section
        data-aos="fade-up"
        className="pt-[min(7vw,_70px)] pb-[min(6vw,_60px)]"
      >
        <Container>
          <Title>
            <ContentTranslate nameRu={"Блог"} nameUz={"Blog"} />
          </Title>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 pt-5">
            {newList.map((blog, index) => (
              <React.Fragment key={index}>
                {index % 2 === 0 ? (
                  <Box
                    to={`news/${blog.id}`}
                    component={Link}
                    data-aos="zoom-in"
                    data-aos-delay={((index + 1) / 2) * 250}
                    sx={{
                      p: "min(3vw, 25px)",
                      zIndex: "4",
                      position: "relative",
                      height: "clamp(250px, 30vw, 350px)",
                      borderRadius: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      overflow: "hidden",
                    }}
                  >
                    <div className="absolute top-0 left-0 z-[-1] w-full h-full">
                      <img
                        src={`${baseUrl}/${blog?.photo}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <p className="text-[clamp(16px,_2vw,_22px)] font-semibold pb-4">
                        {blog?.name}
                      </p>
                      <span>{moment(blog?.date).format("D-MM-YYYY")}</span>
                    </div>
                  </Box>
                ) : (
                  <Box
                    to={`news/${blog.id}`}
                    component={Link}
                    data-aos="zoom-in"
                    data-aos-delay={((index + 1) / 2) * 250}
                    sx={{
                      p: "min(3vw, 25px)",
                      zIndex: "4",
                      position: "relative",
                      height: "clamp(250px, 30vw, 350px)",
                      borderRadius: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      overflow: "hidden",
                    }}
                  >
                    <div className="absolute top-0 left-0 z-[-1] w-full h-full">
                      <img
                        src={`${baseUrl}/${blog?.photo}`}
                        className="w-full h-full object-cover"
                      />
                      <BgShadowTexture />
                    </div>
                    <div className="text-white">
                      <p className="text-[clamp(16px,_2vw,_22px)] font-semibold pb-4">
                        {blog?.name}
                      </p>
                      <span>{moment(blog?.date).format("D-MM-YYYY")}</span>
                    </div>
                  </Box>
                )}
              </React.Fragment>
            ))}
            {/* 
            {Array.from({ length: 4 }).map((_, index) => (
              <React.Fragment key={index}>
                {index % 2 === 0 ? (
                  <Box
                    to="/news/1"
                    component={Link}
                    data-aos="zoom-in"
                    data-aos-delay={((index + 1) / 2) * 250}
                    sx={{
                      p: "min(3vw, 25px)",
                      zIndex: "4",
                      position: "relative",
                      height: "clamp(250px, 30vw, 350px)",
                      borderRadius: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      overflow: "hidden",
                    }}
                  >
                    <div className="absolute top-0 left-0 z-[-1] w-full h-full">
                      <img
                        src={`${baseUrl}/${newList[0]?.photo}`}
                        className="w-full h-full object-cover"
                      />
                      <BgShadowTexture />
                    </div>
                    <div className="text-white">
                      <p className="text-[clamp(16px,_2vw,_22px)] font-semibold pb-4">
                        Как наружняя реклама влияет на потребителя
                      </p>
                      <span>01.02</span>
                    </div>
                  </Box>
                ) : (
                  <Box
                    to="/news/1"
                    component={Link}
                    data-aos="zoom-in"
                    data-aos-delay={((index + 1) / 2) * 250}
                    sx={{
                      p: "min(3vw, 25px)",
                      height: "clamp(250px, 30vw, 350px)",
                      borderRadius: "20px",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      display: "flex",
                      border: "1px solid #2F3734",
                    }}
                  >
                    <p className="text-[clamp(16px,_2vw,_22px)] pb-4 font-semibold text-secondary-main">
                      Как наружняя реклама влияет на потребителя
                    </p>
                    <img
                      src={`${baseUrl}/${newList[0]?.photo}`}
                      className="w-full block h-[45%] rounded-full object-cover mb-[min(4vw,_40px)]"
                    />
                    <span>01.02</span>
                  </Box>
                )}
              </React.Fragment>
            ))}
             */}
          </div>
          <div className="flex justify-center pt-7">
            <GoButton to="/news" />
          </div>
        </Container>
      </section>
    </>
  );
};
