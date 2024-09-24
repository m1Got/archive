import { Container, Paper } from "@mui/material";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { GoButton } from "src/app/components/GoButton";

import { Title } from "src/app/components/Title";

import bgWaves from "src/assets/imgs/waves-lines.png";

import { baseUrl } from "../../../helpers/request";
import ContentTranslate from "src/app/components/ContentTranslate";

export const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadAdvantage();
  }, []);

  const { advantageList, partnerList } = useSelector(
    // @ts-ignore
    (state) => state.OtherSlice
  );

  return (
    <>
      <section className="min-h-[65dvh] lg:min-h-[90dvh] flex flex-col justify-center items-center text-center relative">
        <h3
          data-aos="zoom-in"
          className="text-[clamp(25px,_6vw,_50px)] font-mono text-secondary-main md:w-4/5 relative z-10"
        >
          {/* Добро пожаловать в Novey */}
          <ContentTranslate
            nameRu={"NOVEY - надежный и функциональный"}
            nameUz={"NOVEY - ishonchli va funktsional"}
          />
        </h3>
        {/* <p data-aos="zoom-in" className="text-xl pt-5"></p> */}
        <div
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          className="absolute left-0 top-0 flex h-full items-center justify-center"
        >
          <img src={bgWaves} className="object-contain w-full h-full" />
        </div>
      </section>
      <section className="py-[min(10vw,_100px)]">
        <Container>
          <div className="lg:flex items-center">
            <div
              data-aos="fade-right"
              className="flex-auto pr-[min(10vw,_100px)]"
            >
              <Title>
                <ContentTranslate
                  nameRu={"О компании"}
                  nameUz={"Kompaniya haqida"}
                />
              </Title>
              <p className="py-[min(5vw,_40px)] text-lg">
                <ContentTranslate
                  nameUz={
                    "Novey brendi 2019-yilda mobil texnologiyalar sohasida 10 yildan ortiq tajribaga ega mutaxassislar jamoasi tomonidan tashkil etilgan. Mahsulotlar yuqori texnologiyalar asosida ishlab chiqariladi, bizning telefonlarimiz o’zlarining qulay funksiyalari, klassik dizayni va asosiy e’tibori - odamlarning ehtiyojlarini qondirishligi bilan ajralib turadi. Bizning ishlab chiqarishimiz barcha xalqaro standartlar va sifat talablariga javob beradi. Innovatsion yondashuv, yangi texnologiyalarni joriy etish va aniq marketing siyosati kompaniyaga mobil aloqa sohasida yetakchi kompaniyalardan biriga aylanish imkonini beradi."
                  }
                  nameRu={
                    "Бренд Novey был основан в 2019 году командой экспертов с более чем 10-летним опытом работы в сфере мобильных технологий Продукция производится на основе высоких технологий, наши телефоны отличают удобные возможности, классический дизайн и направление на удовлетворение потребностей народа. Наше производство отвечает всем мировым стандартам и требованиям качества. Иновационный подход, внедрение новых технологий, чёткая маркетинговая политика позволяет компании стать одной из ведущих компаний в сфере мобильной связи"
                  }
                />
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="grid sm:grid-cols-2 gap-5 flex-shrink-0 justify-items-center"
            >
              <Paper
                sx={{
                  p: "min(5vw, 30px)",
                  borderRadius: "20px",
                  display: "grid",
                  gap: "4px",
                  maxWidth: "200px",
                  textAlign: "center",
                }}
              >
                <b className="text-[clamp(35px,_40vw,_55px)] leading-8 text-primary-main">
                  <CountUp start={0} duration={3} delay={1} end={12} />+
                </b>
                <span className="leading-5 text-[18px]">
                  <ContentTranslate
                    nameRu={"Торговых точек по Узбекистану"}
                    nameUz={"O'zbekistondagi savdo nuqtalari"}
                  />
                </span>
              </Paper>
              <Paper
                sx={{
                  p: "min(5vw, 30px)",
                  borderRadius: "20px",
                  display: "grid",
                  gap: "4px",
                  maxWidth: "200px",
                  textAlign: "center",
                }}
              >
                <b className="text-[clamp(35px,_40vw,_55px)] leading-8 text-primary-main">
                  <CountUp start={0} duration={3} delay={1} end={40} />+
                </b>
                <span className="leading-5 text-[18px]">
                  <ContentTranslate
                    nameRu={"Сервесных центров по Узбекистану"}
                    nameUz={"O'zbekistonda xizmat ko'rsatish markazlari"}
                  />
                </span>
              </Paper>
              <Paper
                sx={{
                  p: "min(5vw, 30px)",
                  borderRadius: "20px",
                  display: "grid",
                  gap: "4px",
                  maxWidth: "200px",
                  textAlign: "center",
                }}
              >
                <b className="text-[clamp(35px,_40vw,_55px)] leading-8 text-primary-main">
                  <CountUp start={0} duration={3} delay={1} end={100} />+
                </b>
                <span className="leading-5 text-[18px]">
                  <ContentTranslate
                    nameRu={"Количество сотрудников"}
                    nameUz={"Xodimlar soni"}
                  />
                </span>
              </Paper>
              <Paper
                sx={{
                  p: "min(5vw, 30px)",
                  borderRadius: "20px",
                  display: "grid",
                  gap: "4px",
                  maxWidth: "200px",
                  textAlign: "center",
                }}
              >
                <b className="text-[clamp(35px,_40vw,_55px)] leading-8 text-primary-main">
                  <CountUp start={0} duration={3} delay={1} end={100} /> +
                </b>
                <span className="leading-5 text-[18px]">
                  <ContentTranslate
                    nameRu={"Телефоны разных моделей"}
                    nameUz={"Xil modeldagi telefonlar"}
                  />
                </span>
              </Paper>
            </div>
          </div>
        </Container>
      </section>
      <section data-aos="fade-up" className="py-[min(8vw,_80px)]">
        <Container>
          <Title>
            <ContentTranslate
              nameUz={"Bizning afzalliklarimiz"}
              nameRu={"Наши преимущества"}
            />
          </Title>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 pt-6 gap-5">
            {advantageList.map((item, index) => (
              <Paper
                key={index}
                data-aos="zoom-in"
                data-aos-delay={((index + 1) / 2) * 350}
                sx={{ p: "min(5vw, 25px)", borderRadius: "20px" }}
              >
                <img
                  src={`${baseUrl}/${item?.photo}`}
                  className="w-20 h-20 object-contain"
                />
                <h6 className="font-bold text-[22px] mt-4">{item?.name}</h6>
                <p className="py-2 text-[18px] leading-5">
                  {item?.description}
                </p>
              </Paper>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-[min(6vw,_60px)]">
        <Container>
          <div className="grid md:grid-cols-2 gap-11">
            <article data-aos="fade-right">
              <Title>
                <ContentTranslate nameRu={"Карьера"} nameUz={"Karyera"} />
              </Title>
              <p className="py-6 text-lg leading-6">
                <ContentTranslate
                  nameRu={
                    "Бренд Novey был основан в 2019 году командой экспертов с более чем 10-летним опытом работы в сфере мобильных технологий Продукция производится на основе высоких технологий, наши телефоны отличают удобные возможности, классический дизайн и направление на удовлетворение потребностей народа.  Наше производство отвечает всем мировым стандартам и требованиям качества. Иновационный подход, внедрение новых технологий, чёткая маркетинговая политика позволяет компании стать одной из ведущих компаний в сфере мобильной связи"
                  }
                  nameUz={
                    "Novey brendi 2019-yilda mobil texnologiyalar sohasida 10 yildan ortiq tajribaga ega mutaxassislar jamoasi tomonidan tashkil etilgan. Mahsulotlar yuqori texnologiyalar asosida ishlab chiqariladi, bizning telefonlarimiz o’zlarining qulay funksiyalari, klassik dizayni va asosiy e’tibori - odamlarning ehtiyojlarini qondirishligi bilan ajralib turadi. Bizning ishlab chiqarishimiz barcha xalqaro standartlar va sifat talablariga javob beradi. Innovatsion yondashuv, yangi texnologiyalarni joriy etish va aniq marketing siyosati kompaniyaga mobil aloqa sohasida yetakchi kompaniyalardan biriga aylanish imkonini beradi."
                  }
                />
              </p>
              <GoButton to="/career" color="primary.main" />
            </article>
            <article data-aos="fade-left">
              <Title>
                <ContentTranslate
                  nameRu={"Сотрудничество"}
                  nameUz={"Hamkorlik"}
                />
              </Title>
              <p className="py-6 text-lg leading-6">
                <ContentTranslate
                  nameRu={
                    "Бренд Novey был основан в 2019 году командой экспертов с более чем 10-летним опытом работы в сфере мобильных технологий Продукция производится на основе высоких технологий, наши телефоны отличают удобные возможности, классический дизайн и направление на удовлетворение потребностей народа.  Наше производство отвечает всем мировым стандартам и требованиям качества. Иновационный подход, внедрение новых технологий, чёткая маркетинговая политика позволяет компании стать одной из ведущих компаний в сфере мобильной связи"
                  }
                  nameUz={
                    "Novey brendi 2019-yilda mobil texnologiyalar sohasida 10 yildan ortiq tajribaga ega mutaxassislar jamoasi tomonidan tashkil etilgan. Mahsulotlar yuqori texnologiyalar asosida ishlab chiqariladi, bizning telefonlarimiz o’zlarining qulay funksiyalari, klassik dizayni va asosiy e’tibori - odamlarning ehtiyojlarini qondirishligi bilan ajralib turadi. Bizning ishlab chiqarishimiz barcha xalqaro standartlar va sifat talablariga javob beradi. Innovatsion yondashuv, yangi texnologiyalarni joriy etish va aniq marketing siyosati kompaniyaga mobil aloqa sohasida yetakchi kompaniyalardan biriga aylanish imkonini beradi."
                  }
                />
              </p>
              <GoButton to="/service" color="primary.main" />
            </article>
          </div>
        </Container>
      </section>
      <section className="py-[min(6vw,_60px)]">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerList.map((item, index) => (
              <Paper
                key={index}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  height: "260px",
                  p: "min(5vw, 25px)",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >
                <img src={`${baseUrl}/${item?.photo}`} alt="Картинка" />
              </Paper>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
