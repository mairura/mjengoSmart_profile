import React, { useEffect, useRef } from "react";

type Props = {
    name: string;
    value?: string;
    defaultValue?: string;
    className?: string;
    autoComplete?: string;
    placeholder?: string;
    required?: boolean;
    isFocused?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    error?: string;
};
export function TextArea({
    name,
    value,
    defaultValue,
    className,
    autoComplete,
    placeholder,
    required,
    isFocused,
    handleChange,
    rows,
    error,
}: Props) {
    const input: any = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <textarea
                name={name}
                value={value}
                defaultValue={defaultValue}
                id={name}
                className={
                    ` focus:ring-mjengo-red-500 text-sm focus:border-mjengo-red-500 block w-full sm:text-sm border-gray-300 px-4 rounded  ${
                        error && "border-red-300"
                    } ` + className
                }
                ref={input}
                autoComplete={autoComplete}
                rows={rows}
                required={required}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
            {error && (
                <div className="mt-0.5 ml-2 text-red-600 text-sm">{error}</div>
            )}
        </div>
    );
}
