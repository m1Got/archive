import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { routesLinks } from "@/mock-data/routes-links";
import { AnimatePresence, motion } from "framer-motion";
import { siteLngGlobal } from "@/services/store.service";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const { siteLng } = siteLngGlobal();

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative lg:hidden">
      <Hamburger toggled={isOpen} color="white" size={26} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[5rem] bg-zinc-900/70 p-2"
          >
            <ul className="grid gap-2">
              {routesLinks.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={idx}
                    className="w-full rounded-xl"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex w-full items-center justify-between rounded-xl bg-zinc-900/80 p-4 text-white/90"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">
                        {route.title[siteLng]}
                      </span>
                      <route.icon className="text-2xl" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
