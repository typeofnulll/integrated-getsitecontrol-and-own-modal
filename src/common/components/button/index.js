import cn from "classnames";
import styles from "./styles.module.css";

export const BUTTON_TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const Button = ({
  className,
  onClick,
  children,
  type = BUTTON_TYPE.PRIMARY,
}) => (
  <button
    className={cn(className, styles.button, styles[`${type}`])}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
