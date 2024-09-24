import NewsList from "@/components/NewsList";
import { Translate } from "@/components/Translate";
import { news } from "@/mock-data/news";
import { siteLngGlobal } from "@/services/store.service";
import React from "react";
import { PhotoView } from "react-photo-view";

const News = () => {
  const { siteLng } = siteLngGlobal();
  return (
    <section>
      <div className="container">
        <div className="mb-5 flex items-center">
          <h2 className="primary-title">
            <Translate uz={"Kompaniya"} eng={"Company"} ru={"Новости"} />{" "}
            <span className="text-main">
              <Translate uz={"yangiliklari"} eng={"news"} ru={"компании"} />
            </span>
          </h2>
        </div>
        <div className="pb-10 pt-5">
          <h2 className="mb-2 text-xl font-semibold sm:w-2/3 sm:text-2xl md:mb-6">
            {news[0].title[siteLng]}
          </h2>
          <div className="relative h-[20rem] w-full md:h-[31rem]">
            <PhotoView src={news[0].image}>
              <img className="absolute-cover" src={news[0].image} />
            </PhotoView>
          </div>
          <div className="py-4">{news[0].content[siteLng]}</div>
        </div>
        <NewsList />
      </div>
    </section>
  );
};

export default News;
