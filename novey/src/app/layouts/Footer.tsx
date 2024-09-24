import { Link } from "react-router-dom";
import { Container, Divider } from "@mui/material";
import { BsFacebook, BsTelegram, BsInstagram } from "react-icons/bs";
import { Typography } from "@mui/joy";

import logo from "src/assets/logo-white.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { api, baseUrl } from "src/helpers/request";
import ContentTranslate from "src/app/components/ContentTranslate";

export const Footer = () => {
  const dispatch = useDispatch();
  const [col1Data, setCol1Data] = useState([]);
  const [col2Data, setCol2Data] = useState([]);
  const [col3Data, setCol3Data] = useState([]);

  useEffect(() => {
    // catalog
    dispatch.productSlice.productFetchCategoryLoad();
    getProductsByID(1).then((data) => {
      setCol1Data(data.data.slice(0, 3));
    });
    getProductsByID(2).then((data) => {
      setCol2Data(data.data.slice(0, 3));
    });
    getProductsByID(3).then((data) => {
      setCol3Data(data.data.slice(0, 3));
    });
  }, []);

  const getProductsByID = async (id) => {
    const response = await fetch(`${baseUrl}/api/product/by-category?id=${id}`);
    const data = await response.json();
    return data;
  };

  // @ts-ignore
  const { categoryProductList } = useSelector((state) => state.productSlice);
  // @ts-ignore
  const { categoryByIdList } = useSelector((state) => state.productSlice);

  return (
    <footer className="py-9 bg-secondary-main">
      <Container>
        <div className="">
          <div className="pb-[min(3vw,_30px)]">
            <Link to="/" className="w-[130px] block">
              <img src={logo} />
            </Link>
            <Typography level="body-lg" className="pt-4 leading-4">
              <ContentTranslate
                nameRu={
                  "*Изображения продукта приведены только для справки. Ознакомьтесь с характеристиками реального устройства.*Функции продукта и содержимое интерфейса представлены только для справки. Ознакомьтесь с функциями и интерфейсом реального устройства."
                }
                nameUz={
                  "*Mahsulot tasvirlari faqat ma'lumot uchun keltirilgan. Haqiqiy qurilmaning texnik xususiyatlari bilan tanishib chiqing. *Mahsulot funktsiyalari va interfeys tarkibi faqat ma'lumot uchun. Haqiqiy qurilmaning xususiyatlari va interfeysi bilan tanishib chiqing"
                }
              />
            </Typography>
          </div>
          <Divider sx={{ backgroundColor: "white" }} />
          <div className="sm:flex items-start gap-3 py-[min(3vw,_30px)]">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 flex-auto">
              <div className="grid gap-[min(5vw,_20px)]">
                <h5 className="text-white text-[20px] font-bold">
                  {categoryProductList[0]?.name}
                </h5>
                <nav className="text-[18px] grid gap-3 justify-items-start">
                  {col1Data.length > 0 &&
                    col1Data.map((product, index) => (
                      <Link
                        to={"/product/" + product?.id}
                        className="opacity-80 hover:opacity-100 transition-opacity"
                        key={index}
                      >
                        {product?.name}
                      </Link>
                    ))}
                </nav>
              </div>
              <div className="grid gap-[min(5vw,_20px)]">
                <h5 className="text-white text-[20px] font-bold">
                  {categoryProductList[1]?.name}
                </h5>
                <nav className="text-[18px] grid gap-3 justify-items-start">
                  {col2Data.map((product, index) => (
                    <Link
                      to={"/product/" + product?.id}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                      key={index}
                    >
                      {product?.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="grid gap-[min(5vw,_20px)]">
                <h5 className="text-white text-[20px] font-bold">
                  {categoryProductList[3]?.name}
                </h5>
                <nav className="text-[18px] grid gap-3 justify-items-start">
                  {col3Data.map((product, index) => (
                    <Link
                      to={"/product/" + product?.id}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                      key={index}
                    >
                      {product?.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="grid gap-[min(5vw,_20px)]">
                <h5 className="text-white text-[20px] font-bold">
                  <ContentTranslate
                    nameRu={"О компании"}
                    nameUz={"Kompaniya haqida"}
                  />
                </h5>
                <nav className="text-[18px] grid gap-3 justify-items-start">
                  <Link to="/about">
                    <ContentTranslate
                      nameRu={"О нас"}
                      nameUz={"Biz haqimizda"}
                    />
                  </Link>
                  <Link to="/news">
                    <ContentTranslate nameRu={"Блог"} nameUz={"Blog"} />
                  </Link>
                  <Link to="/career">
                    <ContentTranslate nameRu={"Карьера"} nameUz={"Karyera"} />
                  </Link>
                  <Link to="/service">
                    <ContentTranslate
                      nameRu={"Сервисный центр"}
                      nameUz={"Xizmat ko'rsatish markazi"}
                    />
                  </Link>
                </nav>
              </div>
            </div>
            <div className="grid gap-5">
              <div className="flex gap-3 md:gap-5 justify-end mt-8 sm:mt-0">
                <Link
                  to="https://www.facebook.com/noveymobile"
                  target="_blank"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <BsFacebook size={30} />
                </Link>
                <Link
                  to="https://t.me/novey_mobile"
                  target="_blank"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <BsTelegram size={30} />
                </Link>
                <Link
                  to="https://www.instagram.com/novey_uzbekistan/"
                  target="_blank"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <BsInstagram size={30} />
                </Link>
              </div>
              <Link
                target="_blank"
                to={"tel:+998555005500"}
                className="opacity-60 hover:opacity-100 transition-opacity text-xl"
              >
                +99855 500-55-00
              </Link>
            </div>
          </div>
          <Divider sx={{ backgroundColor: "white" }} />
          <div className="pt-[min(2vw,_20px)] text-center">
            <Typography level="title-lg">
              © 2023 NOVEY mobile company
              <Link
                className="ml-5 hover:underline"
                to={"https://it-maker.uz/"}
                target="_blank"
              >
                Created by IT-MAKER
              </Link>
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};
