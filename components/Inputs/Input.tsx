import React, { useEffect, useRef } from "react";

type Props = {
  type: string;
  name: string;
  value?: string | number;
  min?: number;
  max?: number;
  defaultValue?: string | number;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  isFocused?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  error?: string;
};

export function Input({
  type = "text",
  name,
  value,
  min,
  max,
  defaultValue,
  className,
  autoComplete,
  placeholder,
  required,
  isFocused,
  handleChange,
  isDisabled = false,
  error,
}: Props) {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && input.current) {
      input.current.focus();
    }
  }, [isFocused]);

  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        id={name}
        disabled={isDisabled}
        min={min}
        max={max}
        className={`focus:ring-mjengo-red-500 text-sm focus:border-2 focus:outline-none focus:border-mjengo-red-500 block w-full sm:text-sm border-gray-300 border h-[38px] px-4 rounded text-black placeholder-gray-600 ${
          error ? "border-red-300" : ""
        } ${className}`}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <div className="mt-0.5 ml-2 text-red-600 text-sm">{error}</div>}
    </div>
  );
}
