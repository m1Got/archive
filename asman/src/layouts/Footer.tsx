import { contacts } from "@/mock-data/contacts";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

import logoWhite from "@/assets/logo-white.png";
import { routesLinks } from "@/mock-data/routes-links";
import { useMedia } from "react-use";
import { GrLocation } from "react-icons/gr";
import { siteLngGlobal } from "@/services/store.service";
import { Translate } from "@/components/Translate";

export const Footer = () => {
  const isWideMobile = useMedia("(min-width: 768px)");
  const { siteLng } = siteLngGlobal();
  return (
    <footer className="bg-main py-10">
      {/* data-aos="fade-up" */}
      <div className="container">
        <div className="grid items-start gap-5 lg:grid-flow-col xl:gap-16">
          <Link to={"/"} className="w-60 flex-shrink-0">
            <img className="w-full" src={logoWhite} />
          </Link>
          <div className="flex gap-5 text-lg md:gap-10 lg:gap-20">
            <ul className="sm:px-3">
              {routesLinks.slice(0, 3).map(({ title, href }, index) => (
                <li className="mb-2 text-white" key={index}>
                  <Link to={href}>{title[siteLng]}</Link>
                </li>
              ))}
            </ul>
            <ul className="sm:px-3">
              {routesLinks.slice(3, 6).map(({ title, href }, index) => (
                <li className="mb-2 text-white" key={index}>
                  <Link to={href}>{title[siteLng]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-10 text-white sm:grid-flow-col">
            <div>
              <h4 className="mb-3 text-xl font-medium">Contact</h4>
              <div className="grid gap-2">
                <a
                  href={`tel:${contacts.phones[0].replace(/\s/g, "")}`}
                  target="_blank"
                >
                  {contacts.phones[0]}
                </a>
                <a
                  href={`tel:${contacts.phones[1].replace(/\s/g, "")}`}
                  target="_blank"
                >
                  {contacts.phones[1]}
                </a>
                <a href={`mailto:${contacts.email}`} target="_blank">
                  {contacts.email}
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-3 text-xl font-medium">
                <Translate uz={"Manzil"} eng={"Address"} ru={"Адрес"} />
              </h4>
              <div className="flex gap-2">
                <GrLocation className="flex-shrink-0" size={24} color="white" />
                <a
                  href={contacts.map.linkShare}
                  className="text-lg"
                  target="_blank"
                >
                  {contacts.map.address[siteLng]}
                </a>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex gap-2">
                  <a
                    href={contacts.instagramPost}
                    className="text-lg"
                    target="_blank"
                  >
                    <FaInstagram
                      className="flex-shrink-0"
                      color="white"
                      size={36}
                    />
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href={contacts.facebook}
                    className="text-lg"
                    target="_blank"
                  >
                    <FaFacebook
                      className="flex-shrink-0"
                      color="white"
                      size={36}
                    />
                  </a>
                </div>
                <div className="flex gap-2">
                  <a
                    href={contacts.telegram}
                    className="text-lg"
                    target="_blank"
                  >
                    <BsTelegram
                      className="flex-shrink-0"
                      color="white"
                      size={36}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <iframe
            src={contacts.map.linkIframe}
            className="relative h-48 w-full rounded-lg border-0 grayscale sm:w-80"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </footer>
  );
};
