import { adv01, adv02, adv03 } from "@/assets/advantages";
import { ILanguages } from "@/components/Translate";

interface Advantage {
  icon: string;
  title: ILanguages;
  description: ILanguages;
}

export const advantages: Advantage[] = [
  {
    icon: adv01,
    title: {
      uz: "Bizning 15 yillik tariximiz bor",
      eng: "We have a 15 year history",
      ru: "Мы имеем 15 летнюю историю",
    },
    description: {
      uz: "Maqsadli bo'lmagan xarajatlarning yo'qligi va ishlab chiqarishni qayta qurish yakuniy iste'molchi uchun mahsulot tannarxini kamaytirishga yordam beradi.",
      eng: "The absence of non-targeted expenses and production restructuring help reduce the cost of products for the end consumer",
      ru: "Отсутствие нецелевых расходов, реструктуризация производства помогают снизить стоимость продукции для конечного потребителя",
    },
  },
  {
    icon: adv02,
    title: {
      uz: "Yuqori texnologiyali sifatli mahsulot",
      eng: "High-tech quality product",
      ru: "Высокотехнологичный качественный продукт",
    },
    description: {
      uz: "Doimiy ravishda texnologiyani yangilash, haqiqatan ham yaxshi mahsulotlarni chiqarish. Allaqachon tashkil etilgan bozorga kirish uchun siz hamma narsani 30% yaxshiroq va kamida 30% arzonroq qilishingiz kerak. Biz ushbu qonunga amal qilamiz!",
      eng: "Constantly updating technology, releasing really good products. To penetrate an already established market, you need to do everything 30% better and at least 30% cheaper. We follow this law!",
      ru: "Постоянное обновление технологии, выпуск действительно хорошей продукции. Чтобы внедриться на уже сформировавшийся рынок, нужно делать все на 30 % лучше и на 30 % дешевле, как минимум. Мы следуем этому закону!",
    },
  },
  {
    icon: adv03,
    title: {
      uz: "O'z qo'llash texnologiyasi",
      eng: "Own application technology",
      ru: "Своя технология нанесения",
    },
    description: {
      uz: "Travertin sarfini tejash, dekorativ gipsimizning xizmat qilish muddatini oshirish va har qanday sirtga qo'llanganda chidamliligini ta'minlash uchun mutaxassislarimiz maxsus qo'llash texnologiyasini ishlab chiqdilar.",
      eng: "To save travertine consumption, to increase the service life of our decorative plaster and to ensure durability when applied to any surface, our specialists have developed a special application technology.",
      ru: "Для экономии расхода травертина, для увеличения срока службы нашей декоративной штукатурки и обеспечения прочности при нанесении на любую поверхность, наши специалисты разработали специальную технологию нанесения.",
    },
  },
  {
    icon: adv01,
    title: {
      uz: "Keng diapazon",
      eng: "Wide range",
      ru: "Широкий ассортимент",
    },
    description: {
      uz: "Har bir hamkorimizga individual yondashuv. Ayni paytda ushbu mahsulotlarning 15 dan ortiq turini ishlab chiqarmoqdamiz. Tabiiy bo'yoqlardan foydalanish har bir turning chidamliligini ta'minlaydi.",
      eng: "Individual approach to each of our partners. Currently, we produce more than 15 types of these products. The use of natural dyes ensures the durability of each type.",
      ru: "Индивидуальный подход каждому нашему партнеру. В настоящее время у нас производится более 15 видов этой продукции. Использование натуральных красителей обеспечивает долговечность каждого вида.",
    },
  },
  {
    icon: adv02,
    title: {
      uz: "O'rtacha narx",
      eng: "Reasonable price",
      ru: "Адекватная цена"
    },
    description: {
      uz: "Travertin iste'molini tejash uchun bizning mutaxassislarimiz mahsulotlarimizni qo'llash uchun maxsus texnologiyani o'ylab topdilar.",
      eng: "To save travertine consumption, our specialists have thought through a special technology for applying our products.",
      ru: "Для экономии расхода травертина наши специалисты продумали специальную технологию нанесения нашей продукции."
    }
  },
  {
    icon: adv03,
    title: {
      uz: "Individual yondashuv",
      eng: "Individual approach",
      ru: "Индивидуальный подход"
    },
    description: {
      uz: "Mahsulotlarimizdan foydalanish yoki sotish orqali qoniqish va daromad olishingiz bizni qiziqtiradi. Shuning uchun, siz bilan hamkorlik qilishdan oldin, biz sizning qiziqishlaringizdan kelib chiqqan holda, maksimal imtiyozlarga tayyormiz.",
      eng: "We are interested in you being satisfied and making a profit by using or selling our products. Therefore, before cooperating with you, we are ready to make maximum concessions, based on your interest.",
      ru: "Мы заинтересованы в том, чтоб вы остались довольнимы и получали прибыль применяя или продавая нашу продукцию. Поэтому перед сотрудничеством с Вами мы готовы идти на максимум уступки, изходя из вашего интереса."
    }
  },
];
