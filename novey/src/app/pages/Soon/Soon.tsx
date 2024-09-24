import { Container } from "@mui/material";
import Lottie from "lottie-react";
import { useSearchParams } from "react-router-dom";

import { Title } from "src/app/components/Title";

import animation from "src/assets/coming_soon.json";

export const Soon = () => {
  const [searchParams] = useSearchParams();
  const paramsAsObject = Object.fromEntries([...searchParams]);

  return (
    <>
      <section className="pt-[clamp(100px,_8vw,_200px)] min-h-[90dvh]">
        <Container>
          <div>
            <Title>
              {paramsAsObject.type === "planchet" ? "Планшеты" : "Смартфоны"}
            </Title>
            <h2 className="text-center text-[clamp(20px,_8vw,_40px)] font-mono text-secondary-main mt-20">
              СКОРО
            </h2>
          </div>
          <div className="py-[min(5vw,_60px)]">
            <Lottie
              style={{ maxWidth: "500px", width: "100%", marginInline: "auto" }}
              animationData={animation}
              loop={true}
            />
          </div>
        </Container>
      </section>
    </>
  );
};
