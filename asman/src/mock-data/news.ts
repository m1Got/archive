import { news01, news02 } from "@/assets/news";
import { ILanguages } from "@/components/Translate";

export interface NewsItem {
  id: number;
  title?: ILanguages;
  content?: ILanguages;
  image?: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: {
      uz: "⚡️ Tabiiy toshlardan tayyorlanadigan Asman travertini bilan tanishing!",
      eng: "⚡️ Get to know Asman travertine, which is made from natural stones!",
      ru: "⚡️Познакомьтесь с травертином Асман, который изготавливается из натуральных камней!",
    },
    content: {
      uz: `Asman travertini O'zbekiston bozorida o'z o'rniga ega nafaqat ichki bozor Rossiya va O'rta Osiyo mamlakatlariga muntazam export qilib kelmoqdamiz.
Asman travertinlarini hususiyati shundaki mayin oson yoyiluvchan va issiq havoda ham foydalanuvchi mahsulotimizni ishlatish jarayonida shoshib qolmaydi

Asman ishonch va sifat uyg'unligi!

📞 Murojaat uchun: +99895-404-1100`,
      eng: `Asman travertine has its place in the market of Uzbekistan, not only the domestic market, but we regularly export it to Russia and Central Asian countries.
The specialty of Asman travertine is that it is soft, easy to spread, and even in hot weather, the user will not be in a hurry during the process of using our product.

Asman is a combination of trust and quality!

📞 For inquiries: +99895-404-1100`,
      ru: `Асманский травертин имеет свое место на рынке Узбекистана, причем не только на внутреннем рынке, но мы регулярно экспортируем его в Россию и страны Центральной Азии.
Особенность травертина Асман в том, что он мягкий, легко растекается, и даже в жаркую погоду пользователю не придется торопиться в процессе использования нашего продукта.

Асман – это сочетание доверия и качества!

📞 Для справок: +99895-404-1100`,
    },
    image: news01,
  },
  {
    id: 2,
    title: {
      uz: "Asman dekorativ Mineralniy kroshkasi haqiqiy sifatni xohlovchilar uchun!",
      eng: "Asman decorative mineral beads are for those who want real quality!",
      ru: "Декоративные минеральные бусины Асман – для тех, кто ценит настоящее качество!",
    },
    content: {
      uz: `Uyingizga tashqi yuzasiga klassik ko'rinish beruvchi va uzoq yil o'z holatini yo'qotmaydigan mahsulot bo'lib hattoki devoringiz chang bo'lsa yuva olasiz.

Ushbu mahsulotimiz 25 xildan ziyod ranglarda tabiiy mayda toshlardan tayyorlanadi. Bitta chelakdagi 25 kiloli mahsulot o'rtacha 8 - 10 kv devorni qoplash uchun yetadi.

Asman ishonch va sifat uyg'unligi!

📞 Murojaat uchun: +99895-545-1100 +99895-595-1100`,
      eng: `It is a product that gives your home a classic appearance and does not lose its condition for a long time. You can wash it even if your wall is dusty.

This product is made of natural small stones in more than 25 different colors. A 25-kilogram product in one bucket is enough to cover an average 8-10 square meter wall.

Asman is a combination of trust and quality!

📞 For inquiries: +99895-545-1100 +99895-595-1100`,
      ru: `Это изделие, которое придаст вашему дому классический вид и долгое время не потеряет своего состояния. Вы можете мыть его, даже если ваша стена пыльная.

Это изделие изготовлено из натуральных мелких камней более чем 25 различных цветов. 25-килограммового продукта в одном ведре хватит, чтобы покрыть среднюю стену площадью 8-10 квадратных метров.

Асман – это сочетание доверия и качества!

📞 Для справок: +99895-545-1100 +99895-595-1100`,
    },
    image: news02,
  },
];
