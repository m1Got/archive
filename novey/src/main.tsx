import ReactDOM from "react-dom/client";

import AOS from "aos";
import store from "./store";
import { App } from "./app/App";
import { Provider } from "react-redux";

import "aos/dist/aos.css";
import "animate.css";

import "react-image-gallery/styles/css/image-gallery.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/fonts.css";
import "./styles/app.scss";

AOS.init({
  delay: 200,
  once: true,
  offset: 150,
  duration: 700,
  disable: false,
  startEvent: "DOMContentLoaded",
  disableMutationObserver: false,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
