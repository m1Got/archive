import { Box, Container } from "@mui/material";

import { Title } from "src/app/components/Title";
import { GoButton } from "src/app/components/GoButton";

import ellipseGreenMoreFilled from "src/assets/imgs/ellipse-green-more-filled.png";
import restangleMoreFilled from "src/assets/imgs/restangle-more-filled.png";
import polygonMoreFilled from "src/assets/imgs/polygon-more-filled.png";
import hexagonPremium from "src/assets/imgs/hexagon-premium.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { baseUrl } from "../../../helpers/request";

export const Catalog = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.productSlice.productFetchCategoryLoad();
  }, []);
  // @ts-ignore
  const { categoryProductList } = useSelector((state) => state.productSlice);
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
      <section
        data-aos="fade-up"
        className="pt-[min(3vw,_30px)] pb-[min(8vw,_80px)]"
      >
        <Container>
          <Title>Каталог</Title>
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
    </>
  );
};
