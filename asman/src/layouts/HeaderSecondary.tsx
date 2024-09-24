import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useMedia } from "react-use";
import { routesLinks } from "@/mock-data/routes-links";
import { Select, SelectItem } from "@nextui-org/react";
import { NavMobile } from "./NavMobile";

import logoWhite from "@/assets/logo-white.png";
import { languages } from "@/components/Translate";
import { siteLngGlobal } from "@/services/store.service";

const HeaderSecondary = () => {
  const isWideMobile = useMedia("(min-width: 768px)");
  const isWideSmallMobile = useMedia("(min-width: 640px)");

  const { siteLng,  changeSiteLng} = siteLngGlobal();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() as number;

    latest > previous && latest > 50 ? setHidden(true) : setHidden(false);
  });

  return (
    <motion.header
      variants={{
        show: { y: isWideSmallMobile ? 8 : 0 },
        hide: { y: "-100%" },
      }}
      animate={hidden ? "hide" : "show"}
      transition={{ duration: 0.2, ease: "linear" }}
      className="fixed left-0 top-0 z-20 w-full"
    >
      <div className="container max-sm:px-0" data-aos="fade-down">
        <div
          className={`flex w-full items-center bg-main p-2 shadow-sm md:p-3 ${isWideSmallMobile ? "rounded-xl" : "rounded-none"}`}
        >
          <Link to={"/"} className="w-24 flex-shrink-0 md:w-40 xl:ml-4">
            <img className="w-full" src={logoWhite} />
          </Link>

          <nav className="ml-auto mr-5 max-lg:hidden xl:mr-10">
            <ul className="flex items-center gap-2 text-white lg:gap-6">
              {routesLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    className="rounded-lg px-2 py-1 [&.active]:bg-white [&.active]:text-main"
                    to={link.href}
                  >
                    {link.title[siteLng]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Select
            size="sm"
            className="ml-auto mr-5 max-w-20 lg:m-0"
            aria-label="site language"
            defaultSelectedKeys={[siteLng]}
            onChange={(e) => changeSiteLng(e.target.value)}
          >
            {languages.map((lng) => (
              <SelectItem key={lng.key} value={lng.key} hideSelectedIcon={true}>
                {lng.label}
              </SelectItem>
            ))}
          </Select>
          <NavMobile />
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderSecondary;
