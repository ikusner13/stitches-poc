import { ButtonHTMLAttributes } from "react";
import { styled, theme } from "../../../stitches.config";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...rest } = props;
  return (
    <StyledButton className={className} {...rest}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled("button", {
  borderRadius: theme.radii[1],
  fontSize: theme.fontSizes[2],
  padding: `${theme.space[2]} ${theme.space[3]}`,
  border: "2px solid $turq",
  color: theme.colors.turq,

  "&:hover": {
    backgroundColor: "$turq",
    color: "$black",
  },
});

export default Button;
