import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button as NextUIButton } from "@nextui-org/button";
import { IonIcon } from "@ionic/react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import {
  collage01,
  collage02,
  collage06,
  collage07,
  collage08,
} from "@/assets/collages";
import { Link } from "react-router-dom";
import { ProductList } from "@/components/ProductsList";
import { AboutBlock } from "@/components/AboutBlock";
import { Card } from "@/components/ui/card";
import { advantages } from "@/mock-data/advantages";
import Feedback from "@/components/Feedback";
import NewsList from "@/components/NewsList";
import { Accordion } from "@/components/Accordion";
import { IconType } from "react-icons/lib";
import { PhotoView } from "react-photo-view";
import { contacts } from "@/mock-data/contacts";
import { useEffect, useState } from "react";
import { Translate } from "@/components/Translate";
import { siteLngGlobal } from "@/services/store.service";

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { siteLng } = siteLngGlobal();
  return (
    <>
      <section className="grid max-xl:min-h-svh xl:my-3 xl:h-[clamp(55rem,95vh,60rem)]">
        <div className="container relative">
          <div className="h-full">
            <div
              className="absolute bottom-32 z-10 md:px-10 lg:w-3/5 xl:px-20"
              data-aos="fade-right"
            >
              <div className="mb-4 xl:mb-20">
                <h1 className="text-4xl font-medium text-white leading-inherit sm:text-5xl lg:text-7xl">
                  <Translate
                    uz={"Gips asosidagi dekorativ travertin"}
                    eng={"Gypsum-based decorative travertine"}
                    ru={"Декоративный травертин на гипсовой основе."}
                  />
                </h1>
              </div>
              <div className="lg:pr-10">
                <div className="py-4 font-poppins text-white sm:text-lg lg:py-8">
                  <Translate
                    uz={
                      "Biz mahsulot ishlab chiqaruvchilarmiz, bu bizning mijozlarimizga mahsulotlarni arzon narxda sotib olish imkonini beradi!"
                    }
                    eng={
                      "We are a product manufacturer, which allows our customers to purchase products at an affordable price!"
                    }
                    ru={
                      "Мы являемся производителем продукции, что позволяет нашим клиентам приобретать продукцию по доступной цене!"
                    }
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    variant={"yellow"}
                    className="rounded-3xl border border-yellow bg-transparent"
                  >
                    <Translate
                      uz={"Zavodni aylanish"}
                      eng={"Go to the factory"}
                      ru={"Посмотреть завод"}
                    />
                  </Button>
                  <Button
                    variant={"yellow"}
                    className="rounded-3xl"
                    onClick={() => onOpen()}
                  >
                    <Translate
                      uz={"Bepul maslahat"}
                      eng={"Free advice"}
                      ru={"Бесплатная консультация"}
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="main-banner-bg-cp absolute left-0 top-0 h-full w-full rounded-3xl"
              data-aos="zoom-out"
            >
              <Swiper
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ el: "#main-banner-pagination" }}
                loop={true}
                autoplay={{ delay: 4000, waitForTransition: true }}
                speed={2500}
                className="h-full"
              >
                <SwiperSlide>
                  <img
                    src={collage01}
                    className="absolute-cover z-[-1]"
                    loading="lazy"
                  />
                  <div className="absolute-cover bg-black/25"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={collage02}
                    className="absolute-cover z-[-1]"
                    loading="lazy"
                  />
                  <div className="absolute-cover bg-black/25"></div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className="max-md:hidden"
              id="main-banner-pagination"
              data-aos="zoom-in"
            ></div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-14">
        <div className="container grid gap-10 md:grid-cols-2 lg:gap-20">
          <div className="lg:mr-20" data-aos="fade-right">
            <h1 className="font-cycle text-7xl md:text-9xl">
              <Translate uz={"Asman"} eng={"Asman"} ru={"Асман"} />
            </h1>
            <div className="mt-10">
              <h5 className="pb-3 text-2xl">
                <Translate
                  uz={"Gips asosidagi"}
                  eng={"Gypsum based"}
                  ru={"На основе гипса"}
                />
                <span className="text-main">
                  <Translate
                    uz={"dekorativ travertin"}
                    eng={"decorative travertine"}
                    ru={"декоративный травертин"}
                  />
                </span>
                <Translate
                  uz={"ishlab chiqaruvchi."}
                  eng={"manufacturer."}
                  ru={"производитель"}
                />
              </h5>
              <div className="border-t-1 border-b-stone-300">
                <p className="pt-3 text-zinc-400">
                  <Translate
                    uz={
                      "Bizning asosiy afzalliklarimiz materiallarning atrof-muhitga zararsiz ekanligi, o'z texnologiyalarimiz va eng yuqori sifatli xom ashyolardan foydalanishimizdir."
                    }
                    eng={
                      "Our main advantage is that the materials are environmentally friendly that it is harmless, our own technology and the highest is that we use quality raw materials."
                    }
                    ru={
                      "Наше главное преимущество – материалы экологически чистые. что это безвредно, наша собственная технология и высочайший уровень заключается в том, что мы используем качественное сырье."
                    }
                  />
                </p>
              </div>
            </div>
          </div>
          <div
            className="text-neutral-800 sm:pr-8 lg:pr-16"
            data-aos="fade-left"
          >
            <h3 className="mb-5 text-3xl font-semibold lg:text-4xl">
              <Translate
                uz={"Travertin nima?"}
                eng={"What is travertine?"}
                ru={"Что такое травертин?"}
              />
            </h3>
            <div className="w-full border-t-1 border-b-stone-300">
              <p className="pt-5">
                <strong>
                  <Translate
                    uz={"Travertin"}
                    eng={"Travertine"}
                    ru={"Травертин"}
                  />
                </strong>
                <Translate
                  uz={
                    "italyan travertinosidan, lotincha lapis tiburtinus - Tibur tosh - kaltsiy karbonat minerallari, karbonat angidrid buloqlarining kalkerli konlari tomonidan hosil bo'lgan polikristalli nozik nozik taneli bir hil jins. Zımpara va silliqlash mumkin. Travertin qurilishda binolarning tashqi va ichki yuzalarini tugatish uchun ishlatiladi."
                  }
                  eng={
                    "from Italian travertino, in Latin lapis tiburtinus - Tibur stone - polycrystalline fragile fine-grained homogeneous rock formed by calcium carbonate minerals, calcareous deposits of carbon dioxide springs. Can be sanded and polished. Travertine is used in construction for finishing the external and internal surfaces of buildings."
                  }
                  ru={
                    "от итальянского travertino, на латыни lapis tiburtinus — тибурский камень — поликристаллическая хрупкая тонкозернистая гомогенная горная порода, образованная минералами карбоната кальция, известковые отложения углекислых источников. Поддаётся шлифованию и полированию. Травертин используется на строительстве при отделке внешней и внутренней поверхности зданий."
                  }
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-12">
        <div className="container">
          <div className="">
            <h1 className="primary-title" data-aos="fade-right">
              <Translate uz={"Bizning"} eng={"Ours"} ru={"Наш"} />
              <span className="text-main pl-2">
                <Translate
                  uz={"Mahsulotlar"}
                  eng={"Products"}
                  ru={"Продукты"}
                />
              </span>
            </h1>
            <div
              className="flex border-b-1 border-zinc-400 py-3"
              data-aos="fade-left"
            >
              <Link
                className="ml-auto flex items-center text-main"
                to={"/products"}
              >
                <span className="text-lg font-medium">
                  <Translate
                    uz={"Hammasini ko‘rish"}
                    eng={"View All"}
                    ru={"Посмотреть все"}
                  />
                </span>
                <FiArrowUpRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <ProductList />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <AboutBlock showButton={true} />
        </div>
      </section>
      <section className="py-6 md:py-12">
        <div className="container">
          <div className="md:w-1/2" data-aos="fade-right">
            <h2 className="primary-title">
              <Translate
                uz={"Nima uchun bizni"}
                eng={"Why they"}
                ru={"Почему мы"}
              />
              <span className="pl-2 text-main">
                <Translate
                  uz={"Tanlashadi?"}
                  eng={"will choose us?"}
                  ru={"Они выберут?"}
                />
              </span>
            </h2>
          </div>
          <div className="pt-10 md:pt-20">
            <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {advantages.map(({ icon, description, title }, index) => (
                <Card
                  key={index}
                  className="grid rounded-3xl p-3 md:px-5 md:py-10"
                  data-aos="zoom-in"
                  data-aos-delay={index && ((index + 1) / 2) * 150}
                >
                  <NextUIButton
                    isIconOnly
                    radius="full"
                    className="mx-auto h-24 w-24 bg-main"
                  >
                    <IonIcon src={icon} className="text-4xl" />
                  </NextUIButton>
                  <div className="pt-4 text-center lg:p-8">
                    <p className="text-xl font-semibold">{title[siteLng]}</p>
                    <p className="pt-4 leading-7 text-neutral-400">
                      {description[siteLng]}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-20">
        <div className="container">
          <div className="grid gap-2 lg:gap-5">
            <div className="grid min-h-[26rem] gap-2 sm:flex lg:gap-5">
              <article
                className="collage-item basis-[20rem] xl:basis-[28rem]"
                data-aos="zoom-in-right"
              >
                <PhotoView src={collage02}>
                  <img className="absolute-cover" src={collage02} />
                </PhotoView>
              </article>
              <div className="relative flex-1">
                <article
                  className="collage-item collage-item-cp h-full"
                  data-aos="zoom-in"
                >
                  <PhotoView src={collage06}>
                    <img className="absolute-cover" src={collage06} />
                  </PhotoView>
                </article>
                <div
                  className="absolute right-4 top-2 z-10 max-xl:hidden lg:right-8"
                  data-aos="zoom-in-left"
                >
                  <Link
                    to={"/collages"}
                    className="ml-auto flex items-center text-main"
                  >
                    <span className="text-lg font-medium">
                      <Translate
                        uz={"Hammasini ko‘rish"}
                        eng={"View All"}
                        ru={"Посмотреть все"}
                      />
                    </span>
                    <FiArrowUpRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid min-h-[20rem] gap-2 sm:flex lg:gap-5">
              <article
                className="collage-item basis-[20rem] lg:basis-[50rem]"
                data-aos="zoom-in-right"
              >
                <PhotoView src={collage07}>
                  <img className="absolute-cover" src={collage07} />
                </PhotoView>
              </article>
              <article className="collage-item flex-1" data-aos="zoom-in">
                <PhotoView src={collage08}>
                  <img className="absolute-cover" src={collage08} />
                </PhotoView>
              </article>
            </div>
            <div className="grid justify-center py-5 xl:!hidden">
              <Button
                size="lg"
                variant="main"
                className="rounded-2xl shadow-md sm:min-w-[28rem]"
              >
                <Link to="/collages" className="flex">
                  <Translate
                    uz={"Hammasini ko‘rish"}
                    eng={"View All"}
                    ru={"Посмотреть все"}
                  />
                  <FiArrowUpRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-20">
        <div className="container">
          <Feedback showModalAfterSubmit={true} showLeftContent={true} />
        </div>
      </section>
      <section className="pt-6 md:pt-12">
        <div className="container">
          <div className="flex items-center">
            <h2 className="primary-title" data-aos="fade-right">
              <Translate uz={"Kompaniya"} eng={"Company"} ru={"Новости"} />
              <span className="pl-2 text-main">
                <Translate uz={"yangiliklari"} eng={"news"} ru={"компании"} />
              </span>
            </h2>
            <Link
              to={"/news"}
              className="ml-auto hidden items-center text-main md:flex"
              data-aos="fade-left"
            >
              <span className="text-lg font-medium">
                <Translate
                  uz={"Hammasini ko‘rish"}
                  eng={"View All"}
                  ru={"Посмотреть все"}
                />
              </span>
              <FiArrowUpRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="pt-4 md:pt-8">
            <NewsList />
          </div>
          <div className="grid justify-center py-5 md:!hidden">
            <Button
              size="lg"
              variant="main"
              className="rounded-2xl shadow-md md:min-w-[28rem]"
            >
              <Link to="/news" className="flex">
                <Translate
                  uz={"Hammasini ko‘rish"}
                  eng={"View All"}
                  ru={"Посмотреть все"}
                />
                <FiArrowUpRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <div className="grid items-start gap-5 md:grid-cols-2">
            <Accordion />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <iframe
            data-aos="zoom-out"
            src={contacts.map.linkIframe}
            className="relative mx-auto h-[25rem] w-full rounded-md border-0"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalBody className="grid flex-row gap-4">
                  <Feedback onClose={onClose} />
                </ModalBody>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Home;
