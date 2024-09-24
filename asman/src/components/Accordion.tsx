import { faq } from "@/mock-data/faq";
import { Card } from "@nextui-org/react";
import React, {
  LegacyRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaChevronUp } from "react-icons/fa6";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteLngGlobal } from "@/services/store.service";

const AccordionItem = ({ title, body, isOpen, onClick, index }) => {
  const contentHeight = useRef(null);
  const [height, setHeight] = useState(null);
  const { siteLng } = siteLngGlobal();

  useEffect(() => {
    () => {
      setHeight((contentHeight.current as HTMLElement).scrollHeight);
    };
  }, []);

  return (
    <Card
      className="[*]:transition-all select-none px-6 py-4"
      data-aos="fade-up"
      data-aos-delay={index && ((index + 1) / 2) * 150}
    >
      <div className="flex cursor-pointer items-center" onClick={onClick}>
        <div className="mr-6 h-2 w-2 rounded-full bg-main"></div>
        <div className="text-lg text-neutral-800">{title[siteLng]}</div>
        <FaChevronUp
          style={{ transition: "all 0.2s ease" }}
          className={`ml-auto ${isOpen ? "rotate-0" : "rotate-x-180"}`}
        />
      </div>
      {isOpen && (
        <div className="px-2 pt-3 text-sm text-zinc-500">{body[siteLng]}</div>
      )}
    </Card>
  );
};

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return faq.map(({ title, body }, index) => (
    <AccordionItem
      key={index}
      title={title}
      body={body}
      isOpen={activeIndex === index}
      onClick={() => handleItemClick(index)}
      index={index}
    />
  ));
};
