import React from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import animation from "src/assets/animation_ln1dr849.json";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center">
      <Lottie
        style={{ maxWidth: "700px", width: "100%" }}
        animationData={animation}
        loop={true}
      />
      <Button
        sx={{ mt: "40px", borderRadius: "20px" }}
        variant="contained"
        onClick={() => navigate(-1)}
      >
        Назад к странице
      </Button>
    </section>
  );
};
