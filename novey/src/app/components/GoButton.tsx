import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { EastRounded } from "@mui/icons-material";
import { Link as MuiLink } from "@mui/material";
import ContentTranslate from "./ContentTranslate";

interface IGoButtonProps {
  to?: string;
  text?: string;
  color?: string;
  className?: string;
}

export const GoButton = ({ text, color, to, className }: IGoButtonProps) => {
  return (
    <>
      <MuiLink
        to={to}
        component={Link}
        sx={{
          gap: "15px",
          display: "flex",
          fontSize: "20px",
          fontWeight: "600",
          width: "fit-content",
          alignItems: "center",
          textDecoration: "none",
          color: color || "secondary.main",
        }}
        className={className}
      >
        {text ?? <ContentTranslate nameUz="Ko'rish" nameRu="Посмотреть" />}
        <EastRounded
          component={GoArrowRight}
          sx={{
            padding: "10px",
            fontSize: "60px",
            borderWidth: "2px",
            borderRadius: "50%",
            alignItems: "center",
            display: "inline-flex",
            justifyContent: "center",
            borderColor: color || "secondary.main",
          }}
        />
      </MuiLink>
    </>
  );
};
