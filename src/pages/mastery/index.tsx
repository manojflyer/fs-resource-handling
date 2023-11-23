/* eslint-disable @typescript-eslint/no-explicit-any */
import { DropdownIcon } from "@/assets/icons";
import { Dropdown } from "@/components";
import { useState } from "react";

const Mastery = () => {
  const [values, setValues] = useState("");
  const initialOptions = [
    {
      id: 1,
      value: "ManojSurabathulla",
      label: "Manoj Surabathulla",
    },
    {
      id: 2,
      value: "ThamoDharan",
      label: "Thamo Dharan",
    },
    {
      id: 3,
      value: "UdaySuarabathulla",
      label: "Uday Suarabathulla",
    },
    {
      id: 4,
      value: "UdaySuarabathulla",
      label: "Uday Suarabathulla",
    },
    {
      id: 5,
      value: "UdaySuarabathulla",
      label: "Uday Suarabathulla",
    },
    {
      id: 6,
      value: "UdaySuarabathulla",
      label: "Uday Suarabathulla",
    },
  ];

  const teams = ["front end", "back end", "unity", "design", "mobile"];
  const arrayOptions = teams?.map((team, i) => {
    console.log("team", team);
    return {
      id: i,
      value: team,
      label: team,
    };
  });
  console.log(
    "===check===",
    arrayOptions.map((option) => {
      console.log("object", option);
    })
  );

  const [optionList, setOptionList] = useState(initialOptions);
  const optionListBackup = initialOptions;

  console.log("selectedOption", values);
  return (
    <div className="container mx-auto text-xl font-Lato text-gray-textGray ">
      Mastery
      <Dropdown
        isSearch
        options={optionList}
        selectedKey={values}
        onChange={(value: any) => {
          setValues(value);
          const filterOptions = optionListBackup?.filter((item) => {
            return item?.label?.toLowerCase()?.includes(value);
          });
          setOptionList(filterOptions);
          console.log("======filter====", filterOptions);
        }}
        placeholder="Select Key"
        rightIcon={<DropdownIcon width="16" height="16" />}
      />
      <div className="flex w-full gap-3">
        <div className="w-full">
          <Dropdown
            value={values}
            onChange={(val: any) => {
              setValues(val);
            }}
            text="Select location"
            options={initialOptions}
          />
        </div>
        <div className="w-full">
          <Dropdown
            value={values}
            onChange={(val: any) => {
              setValues(val);
            }}
            text="Select location"
            options={initialOptions}
          />
        </div>
        <div className="w-full">
          <Dropdown
            value={values}
            onChange={(val: any) => {
              setValues(val);
            }}
            text="Select location"
            options={initialOptions}
          />
        </div>
        <div className="w-full">
          <Dropdown
            value={values}
            onChange={(val: any) => {
              setValues(val);
            }}
            text="Select location"
            options={initialOptions}
          />
        </div>
      </div>
      <div>
        <Dropdown options={arrayOptions} onChange={() => {}} text="Teams" />
      </div>
    </div>
  );
};

export default Mastery;
