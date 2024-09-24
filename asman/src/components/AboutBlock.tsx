import { collage03, collage04 } from "@/assets/collages";
import { AboutSEOTexts } from "@/mock-data/about-texts";
import { Button as NextUIButton } from "@nextui-org/button";
import { Link } from "react-router-dom";
import { Translate } from "./Translate";
import { siteLngGlobal } from "@/services/store.service";

export const AboutBlock = ({ showButton = false }) => {
  const {siteLng} = siteLngGlobal()
  return (
    <div>
      <div className="mb-5 sm:mb-10">
        <h2 className="primary-title" data-aos="fade-right">
          <Translate uz={"Biz"} eng={"About"} ru={"О"} />
          <span className="pl-2 text-main">
            <Translate uz={"Haqimizda"} eng={"Us"} ru={"Нас"} />
          </span>
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div data-aos="fade-right">
          <img
            src={collage03}
            className="h-[20rem] w-full rounded-lg object-cover md:h-[32rem]"
          />
          <div className="p-2 max-md:text-sm">
            {AboutSEOTexts.text01[siteLng]}
            {showButton && (
              <NextUIButton className="mt-5 block rounded-2xl bg-main">
                <Link to="/about">
                  <span className="text-white">
                    <Translate
                      uz={"Batafsil"}
                      eng={"Detailed"}
                      ru={"Подробное"}
                    />
                  </span>
                </Link>
              </NextUIButton>
            )}
          </div>
        </div>
        <div className="flex flex-col" data-aos="fade-left">
          <img
            src={collage04}
            className="h-[20rem] w-full rounded-lg object-cover sm:order-2 md:h-[30rem]"
          />
          <div className="p-2 max-md:text-sm sm:order-1">
            {AboutSEOTexts.text02[siteLng]}
          </div>
        </div>
      </div>
    </div>
  );
};
