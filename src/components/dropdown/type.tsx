/* eslint-disable @typescript-eslint/no-explicit-any */
export type DropdownProps = {
  options?: { value: string; label: string }[];
  onChange: (val: string) => void;
  value?: string;
  text?: string;
  className?: string;
  name?: string;
  isSearch?: boolean;
  error?: boolean;
  selectedKey?: any;
  placeholder?: string;
  errorMessage?: string;
  rightIcon?: JSX.Element;
};
