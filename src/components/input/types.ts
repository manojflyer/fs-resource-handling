import { JSX, ChangeEvent } from "react";

export type InputType = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  mandatory?: boolean;
  error?: boolean;
  errorMessage?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
