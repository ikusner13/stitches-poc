import type * as Stitches from "@stitches/react";
import { ButtonHTMLAttributes } from "react";
import { styled, theme } from "../../../stitches.config";

type StyledButtonVariants = Stitches.VariantProps<typeof StyledButton>;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonVariants {
  children: React.ReactNode;
  className?: string;
  leadingIcon?: React.ReactNode;
}

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
  cursor: "pointer",
  transition: "all 200ms ease",
  outline: "none",
  width: "auto",

  height: "40px",

  minWidth: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },

  variants: {
    // button variants
    variant: {
      primary: {
        backgroundColor: theme.colors.brand500,
        color: theme.colors.white,

        "&:hover:enabled, &:focus-visible:enabled": {
          backgroundColor: theme.colors.brand600,
        },

        "&:disabled": {
          backgroundColor: theme.colors.neutral400,
          color: theme.colors.neutral600,
          borderColor: "transparent",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        color: theme.colors.neutral900,

        borderColor: theme.colors.neutral900,

        "&:hover:enabled, &:focus-visible:enabled": {
          backgroundColor: theme.colors.neutral200,
        },

        "&:disabled": {
          backgroundColor: "transparent",
          color: theme.colors.neutral500,
          borderColor: theme.colors.neutral400,
        },
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
        cursor: "not-allowed",
        padding: 0,
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
      },
    },
    {
      variant: "secondary",
      loading: true,
      css: {
        backgroundColor: "$gray",
        color: "$black",
      },
    },
  ],

  defaultVariants: {
    variant: "primary",
  },
});

export default Button;
