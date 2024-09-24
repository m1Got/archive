import { Container, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { PiPhoneCallBold } from "react-icons/pi";

import { Title } from "src/app/components/Title";
import callCenters from "./call-centers.json";

import businessPeopleWorking from "src/assets/business-people-working.png";
import garant1 from "src/assets/imgs/garant_01.svg";
import garant2 from "src/assets/imgs/garant_02.svg";
import garant3 from "src/assets/imgs/garant_03.svg";
import garant4 from "src/assets/imgs/garant_04.svg";
import garant5 from "src/assets/imgs/garant_05.svg";
import garant6 from "src/assets/imgs/garant_06.svg";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../../helpers/request";
import ContentTranslate from "src/app/components/ContentTranslate";

export const Service = () => {
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
      <section
        data-aos="fade-up"
        className="pt-[clamp(100px,_8vw,_200px)] pb-[min(4vw,_40px)]"
      >
        <Container>
          <Title>
            <ContentTranslate
              nameRu={"СЕРВИСНЫЙ ЦЕНТР"}
              nameUz={"XIZMAT KO’RSATISH MARKAZI"}
            />
          </Title>
          <div
            data-aos="fade-up"
            className="gap-5 grid md:grid-cols-2 pt-[min(7vw,_50px)] pb-[min(5vw,_10px)]"
          >
            <div>
              <h5 className="text-2xl font-bold text-[#2B3949]">
                <ContentTranslate
                  nameRu={"УВАЖАЕМЫЙ ПОКУПАТЕЛЬ!"}
                  nameUz={"HURMATLI XARIDOR!"}
                />
              </h5>
              <p className="pt-5">
                <ContentTranslate
                  nameRu={
                    "Компания «Новэй» приветствует Вас и благодарит за выбор нашей продукции. Производитель устанавливает срок службы устройств 12 месяцев при соблюдении правил эксплуатации. Срок службы исчисляется с даты производства изделия. Гарантийный срок начинается со дня передачи товара в пользование потребителю:"
                  }
                  nameUz={
                    "«Novey» kompaniyasi Sizni qutlaydi va o’z tanlovingizni bizning mahsulotimizda qoldirganingiz uchun tashakkur bildiradi. Ishlab chiqaruvchi qurilmaning ishlash muddatini, foydalanish qoidalariga rioya qilgan holda - 12 oy deb belgilaydi. Xizmat muddati mahsulot ishlab chiqarilgan sanadan boshlab hisoblanadi. Kafolat muddati, mahsulot iste’molchiga topshirilgan kundan boshlanadi:"
                  }
                />
              </p>
              <div className="font-bold text-[18px] py-6 leading-5 text-[#2B3949]">
                <ContentTranslate
                  nameRu={
                    "Гарантийный срок начинается со дня передачи товара в пользование потребителю:"
                  }
                  nameUz={
                    "Kafolat muddati, mahsulot iste’molchiga topshirilgan kundan boshlanadi:"
                  }
                />
              </div>
              <ul className="list-disc list-inside [&>li]:leading-5">
                <li>
                  <ContentTranslate
                    nameRu={"для устройств – 12 месяцев;"}
                    nameUz={"Qurilmalar uchun – 12 oy;"}
                  />
                </li>
                <li>
                  <ContentTranslate
                    nameRu={"-3 месяца на батарею"}
                    nameUz={"Batareya uchun - 3 oy"}
                  />
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                className="absolute w-full h-full object-cover rounded-2xl"
                src={businessPeopleWorking}
                alt="Картинка"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="pt-[min(5vw,_60px)] pb-[min(3vw,_30px)]"
          >
            <h5 className="text-2xl font-bold text-[#2B3949]">
              <ContentTranslate
                nameRu={"УСЛОВИЯ ГАРАНТИИ"}
                nameUz={"KAFOLAT SHARTLARI"}
              />
            </h5>
            <ol className="list-none md:list-decimal pt-[min(2vw,_20px)] list-inside [&>li]:leading-5">
              <Paper
                component={"li"}
                className="md:pl-[min(10vw,_70px)] p-[min(2vw,_20px)] mb-7 relative"
              >
                <img
                  src={garant1}
                  className="md:absolute left-3 top-[22px] w-10"
                />
                <ContentTranslate
                  nameRu={
                    "Условия гарантийного обслуживания изделий торговой марки действуют в рамках законодательства Республики Узбекистан и регулируют отношения между потребителями и производителями, импортерами и продавцами при реализации продукции."
                  }
                  nameUz={
                    "Mahsulot belgisining qurilmalariga kafolatli xizmat ko'rsatish shartlari iste'molchilar va ishlab chiqaruvchilar o'rtasida, import qiluvchilar, sotuvchilarda mahsulotlarni amalga oshirishda yuzaga keladigan munosabatlarni tartibga soluvchi O'zR qonunchiligi doirasida amal qiladi."
                  }
                />
              </Paper>
              <Paper
                component={"li"}
                className="md:pl-[min(10vw,_70px)] p-[min(2vw,_20px)] mb-7 relative"
              >
                <img
                  src={garant2}
                  className="md:absolute left-3 top-[22px] w-10"
                />
                <ContentTranslate
                  nameRu={
                    "Срок гарантийного обслуживания, указанный производителем для устройств, исчисляется с момента реализации товара конечному потребителю. Гарантийный срок устройства составляет 1 (один) год. Гарантия на аккумулятор 3 (три) месяца."
                  }
                  nameUz={
                    "Qurilmalar uchun ishlab chiqaruvchi tomonidan belgilangan kafolat muddati mahsulot oxirgi iste'molchiga amalga oshirilgan paytdan boshlab hisoblanadi. Qurilmaning kafolat muddati 1 (bir) yil. Akkumulyator kafolat muddati 3 (uch) oy. "
                  }
                />
              </Paper>
              <Paper
                component={"li"}
                className="md:pl-[min(10vw,_70px)] p-[min(2vw,_20px)] mb-7 relative"
              >
                <img
                  src={garant3}
                  className="md:absolute left-3 top-[22px] w-10"
                />
                <b className="text-[#2B3949]">
                  <ContentTranslate
                    nameRu={
                      "Гарантийное обслуживание не предоставляется, если товар имеет:"
                    }
                    nameUz={
                      "Kafolatli xizmat ko'rsatish amalga oshirilmaydi, agar mahsulot quyidagilarga ega bo'lsa:"
                    }
                  />
                </b>
                <ul className="py-4 list-disc list-inside [&>li]:leading-5 [&>li]:text-[#646464]">
                  <li>
                    <ContentTranslate
                      nameUz={
                        "mexanik, termal, elektr tokidan shikastlanishlar;"
                      }
                      nameRu={
                        "механические, термические, электрические повреждения;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "повреждения, вызванные проникновением в товар посторонних веществ, предметов, жидкостей, насекомых, животных;"
                      }
                      nameUz={
                        "Mahsulotning ichiga begona moddalar, narsalar, suyuqliklar, hasharotlar, hayvonlarning kirib qolishi natijasida yetkazilgan zararlar;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "ущерб, причиненный в результате использования нестандартного или непроверенного оборудования;"
                      }
                      nameUz={
                        "nostandart yoki muvofiqlik testidan o'tmagan uskunalardan foydalanish natijasida yetkazilgan zarar"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "ущерб, причиненный природными явлениями, пожаром, бытовыми факторами;"
                      }
                      nameUz={
                        "tabiiy ofatlar, yong'in, maishiy omillar oqibatida yetkazilgan zarar;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "ущерб, причиненный в результате несоответствия параметров электроснабжения, телекоммуникаций, кабельных сетей и других внешних факторов (климат и т.п.) государственным стандартам;"
                      }
                      nameUz={
                        "elektr ta’minoti parametrlari, telekommunikatsiya, kabel tarmoqlari va boshqa tashqi omillar (iqlim va boshqalar)ning davlat standartlariga mos kelmasligi natijasida yetkazilgan zarar;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "повреждения, вызванные использованием нестандартных запасных частей, комплектующих, программного обеспечения, расходных материалов, чистящих средств;"
                      }
                      nameUz={
                        "nostandart ehtiyot qismlari, komponentlar, dasturiy ta'minot, sarf-xarajat materiallari, tozalash vositalaridan foydalanish natijasida yetkazilgan zarar;  "
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "ущерб, причиненный в результате несоблюдения интервалов и сроков технического и профилактического обслуживания, если это необходимо для данного изделия;"
                      }
                      nameUz={
                        "agar ushbu mahsulot uchun zarur bo'lganda, texnik va profilaktik xizmat ko'rsatish vaqtlari va muddatlariga rioya qilmaslik natijasida yetkazilgan zarar;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "если имеются следы внешнего вмешательства или попытка несанкционированного ремонта;"
                      }
                      nameUz={
                        "tashqi aralashuv izlari yoki o’zboshimcha ta'mirlashga urinish holatlari mavjud bo'lsa;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "при повреждении гарантийных пломб производителя;"
                      }
                      nameUz={
                        "ishlab chiqaruvchining kafolat muhrlari shikastlangan bo'lsa;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "если заводская маркировка или серийный номер повреждены, неразборчивы, имеют следы переклейки или отсутствуют."
                      }
                      nameUz={
                        "agar zavod belgisi yoki seriya raqami shikastlangan, o'qib bo'lmaydigan, qayta yopishtirilganlik izlari mavjud bo’lsa yoki umuman yo'q bo'lsa."
                      }
                    />
                  </li>
                </ul>
              </Paper>
              <Paper
                component={"li"}
                className="md:pl-[min(10vw,_70px)] p-[min(2vw,_20px)] mb-7 relative"
              >
                <img
                  src={garant4}
                  className="md:absolute left-4 top-[22px] w-8"
                />
                <ContentTranslate
                  nameRu={
                    "Устранение неисправностей и дефектов устройства осуществляется авторизованными сервисными центрами. В течение гарантийного срока ремонт устройства осуществляется бесплатно (при предъявлении оригиналов документов, подтверждающих покупку, а также заполненной гарантийной книжки). При отсутствии документов (чека и тетради для гарантийного обслуживания) гарантийный срок исчисляется со дня изготовления устройства."
                  }
                  nameUz={
                    "Qurilmadagi nosozliklar va nuqsonlarni bartaraf etish vakolatli xizmat ko'rsatish markazlari tomonidan amalga oshiriladi. Kafolat muddati davomida qurilmani ta'mirlash bepul amalga oshiriladi (xaridni tasdiqlovchi hujjatlarning asl nusxasi, shuningdek to'ldirilgan kafolat kitobi taqdim etilganda). Hujjatlar (kafolat xizmati uchun chek va daftar) bo'lmagan taqdirda, kafolat muddati qurilma ishlab chiqarilgan kundan boshlab hisoblanadi. "
                  }
                />
              </Paper>
              <Paper
                component={"li"}
                className="md:pl-[min(10vw,_70px)] p-[min(2vw,_20px)] mb-7 relative"
              >
                <img
                  src={garant5}
                  className="md:absolute left-3 top-[22px] w-10"
                />
                <ContentTranslate
                  nameRu={
                    "При замене запасных частей и комплектующих в ходе ремонта новый гарантийный срок не устанавливается. В процессе обслуживания устройства гарантийный срок продлевается."
                  }
                  nameUz={
                    "Ta'mirlash vaqtida ehtiyot qismlar va qo'shimcha qismlarni almashtirishda yangi kafolat muddati belgilanmaydi. Qurilmaga xizmat ko'rsatish vaqtida kafolat muddati uzaytiriladi"
                  }
                />
              </Paper>
              <Paper
                component={"li"}
                className="md:pl-[min(10vw,_70px)] p-[min(2vw,_20px)] mb-7 relative"
              >
                <img
                  src={garant6}
                  className="md:absolute left-3 top-[22px] w-10"
                />
                <b className="text-[#2B3949]">
                  <ContentTranslate
                    nameRu={
                      "Производитель устройства и его уполномоченные организации не несут ответственности за:"
                    }
                    nameUz={
                      "Qurilma ishlab chiqaruvchisi va uning vakolatli tashkilotlari quyidagilarga javobgar emaslar:"
                    }
                  />
                </b>
                <ul className="py-4 list-disc list-inside [&>li]:leading-5 [&>li]:text-[#646464]">
                  <li>
                    <ContentTranslate
                      nameRu={
                        "исключительные или непредвиденные обстоятельства;"
                      }
                      nameUz={"Istisnoiy yoki kutilmagan holatlar;"}
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={"прямой или косвенный ущерб и убытки;"}
                      nameUz={
                        "to'g'ridan-to'g'ri yoki bilvosita shikast va zarar;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "упущенная выгода, убытки, невозможность использования данных и информации;"
                      }
                      nameUz={
                        "yo’qotilgan foyda, yo’qotish, ma'lumot va xabarlardan foydalana olmaslik;"
                      }
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={"затраты на восстановление данных;"}
                      nameUz={"ma'lumotlarni tiklash xarajatlari;"}
                    />
                  </li>
                  <li>
                    <ContentTranslate
                      nameRu={
                        "убытки, вызванные перерывами в производственной и коммерческой деятельности."
                      }
                      nameUz={
                        "ishlab chiqarish va tijorat faoliyatidagi uzilishlar tufayli yuzaga kelgan zararlar."
                      }
                    />
                  </li>
                </ul>
              </Paper>
            </ol>
          </div>
          <div data-aos="fade-up" className="font-bold text-secondary-main">
            <a
              className="gap-5 flex items-center text-lg text-primary-main"
              href="tel:+998555005500"
              target="_blank"
            >
              <PiPhoneCallBold size={24} />
              <ContentTranslate
                nameRu={"Сервисный центр:"}
                nameUz={"Servis markazi:"}
              />
              +998 55 500 55 00
            </a>
          </div>
        </Container>
      </section>
      <section data-aos="fade-up" className="pb-[min(5vw,_30px)]">
        <Container>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150027.47512405546!2d69.16091273549881!3d41.32103778693177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8997d4faaa71%3A0xe943d6ec7817ded7!2sNOVEY%20mobile!5e0!3m2!1sru!2s!4v1695712702238!5m2!1sru!2s"
            style={{
              border: 0,
              width: "100%",
              height: "clamp(320px, 30vw, 420px)",
              borderRadius: "10px",
            }}
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </Container>
      </section>
      <section data-aos="fade-up" className="py-[min(3vw,_30px)]">
        <Container>
          <h4 className="text-[clamp(18px,_3vw,_28px)] text-secondary-main font-bold uppercase">
            <ContentTranslate
              nameRu={"Список официальных сервисных центров:"}
              nameUz={"RASMIY XIZMAT KO'RSATISH MARKAZLARI RO'YXATI:"}
            />
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
            {callCenters.map((callCenter, index) => (
              <Paper
                key={index}
                data-aos="zoom-in"
                data-aos-delay={((index + 1) / 2) * 150}
                sx={{ p: "min(5vw, 20px)", borderRadius: "20px" }}
              >
                <p className="text-[#2B3949] font-bold pb-3">
                  {callCenter.place}
                </p>
                <a
                  href={`tel:${callCenter.phone}`}
                  className="flex items-center text-lg text-primary-main"
                  target="_blank"
                >
                  <PiPhoneCallBold size={24} />
                  <span className="px-2 font-bold">{callCenter.phone}</span>
                </a>
              </Paper>
            ))}
          </div>
          <div className="py-[min(5vw,_50px)]">
            <h4 className="text-[clamp(18px,_3vw,_28px)] text-secondary-main font-bold uppercase">
              <ContentTranslate
                nameRu={"Преимущества сервисных центров Novey"}
                nameUz={"Novey xizmat koэrsatish markazlarining afzalliklari"}
              />
            </h4>
            <ul
              data-aos="fade-up"
              className="list-disc list-inside [&>li]:leading-5 py-5"
            >
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
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};
