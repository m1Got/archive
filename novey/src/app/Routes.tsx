import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header/Header";

// pages
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { TabBar } from "./layouts/TabBar";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/Favorites/Favorites";
import { News } from "./pages/News/News";
import { Separate } from "./pages/Separate/Separate";
import { Filter } from "./pages/Filter/Filter";
import { Soon } from "./pages/Soon/Soon";
import { Career } from "./pages/Career/Career";
import { Service } from "./pages/Service/Service";
import { Cart } from "./pages/Cart/Cart";
import { Profile } from "./pages/Profile/Profile";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { NotFound } from "./pages/NotFound/NotFound";
import { Order } from "./pages/Order/Order";
import { FilterByCategoryId } from "./pages/Filter/FilterByCategory";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/scrollTop";

const Main = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-auto bg-[#FBFBFB]">
        <Outlet />
      </main>
      <Footer />
      {/* <TabBar /> */}
      <Toaster position="top-right" />
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="catalog" element={<Catalog />}></Route>
      <Route path="favorites" element={<Favorites />}></Route>
      <Route path="news" element={<News />}></Route>
      <Route path="news/:id" element={<Separate />}></Route>
      <Route path="filter" element={<Filter />}></Route>
      <Route path="by-category" element={<FilterByCategoryId />}></Route>
      <Route path="soon" element={<Soon />}></Route>
      <Route path="career" element={<Career />}></Route>
      <Route path="service" element={<Service />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="product/:id" element={<ProductDetail />}></Route>
      <Route path="order" element={<Order />}></Route>
    </Route>
  )
);
