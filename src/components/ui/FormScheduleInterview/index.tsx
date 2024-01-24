import React, { useState } from 'react';
import Input from '../Input';
import { GoChevronDown } from 'react-icons/go';
import DropdownCustom from '@/components/Custom/DropdownCustom';
import { Button } from '../button';
import { AiOutlineClockCircle } from 'react-icons/ai';

type Props = {};

export default function ScheduleInterview({}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = (e: any) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    };
    return (
        <form className="">
            <div className="grid grid-cols-2 gap-5 mb-5 lg:grid-cols-3">
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Date
                    </label>
                    <Input type="date" title="DD/MM/YYYY" className="rounded-[15px] text-[#CBD2DC90] " />
                </div>
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Start Time
                    </label>
                    <Input title="12:00 AM" className="rounded-[15px] text-[#CBD2DC90] " />
                </div>
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Time Duration
                    </label>
                    <Input icon={<GoChevronDown />} title="12:00 AM" className="rounded-[15px] text-[#CBD2DC90]" />
                </div>
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Types of Interviews
                    </label>
                    <select className=" border border-gray-300 text-[#CBD2DC90] rounded-[15px] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ">
                        <option selected>Online/Offline</option>
                        <option value="online">online</option>
                        <option value="offline">offline</option>
                    </select>
                </div>
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Interviewer
                    </label>
                    <div className="relative flex">
                        {/* <DropdownCustom options={['1', '2', '3']} title="Position" onSelect={() => {}} /> */}
                        <Button
                            onClick={handleOpen}
                            variant={'info'}
                            // id="menu-button"
                            // aria-expanded="true"
                            // aria-haspopup="true"
                            // type="button"
                            // onAuxClick={handleOpen}
                        >
                            Position
                        </Button>
                        {isOpen && (
                            <div
                                className="absolute lg:right-[135px] lg:top-[25px] top-[25px] z-10 mt-2 w-[5rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                // role="menu"
                                // aria-orientation="vertical"
                                // aria-labelledby="menu-button"
                                tabIndex={-1}
                            >
                                <div className="py-1" role="none">
                                    <div
                                        className="block p-1 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-0"
                                    >
                                        Back end
                                    </div>
                                    <div
                                        className="block p-1 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-0"
                                    >
                                        Front end
                                    </div>
                                    <div
                                        className="block p-1 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="menu-item-0"
                                    >
                                        BA
                                    </div>
                                </div>
                            </div>
                        )}

                        <select className=" border border-gray-300 text-[#CBD2DC90] rounded-[15px] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ">
                            <option selected>Nguyen Van A</option>
                            <option value="Intern">Intern</option>
                            <option value="Senior">Intern</option>
                            <option value="junior">junior</option>
                        </select>
                    </div>
                </div>
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Link Google Meet/Address
                    </label>
                    <Input title="" className="rounded-[15px] text-[#CBD2DC90]" />
                </div>
            </div>
            <div className="grid gap-5 grid-col-1 lg:grid-cols-2">
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Send Email
                    </label>
                    <Input icon={<GoChevronDown />} title="Type of email" className="rounded-[15px] text-[#CBD2DC90]" />
                </div>

                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        Rank
                    </label>
                    <select className=" border border-gray-300 text-[#CBD2DC90] rounded-[15px] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ">
                        <option selected>Intern/Senior/junior</option>
                        <option value="Intern">Intern</option>
                        <option value="Senior">Intern</option>
                        <option value="junior">junior</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        to:
                    </label>
                    <Input title="" className="rounded-[15px] text-[#CBD2DC90] " />
                </div>
                <div className="">
                    <label className="text-base font-semibold" htmlFor="">
                        BCC:
                    </label>
                    <Input title="" className="rounded-[15px] text-[#CBD2DC90] " />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5 lg:grid-cols-3">
                <div className="">
                    {/* <DropdownCustom title="Type of email" options={['1', '2', '3']} onSelect={() => {}} /> */}
                    <label className="text-base font-semibold" htmlFor="">
                        Choose types of Email
                    </label>
                    <select className=" border border-gray-300 text-[#CBD2DC90] rounded-[15px] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ">
                        <option selected>Intern/Senior/junior</option>
                        <option value="Intern">Email Interview</option>
                        <option value="Senior">Email Result</option>
                        <option value="junior">Internship information</option>
                    </select>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <textarea
                        placeholder="Enter Your Mail...."
                        className="rounded-[15px] text-[#CBD2DC90] w-full p-2 border border-gray-300 outline-none"
                    />
                </div>
            </div>
            <Button leftIcon={<AiOutlineClockCircle />} variant={'info'} size={'sm'} className="float-right mt-4 mr-10">
                Set schedule
            </Button>
        </form>
    );
}
