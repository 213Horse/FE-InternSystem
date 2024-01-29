import Input from '@/components/ui/Input';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

type Props = {};

export default function FormSendEmail({}: Props) {
    return (
        <div className="flex items-end w-full gap-3">
            <div className="relative w-2/5">
                <h3>Choose Email</h3>
                <Input
                    type="button"
                    className="rounded-[15px] py-2 cursor-pointer"
                    value="Types of Email"
                    title=""
                    icon={<FaChevronDown />}
                />
                <div className="border-[2px] rounded-[15px] text-white mt-2">
                    <div className="px-2 py-1 text-gray-500 cursor-pointer hover:bg-gray-100">Email interview</div>
                    <div className="px-2 py-1 text-gray-500 cursor-pointer hover:bg-gray-100">Email result</div>
                    <div className="px-2 py-1 text-gray-500 cursor-pointer hover:bg-gray-100">
                        Internship information
                    </div>
                </div>
            </div>
            <div className="w-3/5">
                <textarea
                    placeholder="Enter your mail..."
                    name=""
                    id=""
                    className="w-full py-2 border border-gray-400 h-36 px-2 focus:border-gray-400 outline-0 rounded-[15px]"
                ></textarea>
            </div>
        </div>
    );
}
