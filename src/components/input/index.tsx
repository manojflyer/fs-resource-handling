import classNames from "classnames";
import { InputType } from "./types";
import { useState } from "react";

const Input = ({
  label,
  mandatory = false,
  leftIcon,
  rightIcon,
  type = "text",
  id,
  name,
  value,
  placeholder,
  onChange,
  disabled,
  className,
  error,
  errorMessage,
}: InputType) => {
  const [isActive, setIsActive] = useState(false);

  const inputClassName = classNames(
    "p-3 my-[10px] rounded-lg shadow-input-shadow flex items-center gap-2",
    { "border border-errorColor": error },
    className
  );

  return (
    <>
      {label && (
        <label className="font-Lato text-sm font-medium text-blackColor">
          {label}
          <span className="text-errorColor">{mandatory && "*"}</span>
        </label>
      )}
      <div className={inputClassName} onClick={() => setIsActive(!isActive)}>
        {leftIcon && leftIcon}
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          className={
            value
              ? "font-Lato text-sm font-normal text-blackColor outline-none "
              : "font-Lato text-sm font-normal text-gray-grayPrimary outline-none"
          }
        />
        <span className={isActive ? " rotate-180 transition" : ""}>
          {rightIcon && rightIcon}
        </span>
      </div>
      {error && (
        <p className="font-Lato text-sm font-normal text-errorColor">
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default Input;
