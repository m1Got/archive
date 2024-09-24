import { ILanguages } from "@/components/Translate";

interface IFaq {
  title: ILanguages;
  body: ILanguages;
}

export const faq: IFaq[] = [
  {
    title: {
      uz: "Atrof-muhitga do'stlik",
      eng: "Environmental friendliness",
      ru: "Экологичность",
    },
    body: {
      uz: "Travertin asosidagi dekorativ gips zaharli emas, quritilganda zaharli gazlar chiqarmaydi va ekologik jihatdan qulaydir. Ushbu material mutlaqo xavfsiz va ekologik toza. U radioaktiv elementlarning eng kichik qismini ham o'z ichiga olmaydi, shuning uchun u sizning uyingizda har qanday miqdorda bo'lishi mumkin.",
      eng: "Decorative plaster based on travertine is non-toxic, does not emit toxic gases when dried, and is environmentally friendly. This material is absolutely safe and environmentally friendly. It does not contain even the slightest fraction of radioactive elements, so it can be present in your home in any quantity.",
      ru: "Декоративная штукатурка на основе травертина не токсична, при высыхании не выделяет токсичных газов, является экологически чистой. Этот материал абсолютно безопасен и экологичен. Он не содержит даже малейшую долю радиоактивных элементов, поэтому может присутствовать в вашем доме в любом количестве.",
    },
  },
  {
    title: {
      uz: "Namlikka va sovuqqa chidamliligi",
      eng: "Moisture and frost resistance",
      ru: "Влаго и морозостойкость",
    },
    body: {
      uz: "Quritgandan so'ng, ASMAN'dan bu dekorativ gips chiroyli, mustahkam ko'rinishga ega bo'lishdan tashqari, fasad devorini namlik, sovuq va issiqlikdan himoya qiladi.",
      eng: "After drying, this decorative plaster from ASMAN, in addition to acquiring a beautiful, solid appearance, also protects the facade wall from moisture, cold and heat.",
      ru: "После высыхания эта деоративная штукатурка от АСМАН на ряду с тем, что приобретает прекрасный солидный вид, еще и защищает стену фасада от влаги, от холода и жары.",
    },
  },
  {
    title: {
      uz: "Fasad uchun ideal",
      eng: "Ideal for facades",
      ru: "Идеален для фасадов",
    },
    body: {
      uz: "O'zining qo'pol tuzilishi tufayli travertin ko'pincha jabhalarda turli naqsh va to'qimalarni yaratish uchun ishlatiladi, shuningdek, kamar va ustunlar uchun idealdir. Ushbu dekorativ gipsning qo'pol yuzasi dizaynga antik davrning olijanob teginishini beradi.",
      eng: "Due to its rough texture, travertine is often used to create different patterns and textures on facades, and is also ideal for arches and columns. The rough surface of this decorative plaster gives the design a noble touch of antiquity.",
      ru: "Из-за шероховатой фактуры травертин часто используется для создания разных рисунков и фактур на фасаде, он также идеален для арок и колонн. Огрубелая поверхность этой декоративной штукатурки придает дизайну благородную нотку старины.",
    },
  },
  {
    title: {
      uz: "Suyuq travertin trendda",
      eng: "Liquid travertine is trending",
      ru: "Жидкий травертин в тренде",
    },
    body: {
      uz: "Hozirgi vaqtda travertin asosidagi dekorativ gipsni qo'llash qulayligi, ajoyib ko'rinishi va qo'llashda ham, ishlab chiqarishda ham arzonligi tufayli mashhur bo'lib bormoqda. Ushbu dekorativ gips deyarli 90 foiz travertindan iborat.",
      eng: "Currently, the use of decorative plaster based on travertine is becoming popular, due to its ease of application, excellent appearance, and fairly low cost both in application and in manufacturing. This decorative plaster consists of almost 90 percent travertine.",
      ru: "В настоящее время становится популярным использование декоративной штукатурки на основе травертина, в виду её простоты нанесения, прекрасного внешнего вида, и достаточно низкой стоимости как при нанесении также и при изготовлении. Такая декоративная штукатурка состоит почти 90 процентов из травертина.",
    },
  },
];
