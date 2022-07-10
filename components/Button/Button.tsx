import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import classNames from "../../node_modules/classnames/index";

export const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
    >
      {children}
    </button>
  );
};
