import React, { useEffect } from "react";
import { Container } from "@mui/material";
import parse from "html-react-parser";

import { Title } from "src/app/components/Title";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../../helpers/request";
import ReactPlayer from "react-player";
import moment from "moment";
import { RxCalendar, RxEyeOpen } from "react-icons/rx";

export const Separate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadNewsDetail(id);
  }, []);
  // @ts-ignore
  const { newsDetailList } = useSelector((state) => state.OtherSlice);

  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_200px)] pb-[min(8vw,_80px)]">
        <Container>
          <div className="grid gap-5">
            <Title>{newsDetailList?.name}</Title>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <RxCalendar size={25} />
                {moment(newsDetailList?.date).format("D-MM-YYYY")}
              </div>
              <div className="flex items-center gap-3">
                <RxEyeOpen size={25} />
                {newsDetailList?.views}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <ReactPlayer
              url={newsDetailList?.video_link}
              width="100%"
              height={400}
              controls={true}
              style={{
                minWidth: 0,
                maxWidth: "700px",
                backgroundImage: "none",
                marginInline: "auto",
              }}
            />
          </div>
          {/* <img
            src={`${baseUrl}/${newsDetailList?.photo}`}
            className="mx-auto md:w-[80%] h-[clamp(240px,_34vw,_440px)] object-cover rounded-[10px] mt-10"
          /> */}
          <div className="py-6">
            <p className="py-1 !text-lg !font-sans !bg-transparent [&*]:!text-lg [&*]:!font-sans [&*]:!bg-transparent">
              {parse(`${newsDetailList?.description}`)}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
