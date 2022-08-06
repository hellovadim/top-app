import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import classNames from "../../node_modules/classnames/index";

export const Button = ({
  children,
  appearance,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={classNames(styles.arrow, {
            [styles.down]: arrow == "down",
          })}
        >
         
        </span>
      )}
    </button>
  );
};
