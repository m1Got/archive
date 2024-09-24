import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { ProductList } from "@/components/ProductsList";

import logoWhite from "@/assets/logo-white.png";
import { Translate } from "@/components/Translate";
import { productLinks } from "@/mock-data/products";
import { siteLngGlobal } from "@/services/store.service";

const Products = () => {
  const { siteLng } = siteLngGlobal();
  
  return (
    <section className="relative h-full md:min-h-[80vh] md:p-2 md:pt-8">
      <div className="mx-auto h-full max-w-[150rem] px-2 md:flex">
        <aside className="sticky left-2 top-0 z-10 flex-[clamp(15rem,20vw,20rem)] flex-grow-0 rounded-2xl bg-main">
          <div className="p-4 max-md:hidden">
            <Link to={"/"} className="mx-auto block w-44">
              <img src={logoWhite} />
            </Link>
          </div>
          <div className="border-b-1 border-white/60"></div>
          <nav className="p-2 md:pb-5 md:pt-10">
            <menu className="flex gap-2 overflow-auto px-1 md:grid">
              {productLinks.map(({ title, isActive }, index) => (
                <button
                  key={index}
                  className={`product-link ${isActive && "active-link"}`}
                >
                  {title[siteLng]}
                </button>
              ))}
            </menu>
          </nav>
        </aside>
        <div className="flex-1 max-md:mt-5 md:pl-4">
          <div className="mb-4 flex md:mb-8">
            <Link
              to={"/"}
              className="flex items-center text-2xl text-neutral-800"
            >
              <MdArrowBack size={30} />
              <h2 className="px-3 font-semibold">
                <Translate
                  uz={"Mahsulotlar"}
                  eng={"Products"}
                  ru={"Продукция"}
                />
              </h2>
            </Link>
          </div>
          <div className="pb-5 md:p-2">
            <ProductList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
