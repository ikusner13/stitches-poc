import type * as Stitches from "@stitches/react";
import { ButtonHTMLAttributes } from "react";
import { styled, theme } from "../../../stitches.config";

type StyledButtonVariants = Stitches.VariantProps<typeof StyledButton>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonVariants;

const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return (
    <StyledButton className={className} {...rest}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled("button", {
  // base styles
  borderRadius: theme.radii[3],
  // fontSize: theme.fontSizes[2],
  padding: "0 26px",
  border: "2px solid transparent",
  color: theme.colors.white,
  backgroundColor: theme.colors.brand500,
  cursor: "pointer",
  transition: "all 200ms ease",
  outline: "none",
  width: "auto",

  height: "40px",

  minWidth: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover:enabled, &:focus-visible:enabled": {
    backgroundColor: theme.colors.black,
  },

  "&:disabled": {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    cursor: "not-allowed",
  },

  variants: {
    // button variants
    variant: {
      primary: {
        backgroundColor: theme.colors.brand500,
        color: "$black",
      },
      secondary: {
        backgroundColor: "transparent",
        color: "$turq",
      },
    },

    fullWidth: {
      true: {
        width: "100%",
      },
    },
    // loading prop
    loading: {
      true: {
        // backgroundColor: "$gray",
        // color: "$black",
        cursor: "not-allowed",
      },
    },
  },

  compoundVariants: [
    {
      variant: "primary",
      loading: true,
      css: {
        backgroundColor: "$gray",
        color: "$black",
        // cursor: "not-allowed",
      },
    },
    {
      variant: "secondary",
      loading: true,
      css: {
        backgroundColor: "$gray",
        color: "$black",
        // cursor: "not-allowed",
      },
    },
  ],

  defaultVariants: {
    variant: "primary",
  },
});

export default Button;
