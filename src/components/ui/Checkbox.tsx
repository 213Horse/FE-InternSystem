import React, { FC } from 'react';

type Props = {
    checked: boolean | undefined;
    change: React.FC;
};

export default function Checkbox({ checked, change }: Props) {
    return (
        <div className="flex items-center">
            <input type="checkbox" id="customCheckbox" className="hidden" checked={checked} onChange={change} />
            <label htmlFor="customCheckbox" className="flex items-center cursor-pointer">
                <div className="relative">
                    <div className="absolute border w-4 h-4 bg-white border-gray-300 rounded"></div>
                    <div className="absolute transform scale-0 origin-center transition-transform duration-300 ease-in-out opacity-0">
                        <svg
                            className="w-3 h-3 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </label>
        </div>
    );
}
