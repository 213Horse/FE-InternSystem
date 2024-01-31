import React, { ChangeEvent, ReactNode } from 'react';

type Props = {
    icon?: ReactNode;
    title: string;
    type?: string;
    className?: string;
    value?: string | string[];
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    name?: string;
};

export default function Input({ icon, title, type, className, value, onChange, name, ...props }: Props) {
    return (
        <main className="relative">
            <input
                className={`${className} border w-full text-sm font-normal px-3 py-1 rounded-[15px] focus:outline-none`}
                type={type ? type : 'text'}
                placeholder={title}
                value={value}
                onChange={onChange}
                name={name}
                required
                {...props}
            />
            <div className="absolute right-[3%] top-1/2 -translate-y-[50%] text-gray-500">{icon}</div>
        </main>
    );
}
