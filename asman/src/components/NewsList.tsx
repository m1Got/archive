import React, { memo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import newsItem from "@/assets/news-item-01.png";
import { Button } from "@nextui-org/button";
import { CameraIcon } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useMedia } from "react-use";
import { news } from "@/mock-data/news";
import { siteLngGlobal } from "@/services/store.service";

const NewsList = ({}) => {
  const { siteLng } = siteLngGlobal();
  const navigate = useNavigate();
  const isWide2xl = useMedia("(min-width: 1536px)");

  return (
    <>
      <Carousel opts={{ slidesToScroll: news.length > 5 ? 1 : 0 }}>
        <CarouselContent>
          {news.map(({ image, title, id, content }, index) => (
            <CarouselItem
              key={index}
              className="basis-4/5 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              <article
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index && ((index + 1) / 2) * 150}
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() => navigate("/news/" + id)}
                >
                  <div className="news-item-image relative z-10">
                    <img
                      className="absolute-cover max-xl:rounded-lg"
                      src={image}
                    />
                  </div>
                  <div className="absolute bottom-0 right-2 max-xl:hidden 2xl:bottom-0 2xl:right-2">
                    <Button
                      isIconOnly
                      className="z-10 w-14 rounded-lg bg-main/80 2xl:h-11"
                      size={isWide2xl ? "lg" : "md"}
                      onClick={() => navigate("/news/" + id)}
                    >
                      <FiArrowUpRight color="white" size={25} />
                    </Button>
                  </div>
                </div>
                <div className="relative -top-6 z-0 rounded-xl border border-zinc-500/20 sm:-top-24">
                  <div className="px-2 pb-1 pt-8 sm:px-3 sm:pt-[6.5rem]">
                    <p className="line-clamp-2 text-sm font-semibold text-zinc-700 md:text-lg">
                      {title[siteLng]}
                    </p>
                    <p className="line-clamp-1 text-neutral-500 md:text-xl">
                      {content[siteLng]}
                    </p>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="[&[disabled]]:hidden" />
        <CarouselNext className="[&[disabled]]:hidden" />
      </Carousel>
    </>
  );
};
export default memo(NewsList);
