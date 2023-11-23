/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import classNames from "classnames";
import { DropdownIcon } from "@/assets/icons";
import SearchDropdown from "./SearchDropdow";
import { DropdownProps } from "./type";

const Dropdown = ({
  error,
  options,
  onChange,
  value,
  text,
  isSearch,
  selectedKey,
  placeholder,
  rightIcon,
  errorMessage,
}: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<null | HTMLDivElement>(null);

  const dropdownHandler = (val: string) => {
    onChange(val);
    setIsActive(false);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current) {
      setIsActive(false);
    }
  });

  const dropdownTextClass = classNames(
    "font-Lato text-sm font-normal text-gray-grayPrimary capitalize",
    {
      "!text-blackColor": value,
    }
  );

  return (
    <>
      {isSearch ? (
        <SearchDropdown
          options={options}
          onChange={onChange}
          selectedKey={selectedKey}
          placeholder={placeholder}
          rightIcon={rightIcon}
        />
      ) : (
        <div className=" relative w-full ">
          <div
            ref={menuRef}
            className="p-[10px] shadow-dropdown-shadow flex justify-between items-center bg-white rounded-[10px] cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <p className={dropdownTextClass}>{value || text}</p>
            <span className={isActive ? " rotate-180 transition" : ""}>
              <DropdownIcon width="16" height="16" />
            </span>
          </div>
          {isActive && (
            <div className="mt-[10px] absolute h-[14vh] overflow-y-scroll w-full rounded-b-[10px] rounded-l-[10px ] px-[10px] shadow-dropdown-shadow scroll-smooth hover:w-full">
              {options?.map((option: { value: string; label: string }) => (
                <div
                  onClick={() => {
                    dropdownHandler(option.label);
                  }}
                  className="capitalize font-Lato text-sm font-normal text-blackColor border-b border-b-gray-grayPrimary py-[10px] pr-[10px] last:border-none"
                  key={option.value}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
          {error && (
            <p className="font-Lato text-sm font-normal text-errorColor">
              {errorMessage}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Dropdown;
