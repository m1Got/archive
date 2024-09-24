import { Avatar, Container, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Title } from "src/app/components/Title";

import "./Career.scss";

import opportune1 from "src/assets/imgs/opportune-1.svg";
import opportune2 from "src/assets/imgs/opportune-2.svg";
import opportune3 from "src/assets/imgs/opportune-3.svg";

import career1 from "src/assets/imgs/career_1.png";
import career2 from "src/assets/imgs/career_2.png";
import career3 from "src/assets/imgs/career_3.png";
import career4 from "src/assets/imgs/career_4.png";
import ContentTranslate from "src/app/components/ContentTranslate";

export const Career = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        className="pt-[clamp(100px,_8vw,_200px)] pb-[min(4vw,_40px)]"
      >
        <Container>
          <Title>
            <ContentTranslate nameRu={"КАРЬЕРА"} nameUz={"KARYERA"} />
          </Title>
          <p className="py-[min(2vw,_25px)] leading-5">
            <ContentTranslate
              nameRu={
                "Мы ведущая компания в сфере производства мобильных телефонов, и мы рады представить вам возможности, которые мы предлагаем в области карьерного роста и развития. NOVEY объединяет. превосходное качество и высокий уровень клиентского сервиса."
              }
              nameUz={
                "Biz mobil telefonlarni ishlab chiqarish sohasida yetakchi kompaniyamiz, va biz sizga karyeraviy o’sish va rivojlanish sohasidagi imkoniyatlarni taklif qilishdan mamnunmiz. NOVEY birlashtiradi. NOVEY a'lo sifat va mijozlarga yuqori darajadagi xizmat ko'rsatishni o'zida mujassam etadi."
              }
            />
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <Paper
              data-aos="zoom-in"
              data-aos-delay={(1 / 2) * 350}
              sx={{ borderRadius: "20px" }}
              className="lg:flex"
            >
              <img
                src={career1}
                className="w-full max-h-[210px] lg:w-[200px] object-cover rounded-2xl"
              />
              <div className="px-[min(2vw,_25px)] py-4">
                <h6 className="text-lg text-secondary-main font-bold pb-3">
                  <ContentTranslate
                    nameRu={"Инновации"}
                    nameUz={"Innovatsiyalar"}
                  />
                </h6>
                <p className="leading-5">
                  <ContentTranslate
                    nameRu={
                      "Мы ставим перед собой высокие цели в области инноваций и стремимся быть впереди технологических тенденций. Вместе с нами вы будете работать над разработкой и созданием новейших мобильных технологий."
                    }
                    nameUz={
                      "Biz innovatsiyalar sohasida yuqori maqsadlarni qo'yamiz va texnologik tendentsiyalardan oldinda bo'lishga intilamiz. Biz bilan birgalikda siz eng yangi mobil texnologiyalarni ishlab chiqish va yaratish ustida ishlaysiz. "
                    }
                  />
                </p>
              </div>
            </Paper>
            <Paper
              data-aos="zoom-in"
              data-aos-delay={(2 / 2) * 350}
              sx={{ borderRadius: "20px" }}
              className="lg:flex"
            >
              <img
                src={career2}
                className="w-full max-h-[210px] lg:w-[200px] object-cover rounded-2xl"
              />
              <div className="px-[min(2vw,_25px)] py-4">
                <h6 className="text-lg text-secondary-main font-bold pb-3">
                  <ContentTranslate nameRu={"Качество"} nameUz={"Sifat"} />
                </h6>
                <p className="leading-5">
                  <ContentTranslate
                    nameRu={
                      "Мы гордимся превосходным качеством продукции. Мы придерживаемся высоких стандартов производства и предоставления сервисных услуг."
                    }
                    nameUz={
                      "Biz mahsulot sifatining yuqoriligi bilan faxrlanamiz. Biz ishlab chiqarish va xizmat ko'rsatishning yuqori standartlariga rioya qilamiz. "
                    }
                  />
                </p>
              </div>
            </Paper>
            <Paper
              data-aos="zoom-in"
              data-aos-delay={(3 / 2) * 350}
              sx={{ borderRadius: "20px" }}
              className="lg:flex"
            >
              <img
                src={career3}
                className="w-full max-h-[210px] lg:w-[200px] object-cover rounded-2xl"
              />
              <div className="px-[min(2vw,_25px)] py-4">
                <h6 className="text-lg text-secondary-main font-bold pb-3">
                  <ContentTranslate nameRu={"Команда"} nameUz={"Jamoa"} />
                </h6>
                <p className="leading-5">
                  <ContentTranslate
                    nameRu={
                      "Мы строим команду профессионалов, которые разделяют наши ценности и хотят стать частью динамичного бизнеса."
                    }
                    nameUz={
                      "Biz qadriyatlarimizni baham ko'radigan va dinamik biznesimizning bir qismi bo'lishni xohlaydigan professionallar jamoasini qurmoqdamiz."
                    }
                  />
                </p>
              </div>
            </Paper>
            <Paper
              data-aos="zoom-in"
              data-aos-delay={(3 / 2) * 350}
              sx={{ borderRadius: "20px" }}
              className="lg:flex"
            >
              <img
                src={career4}
                className="w-full max-h-[210px] lg:w-[200px] object-cover rounded-2xl"
              />
              <div className="px-[min(2vw,_25px)] py-4">
                <h6 className="text-lg text-secondary-main font-bold pb-3">
                  <ContentTranslate
                    nameRu={"Вызовы"}
                    nameUz={"Qiyinchiliklar"}
                  />
                </h6>
                <p className="leading-5">
                  <ContentTranslate
                    nameRu={
                      "Динамика бизнеса и постоянная турбулентность требуют гибкости, адаптивности и принятия быстрых решений. Высокая конкуренция на рынке создает новые сложности. Это значит, что наши люди всегда в поиске новых путей к целям и стремлении к инновациям и улучшению своих продуктов или услуг."
                    }
                    nameUz={
                      "Biznes dinamikasi va doimiy turbulentlik o’zidan moslashuvchanlik, ko'nikib ketuvchanlik va tezkor qaror qabul qilishni talab qiladi. Bozordagi yuqori raqobat yangi qiyinchiliklarni keltirib chiqaradi. Demak, bizning odamlar hamisha maqsadlarga erishishning yangi yo‘llarini izlaydi, o‘z mahsuloti yoki xizmatlarini yangilashga, takomillashtirishga intiladi. "
                    }
                  />
                </p>
              </div>
            </Paper>
          </div>
        </Container>
      </section>
      <section className="py-[min(4vw,_40px)]">
        <Container>
          <h4 className="text-[clamp(18px,_3vw,_28px)] text-secondary-main font-bold uppercase">
            <ContentTranslate
              nameUz={
                "Biz quyida keltirilgan sohalarda har tomonlama karyeraviy imkoniyatlarni taklif qilamiz:"
              }
              nameRu={
                "Мы предлагаем разнообразные карьерные возможности в областях:"
              }
            />
          </h4>
          <div className="grid md:grid-cols-3 gap-3 py-6">
            <Paper
              data-aos="zoom-in"
              data-aos-delay={(1 / 2) * 350}
              sx={{ p: "min(2vw, 25px)", borderRadius: "20px" }}
            >
              <img src={opportune1} />
              <p className="pt-4 text-[18px] leading-5 font-bold">
                <ContentTranslate
                  nameUz={
                    "Texnik ishlab chiqish: mahsulotimizni yaratish va innovatsiya qilishda ishtirok etish."
                  }
                  nameRu={
                    "Техническая разработка: участие в создании и инновациях наших продуктов."
                  }
                />
              </p>
            </Paper>
            <Paper
              data-aos="zoom-in"
              data-aos-delay={(2 / 2) * 350}
              sx={{ p: "min(2vw, 25px)", borderRadius: "20px" }}
            >
              <img src={opportune2} />
              <p className="pt-4 text-[18px] leading-5 font-bold">
                <ContentTranslate
                  nameUz={
                    "Marketing va sotuvlar: marketing strategiyalarini ishlab chiqish va amalga oshirish, mahsulotni bozorda ilgari surish."
                  }
                  nameRu={
                    "Маркетинг и продажи: разработка и внедрение маркетинговых стратегий, продвижение продукции на рынке."
                  }
                />
              </p>
            </Paper>
            <Paper
              data-aos="zoom-in"
              data-aos-delay={(3 / 2) * 350}
              sx={{ p: "min(2vw, 25px)", borderRadius: "20px" }}
            >
              <img src={opportune3} />
              <p className="pt-4 text-[18px] leading-5 font-bold">
                <ContentTranslate
                  nameUz={
                    "Sifat va mijozlarga xizmat ko'rsatish: telefonlardan foydalanishning barcha bosqichlarida mijozlarni qo'llab-quvvatlash."
                  }
                  nameRu={
                    "Качество и клиентский сервис: обеспечение поддержки клиентов на всех этапах использования телефонов."
                  }
                />
              </p>
            </Paper>
          </div>
          <p className="leading-5">
            <ContentTranslate
              nameRu={
                "Мы приглашаем вас искать новые вызовы и возможности вместе с нами. Наша компания предлагает стимулирующую и вдохновляющую среду, где вы сможете проявить свой потенциал и внести реальный вклад в развитие мобильной индустрии."
              }
              nameUz={
                "Sizni biz bilan yangi qiyinchiliklar va imkoniyatlarni izlashga taklif qilamiz. Bizning kompaniyamiz o'z salohiyatingizni namoyon etishingiz va mobil industriya rivojiga real hissa qo'shishingiz mumkin bo'lgan rag'batlantiruvchi va ilhomlantiruvchi muhitni taklif etadi."
              }
            />
            <br />
            <b className="text-secondary-main">
              <ContentTranslate
                nameRu={"Хотите присоединиться к нашей команде?"}
                nameUz={"Bizning jamoamizga qo'shilishni xohlaysizmi?"}
              />
            </b>
          </p>
        </Container>
      </section>
      <section data-aos="fade-up" className="py-[min(4vw,_40px)]">
        <Container>
          <h4 className="text-[clamp(18px,_3vw,_28px)] text-secondary-main font-bold uppercase">
            <ContentTranslate nameRu={"ГЕОГРАФИЯ"} nameUz={"Geografiya"} />
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150027.47512405546!2d69.16091273549881!3d41.32103778693177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8997d4faaa71%3A0xe943d6ec7817ded7!2sNOVEY%20mobile!5e0!3m2!1sru!2s!4v1695712702238!5m2!1sru!2s"
            style={{
              border: 0,
              width: "100%",
              height: "clamp(320px, 30vw, 420px)",
              marginTop: "25px",
              borderRadius: "10px",
            }}
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </Container>
      </section>
      <section data-aos="fade-up" className="py-[min(4vw,_40px)]">
        <Container>
          <h4 className="text-[clamp(18px,_3vw,_28px)] text-secondary-main font-bold uppercase">
            <ContentTranslate
              nameRu={"Почему я выбрал NOVEY?"}
              nameUz={"NEGA MEN NOVEYNI TANLADIM?"}
            />
          </h4>
          <Swiper
            modules={[Pagination]}
            style={{ padding: "min(4vw,20px)", marginTop: "20px" }}
            spaceBetween={20}
            pagination={{ clickable: true, el: "#reviewsPagination" }}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
            }}
          >
            {Array.from({ length: 4 }).map((product, index) => (
              <SwiperSlide key={index}>
                <Paper
                  sx={{ p: "min(4vw, 20px)", borderRadius: "20px" }}
                  className="grid sm:flex gap-3"
                  data-aos-delay={((index + 1) / 2) * 350}
                  data-aos="zoom-in"
                >
                  <Avatar />
                  <div className="">
                    <h6 className="text-[18px] leading-5 font-bold">
                      Рафаэль Ройтман
                    </h6>
                    <p>Designer</p>
                    <span className="leading-5 block py-3">
                      Наша компания предлагает стимулирующую и вдохновляющую
                      среду, где вы сможете проявить свой потенциал и внести
                      реальный вклад в развитие мобильной индустрии.
                    </span>
                  </div>
                </Paper>
              </SwiperSlide>
            ))}
            <div id="reviewsPagination"></div>
          </Swiper>
        </Container>
      </section>
    </>
  );
};
