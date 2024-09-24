import React, { useEffect } from "react";
import { Button, Container, Divider, Paper } from "@mui/material";
import { Title } from "src/app/components/Title";

import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import ContentTranslate from "src/app/components/ContentTranslate";

export const Cart = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { basketAllPrice } = useSelector((state) => state.basketSlice);

  useEffect(() => {
    dispatch.basketSlice.loadGetBasketProducts();
  }, []);

  // @ts-ignore
  const { getBasketProductsList } = useSelector((state) => state.basketSlice);

  useEffect(() => {
    dispatch.profileSlice.getUserInformLoad();
  }, []);
  // @ts-ignore
  const { userList } = useSelector((state) => state.profileSlice);

  const navigate = useNavigate();

  const payload = {};
  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_200px)] pb-[min(8vw,_80px)]">
        <Container>
          <Title>
            <ContentTranslate nameRu={"Корзина"} nameUz={"Savat"} />
          </Title>
          <div className="lg:flex gap-3 items-start py-8">
            <div className="grid gap-3 flex-auto">
              {getBasketProductsList.length > 0 &&
                getBasketProductsList.map((cartItem, index) => (
                  <React.Fragment key={index}>
                    <CartItem product={cartItem}></CartItem>
                  </React.Fragment>
                ))}
            </div>
            {getBasketProductsList.length > 0 && (
              <Paper
                sx={{
                  p: "min(5vw, 20px)",
                  bgcolor: "#fff",
                  borderRadius: "20px",
                  display: "grid",
                  flex: "0 0 290px",
                }}
                className="max-w-sm"
              >
                <h5 className="text-[#363636] font-bold text-xl pb-3">
                  <ContentTranslate
                    nameRu={"Ваш заказ"}
                    nameUz={"Sizning buyurtmangiz"}
                  />
                </h5>
                <ul className="grid gap-3 mb-3 columns-2">
                  {getBasketProductsList.map((item) => (
                    <li className="flex items-center">
                      <span className="pr-1">
                        <ContentTranslate
                          nameRu={"Товары"}
                          nameUz={"Mahsulotlar"}
                        />
                        ({item.amount}):
                      </span>
                      <Divider className="flex-auto pt-3" />
                      <b className="pl-4 font-medium text-[#363636] flex-grow-0">
                        {item.price?.toLocaleString("ru-RU")} сум
                      </b>
                    </li>
                  ))}
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate
                        nameRu={"Доставка:"}
                        nameUz={"Yetkazib berish:"}
                      />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-medium text-[#363636] flex-grow-0">
                      ...
                    </b>
                  </li>
                  <li className="flex items-center">
                    <span className="pr-1">
                      <ContentTranslate nameRu={"Итого:"} nameUz={"Umumiy"} />
                    </span>
                    <Divider className="flex-auto pt-3" />
                    <b className="pl-4 font-bold text-[#363636] text-2xl  flex-grow-0">
                      {basketAllPrice?.toLocaleString("ru-RU")} сум
                    </b>
                  </li>
                </ul>
                <Button
                  variant="outlined"
                  sx={{
                    mt: "10px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    textTransform: "capitalize",
                  }}
                  onClick={async () => {
                    try {
                      await dispatch.orderSlice.sendOrderLoad({
                        name: userList?.name,
                        address: userList?.address,
                        payment_id: 1,
                        delivery_id: 1,
                        phone: userList?.phone,
                      });
                      navigate("/profile");
                    } catch (error) {
                      alert("Error");
                    }
                  }}
                >
                  <ContentTranslate
                    nameRu={"Заказать"}
                    nameUz={"Buyurtma berish"}
                  />
                </Button>
              </Paper>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};
