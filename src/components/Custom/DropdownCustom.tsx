import { ChevronDownIcon } from 'lucide-react';
import React, { useState } from 'react';

interface DropdownProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
    title: string;
    width?: string;
    rounded?: string;
}

const DropdownCustom: React.FC<DropdownProps> = ({ options, onSelect, title, rounded }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-1/3 ">
            <button
                onClick={handleToggleDropdown}
                className={` w-full bg-white text-gray-600 p-4 border border-gray-300 flex items-center justify-between min-w-44 h-8 focus:outline-none gap-10 ${rounded}`}
            >
                <span className="truncate">{selectedOption || title}</span>
                <ChevronDownIcon className="h-5 w-5" />
            </button>
            {isOpen && (
                <div
                    className={`absolute top-6 mt-2 w-300 bg-white border border-gray-300 min-w-44 shadow-md z-10 h-[170px] overflow-scroll `}
                >
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelectOption(option)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200 truncate "
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownCustom;
