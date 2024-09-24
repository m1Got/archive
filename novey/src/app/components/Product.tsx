import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { baseUrl } from "../../helpers/request";
import styled from "styled-components";

import ellipseGreenMoreFilled from "src/assets/imgs/ellipse-green-more-filled.png";
import restangleMoreFilled from "src/assets/imgs/restangle-more-filled.png";
import polygonMoreFilled from "src/assets/imgs/polygon-more-filled.png";
import hexagonPremium from "src/assets/imgs/hexagon-premium.png";

type TProduct = {
  indexOf?: number;
  type?: string | "family" | "universal" | "premium" | "unique";
  hoverAnimation?: boolean;
  productItem: {
    id: number;
    name: string;
    price: number | string;
    photo: string;
    price_old: string;
  };
};

const ProductItem = styled.article`
  transition: all 500ms;
  &:hover {
    scale: 1.02;
    transform: translateY(-5px);
  }
  > * {
    transition: all 500ms;
  }
`;

export const Product = ({ productItem, indexOf }: TProduct) => {
  const bgImages = (categoryName: number) => {
    if (categoryName === 1) return restangleMoreFilled;
    if (categoryName === 2) return ellipseGreenMoreFilled;
    if (categoryName === 3) return polygonMoreFilled;
    if (categoryName === 5) return hexagonPremium;
    if (categoryName === 8) return hexagonPremium;
    if (categoryName === 22) return hexagonPremium;
  };

  return (
    <ProductItem>
      <Box
        data-aos={indexOf ? "zoom-in" : ""}
        data-aos-duration={indexOf ? 600 : 0}
        data-aos-delay={indexOf ? ((indexOf + 1) / 2) * 150 : 0}
        sx={{
          backgroundColor: "medium.main",
          borderRadius: "20px",
          position: "relative",
          maxWidth: "380px",
          width: "100%",
          p: "min(5vw, 20px)",
          pointerEvents: "auto",
        }}
      >
        <Link
          to={"/product/" + productItem?.id}
          className="h-[240px] block p-4 relative z-[3]"
          title={productItem.name}
        >
          <img
            // @ts-ignore
            src={bgImages(productItem.category.id)}
            style={{ transform: "rotateY(180deg)" }}
            className="absolute w-[90%] h-[90%] object-contain right-[-10px] top-2 z-[-1]"
          />

          <img
            src={`${baseUrl}/${productItem?.photo}`}
            className="h-full w-full object-contain z-10"
          />
        </Link>
        <div className="pt-3">
          <h6 className="text-secondary-main md:text-xl font-bold line-clamp-1">
            {productItem?.name}
          </h6>
          {/* @ts-ignore */}
          <p className="text-sm">{productItem.category.name}</p>
        </div>
      </Box>
    </ProductItem>
  );
};
