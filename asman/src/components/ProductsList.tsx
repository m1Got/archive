import { product_01 } from "@/assets/products";

import { Button } from "./ui/button";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { memo, useEffect, useMemo, useState } from "react";
import Feedback from "./Feedback";

import { IoMdCloseCircle } from "react-icons/io";
import { Product, products } from "@/mock-data/products";
import { Translate } from "./Translate";
import { siteLngGlobal } from "@/services/store.service";

export const ProductList = memo(({}) => {
  const [product, setProduct] = useState<Product>();
  const { siteLng } = siteLngGlobal();

  const {
    isOpen: infoIsOpen,
    onOpen: infoOnOpen,
    onOpenChange: infoOnOpenChange,
  } = useDisclosure();

  const {
    isOpen: formIsOpen,
    onOpen: formOnOpen,
    onOpenChange: formOpenChange,
  } = useDisclosure();

  return (
    <>
      <div className="items-list-grid">
        {products.map((product, index) => (
          <article
            key={index}
            className="max-w-[16rem]"
            data-aos="zoom-in"
            data-aos-delay={index && ((index + 1) / 2) * 150}
          >
            <div
              className="product-image relative z-10 cursor-pointer"
              onClick={() => {
                setProduct(product);
                infoOnOpen();
              }}
            >
              <img
                style={product.imageSize}
                loading="lazy"
                className="absolute-cover mx-auto w-[90%] object-scale-down"
                src={product.images[0]}
              />
            </div>
            <div className="relative -top-5 rounded-xl border border-zinc-500/20">
              <div className="px-2 pb-1 pt-6 sm:px-3 sm:pt-8">
                <p className="line-clamp-1 text-sm font-medium text-stone-900 md:text-lg">
                  {product.title[siteLng]}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal
        isOpen={infoIsOpen}
        onOpenChange={infoOnOpenChange}
        closeButton={
          <button style={{ zIndex: "20" }}>
            <IoMdCloseCircle size={30} />
          </button>
        }
        scrollBehavior="inside"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="grid flex-row gap-4 pt-8 max-md:px-4 sm:flex lg:gap-8">
                <div className="flex-[14rem] flex-grow-0">
                  <div className="relative mb-2 min-h-[18rem] w-full">
                    <img
                      loading="lazy"
                      className="absolute-cover rounded-2xl object-scale-down"
                      src={product.images[0]}
                    />
                  </div>
                  <div className="text-center text-xl font-medium text-stone-900">
                    {product.title[siteLng]}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="pt-3 text-sm">
                    <ProductProperty
                      property={product.desc}
                      label={{
                        uz: "Tavsifi:",
                        eng: "Description:",
                        ru: "Описание:",
                      }}
                    />
                    <ProductProperty
                      property={product.character}
                      label={{
                        uz: "Xususiyati:",
                        eng: "Characteristic:",
                        ru: "Характеристика:",
                      }}
                    />
                    <ProductProperty
                      property={product.places}
                      label={{
                        uz: "Qo'llash:",
                        eng: "Apply:",
                        ru: "Применять:",
                      }}
                    />
                    <ProductProperty
                      property={product.preparation}
                      label={{
                        uz: "Qo'llash usullari:",
                        eng: "Methods of usage:",
                        ru: "Способы использования:",
                      }}
                    />
                    <ProductProperty
                      property={product.usage}
                      label={{
                        uz: "Ishlatilishi:",
                        eng: "Usage:",
                        ru: "Использование:",
                      }}
                    />
                    <ProductProperty
                      property={product.instruction}
                      label={{
                        uz: "Ko'rsatmalar:",
                        eng: "Instructions:",
                        ru: "Инструкции:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.volume}
                      label={{
                        uz: "Sarfi:",
                        eng: "Consumption:",
                        ru: "Потребление:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.basis}
                      label={{
                        uz: "Tarkibi:",
                        eng: "Content:",
                        ru: "Содержание:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.solvent}
                      label={{
                        uz: "Erituvchi:",
                        eng: "Solvent:",
                        ru: "Растворитель:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.flammability}
                      label={{
                        uz: "Yonishga moyilligi:",
                        eng: "Flammability:",
                        ru: "Воспламеняемость:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.temperature}
                      label={{
                        uz: "Qo`llash harorati:",
                        eng: "Application temperature:",
                        ru: "Температура применения:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.life_period}
                      nestedKey="life_period"
                      label={{
                        uz: "Saqlash muddati:",
                        eng: "Best before:",
                        ru: "Употребить до:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.condition}
                      label={{
                        uz: "Saqlash sharoiti:",
                        eng: "Storage conditions:",
                        ru: "Условия хранения:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.construct_period}
                      label={{
                        uz: "To'liq qurish davri:",
                        eng: "Complete construction period:",
                        ru: "Полный период строительства:",
                      }}
                    />
                    <ProductProperty
                      property={product.tech.manufacturer}
                      label={{
                        uz: "Ishlab chiqaruvchi:",
                        eng: "Manufacturer:",
                        ru: "Производитель:",
                      }}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="p-3">
                <Button
                  size="lg"
                  variant="main"
                  className="w-full rounded-2xl shadow-md md:w-1/2"
                  onClick={() => {
                    onClose();
                    formOnOpen();
                  }}
                >
                  <Translate
                    uz={"Bog'lanish"}
                    eng={"Contact"}
                    ru={"Связаться"}
                  />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={formIsOpen} onOpenChange={formOpenChange}>
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalBody className="grid flex-row gap-4 max-md:px-2">
                  <Feedback onClose={onClose} />
                </ModalBody>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
});

function ProductProperty({
  label,
  property,
  nestedKey,
}: {
  [key: string]: any;
}) {
  const { siteLng } = siteLngGlobal();

  return (
    !!property && (
      <div className="mb-2">
        <span className="font-semibold">{label[siteLng]}</span>
        <span className="pl-1">
          {nestedKey === "life_period" && (
            <span className="pr-1">
              <Translate
                uz={"Ishlab chiqarilgan sanadan boshlab "}
                eng={"From the date of manufacture"}
                ru={"С даты изготовления"}
              />
            </span>
          )}
          {property[siteLng]}
        </span>
      </div>
    )
  );
}
