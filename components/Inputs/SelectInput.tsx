import React, { useEffect, useRef } from "react";

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
  options?: any[];
  selected?: any;
};
export function SelectInput({
  name,
  value = "",
  defaultValue,
  className,
  required,
  isFocused,
  handleChange,
  error,
  placeholder,
  options = [],
  selected = null,
}: Props) {
  const input: any = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <label htmlFor={name}>Label Text</label>
      <select
        name={name}
        value={value}
        defaultValue={defaultValue}
        id={name}
        className={
          ` focus:ring-mjengo-red-500 focus:border-mjengo-red-500 block w-full text-sm sm:text-sm border-gray-300 px-4 rounded !h-[38px] ${
            error && "border-red-300"
          } ` + className
        }
        ref={input}
        required={required}
        onChange={(e: any) => handleChange(e)}
      >
        <option value="" disabled hidden>
          {placeholder || "Select an option"}
        </option>
        {options?.map((item, index) => (
          <option
            key={index}
            value={item.id || item.value}
            // defaultValue={item.id || item.value}
            // disabled={item.disabled}
            selected={selected}
          >
            {item.name || item.label}
          </option>
        ))}
      </select>
      {error && <div className="mt-0.5 ml-2 text-red-600 text-sm">{error}</div>}
    </div>
  );
}
