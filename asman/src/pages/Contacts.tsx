import Feedback from "@/components/Feedback";
import { Card, CardBody } from "@nextui-org/react";

import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { contacts } from "@/mock-data/contacts";
import { siteLngGlobal } from "@/services/store.service";
import { Translate } from "@/components/Translate";

const Contacts = () => {
  const { siteLng } = siteLngGlobal();
  return (
    <section>
      <div className="container">
        <div data-aos="fade-right">
          <h2 className="primary-title">
            <Translate uz={"Kontaktlar"} eng={"Contacts"} ru={"Контакты"} />
          </h2>
          <div className="py-5 text-center font-medium text-black">
            <Translate
              uz={
                "Kompaniya do'koni haqida ma'lumot. Ushbu blokda biz tavsiya qilamiz Tashkilotingiz haqidagi ma'lumotlarga havola, uning innovatsionligini saqlab qolish va taqdim etilayotgan xizmatlar yoki taklif qilinadigan tovarlarning bozor ishonchliligi."
              }
              eng={
                "Information about the company store. In this block we recommend Link to information about your organization, maintaining its innovativeness and market reliability of the services provided or goods offered."
              }
              ru={
                "Информации о Фирменном магазине. В этом блоке мы рекомендуем разместить информацию о Вашей организации, подчеркнуть ее значимость и надежность на рынке оказываемых услуг или предлагаемых товаров."
              }
            />
          </div>
          <iframe
            src={contacts.map.linkIframe}
            className="relative mx-auto h-[22rem] w-full rounded-lg border-0 sm:w-2/3"
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
          <div className="grid gap-5 pt-10 sm:pb-5 md:grid-cols-3 lg:grid-cols-4">
            <Card className="bg-main md:p-2">
              <CardBody className="flex-row items-center font-medium text-white">
                <FiPhoneCall
                  className="flex-shrink-0"
                  size={30}
                  color="white"
                />
                <div className="grid pl-5">
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
                </div>
              </CardBody>
            </Card>
            <Card className="bg-main text-sm md:p-2">
              <CardBody className="flex-row items-center font-medium text-white">
                <GrLocation className="flex-shrink-0" size={30} color="white" />
                <div className="grid pl-5">
                  <a href={contacts.map.linkShare} target="_blank">
                    {contacts.map.address[siteLng]}
                  </a>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-main md:p-2">
              <CardBody className="flex-row items-center font-medium text-white">
                <GoMail className="flex-shrink-0" size={30} color="white" />
                <div className="grid pl-5">
                  <a href={`mailto:${contacts.email}`} target="_blank">
                    {contacts.email}
                  </a>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-main md:p-2">
              <CardBody className="flex-row items-center font-medium text-white">
                <FaInstagram
                  className="flex-shrink-0"
                  size={30}
                  color="white"
                />
                <div className="grid pl-5">
                  <a href={contacts.instagram} target="_blank">
                    @asman.uz
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="py-5 sm:py-10">
          <Feedback showLeftContent={true} showModalAfterSubmit={true} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
