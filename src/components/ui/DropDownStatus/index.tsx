import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

type Props = {
    statusOptions: string[];
};

const DropdownStatus: React.FC<Props> = ({ statusOptions }) => {
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    // const statusOptions = ['Passed', 'Fail', 'Pending', 'Completed'];

    const handleStatusChange = (status: string) => {
        setSelectedStatus(status);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={` ${
                        selectedStatus === 'passed'
                            ? 'bg-[#eef8f0] text-[#449e3c]'
                            : selectedStatus === 'failed'
                            ? 'bg-red-500 text-[#000]'
                            : 'bg-gray-400 text-black'
                    }  flex gap-1 items-center rounded-xl px-3 py-1`}
                >
                    {selectedStatus || 'pending'}
                    <IoChevronDown />
                </button>
            </div>

            {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 z-10 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {statusOptions.map((status) => (
                            <button
                                key={status}
                                onClick={() => handleStatusChange(status)}
                                className={`${
                                    selectedStatus === status ? 'bg-gray-100 ' : 'text-gray-700'
                                } block px-2 w-full py-2 text-sm hover:bg-gray-300`}
                                role="menuitem"
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default DropdownStatus;
