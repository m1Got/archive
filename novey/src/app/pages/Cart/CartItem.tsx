import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Checkbox, Paper } from "@mui/material";
import { BsFillSquareFill, BsSquare } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import { PiTrash } from "react-icons/pi";

import { baseUrl } from "../../../helpers/request";
import ContentTranslate from "src/app/components/ContentTranslate";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const plus = () => {
    setAmount(amount + 1);
    dispatch.basketSlice.loadPostProductToBasket({
      product_id: product?.product?.id,
      amount: amount,
    });
  };
  return (
    <Paper
      className="grid sm:flex"
      sx={{
        p: "min(3vw, 20px)",
        bgcolor: "#fff",
        borderRadius: "20px",
      }}
    >
      <Checkbox
        className="self-start md:self-center justify-self-end"
        icon={<BsSquare size={18} />}
        checkedIcon={<BsFillSquareFill size={18} />}
      />
      <div className="md:flex flex-auto ml-2 gap-5">
        <div className="flex-[80px] mb-5 md:mb-0 flex-grow-0 mr-[min(4vw,_30px)]">
          {product?.product?.photo?.includes("https://app.billz.uz") ? (
            <img
              src={`${product?.product?.photo}`}
              className="w-full h-full object-contain max-h-[150px]"
            />
          ) : (
            <img
              src={`${baseUrl}/${product?.product?.photo}`}
              className="w-full h-full object-contain max-h-[150px]"
            />
          )}
        </div>
        <div className="grid md:flex gap-4 flex-auto md:justify-between">
          <div className="flex gap-2 flex-col md:justify-between">
            <h5 className="grid">
              <b className="text-xl text-secondary-main">
                {product?.product?.name}
              </b>
              <span>{product?.product?.category?.name}</span>
            </h5>
            <p className="flex gap-2">
              <ContentTranslate nameRu={"Цвет:"} nameUz={"Rangi"} />
              <b className="text-secondary-main font-medium">Зеленый</b>
            </p>
            <p className="flex gap-2">
              <ContentTranslate
                nameRu={"Встроенная память:"}
                nameUz={"O'rnatilgan xotira:"}
              />
              <b className="text-secondary-main font-medium">256 гб</b>
            </p>
          </div>
          <div className="flex gap-4 md:flex-col justify-end">
            <span className="py-2">
              <ContentTranslate nameRu={"Кол-во:"} nameUz={"Soni:"} />
            </span>
            <Box
              sx={{
                borderRadius: "20px",
                bgcolor: "#FAF8F8",
                alignItems: "center",
                display: "flex",
                px: "13px",
                py: "8px",
              }}
            >
              <button
                onClick={() =>
                  dispatch.basketSlice.loadDeleteBasketProduct({
                    product_id: product?.product?.id,
                  })
                }
              >
                <BiMinus size={20} />
              </button>
              <span
                style={{
                  width: "25px",
                  display: "block",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {product?.amount}
              </span>
              <button onClick={plus}>
                <BiPlus size={20} />
              </button>
            </Box>
          </div>
          <div className="flex md:flex-col justify-between md:items-end">
            <button className="flex items-center gap-2">
              <PiTrash size={20} />
              <ContentTranslate nameRu={"Удалить"} nameUz={"O'chirish"} />
            </button>
            <h4 className="font-bold">
              <span className="text-2xl text-secondary-main">
                {product?.price?.toLocaleString("ru-RU")} сум
              </span>
            </h4>
          </div>
        </div>
      </div>
    </Paper>
  );
};
