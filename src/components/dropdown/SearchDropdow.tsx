/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Input } from "..";

const SearchDropdown = ({
  options,
  onChange,
  selectedKey,
  rightIcon,
  placeholder,
}: any) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onInputChange = (e: any) => {
    onChange(e.target.value);
    setIsOpen(true);
    setInputValue(e.target.value);
  };

  const onItemSelected = (option: any) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className=" w-full ">
        <Input
          value={inputValue}
          onChange={onInputChange}
          placeholder={placeholder}
          className="justify-between text-blackColor"
          rightIcon={rightIcon}
          isActive={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          selectedKey={selectedKey.label}
        />
      </div>
      {isOpen && (
        <div className="absolute h-[14vh] overflow-scroll w-full bg-white py-4 px-3 rounded shadow my-1 hover:w-full">
          {options?.map((option: { value: string; label: string }) => {
            return (
              <div
                onClick={() => {
                  onItemSelected(option);
                  selectedKey;
                }}
                key={option?.value}
                className="capitalize p-4  cursor-pointer transition-al text-blackColor  hover:bg-[#f4f4f4] rounded-r-xl  "
              >
                {option?.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
