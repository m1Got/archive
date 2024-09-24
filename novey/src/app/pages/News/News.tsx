import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import styled from "styled-components";
import moment from "moment";

import { Title } from "src/app/components/Title";
import blogImage from "src/assets/imgs/blog.png";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../../helpers/request";

const BgShadowTexture = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36.46%, #000 100%);
  position: absolute;
  height: 70%;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadNews();
  });
  // @ts-ignore
  const { newList } = useSelector((state) => state.OtherSlice);
  const navigate = useNavigate();
  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_200px)] pb-[min(8vw,_80px)]">
        <Container>
          <Title>Новости</Title>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 pt-6">
            {newList.map((blog, index) => (
              <React.Fragment key={index}>
                {index % 2 === 0 ? (
                  <Box
                    to={`/news/${blog.id}`}
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
                {index % 2 ? (
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
        </Container>
      </section>
    </>
  );
};
