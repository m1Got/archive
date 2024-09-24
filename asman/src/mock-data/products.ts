import { CSSProperties } from "react";
import {
  emulsiya_01,
  emulsiya_02,
  emulsiya_03,
  lakPaqir_01,
  lakPaqir_02,
} from "@/assets/products";
import { durPlaster_01 } from "@/assets/products";
import { lak_01 } from "@/assets/products";
import { travertin_01 } from "@/assets/products";
import { gruntofka_01 } from "@/assets/products";
import { mineralStone_01 } from "@/assets/products";
import { ILanguages } from "@/components/Translate";

interface IProductLink {
  title: ILanguages;
  isActive: boolean;
  type: IProductType;
}

type IProductType =
  | "all"
  | "emulsion"
  | "dur-plaster"
  | "lak"
  | "travertine"
  | "primer";

export interface Product {
  type?: IProductType;
  title: ILanguages;
  desc?: ILanguages; // Ta'rifi, TAVSIFI
  character?: ILanguages; //Xarakteristikasi, XUSUSIYATLARI, XUSUSIYATI
  places?: ILanguages; //Ishlatilish joylari:, QO'LLASH,
  preparation?: ILanguages; // Yuzalarning tayyorlanishi, QO`LLASH USULLARI, QO'LLANILISHI
  usage?: ILanguages; //  Ishlatilishi, FOYDALANILADIGAN ASBOBLAR
  instruction?: ILanguages; //Ko'rsatmalar, OGOHLANTIRISH
  images?: string[];
  imageSize?: CSSProperties;
  tech?: ProductTech;
}

interface ProductTech {
  volume?: ILanguages; //Sarf hajmi, sarfi, BO'YOQ SARFI
  basis?: ILanguages; // Asosi, Tarkibi
  solvent?: ILanguages; // Erituvchi
  flammability?: ILanguages; // Yonishga moyilligi
  temperature?: ILanguages; // Qo`llash harorati
  life_period?: ILanguages; // Saqlash muddati, Saqlash
  condition?: ILanguages; // SAQLASH SHAROITI
  construct_period?: ILanguages; // To'liq qurish davri
  manufacturer?: ILanguages; // ISHLAB CHIQARUVCHI
}

