/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import { ButtonPropType } from "./types";

const Button = ({
  leftIcon,
  rightIcon,
  className,
  label,
  disabled = false,
  variant = "primary",
  onClick,
  type,
}: ButtonPropType) => {
  const buttonClasses = classNames(
    " py-[10px] px-5 flex items-center gap-2 rounded-lg font-Lato text-base font-medium ",
    {
      " bg-primaryColor text-white": variant === "primary",
    },
    {
      " bg-primarySurface text-primaryColor": variant === "secondary",
    },
    {
      "disabled:bg-gray-grayPrimary disabled:cursor-not-allowed text-white":
        disabled,
    },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      <>
        {leftIcon && leftIcon}
        {label}
        {rightIcon && rightIcon}
      </>
    </button>
  );
};

export default Button;
