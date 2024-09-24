import { memo, useEffect, useMemo, useState } from "react";
import { Input as NextUIInput } from "@nextui-org/input";
import { contacts } from "@/mock-data/contacts";
import { Button } from "./ui/button";
import {
  Modify,
  Track,
  useMask,
  type MaskEventDetail,
} from "@react-input/mask";
import { useMedia, useTimeout } from "react-use";
import { useTimer } from "react-timer-hook";
import { Textarea as NextUITextarea } from "@nextui-org/react";

import { afterSeconds, later, phoneMask } from "@/services/utils.service";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/services/utils.service";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useTelegramApi } from "@/hooks/useTelegramApi";
import { useForm } from "react-hook-form";
import { Tooltip } from "@nextui-org/react";
import { siteLngGlobal } from "@/services/store.service";
import { Translate } from "./Translate";
import axios from "axios";

const Feedback = ({
  onClose = undefined,
  showLeftContent = false,
  showModalAfterSubmit = false,
}) => {
  const [detail, setDetail] = useState<MaskEventDetail | null>(null);
  const { siteLng } = siteLngGlobal();
  const {
    reset,
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onOpenChange: modalOnOpenChange,
  } = useDisclosure();

  const phoneInputRef = useMask({
    mask: phoneMask,
    replacement: { _: /\d/ },
    onMask: (event) => setDetail(event.detail),
  });

  const onSubmit = async () => {
    const { name, phone, content } = getValues();
    let messageText = `Имя: ${name}\nНомер телефона: ${detail.value}\n`;
    messageText += content && `Текст:${content}`;

    const text = encodeURIComponent(messageText);

    const url = `https://need-api.vercel.app/telegram`;

    await later(4000);
    const res = await axios.post(url, {
      uniqueKey: "asmanTgBot",
      message: text,
    });

    if (res.status === 200) {
      reset();

      onClose !== undefined ? onClose() : null;
      showModalAfterSubmit
        ? modalOnOpen()
        : toast.success("So'rovingiz yuborildi!", {
            className: "bg-main text-white",
          });
    }
  };

  return (
    <>
      <div
        className={cn(
          showLeftContent && "grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-16",
        )}
      >
        {showLeftContent && (
          <div className="max-md:hidden" data-aos="fade-right">
            <h2 className="primary-title">
              <span className="pr-2 text-main">
                <Translate
                  uz={"Savolingiz"}
                  eng={"Have any"}
                  ru={"У вас есть"}
                />
              </span>
              <Translate uz={"qoldimi?"} eng={"questions?"} ru={"вопросы?"} />
            </h2>
            <p className="py-5 text-2xl text-neutral-500 md:py-10">
              <Translate
                uz={
                  "Unda, shu zahotiyoq uni bizga xabar sifatida yozib yuboring va bizning vakilimiz siz bilan tez orada bog'lanadi."
                }
                eng={
                  "Then write it to us as a message right now and our representative will contact you shortly."
                }
                ru={
                  "Тогда напишите нам это в виде сообщения прямо сейчас и наш представитель свяжется с вами в ближайшее время."
                }
              />
            </p>
          </div>
        )}
        <form
          data-aos={showLeftContent && "fade-left"}
          onSubmit={handleSubmit(onSubmit)}
          className={cn(
            showLeftContent &&
              "rounded-2xl border-1 border-zinc-400 p-2 sm:p-6 lg:p-12",
          )}
        >
          <div className="flex justify-center p-3 md:pb-4 md:pt-6">
            <h2 className="text-2xl font-medium md:text-3xl">
              <Translate
                uz={"Hamkorlik boshlash"}
                eng={"Start a partnership"}
                ru={"Начать партнерство"}
              />
            </h2>
          </div>
          <div className="grid gap-4 py-5">
            <div>
              <NextUIInput
                {...register("name", { required: true, maxLength: 20 })}
                variant="bordered"
                label={
                  <Translate
                    uz={"Ismingiz"}
                    eng={"Your name"}
                    ru={"Как вас зовут"}
                  />
                }
              />
              {errors.name && (
                <span className="text-red-600/50">name is required</span>
              )}
            </div>
            <div>
              <NextUIInput
                variant="bordered"
                label={
                  <Translate
                    uz={"Telefon raqam"}
                    eng={"Phone number"}
                    ru={"Номер телефона"}
                  />
                }
                {...register("phone")}
                ref={phoneInputRef}
                inputMode="tel"
              />
              {errors.phone && (
                <span className="text-red-600/50">
                  Phone number is required
                </span>
              )}
            </div>
            <NextUITextarea
              label={
                <Translate
                  uz={"Nimaga aniqlik kiritmoqchisiz?"}
                  eng={"What do you want to clarify?"}
                  ru={"Что вы хотите уточнит"}
                />
              }
              variant="bordered"
              {...register("content", { maxLength: 40 })}
            ></NextUITextarea>
          </div>
          <div className="grid justify-center gap-2 py-3">
            <div className="my-2 text-center text-neutral-500 max-md:grid">
              <span className="pr-4">
                <Translate
                  uz={"Yoki bizga qo'ng'iroq qiling"}
                  eng={"Or give us a call"}
                  ru={"Или позвоните нам"}
                />
              </span>
              <a
                target="_blank"
                className="m-1 justify-self-center max-md:p-1"
                href={`tel:${contacts.phones[0].replace(/\s/g, "")}`}
              >
                {contacts.phones[0]}
              </a>
            </div>
            <Button
              size="lg"
              variant="main"
              disabled={!detail?.isValid || !isValid || isSubmitting}
              className="min-w-[16rem] max-w-[28rem] rounded-2xl shadow-md"
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              <Translate uz={"Yuborish"} eng={"Send"} ru={"Отправит"} />
            </Button>
          </div>
        </form>
      </div>

      <Modal isOpen={modalIsOpen} onOpenChange={modalOnOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalBody className="grid flex-row gap-4 p-3 text-center md:p-8">
                  <h2 className="primary-title">
                    <span className="text-main">
                      <Translate
                        uz={"Siz bilan hamkorlikdan ma'mnunmiz!"}
                        eng={"We are happy to cooperate with you!"}
                        ru={"Мы рады сотрудничеству с вами!"}
                      />
                    </span>
                  </h2>
                  <p className="text-lg text-neutral-500 md:text-2xl">
                    <Translate
                      uz={
                        "Tez orada operatorlarimiz siz bilan aloqaga chiqishadi va kerakli barcha ma'lumotlarni berib o'ttishadi"
                      }
                      eng={
                        "Our operators will contact you soon they give all the necessary information"
                      }
                      ru={
                        "Наши операторы свяжутся с вами в ближайшее время они дают всю необходимую информацию"
                      }
                    />
                  </p>
                </ModalBody>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
};

export default memo(Feedback);
