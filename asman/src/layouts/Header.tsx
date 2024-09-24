import { Link, NavLink } from "react-router-dom";
import { Select, SelectItem } from "@nextui-org/react";
import { routesLinks } from "@/mock-data/routes-links";
import { NavMobile } from "./NavMobile";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocalStorage, useMedia } from "react-use";
import { useMemo, useState } from "react";

import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { languages } from "@/components/Translate";
import { siteLngGlobal } from "@/services/store.service";

export const Header = () => {
  const isWideXL = useMedia("(min-width: 1280px)");
  const isWideMobile = useMedia("(min-width: 768px)");
  const { siteLng, changeSiteLng } = siteLngGlobal();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [trnHeader, setTrnHeader] = useState<any>({
    duration: 0.2,
    ease: "linear",
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() as number;

    if ((latest > previous || isWideMobile) && latest > 5) {
      setHidden(true);
      setTrnHeader({ duration: 0.2, ease: "linear" });
    } else {
      setHidden(false);
      if (isWideMobile) {
        setTrnHeader({ duration: 0, ease: false });
      }
    }
  });

  return (
    <motion.header
      variants={{ show: { y: 0 }, hide: { y: "-100%" } }}
      animate={hidden ? "hide" : "show"}
      transition={trnHeader}
      className="fixed left-0 top-0 z-20 w-full max-xl:bg-zinc-900/70 xl:py-3"
    >
      <div className="container" data-aos="fade-down">
        <div className="flex w-full items-center py-2">
          <Link to={"/"} className="w-24 flex-shrink-0 md:w-40 xl:ml-6">
            <img className="w-full" src={isWideXL ? logoBlack : logoWhite} />
          </Link>
          <nav className="ml-auto mr-4 max-lg:hidden xl:mr-8">
            <ul className="flex items-center text-white lg:gap-6 xl:text-zinc-500">
              {routesLinks.map((link, index) => (
                <li key={index} className="text-sm">
                  <NavLink
                    to={link.href}
                    className="[&.active]:text-zinc-900 xl:[&.active]:text-main"
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
