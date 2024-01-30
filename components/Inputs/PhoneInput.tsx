import { is } from "date-fns/locale";
import React, { useEffect, useRef } from "react";
import Select from "react-select";
import { Listbox } from "@headlessui/react";
import { countries } from "@/Shared/data";

type Props = {
  name: string;
  value: string;
  defaultValue?: string;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  isFocused?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  error?: string;
};

type SelectProps = {
  name: string;
  value: string;
  className?: string;
  required?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
};

export function PhoneInput({
  name,
  value,
  defaultValue,
  className,
  autoComplete,
  placeholder = "7xxxxxxxx",
  required,
  isFocused,
  handleChange,
  isDisabled = false,
  error,
}: Props) {
  const input: any = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, [isFocused]);

  return (
    <div className="w-full">
      <input
        type="text"
        name={name}
        value={value}
        defaultValue={defaultValue}
        id={name}
        disabled={isDisabled}
        className={`shadow-sm focus:border-2 focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full h-[38px] sm:text-sm border border-gray-300 px-4 rounded rounded-l-none mb-2 placeholder-gray-600 ${
          error && "border-red-300"
        } ${className}`}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
      {error && (
        <div className="mt-0.5 -ml-[5rem] text-red-600 text-sm">{error}</div>
      )}
    </div>
  );
}

export function SelectCountryCodeInput({
  name,
  value,
  className,
  required,
  isFocused,
  isDisabled = false,
  handleChange,
  error,
}: SelectProps) {
  const input: string | any = useRef();

  const KE: any = countries.find((country: any) => country.name === "Kenya");

  const COUNTRIES = [
    {
      label: `${KE.flag} ${KE.dial_code} (${KE.code})`,
      value: KE.dial_code,
      name: KE.name,
      disabled: true,
      selected: true,
    },
    ...Object.values(countries)
      .filter((val: any) => val.name !== "Kenya")
      .map((val: any) => ({
        value: val.dial_code,
        label: `${val.flag} ${val.dial_code} (${val.code})`,
        name: val.name,
      })),
  ];

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, [isFocused]);

  return (
    <div className="flex flex-col items-start">
      <Listbox value={value} onChange={(e: any) => handleChange(e)}>
        {({ open }) => (
          <>
            <Listbox.Button
              id={name}
              name={name}
              className={`w-[10rem] shadow-sm focus:ring-0 focus:outline-none focus:border-2 focus:border-gray-300 sm:text-sm border-gray-300 px-2 rounded rounded-r-none mb-2 ${
                error && "border-red-300"
              } ${className}`}
            //   disabled={isDisabled}
            >
              {COUNTRIES.find((option) => option.value === value)?.label ||
                "Search"}
            </Listbox.Button>
            <Listbox.Options>
              {COUNTRIES.map((country) => (
                <Listbox.Option
                  key={country.name}
                  value={country.value}
                  disabled={isDisabled}
                >
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? "text-white bg-blue-600"
                          : "text-gray-900"
                      } cursor-default select-none relative py-2 pl-3 pr-9`}
                    >
                      {country.label}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
      {/*<select*/}
      {/*    name={name}*/}
      {/*    id={name}*/}
      {/*    value={value}*/}
      {/*    required={required}*/}
      {/*    disabled={isDisabled}*/}
      {/*    onChange={(e) => handleChange(e)}*/}
      {/*    className={`w-[8rem] shadow-sm focus:ring-0 focus:border-gray-300 sm:text-sm border-gray-300 border--0 px-2 rounded rounded-r-none mb-2 ${*/}
      {/*        error && "border-red-300"*/}
      {/*    } ${className}`}*/}
      {/*>*/}
      {/*    {COUNTRIES.map((country) => (*/}
      {/*        <option key={country.name} value={country.value}>*/}
      {/*            {country.label}*/}
      {/*        </option>*/}
      {/*    ))}*/}
      {/*</select>*/}
    </div>
  );
}
