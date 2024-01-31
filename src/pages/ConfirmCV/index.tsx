import DropdownStatus from '@/components/ui/DropDownStatus';
import FormSearchConfirm from '@/components/ui/FormSearchConfirm';
import Modal from '@/components/ui/Modal';
import Table from '@/components/ui/Table';
import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';
import { FaEye, FaPlus, FaRegArrowAltCircleDown, FaRegEdit, FaRegTrashAlt, FaSearch } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import FormSendEmail from './FormSendEmail';
import FormDetailIntern from './FormDetailIntern';

type Props = {};

export default function ConfirmCV({}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openModalSenEmail, setOpenModalSenEmail] = useState<boolean>(false);
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
            Cell: ({}) => <DropdownStatus selectOption="pending" statusOptions={['passed', 'failed', 'Pending']} />,
        },
        { label: 'Interviewer', accessor: 'interviewer' },
        {
            label: 'Status',
            accessor: 'status',
            Cell: ({}) => <DropdownStatus selectOption="pending" statusOptions={['passed', 'failed', 'Pending']} />,
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

    const handleOpenModalSendEmail = () => {
        setOpenModalSenEmail((prev) => !prev);
    };
    const handleOpenView = () => {
        setOpenModalView((prev) => !prev);
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
                                        onClick={handleOpenModalSendEmail}
                                    >
                                        Send Email
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
                                    <Button size={'sm'} leftIcon={<FaPlus />}>
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
                                onClick={handleOpenModalSendEmail}
                            >
                                Send Email
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
                            <Button size={'sm'} leftIcon={<FaPlus />}>
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
                    <Table columns={columns} data={data} check />
                </div>
            </main>

            {/* modal Send Email */}
            <Modal
                width={isMobile ? 500 : 500}
                Isvisible={openModalSenEmail}
                toggleShow={handleOpenModalSendEmail}
                title="Send Email"
            >
                <FormSendEmail />
            </Modal>

            <Modal
                width={isMobile ? 500 : 700}
                Isvisible={openModalView}
                toggleShow={handleOpenView}
                title="View details of Intern"
            >
                <FormDetailIntern />
            </Modal>
        </div>
    );
}
