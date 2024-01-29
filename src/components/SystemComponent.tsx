import { ChevronDown, Folder } from 'lucide-react';
import { useState } from 'react';

type Props = {
    data: Project;
};

const SystemComponent = ({ data }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (status: string) => {
        console.log(`Selected status: ${status}`);

        setIsOpen(false);
    };

    function formatDate(date: Date | string): string {
        if (typeof date === 'string') {
            date = new Date(date);
        }

        if (date instanceof Date && !isNaN(date.getTime())) {
            const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        } else {
            // Xử lý trường hợp date không phải là một đối tượng Date hợp lệ
            return 'Invalid Date';
        }
    }

    return (
        <div className="w-full bg-white min-h-10 shadow-md hover:shadow-lg rounded">
            <div className="flex justify-between border-b border-gray-300">
                <h1 className="font-bold text-lg p-3">{data.ten}</h1>
                <div className="flex items-center ">
                    <div className="dropdown">
                        <div className="relative inline-block text-left">
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className="flex justify-between w-36 h-8  items-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-yellow-50 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring "
                            >
                                In progress
                                <ChevronDown />
                            </button>

                            {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <a
                                            href="#"
                                            onClick={() => handleItemClick('Rejected')}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            Rejected
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => handleItemClick('Approved')}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            Approved
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <input className="mx-3 h-6 w-6" type="checkbox" />
                </div>
            </div>
            <div className="p-3">
                <div className="flex items-center py-3">
                    <h2 className="font-bold text-sm">Position:</h2>
                    <p className="font-medium text-gray-500 pl-1 text-sm">Back-End, Front-End, BA, Design</p>
                </div>
                <div className="flex items-center py-3">
                    <h3 className="font-bold text-sm">Technology: </h3>
                    <p className="font-medium text-gray-500 pl-1 text-sm">.NET, ReactJS, Trello,...</p>
                </div>
                <div className="flex items-center py-3">
                    <h3 className="font-bold text-sm">Leader - Sub Leader </h3>

                    <div className="flex ml-5 gap-2">
                        <img
                            src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                            className="w-9 h-9 rounded-full"
                            alt="image"
                        />
                        <img
                            src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                            className="w-9 h-9 rounded-full"
                            alt="image"
                        />
                    </div>
                </div>
                <div className="flex items-center py-3">
                    <h3 className="font-bold text-sm">Mentor</h3>
                    <div className="flex ml-5 gap-2">
                        <img
                            src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                            className="w-9 h-9 rounded-full"
                            alt="image"
                        />
                    </div>
                </div>

                <h3 className="font-bold text-sm py-3">Group Zalo: Link</h3>

                <div className="flex justify-between py-3">
                    <p className="font-medium text-green-400  text-sm">Start Date: {formatDate(data.thoiGianBatDau)}</p>
                    <p className="font-medium text-red-600  text-sm">
                        Release Date: {formatDate(data.thoiGianKetThuc)}
                    </p>
                </div>
                <div className="flex justify-between items-center py-3">
                    <div className="img-group">
                        <div className="flex items-center">
                            <div className="flex -space-x-3">
                                <img
                                    src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                                    alt="Avatar 1"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                                    alt="Avatar 2"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                                    alt="Avatar 3"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                                    alt="Avatar 3"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />

                                <div className="w-10 h-10 rounded-full border-2 border-white bg-red-200 flex items-center justify-center text-red-600">
                                    +2
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <Folder />
                        14 issues
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemComponent;
