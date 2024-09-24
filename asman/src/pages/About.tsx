import { AboutBlock } from "@/components/AboutBlock";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AboutSEOTexts } from "@/mock-data/about-texts";
import { certificates } from "@/assets/certificates";
import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { PhotoView } from "react-photo-view";

import { collage05 } from "@/assets/collages";
import { contacts } from "@/mock-data/contacts";
import { siteLngGlobal } from "@/services/store.service";

const About = () => {
  const { siteLng } = siteLngGlobal();

  const getEmbedVideoLink = () => {
    switch (siteLng) {
      case "ru":
        return contacts.embedVideo.linkRu;
      case "eng":
        return contacts.embedVideo.linkRu;
      case "uz":
        return contacts.embedVideo.linkUz;
      default:
        return contacts.embedVideo.linkRu;
    }
  };

  return (
    <section>
      <div className="container">
        <AboutBlock />
        <div className="py-5 md:py-10">
          <div className="relative min-h-[25rem]" data-aos="zoom-out">
            <img src={collage05} className="absolute-cover" />
          </div>
          <div className="text-balance py-5" data-aos="zoom-out">
            {AboutSEOTexts.text03[siteLng]}
          </div>
        </div>
        <div className="grid py-5">
          <iframe
            data-aos="zoom-out"
            allowFullScreen
            className="mx-auto min-h-[20rem] w-full md:w-[40rem]"
            src={getEmbedVideoLink()}
            title={contacts.embedVideo.title}
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="py-5">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {certificates.map((crt, index) => (
                <CarouselItem
                  data-aos="zoom-out"
                  key={index}
                  data-aos-delay={index && ((index + 1) / 2) * 150}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <PhotoView src={crt}>
                    <img src={crt} className="mx-auto" />
                  </PhotoView>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
