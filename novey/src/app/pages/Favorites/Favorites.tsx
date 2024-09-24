import { Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentTranslate from "src/app/components/ContentTranslate";

import { Product } from "src/app/components/Product";
import { Title } from "src/app/components/Title";

export const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.basketSlice.loadGetFavouriteProduct();
  }, []);

  // @ts-ignore
  const { getFavouriteProduct } = useSelector((state) => state.basketSlice);

  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_200px)] pb-[min(8vw,_80px)]">
        <Container>
          <Title>
            <ContentTranslate nameRu={"Избранное"} nameUz={"Tanlanganlar"} />
          </Title>
          <div className="grid items-start sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-9">
            {/* @ts-ignore */}
            {getFavouriteProduct.length > 0 &&
              getFavouriteProduct.map((item, index) => (
                <div key={index}>
                  <Product productItem={item} />
                </div>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
};
