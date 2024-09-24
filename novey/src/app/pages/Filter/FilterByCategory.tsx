import React, { useEffect, useState } from "react";
import {
  Card,
  Checkbox,
  Chip,
  Container,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Pagination,
  Paper,
  Skeleton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import { Product } from "src/app/components/Product";
import { Title } from "src/app/components/Title";

import rectangle from "src/assets/imgs/gold-rectangle-down.png";
import ellipse from "src/assets/imgs/ellipse-green-down.png";
import hexagon from "src/assets/imgs/hexagon.png";
import polygon from "src/assets/imgs/polygon.png";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import smartphonesBanner from "src/assets/press-wall-print.png";

export const FilterByCategoryId = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };
  const dispatch = useDispatch();

  // @ts-ignore
  const { categoryByIdList } = useSelector((state) => state.productSlice);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const [paramsData, setParamsData] = useState({
    id: params.id,
    page: 1,
  });

  useEffect(() => {
    dispatch.productSlice.productFetchByCategoryLoad(paramsData);
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newData = {
      ...paramsData,
      page: value,
    };
    setParamsData(newData);
    dispatch.productSlice.productFetchByCategoryLoad(newData);
  };

  return (
    <>
      <section className="pt-20 md:pt-32 pb-10 md:pb-20 relative">
        <Container className="relative z-10">
          {params.id === "22" ? (
            <img
              src={smartphonesBanner}
              className="w-full object-contain rounded-2xl"
            />
          ) : (
            ""
          )}
          <div className="grid gap-5 items-start sm:grid-cols-2 md:grid-cols-4 pt-8">
            {categoryByIdList.data?.length
              ? categoryByIdList.data.map((product, index) => (
                  <React.Fragment key={index}>
                    <Product productItem={product} indexOf={index} />
                  </React.Fragment>
                ))
              : Array.from({ length: 9 }).map((_, index) => (
                  <Card sx={{ maxWidth: 275 }} key={index}>
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={250}
                    />
                    <Skeleton
                      variant="text"
                      width={"90%"}
                      sx={{ fontSize: "2rem" }}
                    />
                    <Skeleton
                      variant="text"
                      width={"70%"}
                      sx={{ fontSize: "1rem" }}
                    />
                    <div className="flex">
                      <Skeleton
                        variant="text"
                        width={"60%"}
                        sx={{ fontSize: "1rem" }}
                      />
                      <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        sx={{ ml: "auto" }}
                      />
                    </div>
                  </Card>
                ))}
          </div>
          <div className="flex justify-center py-[min(4vw,_60px)]">
            {categoryByIdList._meta?.pageCount > 1 ? (
              <Pagination
                color="primary"
                page={paramsData.page}
                count={categoryByIdList._meta?.pageCount}
                onChange={handleChange}
              />
            ) : (
              ""
            )}
          </div>
        </Container>
        {params.id === "1" ? (
          <img
            src={rectangle}
            className="absolute right-[5%] bottom-[3%] object-contain w-[85%] h-[75%] pointer-events-none"
          />
        ) : params.name === "2" ? (
          <img
            title="123"
            src={ellipse}
            className="absolute right-[5%] bottom-[3%] object-contain w-[85%] h-[75%] pointer-events-none"
          />
        ) : params.name === "3" ? (
          <img
            src={hexagon}
            className="absolute left-[2%] top-[25%] object-contain w-[50%] h-[65%] pointer-events-none"
          />
        ) : params.name === "5" || params.name === "22" ? (
          <img
            src={polygon}
            className="absolute right-[5%] bottom-[-5%] object-contain w-[90%] h-[90%] pointer-events-none"
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};
