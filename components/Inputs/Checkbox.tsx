import React from "react";

type Props = {
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({ name, value, handleChange }: Props) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-red-700 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
            placeholder="Enter your email"
        />
    );
}
