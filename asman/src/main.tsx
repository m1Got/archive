import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import swiperCore from "swiper";

import "./styles/app.css";
import "swiper/css/bundle";
import "react-photo-view/dist/react-photo-view.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: true, delay: 200, duration: 600 });

import { Autoplay, EffectFade, Pagination, Virtual } from "swiper/modules";

swiperCore.use([Pagination, EffectFade, Autoplay, Virtual]);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
