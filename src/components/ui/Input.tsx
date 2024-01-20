import React, { ReactNode } from 'react';

type Props = {
    icon?: ReactNode;
    title: string;
    type?: string;
    className?: string;
    value?: string;
};

export default function Input({ icon, title, type, className, value, ...props }: Props) {
    return (
        <main className="relative">
            <input
                className={`${className} border w-full text-sm font-normal px-3 py-2 focus:outline-none`}
                type={type ? type : 'text'}
                placeholder={title}
                value={value}
            />
            <div className="absolute right-[3%] top-1/2 -translate-y-[50%] text-gray-500">{icon}</div>
        </main>
    );
}
