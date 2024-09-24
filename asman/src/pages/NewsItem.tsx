import { collage01, collage03 } from "@/assets/collages";
import { Translate } from "@/components/Translate";
import { news } from "@/mock-data/news";
import { siteLngGlobal } from "@/services/store.service";
import React, { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { PhotoView } from "react-photo-view";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useList } from "react-use";

const NewsItem = () => {
  const navigate = useNavigate();
  const { siteLng } = siteLngGlobal();
  const { id } = useParams();
  const [list, { filter }] = useList(news);

  useEffect(() => {
    filter((newsItem) => newsItem.id === Number(id));
  }, []);

  return (
    <section className="pb-4 md:pb-10">
      <div className="container">
        <div>
          <button
            onClick={() => navigate("..", { relative: "path" })}
            className="flex items-center text-2xl text-neutral-800"
          >
            <MdArrowBack size={30} />
            <h2 className="px-3 font-semibold">
              <Translate uz={"Orqaga"} eng={"Back"} ru={"Назад"} />
            </h2>
          </button>
        </div>
        <div className="pt-5 md:pt-10">
          <h2 className="mb-3 text-xl font-semibold sm:w-2/3 sm:text-2xl md:mb-8">
            {list[0].title[siteLng]}
          </h2>
          <div className="relative mx-auto h-[20rem] w-full max-w-[70rem] md:h-[40rem]">
            <PhotoView src={list[0].image}>
              <img className="absolute-cover" src={list[0].image} />
            </PhotoView>
          </div>
          <div className="py-4">{list[0].content[siteLng]}</div>
        </div>
      </div>
    </section>
  );
};

export default NewsItem;
