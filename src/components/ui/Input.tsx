import React, { ReactNode } from 'react';

type Props = {
    icon?: ReactNode;
    title: string;
    type?: string;
};

export default function Input({ icon, title, type, ...props }: Props) {
    return (
        <main className="relative">
            <input
                className="border w-full text-sm font-normal px-3 py-1 rounded-sm focus:outline-none"
                type={type ? type : 'text'}
                name=""
                id=""
                placeholder={title}
            />
            <div className="absolute right-[3%] top-1/2 -translate-y-[50%] text-gray-500">{icon}</div>
        </main>
    );
}
