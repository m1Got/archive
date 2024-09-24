import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/system";
import { Toaster } from "react-hot-toast";
import { PhotoProvider } from "react-photo-view";
import { useLocalStorage, useMedia } from "react-use";

import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import HeaderSecondary from "@/layouts/HeaderSecondary";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import News from "@/pages/News";
import NewsItem from "@/pages/NewsItem";
import Contacts from "@/pages/Contacts";

import { isDev } from "@/services/utils.service";
import { useEffect } from "react";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout showHeader={false} />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout showHeader={false} showSecondaryHeader={true} />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        element: <NewsItem />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

function Layout({
  showFooter = true,
  showHeader = true,
  showSecondaryHeader = false,
  styles = {},
}) {
  const isWideMobile = useMedia("(min-width: 768px)");
  return (
    <>
      {showHeader ? <Header /> : null}
      {showSecondaryHeader ? <HeaderSecondary /> : null}
      <main
        className={`flex-1 ${showSecondaryHeader && "pt-20 md:pt-28"}`}
        style={styles}
      >
        <Outlet />
      </main>
      {showFooter ? <Footer /> : null}
      {!isDev() ? <ScrollRestoration /> : null}
      <Toaster toastOptions={{ duration: 2000 }} />
    </>
  );
}

const App = () => {
  return (
    <NextUIProvider className="flex h-full flex-col">
        <PhotoProvider>
          <RouterProvider router={routes} />
        </PhotoProvider>
    </NextUIProvider>
  );
};

export default App;
