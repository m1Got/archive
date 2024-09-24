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

export const Filter = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };

  // @ts-ignore
  const { productSeachList } = useSelector((state) => state.productSlice);

  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    dispatch.productSlice.productSearchLoad(params.query);
  }, []);

  return (
    <>
      <section className="pt-[clamp(100px,_7vw,_200px)] pb-[min(8vw,_80px)] relative">
        <Container className="relative z-10">
          {/* 
          <Paper
            sx={{
              mt: "min(4vw, 40px)",
              py: "min(2vw, 20px)",
              px: "min(2vw, 25px)",
              borderRadius: "20px",
              backgroundColor: "#F2F2F2",
            }}
          >
            <h6 className="text-[22px] text-secondary-main font-bold">
              Фильтр
            </h6>
            <div className="flex gap-6 pt-4 flex-wrap justify-between">
              <FormGroup>
                <p className="pb-2">Цена</p>
                <div className="flex gap-2">
                  <TextField
                    sx={{ width: "120px", "& fieldset": { border: "none" } }}
                    InputProps={{
                      size: "small",
                      placeholder: "100.000",
                      sx: {
                        borderRadius: "20px",
                        backgroundColor: "white",
                      },
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className="text-primary-main"
                        >
                          <b>от</b>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    sx={{ width: "120px", "& fieldset": { border: "none" } }}
                    InputProps={{
                      size: "small",
                      placeholder: "100.000",
                      sx: {
                        borderRadius: "20px",
                        backgroundColor: "white",
                      },
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          className="text-primary-main"
                        >
                          <b>до</b>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <p className="pb-2">Наличие</p>
                <div className="flex gap-2">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Забрать сегодня"
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <p className="pb-4">Цвет</p>
                <div className="flex gap-2">
                  <ToggleButtonGroup
                    exclusive
                    value={alignment}
                    onChange={handleAlignment}
                  >
                    <ToggleButton
                      value="left"
                      sx={{
                        border: "0",
                        padding: "3px",
                      }}
                    >
                      <Chip
                        color="primary"
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      />
                    </ToggleButton>
                    <ToggleButton
                      value="center"
                      sx={{
                        border: "0",
                        padding: "3px",
                      }}
                    >
                      <Chip
                        color="secondary"
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      />
                    </ToggleButton>
                    <ToggleButton
                      value="right"
                      sx={{
                        border: "0",
                        padding: "3px",
                      }}
                    >
                      <Chip
                        color="success"
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      />
                    </ToggleButton>
                    <ToggleButton
                      value="justify"
                      sx={{
                        border: "0",
                        padding: "3px",
                      }}
                    >
                      <Chip
                        color="error"
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                      />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </FormGroup>
              <FormGroup>
                <p className="pb-2">Наличие</p>
                <div className="flex gap-2 flex-wrap">
                  <FormControlLabel control={<Checkbox />} label="1821 мА ч" />
                  <FormControlLabel control={<Checkbox />} label="1821 мА ч" />
                  <FormControlLabel control={<Checkbox />} label="1821 мА ч" />
                </div>
              </FormGroup>
            </div>
          </Paper>
          */}
          <div className="grid gap-5 items-start sm:grid-cols-2 md:grid-cols-4 pt-8">
            {productSeachList.length
              ? productSeachList.map((product, index) => (
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
            <Pagination color="primary" count={10} />
          </div>
        </Container>
      </section>
    </>
  );
};
