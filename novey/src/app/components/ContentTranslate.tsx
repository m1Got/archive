import { getContentLanguage } from "src/helpers/request";

interface ContentTranslate {
  nameUz: JSX.Element | string;
  nameRu: JSX.Element | string;
}

const ContentTranslate = ({ nameUz, nameRu }) => {
  if (getContentLanguage === "uz") {
    return nameUz;
  } else {
    return nameRu;
  }
};

export default ContentTranslate;