export const products: Product[] = [
  {
    type: "emulsion",
    title: {
      uz: "Emulsiya",
      eng: "Emulsion",
      ru: "Эмульсия",
    },
    images: [emulsiya_01],
    character: {
      uz: "Yuqori sifatga ega akrilli bo'yoq. Ob-havo va harorat o'zgarishiga chidamliligi bilan ajralib turadi. Qoplama yuqori darajada yopishqoqlilik, ishlatilish davrida stabillik, yetarli o`zgaruvchanlik va suvning past yemirilishiga, yuqori oqlik darajasiga ega",
      eng: "High quality acrylic paint. It is distinguished by its resistance to weather and temperature changes. The coating has a high level of viscosity, stability during use, sufficient variability and low water erosion, and a high level of whiteness.",
      ru: "Высококачественная акриловая краска. Он отличается устойчивостью к погодным и температурным изменениям. Покрытие имеет высокий уровень вязкости, стабильность при использовании, достаточную вариативность и низкую водную эрозию, высокий уровень белизны.",
    },
    preparation: {
      uz: "Bo`yaladigan yuza quruq, toza va silliq bo'lishi kerak. Mustahkamligini ta'minlash va bo`yoqni kam sarflash maqsadida yuzaga gruntovka bilan ishlov berish tavsiya etiladi. Bo`yoq ishlatilishidan avval yuzaning qoplash darajasiga qarab, yetarli ishlov qovushqoqlik hosil bo'lgunicha suv bilan yahshilab aralashtiriladi. Uni cho`tka, valik,bo`yoq purkagich yordamida 1-2 soat oralig'ida 2 qatlam qilib bo'yash tavsiya etiladi. Havo va bo`yaladigan yuza harorati +8°C, namlik 65% bo'lishi kerak. To`liq qurish vaqti 3 soat. Agar harorat +15°C dan past bo'lsa, qurish vaqti o'zgarishi mumkin. Bo'yoq suvda eriydigan pigment pastalari bilan ranglashtirilishi mumkin",
      eng: "The surface to be painted should be dry, clean and smooth. It is recommended to treat the surface with a primer in order to ensure its durability and to use less paint. Before using the paint, depending on the level of surface coverage, it is thoroughly mixed with water until a sufficient processing viscosity is formed. It is recommended to paint it in 2 layers in 1-2 hours using a brush, roller, paint sprayer. The temperature of air and surface to be painted should be +8°C, humidity should be 65%. Complete construction time is 3 hours. If the temperature is below +15°C, the construction time may change. The paint can be tinted with water-soluble pigment pastes",
      ru: "Окрашиваемая поверхность должна быть сухой, чистой и гладкой. Рекомендуется обработать поверхность грунтовкой, чтобы обеспечить ее долговечность и использовать меньше краски. Перед использованием краски, в зависимости от степени покрытия поверхности, ее тщательно перемешивают с водой до образования достаточной технологической вязкости. Окрашивать рекомендуется в 2 слоя через 1-2 часа, используя кисть, валик, краскопульт. Температура воздуха и окрашиваемой поверхности должна быть +8°С, влажность - 65%. Полное время строительства 3 часа. Если температура ниже +15°C, сроки строительства могут измениться. Краску можно тонировать водорастворимыми пигментными пастами.",
    },
    usage: {
      uz: "Dekorativ gipsli travertinni qoplash uchun ishlatiladi",
      eng: "Decorative plaster is used to cover travertine",
      ru: "Декоративная штукатурка используется для покрытия травертина.",
    },
    instruction: {
      uz: "Yuqori namlik va +5 ° C dan past haroratda qo'llamang.  Agar mahsulot to'liq ishlatilmagan tarzda plastik qop ichiga solinib, havo bilan aloqa qilishni oldini olinmagan xolatda qo'llash tavsiya etilmaydi. Ko'zga kirganda ehtiyotkorlik bilan oqib turgan suv bilan yuvib tashlang",
      eng: "Do not use in high humidity and temperatures below +5 °C.  It is not recommended to use if the product is placed in a plastic bag in an unused state and contact with air is not prevented. In case of contact with eyes, rinse carefully with running water",
      ru: "Не использовать при повышенной влажности и температуре ниже +5°С.  Не рекомендуется использовать, если продукт в неиспользованном состоянии помещен в полиэтиленовый пакет и не предотвращен контакт с воздухом. При попадании в глаза тщательно промыть проточной водой.",
    },
    tech: {
      volume: {
        uz: "Yuzaning xili va ishlatish qobiliyatiga qarab 250-290gr/m². Suyultirish vaqtida bo'yoq miqdorida 20% dan ortiq bo'lmagan miqdorida suv qo'shish tavsiya etiladi.",
        eng: "250-290gr/m² depending on the type of surface and usability. When diluting, it is recommended to add water in an amount of no more than 20% of the amount of paint.",
        ru: "250-290 г/м² в зависимости от типа поверхности и удобства использования. При разбавлении рекомендуется добавлять воду в количестве не более 20% от количества краски.",
      },
      manufacturer: {
        uz: "Saqlash va qo'llanish shartlariga to'la rioya etilganida mahsulot sifatiga kafolat beriladi.",
        eng: "Product quality is guaranteed if the conditions of storage and use are fully observed.",
        ru: "Качество продукции гарантировано при полном соблюдении условий хранения и использования.",
      },
      basis: {
        uz: "Akril, maxsus qo'shimchalar",
        eng: "Acrylic, special additives",
        ru: "Акрил, специальные добавки",
      },
      condition: {
        uz: "Bo'yoq to'g'ridan-to'g'ri quyosh nurlari va namlikdan himoyalangan joyda, harorat +5°C da zich yopilgan polimer idishda saqlansin.",
        eng: "The paint should be stored in a tightly closed polymer container at a temperature of +5°C in a place protected from direct sunlight and moisture.",
        ru: "Краску следует хранить в плотно закрытой полимерной таре при температуре +5°С в защищенном от прямых солнечных лучей и влаги месте.",
      },
      life_period: {
        uz: "12 oy.",
        eng: "12 months.",
        ru: "12 месяцев.",
      },
    },
  },
  {
    type: "emulsion",
    title: {
      uz: "Emulsiya",
      eng: "Emulsion",
      ru: "Эмульсия",
    },
    images: [emulsiya_02],
    character: {
      uz: "Yuqori sifatga ega akrilli bo'yoq. Ob-havo va harorat o'zgarishiga chidamliligi bilan ajralib turadi. Qoplama yuqori darajada yopishqoqlilik, ishlatilish davrida stabillik, yetarli o`zgaruvchanlik va suvning past yemirilishiga, yuqori oqlik darajasiga ega",
      eng: "High quality acrylic paint. It is distinguished by its resistance to weather and temperature changes. The coating has a high level of viscosity, stability during use, sufficient variability and low water erosion, and a high level of whiteness.",
      ru: "Высококачественная акриловая краска. Он отличается устойчивостью к погодным и температурным изменениям. Покрытие имеет высокий уровень вязкости, стабильность при использовании, достаточную вариативность и низкую водную эрозию, высокий уровень белизны.",
    },
    preparation: {
      uz: "Bo`yaladigan yuza quruq, toza va silliq bo'lishi kerak. Mustahkamligini ta'minlash va bo`yoqni kam sarflash maqsadida yuzaga gruntovka bilan ishlov berish tavsiya etiladi. Bo`yoq ishlatilishidan avval yuzaning qoplash darajasiga qarab, yetarli ishlov qovushqoqlik hosil bo'lgunicha suv bilan yahshilab aralashtiriladi. Uni cho`tka, valik,bo`yoq purkagich yordamida 1-2 soat oralig'ida 2 qatlam qilib bo'yash tavsiya etiladi. Havo va bo`yaladigan yuza harorati +8°C, namlik 65% bo'lishi kerak. To`liq qurish vaqti 3 soat. Agar harorat +15°C dan past bo'lsa, qurish vaqti o'zgarishi mumkin. Bo'yoq suvda eriydigan pigment pastalari bilan ranglashtirilishi mumkin",
      eng: "The surface to be painted should be dry, clean and smooth. It is recommended to treat the surface with a primer in order to ensure its durability and to use less paint. Before using the paint, depending on the level of surface coverage, it is thoroughly mixed with water until a sufficient processing viscosity is formed. It is recommended to paint it in 2 layers in 1-2 hours using a brush, roller, paint sprayer. The temperature of air and surface to be painted should be +8°C, humidity should be 65%. Complete construction time is 3 hours. If the temperature is below +15°C, the construction time may change. The paint can be tinted with water-soluble pigment pastes",
      ru: "Окрашиваемая поверхность должна быть сухой, чистой и гладкой. Рекомендуется обработать поверхность грунтовкой, чтобы обеспечить ее долговечность и использовать меньше краски. Перед использованием краски, в зависимости от степени покрытия поверхности, ее тщательно перемешивают с водой до образования достаточной технологической вязкости. Окрашивать рекомендуется в 2 слоя через 1-2 часа, используя кисть, валик, краскопульт. Температура воздуха и окрашиваемой поверхности должна быть +8°С, влажность - 65%. Полное время строительства 3 часа. Если температура ниже +15°C, сроки строительства могут измениться. Краску можно тонировать водорастворимыми пигментными пастами.",
    },
    usage: {
      uz: "Dekorativ gipsli travertinni qoplash uchun ishlatiladi",
      eng: "Decorative plaster is used to cover travertine",
      ru: "Декоративная штукатурка используется для покрытия травертина.",
    },
    instruction: {
      uz: "Yuqori namlik va +5 ° C dan past haroratda qo'llamang.  Agar mahsulot to'liq ishlatilmagan tarzda plastik qop ichiga solinib, havo bilan aloqa qilishni oldini olinmagan xolatda qo'llash tavsiya etilmaydi. Ko'zga kirganda ehtiyotkorlik bilan oqib turgan suv bilan yuvib tashlang",
      eng: "Do not use in high humidity and temperatures below +5 °C.  It is not recommended to use if the product is placed in a plastic bag in an unused state and contact with air is not prevented. In case of contact with eyes, rinse carefully with running water",
      ru: "Не использовать при повышенной влажности и температуре ниже +5°С.  Не рекомендуется использовать, если продукт в неиспользованном состоянии помещен в полиэтиленовый пакет и не предотвращен контакт с воздухом. При попадании в глаза тщательно промыть проточной водой.",
    },
    tech: {
      volume: {
        uz: "Yuzaning xili va ishlatish qobiliyatiga qarab 250-290gr/m². Suyultirish vaqtida bo'yoq miqdorida 20% dan ortiq bo'lmagan miqdorida suv qo'shish tavsiya etiladi.",
        eng: "250-290gr/m² depending on the type of surface and usability. When diluting, it is recommended to add water in an amount of no more than 20% of the amount of paint.",
        ru: "250-290 г/м² в зависимости от типа поверхности и удобства использования. При разбавлении рекомендуется добавлять воду в количестве не более 20% от количества краски.",
      },
      manufacturer: {
        uz: "Saqlash va qo'llanish shartlariga to'la rioya etilganida mahsulot sifatiga kafolat beriladi.",
        eng: "Product quality is guaranteed if the conditions of storage and use are fully observed.",
        ru: "Качество продукции гарантировано при полном соблюдении условий хранения и использования.",
      },
      basis: {
        uz: "Akril, maxsus qo'shimchalar",
        eng: "Acrylic, special additives",
        ru: "Акрил, специальные добавки",
      },
      condition: {
        uz: "Bo'yoq to'g'ridan-to'g'ri quyosh nurlari va namlikdan himoyalangan joyda, harorat +5°C da zich yopilgan polimer idishda saqlansin.",
        eng: "The paint should be stored in a tightly closed polymer container at a temperature of +5°C in a place protected from direct sunlight and moisture.",
        ru: "Краску следует хранить в плотно закрытой полимерной таре при температуре +5°С в защищенном от прямых солнечных лучей и влаги месте.",
      },
      life_period: {
        uz: "12 oy.",
        eng: "12 months.",
        ru: "12 месяцев.",
      },
    },
  },
  {
    type: "emulsion",
    title: {
      uz: "Emulsiya",
      eng: "Emulsion",
      ru: "Эмульсия",
    },
    images: [emulsiya_03],
    character: {
      uz: "Yuqori sifatga ega akrilli bo'yoq. Ob-havo va harorat o'zgarishiga chidamliligi bilan ajralib turadi. Qoplama yuqori darajada yopishqoqlilik, ishlatilish davrida stabillik, yetarli o`zgaruvchanlik va suvning past yemirilishiga, yuqori oqlik darajasiga ega",
      eng: "High quality acrylic paint. It is distinguished by its resistance to weather and temperature changes. The coating has a high level of viscosity, stability during use, sufficient variability and low water erosion, and a high level of whiteness.",
      ru: "Высококачественная акриловая краска. Он отличается устойчивостью к погодным и температурным изменениям. Покрытие имеет высокий уровень вязкости, стабильность при использовании, достаточную вариативность и низкую водную эрозию, высокий уровень белизны.",
    },
    preparation: {
      uz: "Bo`yaladigan yuza quruq, toza va silliq bo'lishi kerak. Mustahkamligini ta'minlash va bo`yoqni kam sarflash maqsadida yuzaga gruntovka bilan ishlov berish tavsiya etiladi. Bo`yoq ishlatilishidan avval yuzaning qoplash darajasiga qarab, yetarli ishlov qovushqoqlik hosil bo'lgunicha suv bilan yahshilab aralashtiriladi. Uni cho`tka, valik,bo`yoq purkagich yordamida 1-2 soat oralig'ida 2 qatlam qilib bo'yash tavsiya etiladi. Havo va bo`yaladigan yuza harorati +8°C, namlik 65% bo'lishi kerak. To`liq qurish vaqti 3 soat. Agar harorat +15°C dan past bo'lsa, qurish vaqti o'zgarishi mumkin. Bo'yoq suvda eriydigan pigment pastalari bilan ranglashtirilishi mumkin",
      eng: "The surface to be painted should be dry, clean and smooth. It is recommended to treat the surface with a primer in order to ensure its durability and to use less paint. Before using the paint, depending on the level of surface coverage, it is thoroughly mixed with water until a sufficient processing viscosity is formed. It is recommended to paint it in 2 layers in 1-2 hours using a brush, roller, paint sprayer. The temperature of air and surface to be painted should be +8°C, humidity should be 65%. Complete construction time is 3 hours. If the temperature is below +15°C, the construction time may change. The paint can be tinted with water-soluble pigment pastes",
      ru: "Окрашиваемая поверхность должна быть сухой, чистой и гладкой. Рекомендуется обработать поверхность грунтовкой, чтобы обеспечить ее долговечность и использовать меньше краски. Перед использованием краски, в зависимости от степени покрытия поверхности, ее тщательно перемешивают с водой до образования достаточной технологической вязкости. Окрашивать рекомендуется в 2 слоя через 1-2 часа, используя кисть, валик, краскопульт. Температура воздуха и окрашиваемой поверхности должна быть +8°С, влажность - 65%. Полное время строительства 3 часа. Если температура ниже +15°C, сроки строительства могут измениться. Краску можно тонировать водорастворимыми пигментными пастами.",
    },
    usage: {
      uz: "Dekorativ gipsli travertinni qoplash uchun ishlatiladi",
      eng: "Decorative plaster is used to cover travertine",
      ru: "Декоративная штукатурка используется для покрытия травертина.",
    },
    instruction: {
      uz: "Yuqori namlik va +5 ° C dan past haroratda qo'llamang.  Agar mahsulot to'liq ishlatilmagan tarzda plastik qop ichiga solinib, havo bilan aloqa qilishni oldini olinmagan xolatda qo'llash tavsiya etilmaydi. Ko'zga kirganda ehtiyotkorlik bilan oqib turgan suv bilan yuvib tashlang",
      eng: "Do not use in high humidity and temperatures below +5 °C.  It is not recommended to use if the product is placed in a plastic bag in an unused state and contact with air is not prevented. In case of contact with eyes, rinse carefully with running water",
      ru: "Не использовать при повышенной влажности и температуре ниже +5°С.  Не рекомендуется использовать, если продукт в неиспользованном состоянии помещен в полиэтиленовый пакет и не предотвращен контакт с воздухом. При попадании в глаза тщательно промыть проточной водой.",
    },
    tech: {
      volume: {
        uz: "Yuzaning xili va ishlatish qobiliyatiga qarab 250-290gr/m². Suyultirish vaqtida bo'yoq miqdorida 20% dan ortiq bo'lmagan miqdorida suv qo'shish tavsiya etiladi.",
        eng: "250-290gr/m² depending on the type of surface and usability. When diluting, it is recommended to add water in an amount of no more than 20% of the amount of paint.",
        ru: "250-290 г/м² в зависимости от типа поверхности и удобства использования. При разбавлении рекомендуется добавлять воду в количестве не более 20% от количества краски.",
      },
      manufacturer: {
        uz: "Saqlash va qo'llanish shartlariga to'la rioya etilganida mahsulot sifatiga kafolat beriladi.",
        eng: "Product quality is guaranteed if the conditions of storage and use are fully observed.",
        ru: "Качество продукции гарантировано при полном соблюдении условий хранения и использования.",
      },
      basis: {
        uz: "Akril, maxsus qo'shimchalar",
        eng: "Acrylic, special additives",
        ru: "Акрил, специальные добавки",
      },
      condition: {
        uz: "Bo'yoq to'g'ridan-to'g'ri quyosh nurlari va namlikdan himoyalangan joyda, harorat +5°C da zich yopilgan polimer idishda saqlansin.",
        eng: "The paint should be stored in a tightly closed polymer container at a temperature of +5°C in a place protected from direct sunlight and moisture.",
        ru: "Краску следует хранить в плотно закрытой полимерной таре при температуре +5°С в защищенном от прямых солнечных лучей и влаги месте.",
      },
      life_period: {
        uz: "12 oy.",
        eng: "12 months.",
        ru: "12 месяцев.",
      },
    },
  },
  {
    type: "dur-plaster",
    title: {
      uz: "Dur plaster",
      eng: "Dur plaster",
      ru: "Дур пластер",
    },
    images: [durPlaster_01],
    desc: {
      uz: "Dekorativ-himoya materiali, Granit-mramor bo'laklaridan tayyorlangan",
      eng: "Decorative and protective material, made of pieces of granite-marble",
      ru: "Декоративно-защитный материал из кусочков гранита-мрамора.",
    },
    character: {
      uz: "Uzoq muddatlilik, issiqlik, namlik va tovush izolatsiyasini ta'minlaydi. Do'ppayib qolmaydi. Atmosfera ta'siriga chidamli. Rangini yo'qotmaydi, yuvish mumkin, radiatsiyasi yo'q",
      eng: "Provides long-term, heat, moisture and sound insulation. It doesn't stick. Resistant to atmospheric effects. Does not lose color, can be washed, does not emit radiation",
      ru: "Обеспечивает долговременную тепло-, влаго- и звукоизоляцию. Это не прилипает. Устойчив к атмосферным воздействиям. Не теряет цвет, можно стирать, не излучает радиацию.",
    },
    places: {
      uz: "Bino va inshoatlarning tashqi va ichki dekorativ qoplamasi, suvoq, beton, yog'och va gips yuzalarga oson suriladi",
      eng: "External and internal decorative coating of buildings and structures, easily applied to plaster, concrete, wood and plaster surfaces",
      ru: "Наружное и внутреннее декоративное покрытие зданий и сооружений, легко наносимое на штукатурку, бетон, дерево и оштукатуренные поверхности.",
    },
    preparation: {
      uz: "Devor ustidagi kir va yog' dog'lari, begona jismlar yo'qotiladi. Shishib va do'ppayib qolgan joylarni silliqlang. Yoriqlar va chuqurlarni to'ldiring, g'adir-budur joylarni tekislang. Toza, quruq va tekis yuza hosil bo'lgandan so'ng, yuzaga rangiga mos 'ASMAN ACRYLIC PRIMER' mahsulotidan  suring",
      eng: "Dirt and oil stains, foreign bodies on the wall are removed. Smooth the swollen and bumpy areas. Fill cracks and pits, smooth uneven areas. After a clean, dry and flat surface, apply 'ASMAN ACRYLIC PRIMER' to match the color of the surface.",
      ru: "Удалены грязь и масляные пятна, инородные тела на стене. Разгладьте опухшие и бугристые участки. Заполните трещины и ямки, сгладьте неровности. После чистой, сухой и ровной поверхности нанесите «ASMAN ACRYLIC PRIMER» в тон поверхности.",
    },
    usage: {
      uz: "Idishni ochib ichidagi qorishmani kattaroq idishga soling, yaxshilab aralashtiring. Issiq kunda suv qo'shish mumkin. Yuzaga po'lat andava bilan surting",
      eng: "Open the container and pour the mixture into a larger bowl and mix well. You can add water on a hot day. Apply to the surface with a steel trowel",
      ru: "Откройте контейнер, перелейте смесь в большую миску и хорошо перемешайте. В жаркий день можно добавить воды. Нанесите на поверхность стальным шпателем.",
    },
    instruction: {
      uz: "Yomg'irli  kunlarda va havo harorati +5°C dan past bo'lganida ishlatish mumkin emas. Ayni yuzani tugatmasdan qoldirish mumkin emas. Agar ishni to'xtatish lozim bo'lsa, yoki bir yuzada ikki yoki ko'proq rangli 'Dur plaster' mahsuloti yonma-yon surtiladigan bo'lsa, uzluksiz qoplama ko'rinishini berish uchun qog'ozli skotch ishlatish kerak",
      eng: "It cannot be used on rainy days and when the air temperature is below +5°C. It is impossible to leave this surface unfinished. If it is necessary to stop the work, or if two or more colors of 'Dur plaster' are to be applied side by side on the same surface, paper tape should be used to give the appearance of a continuous coating.",
      ru: "Его нельзя использовать в дождливые дни и при температуре воздуха ниже +5°С. Оставить эту поверхность незавершенной невозможно. Если необходимо остановить работу или если два или более цветов штукатурки «Dur» должны быть нанесены рядом на одну и ту же поверхность, следует использовать бумажную ленту, чтобы создать видимость сплошного покрытия.",
    },
    tech: {
      volume: {
        uz: "1 m² ga 3,5 kg",
        eng: "3.5 kg per 1 m²",
        ru: "3,5 кг на 1 м²",
      },
      condition: {
        uz: "Yopiq idish va xona haroratida",
        eng: "In a closed container and at room temperature",
        ru: "В закрытой таре и при комнатной температуре",
      },
      life_period: {
        uz: "1 yil.",
        eng: "1 year.",
        ru: "1 год.",
      },
      construct_period: {
        uz: "12-24 soat.",
        eng: "12-24 hours.",
        ru: "12-24 часа.",
      },
    },
  },
  {
    type: "lak",
    title: {
      uz: "Lak",
      eng: "Lak",
      ru: "Лак",
    },
    images: [lak_01],
    desc: {
      uz: "Dekorativ gipsli travertinni qoplash uchun ishlatiladi",
      eng: "Decorative plaster is used to cover travertine",
      ru: "Декоративная штукатурка используется для покрытия травертина.",
    },
    instruction: {
      uz: "Yuqori namlik va +5 ° C dan past haroratda qo'llamang.  Agar mahsulot to'liq ishlatilmagan tarzda plastik qop ichiga solinib, havo bilan aloqa qilishni oldini olinmagan xolatda qo'llash tavsiya etilmaydi. Ko'zga kirganda ehtiyotkorlik bilan oqib turgan suv bilan yuvib tashlang.",
      eng: "Do not use in high humidity and temperatures below +5 °C.  It is not recommended to use if the product is placed in a plastic bag in an unused state and contact with air is not prevented. In case of contact with eyes, rinse carefully with running water.",
      ru: "Не использовать при повышенной влажности и температуре ниже +5°С.  Не рекомендуется использовать, если продукт в неиспользованном состоянии помещен в полиэтиленовый пакет и не предотвращен контакт с воздухом. При попадании в глаза тщательно промыть проточной водой.",
    },
    tech: {
      basis: {
        uz: "Akril, maxsus qo'shimchalar",
        eng: "Acrylic, special additives",
        ru: "Акрил, специальные добавки",
      },
    },
  },
  {
    type: "lak",
    title: {
      uz: "Marvarid",
      eng: "Pearl",
      ru: "Жемчуг",
    },
    images: [lakPaqir_01],
    desc: {
      uz: "Dekorativ gipsli travertinni qoplash uchun ishlatiladi",
      eng: "Decorative plaster is used to cover travertine",
      ru: "Декоративная штукатурка используется для покрытия травертина.",
    },
    instruction: {
      uz: "Yuqori namlik va +5 ° C dan past haroratda qo'llamang.  Agar mahsulot to'liq ishlatilmagan tarzda plastik qop ichiga solinib, havo bilan aloqa qilishni oldini olinmagan xolatda qo'llash tavsiya etilmaydi. Ko'zga kirganda ehtiyotkorlik bilan oqib turgan suv bilan yuvib tashlang.",
      eng: "Do not use in high humidity and temperatures below +5 °C.  It is not recommended to use if the product is placed in a plastic bag in an unused state and contact with air is not prevented. In case of contact with eyes, rinse carefully with running water.",
      ru: "Не использовать при повышенной влажности и температуре ниже +5°С.  Не рекомендуется использовать, если продукт в неиспользованном состоянии помещен в полиэтиленовый пакет и не предотвращен контакт с воздухом. При попадании в глаза тщательно промыть проточной водой.",
    },
    tech: {
      basis: {
        uz: "Akril, maxsus qo'shimchalar",
        eng: "Acrylic, special additives",
        ru: "Акрил, специальные добавки",
      },
    },
  },
  {
    type: "lak",
    title: {
      uz: "Lak Gruntovka",
      eng: "Varnish Primer",
      ru: "Лак Грунтовка",
    },
    images: [lakPaqir_02],
    desc: {
      uz: "Dekorativ gipsli travertinni qoplash uchun ishlatiladi",
      eng: "Decorative plaster is used to cover travertine",
      ru: "Декоративная штукатурка используется для покрытия травертина.",
    },
    instruction: {
      uz: "Yuqori namlik va +5 ° C dan past haroratda qo'llamang.  Agar mahsulot to'liq ishlatilmagan tarzda plastik qop ichiga solinib, havo bilan aloqa qilishni oldini olinmagan xolatda qo'llash tavsiya etilmaydi. Ko'zga kirganda ehtiyotkorlik bilan oqib turgan suv bilan yuvib tashlang.",
      eng: "Do not use in high humidity and temperatures below +5 °C.  It is not recommended to use if the product is placed in a plastic bag in an unused state and contact with air is not prevented. In case of contact with eyes, rinse carefully with running water.",
      ru: "Не использовать при повышенной влажности и температуре ниже +5°С.  Не рекомендуется использовать, если продукт в неиспользованном состоянии помещен в полиэтиленовый пакет и не предотвращен контакт с воздухом. При попадании в глаза тщательно промыть проточной водой.",
    },
    tech: {
      basis: {
        uz: "Akril, maxsus qo'shimchalar",
        eng: "Acrylic, special additives",
        ru: "Акрил, специальные добавки",
      },
    },
  },
  {
    type: "travertine",
    title: {
      uz: "Travertin - strukturaviy dekorativ va pardozlash gipsi",
      eng: "Travertine is a structural decorative and finishing plaster",
      ru: "Травертин – структурная декоративно-отделочная штукатурка.",
    },
    images: [travertin_01],
    desc: {
      uz: "Akril sopolimerlar va minerallar asosida strukturaviy dekorativ qoplama. Foydalanish uchon tayyor, toksik moddalarni o'z ichiga olmaydi. Oddiy va oson qo'llaniladi,",
      eng: "Structural decorative coating based on acrylic copolymers and minerals. Ready for use, does not contain toxic substances. Simple and easy to use,",
      ru: "Структурно-декоративное покрытие на основе акриловых сополимеров и минералов. Готов к использованию, не содержит токсичных веществ. Простой и удобный в использовании,",
    },
    character: {
      uz: "Dekorativ va himoya funktsiyasi mavjud. Yuqori mexanik mustahkamlik. Buzilishga, sovuqqa chidamsizlikka va atrof muhitga zarar etkazilishiga qarshilik, Mikroyoriqlarni va sirt kamchiliklarini yashiradi. Yuqori darajali gidroksidi qarshilik. Yuvish va tozalashga bardoshli",
      eng: "It has a decorative and protective function. High mechanical strength. Resistance to damage, frost resistance and environmental damage, hides microcracks and surface defects. High alkali resistance. Resistant to washing and cleaning",
      ru: "Имеет декоративную и защитную функцию. Высокая механическая прочность. Устойчивость к повреждениям, морозостойкость и воздействие окружающей среды, скрывает микротрещины и дефекты поверхности. Высокая щелочестойкость. Устойчив к стирке и чистке",
    },
    places: {
      uz: "Har qanday sirtga (asbosement, gipsli plita, DSP, DVP, faner, gipsokarton, beton) qo'llaniladi, devorlarga dekorativ  ishlov berish, tekistlash uchun ishlatiladi",
      eng: "It is applied to any surface (asbocement, plasterboard, chipboard, DVP, plywood, plasterboard, concrete), used for decorative treatment of walls, leveling",
      ru: "Наносится на любую поверхность (асбоцемент, гипсокартон, ДСП, ДВП, фанера, гипсокартон, бетон), используется для декоративной обработки стен, выравнивания.",
    },
    preparation: {
      uz: "Qo'llashdan oldin chang, kirni, yog', yoriqlarni shpatel bilan tozalang, so'ngra Astar 'Asman' gruntovkasi bilan ishlov bering. So'ngra 'Asman' maxsus shpatlyovkasini surting. 24 soat davomida quritib qo'ying. Qo'llashdan oldin, travertinni ehtiyotkorlik bilan aralashtirish kerak, agar zarur bo'lsa, suv bilan suyultiring (25 kg uchun 0,5 litrdan ko'p bo'lmagan holatda)",
      eng: "Before application, clean dust, dirt, oil, cracks with a spatula, then treat with Astar 'Asman' primer. Then apply 'Asman' special putty. Leave to dry for 24 hours. Before use, travertine should be carefully mixed, if necessary, dilute with water (in case of no more than 0.5 liters per 25 kg)",
      ru: "Перед нанесением очистить шпателем от пыли, грязи, масла, трещин, затем обработать грунтовкой Астар «Асман». Затем нанесите специальную шпаклевку «Асман». Оставьте сохнуть на 24 часа. Перед применением травертин следует тщательно перемешать, при необходимости разбавить водой (в случае не более 0,5 л на 25 кг).",
    },
    usage: {
      uz: "Ixtiyoriy tanlovga qarab shpatel, valik va metall moladan foydalanish mumkin. Suvda eruvchi rang-pigmentli pastalar bilan rang berish mumkin",
      eng: "Spatula, roller and metal trowel can be used depending on the optional choice. It is possible to color with water-soluble color-pigment pastes",
      ru: "В зависимости от выбора можно использовать шпатель, валик и металлический шпатель. Возможно окрашивание водорастворимыми цветно-пигментными пастами.",
    },
    instruction: {
      uz: "To'g'ridan-to'g'ri quyosh nuri ostida, yuqori namlikda, 5°C dan past haroratlarda, mahsulot to'liq ishlatilmagan tarzda plastik qop ichiga solinib, havo bilan aloqa qilishni oldini olinmagan xolatda qo'llash tavsiya etilmaydi. Shpatlyovka ko'zga kirganda ehtiyotkorlik bilan oqib turgan suv bilan yuvib tashlang",
      eng: "It is not recommended to use the product under direct sunlight, high humidity, at temperatures below 5°C, in a condition where the product is not completely used and does not come into contact with air. If the putty gets into the eyes, carefully rinse with running water",
      ru: "Не рекомендуется использовать изделие под прямыми солнечными лучами, повышенной влажностью, при температуре ниже 5°С, в состоянии, когда изделие не полностью использовано и не контактирует с воздухом. При попадании замазки в глаза тщательно промойте их проточной водой.",
    },
    tech: {
      volume: {
        uz: "2.5 kg/m2 ishlatiladigan qatlam qalinligiga bog'liq",
        eng: "2.5 kg/m2 depends on the thickness of the used layer",
        ru: "2,5 кг/м2 зависит от толщины используемого слоя",
      },
      basis: {
        uz: "akril dispersiyasi",
        eng: "acrylic dispersion",
        ru: "акриловая дисперсия",
      },
      solvent: {
        uz: "suv",
        eng: "water",
        ru: "вода",
      },
      flammability: {
        uz: "yonmaydigan",
        eng: "non-flammable",
        ru: "негорючий",
      },
      temperature: {
        uz: "+5°C dan +50°C gacha",
        eng: "+5°C to +50°C",
        ru: "от +5°С до +50°С",
      },
      condition: {
        uz: "yopiq idishda +5°C dan past bo'lmagan va + 25'°C dan yuqori bo'lmagan haroratda",
        eng: "in a closed container at a temperature not lower than +5°C and not higher than + 25'°C",
        ru: "в закрытой таре при температуре не ниже +5°С и не выше +25°С.",
      },
      life_period: {
        uz: "12 oy.",
        eng: "12 months.",
        ru: "12 месяцев.",
      },
    },
  },
  {
    type: "primer",
    title: {
      uz: "Gruntovka Astar",
      eng: "Primer Astar",
      ru: "Грунтофка Астар",
    },
    images: [gruntofka_01],
    imageSize: { width: "100%" },
    character: {
      uz: "Yuqori sifatga ega akrilli bo'yoq. Ob-havo va harorat o'zgarishiga chidamliligi bilan ajralib turadi. Qoplama yuqori darajada yopishqoqlilik, ishlatilish davrida stabillik, yetarli o`zgaruvchanlik va suvning past yemirilishiga, yuqori oqlik darajasiga ega.",
      eng: "High quality acrylic paint. It is distinguished by its resistance to weather and temperature changes. The coating has a high level of viscosity, stability during use, sufficient variability and low water erosion, high level of whiteness.",
      ru: "Высококачественная акриловая краска. Он отличается устойчивостью к погодным и температурным изменениям. Покрытие имеет высокий уровень вязкости, стабильность при использовании, достаточную вариативность и низкую водную эрозию, высокий уровень белизны.",
    },
    preparation: {
      uz: "Bo`yaladigan yuza quruq, toza va silliq bo'lishi kerak. Mustahkamligini ta'minlash va bo`yoqni kam sarflash maqsadida yuzaga gruntovka bilan ishlov berish tavsiya etiladi. Bo`yoq ishlatilishidan avval yuzaning qoplash darajasiga qarab, yetarli ishlov qovushqoqlik hosil bo'lgunicha suv bilan yahshilab aralashtiriladi. Uni cho`tka, valik,bo`yoq purkagich yordamida 1-2 soat oralig'ida 2 qatlam qilib bo'yash tavsiya etiladi. Havo va bo`yaladigan yuza harorati +8°C, namlik 65% bo'lishi kerak. To`liq qurish vaqti 3 soat. Agar harorat +15°C dan past bo'lsa, qurish vaqti o'zgarishi mumkin. Bo'yoq suvda eriydigan pigment pastalari bilan ranglashtirilishi mumkin.",
      eng: "The surface to be painted should be dry, clean and smooth. It is recommended to treat the surface with a primer in order to ensure its durability and to use less paint. Before using the paint, depending on the level of surface coverage, it is thoroughly mixed with water until a sufficient processing viscosity is formed. It is recommended to paint it in 2 layers in 1-2 hours using a brush, roller, paint sprayer. The temperature of air and surface to be painted should be +8°C, humidity should be 65%. Complete construction time is 3 hours. If the temperature is below +15°C, the construction time may change. The paint can be tinted with water-soluble pigment pastes.",
      ru: "Окрашиваемая поверхность должна быть сухой, чистой и гладкой. Рекомендуется обработать поверхность грунтовкой, чтобы обеспечить ее долговечность и использовать меньше краски. Перед использованием краски, в зависимости от степени покрытия поверхности, ее тщательно перемешивают с водой до образования достаточной технологической вязкости. Окрашивать рекомендуется в 2 слоя через 1-2 часа, используя кисть, валик, краскопульт. Температура воздуха и окрашиваемой поверхности должна быть +8°С, влажность - 65%. Полное время строительства 3 часа. Если температура ниже +15°C, сроки строительства могут измениться. Краску можно тонировать водорастворимыми пигментными пастами.",
    },
    tech: {
      volume: {
        uz: "Yuzaning xili va ishlatish qobiliyatiga qarab 250-290gr/m². Suyultirish vaqtida bo'yoq miqdorida 20% dan ortiq bo'lmagan miqdorida suv qo'shish tavsiya etiladi.",
        eng: "250-290gr/m² depending on the type of surface and usability. When diluting, it is recommended to add water in an amount not exceeding 20% ​​of the amount of paint.",
        ru: "250-290 г/м² в зависимости от типа поверхности и удобства использования. При разбавлении рекомендуется добавлять воду в количестве, не превышающем 20% от количества краски.",
      },
      manufacturer: {
        uz: "Saqlash va qo'llanish shartlariga to'la rioya etilganida mahsulot sifatiga kafolat beriladi.",
        eng: "Product quality is guaranteed if the conditions of storage and use are fully observed.",
        ru: "Качество продукции гарантировано при полном соблюдении условий хранения и использования.",
      },
      condition: {
        uz: "Bo'yoq to'g'ridan-to'g'ri quyosh nurlari va namlikdan himoyalangan joyda, harorat +5°C da zich yopilgan polimer idishda saqlansin.",
        eng: "The paint should be stored in a tightly closed polymer container at a temperature of +5°C in a place protected from direct sunlight and moisture.",
        ru: "Краску следует хранить в плотно закрытой полимерной таре при температуре +5°С в защищенном от прямых солнечных лучей и влаги месте.",
      },
      life_period: {
        uz: "12 oy.",
        eng: "12 months.",
        ru: "12 месяцев.",
      },
    },
  },
  {
    type: "dur-plaster",
    title: {
      uz: "Mineral plaster",
      eng: "Mineral plaster",
      ru: "Минеральная штукатурка",
    },
    images: [mineralStone_01],
    desc: {
      uz: "Dekorativ-himoya materiali, Granit-mramor bo'laklaridan tayyorlangan",
      eng: "Decorative and protective material, made of pieces of granite-marble",
      ru: "Декоративно-защитный материал из кусочков гранита-мрамора.",
    },
    character: {
      uz: "Uzoq muddatlilik, issiqlik, namlik va tovush izolatsiyasini ta'minlaydi. Do'ppayib qolmaydi. Atmosfera ta'siriga chidamli. Rangini yo'qotmaydi, yuvish mumkin, radiatsiyasi yo'q",
      eng: "Provides long-term, heat, moisture and sound insulation. It doesn't stick. Resistant to atmospheric effects. Does not lose color, can be washed, does not emit radiation",
      ru: "Обеспечивает долговременную тепло-, влаго- и звукоизоляцию. Это не прилипает. Устойчив к атмосферным воздействиям. Не теряет цвет, можно стирать, не излучает радиацию.",
    },
    places: {
      uz: "Bino va inshoatlarning tashqi va ichki dekorativ qoplamasi, suvoq, beton, yog'och va gips yuzalarga oson suriladi",
      eng: "External and internal decorative coating of buildings and structures, easily applied to plaster, concrete, wood and plaster surfaces",
      ru: "Наружное и внутреннее декоративное покрытие зданий и сооружений, легко наносимое на штукатурку, бетон, дерево и оштукатуренные поверхности.",
    },
    preparation: {
      uz: "Devor ustidagi kir va yog' dog'lari, begona jismlar yo'qotiladi. Shishib va do'ppayib qolgan joylarni silliqlang. Yoriqlar va chuqurlarni to'ldiring, g'adir-budur joylarni tekislang. Toza, quruq va tekis yuza hosil bo'lgandan so'ng, yuzaga rangiga mos 'ASMAN ACRYLIC PRIMER' mahsulotidan  suring",
      eng: "Dirt and oil stains, foreign bodies on the wall are removed. Smooth the swollen and bumpy areas. Fill cracks and pits, smooth uneven areas. After a clean, dry and flat surface, apply 'ASMAN ACRYLIC PRIMER' to match the color of the surface.",
      ru: "Удалены грязь и масляные пятна, инородные тела на стене. Разгладьте опухшие и бугристые участки. Заполните трещины и ямки, сгладьте неровности. После чистой, сухой и ровной поверхности нанесите «ASMAN ACRYLIC PRIMER» в тон поверхности.",
    },
    usage: {
      uz: "Idishni ochib ichidagi qorishmani kattaroq idishga soling, yaxshilab aralashtiring. Issiq kunda suv qo'shish mumkin. Yuzaga po'lat andava bilan surting",
      eng: "Open the container and pour the mixture into a larger bowl and mix well. You can add water on a hot day. Apply to the surface with a steel trowel",
      ru: "Откройте контейнер, перелейте смесь в большую миску и хорошо перемешайте. В жаркий день можно добавить воды. Нанесите на поверхность стальным шпателем.",
    },
    instruction: {
      uz: "Yomg'irli  kunlarda va havo harorati +5°C dan past bo'lganida ishlatish mumkin emas. Ayni yuzani tugatmasdan qoldirish mumkin emas. Agar ishni to'xtatish lozim bo'lsa, yoki bir yuzada ikki yoki ko'proq rangli 'Dur plaster' mahsuloti yonma-yon surtiladigan bo'lsa, uzluksiz qoplama ko'rinishini berish uchun qog'ozli skotch ishlatish kerak",
      eng: "It cannot be used on rainy days and when the air temperature is below +5°C. It is impossible to leave this surface unfinished. If it is necessary to stop the work, or if two or more colors of 'Dur plaster' are to be applied side by side on the same surface, paper tape should be used to give the appearance of a continuous coating.",
      ru: "Его нельзя использовать в дождливые дни и при температуре воздуха ниже +5°С. Оставить эту поверхность незавершенной невозможно. Если необходимо остановить работу или если два или более цветов штукатурки «Dur» должны быть нанесены рядом на одну и ту же поверхность, следует использовать бумажную ленту, чтобы создать видимость сплошного покрытия.",
    },
    tech: {
      volume: {
        uz: "1 m² ga 3,5 kg",
        eng: "3.5 kg per 1 m²",
        ru: "3,5 кг на 1 м²",
      },
      condition: {
        uz: "Yopiq idish va xona haroratida",
        eng: "In a closed container and at room temperature",
        ru: "В закрытой таре и при комнатной температуре",
      },
      life_period: {
        uz: "1 yil.",
        eng: "1 year.",
        ru: "1 год.",
      },
      construct_period: {
        uz: "12-24 soat.",
        eng: "12-24 hours.",
        ru: "12-24 часа.",
      },
    },
  },
];

export const productLinks: IProductLink[] = [
  {
    title: {
      uz: "Barcha mahsulotlar",
      eng: "All products",
      ru: "Вся продукция",
    },
    isActive: true,
    type: "all",
  },
  {
    title: {
      uz: "Emulsiya",
      eng: "Emulsion",
      ru: "Эмульсия",
    },
    isActive: false,
    type: "emulsion",
  },
  {
    title: {
      uz: "Dur plaster",
      eng: "Dur plaster",
      ru: "Дур пластер",
    },
    isActive: false,
    type: "dur-plaster",
  },
  {
    title: {
      uz: "Lak",
      eng: "Lak",
      ru: "Лак",
    },
    isActive: false,
    type: "lak",
  },
  {
    title: {
      uz: "Travertin",
      eng: "Travertine",
      ru: "Травертин",
    },
    isActive: false,
    type: "travertine",
  },
  {
    title: {
      uz: "Gruntofka",
      eng: "Primer",
      ru: "Грунтофка",
    },
    isActive: false,
    type: "primer",
  },
  {
    title: {
      uz: "Mineral plaster",
      eng: "Mineral plaster",
      ru: "Минеральная штукатурка",
    },
    isActive: false,
    type: "dur-plaster",
  },
];
