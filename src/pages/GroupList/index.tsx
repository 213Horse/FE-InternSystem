import DropdownStatus from '@/components/ui/DropDownStatus';
import FormSearchConfirm from '@/components/ui/FormSearchConfirm';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import Table from '@/components/ui/Table';
import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';
import { FaEye, FaPlus, FaRegArrowAltCircleDown, FaRegEdit, FaRegTrashAlt, FaSearch, FaUser } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import FormAddnewIntern from './FormAddNewIntern';

type Props = {};

export default function GroupList({}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openModalCreateGroup, setOpenModalCreateGroup] = useState<boolean>(false);
    const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);
    const [openModalView, setOpenModalView] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: '(max-width:678px)' });
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const columns = [
        { label: "intern's ID", accessor: 'id' },
        { label: 'Date Interview', accessor: 'dateinterview' },
        { label: 'Time Interview', accessor: 'timeinterview' },
        { label: 'Full Name', accessor: 'fullname' },
        { label: 'Date Of Birth', accessor: 'dateofbirth' },
        { label: 'Phone Number', accessor: 'phone' },
        { label: 'Position', accessor: 'position' },
        { label: 'School', accessor: 'school' },
        { label: 'Address', accessor: 'address' },
        { label: 'Email', accessor: 'email' },
        {
            label: 'CV',
            accessor: 'cv',
            Cell: ({}) => (
                <a href="#" className="underline">
                    Link
                </a>
            ),
        },
        {
            label: 'Comments',
            accessor: 'commentCv',
            Cell: ({}) => (
                <div className="flex items-center gap-2">
                    <Button className="text-black border-black" rightIcon={<FaEye />} variant={'outline'} size={'sm'}>
                        2 Comments
                    </Button>
                    <FaPlus className="cursor-pointer" />
                </div>
            ),
        },
        {
            label: 'Confirm Email',
            accessor: 'confirmEmail',
            Cell: ({}) => <DropdownStatus statusOptions={['passed', 'failed', 'Pending']} />,
        },
        { label: 'Interviewer', accessor: 'interviewer' },
        {
            label: 'Status',
            accessor: 'status',
            Cell: ({}) => <DropdownStatus statusOptions={['passed', 'failed', 'Pending']} />,
        },
        {
            label: 'Button',
            accessor: 'button',
            Cell: () => (
                <div className="flex gap-2">
                    <Button variant={'outline'} onClick={handleOpenView}>
                        view
                    </Button>
                </div>
            ),
        },
    ];
    const data = [
        {
            id: 1,
            dateSubmit: '12/09/2023',
            fullName: 'Phạm Văn vĩ',
            dateOfBirth: '25/08/2000',
            phone: '0796880078',
            position: 'Front End',
            school: 'Tôn Đức Thắng University',
            address: 'Dương Bá Trạc,Quận 8, Tp HCM',
            email: 'phamviabc@gamil.com',
        },
        {
            id: 2,
            dateSubmit: '12/09/2023',
            fullName: 'Phạm Văn Nhiên',
            dateOfBirth: '25/08/2000',
            phone: '0796880078',
            position: 'Front End developer',
            school: 'Tôn Đức Thắng',
            address: 'Quận 8, Tp HCM',
            email: 'phamviabc@gamil.com',
        },
        {
            id: 3,
            dateSubmit: '12/12/2023',
            fullName: 'Nguyễn Minh Thùy',
            dateOfBirth: '05/04/2000',
            phone: '0776586818',
            position: 'Back-end',
            school: 'Tôn Đức Thắng',
            address: 'Quận 8, Tp HCM',
            email: 'nmthuy@gamil.com',
        },
    ];

    const handleOpenModalCreateGroup = () => {
        setOpenModalCreateGroup((prev) => !prev);
    };
    const handleOpenView = () => {
        setOpenModalView((prev) => !prev);
    };
    const handleOpenModalAdd = () => {
        setOpenModalAdd((prev) => !prev);
    };
    return (
        <div className="flex flex-col gap-2">
            <div className="rounded-2xl bg-white mb-6 flex items-center justify-between h-[40px] px-3 lg:h-[60px] lg:px-6">
                <div
                    className="lg:px-3 p-1 text-xs lg:text-xl text-gray-500 focus:border-[#000] focus:outline-0"
                    // type="text"
                    // placeholder="Search information"
                >
                    Search information
                </div>
                <>
                    {isMobile ? (
                        <div className="relative">
                            <Button
                                onClick={toggleDropdown}
                                variant={'outline'}
                                size={'sm'}
                                type="button"
                                data-dropdown-toggle="dropdown"
                                className=""
                            >
                                <CiMenuKebab />
                            </Button>
                            {isOpen && (
                                <div
                                    id="dropdown"
                                    className="absolute right-0 z-10 flex flex-col gap-2 p-2 bg-white border"
                                >
                                    <Button
                                        size={'sm'}
                                        leftIcon={<AiOutlineClockCircle />}
                                        variant={'info'}
                                        onClick={handleOpenModalCreateGroup}
                                    >
                                        Create Group
                                    </Button>
                                    <Button size={'sm'} leftIcon={<FaRegArrowAltCircleDown />} variant={'success'}>
                                        Export Excel
                                    </Button>
                                    <Button size={'sm'} leftIcon={<FaRegEdit />} variant={'secondary'}>
                                        Edit
                                    </Button>
                                    <Button size={'sm'} leftIcon={<FaRegTrashAlt />} variant={'danger'}>
                                        Delete
                                    </Button>
                                    <Button onClick={handleOpenModalAdd} size={'sm'} leftIcon={<FaPlus />}>
                                        Add New Intern
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Button
                                size={'sm'}
                                leftIcon={<AiOutlineClockCircle />}
                                variant={'info'}
                                onClick={handleOpenModalCreateGroup}
                            >
                                Create Group
                            </Button>
                            <Button size={'sm'} leftIcon={<FaRegArrowAltCircleDown />} variant={'success'}>
                                Export Excel
                            </Button>
                            <Button size={'sm'} leftIcon={<FaRegEdit />} variant={'secondary'}>
                                Edit
                            </Button>
                            <Button size={'sm'} leftIcon={<FaRegTrashAlt />} variant={'danger'}>
                                Delete
                            </Button>
                            <Button size={'sm'} leftIcon={<FaPlus />} onClick={handleOpenModalAdd}>
                                Add New Intern
                            </Button>
                        </div>
                    )}
                </>
            </div>
            <main className="flex flex-col px-4 pt-5 bg-white rounded-xl">
                <form className="flex flex-col items-start w-full gap-5 mb-4 lg:items-center lg:flex-row">
                    <FormSearchConfirm />
                    <div className="flex flex-col w-full gap-3 lg:w-1/5">
                        <Button
                            className="text-black border-black "
                            leftIcon={<IoFilterSharp />}
                            variant={'outline'}
                            size={'sm'}
                        >
                            Clean Filters
                        </Button>
                        <Button
                            className="text-black border-black"
                            leftIcon={<FaSearch />}
                            variant={'default'}
                            size={'sm'}
                        >
                            search
                        </Button>
                    </div>
                </form>
                <div className="grid grid-cols-1">
                    <Table columns={columns} data={data} />
                </div>
            </main>

            {/* modal Send Email */}
            <Modal
                width={isMobile ? 500 : 700}
                Isvisible={openModalCreateGroup}
                toggleShow={handleOpenModalCreateGroup}
                title="Create Group"
            >
                <form>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold" htmlFor="">
                                Role
                            </label>
                            <select className="py-2 border border-gray-300 text-gray-500 rounded-[15px] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ">
                                <option selected>Mentor/Leader/Intern</option>
                                <option value="Mentor">Mentor</option>
                                <option value="Leader">Leader</option>
                                <option value="Intern">Intern</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold" htmlFor="">
                                Project
                            </label>
                            <select className="py-2 border border-gray-300 text-gray-500 rounded-[15px] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1 ">
                                <option selected>Intern System</option>
                                <option value="Mentor">Mentor</option>
                                <option value="Leader">Leader</option>
                                <option value="Intern">Intern</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold" htmlFor="">
                                Group Zalo
                            </label>
                            <Input className="py-2" title="FE Intern System" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold" htmlFor="">
                                Mentor
                            </label>
                            <Input className="py-2" title=" Mentor" />
                        </div>
                    </div>
                    <Button
                        variant={'info'}
                        size={'default'}
                        leftIcon={<FaUser />}
                        className="mt-4 lg:float-right lg:mr-10"
                    >
                        Create Group
                    </Button>
                </form>
            </Modal>

            <Modal
                width={isMobile ? 500 : 700}
                Isvisible={openModalAdd}
                toggleShow={handleOpenModalAdd}
                title="Add New Intern"
            >
                <FormAddnewIntern />
            </Modal>
        </div>
    );
}
