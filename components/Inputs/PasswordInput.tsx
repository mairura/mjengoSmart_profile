import React, { useEffect, useRef, useState } from "react";
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

type Props = {
    name: string;
    value: string;
    className?: string;
    autoComplete?: string;
    placeholder?: string;
    required?: boolean;
    isFocused?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};

export function PasswordInput({
    name,
    value,
    className,
    autoComplete,
    placeholder,
    required,
    isFocused,
    handleChange,
    error,
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const [showPassword, setShowPassword] = useState(false);

    return (
        <>
      <div className="relative rounded-md w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          className={`shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 px-4 rounded mb-2 ${
            error && 'border-red-300'
          } ${className}`}
          ref={inputRef}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
        />
        <div
          onClick={() => setShowPassword((current) => !current)}
          className="cursor-pointer absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          {showPassword ? (
            <IoEyeOffOutline className="h-6 w-6 text-gray-400" aria-hidden="true" />
          ) : (
            <IoEyeOutline className="h-6 w-6 text-gray-400" aria-hidden="true" />
          )}
        </div>
      </div>
      {error && <div className="mt-0.5 ml-2 text-red-600 text-sm">{error}</div>}
    </>
    );
}
