import DropdownStatus from '@/components/ui/DropDownStatus';
import FormSearchConfirm from '@/components/ui/FormSearchConfirm';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import Table from '@/components/ui/Table';
import { Button } from '@/components/ui/button';

import { ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';
import { FaEye, FaPlus, FaRegArrowAltCircleDown, FaRegEdit, FaRegTrashAlt, FaSearch, FaUser } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import FormAddnewIntern from './FormAddNewIntern';
import { useDispatch } from 'react-redux';
import { fetchApiGetGroup, fetchApiPostGroup } from '@/redux/slices/GroupZaloSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

type Props = {};

export default function GroupList({}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [openModalCreateGroup, setOpenModalCreateGroup] = useState<boolean>(false);
    const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);
    const [openModalView, setOpenModalView] = useState<boolean>(false);
    const isMobile = useMediaQuery({ query: '(max-width:678px)' });

    const dispatch = useDispatch<AppDispatch>();

    const data = useSelector((state: RootState) => state.group.data);
    const columns = [
        {
            label: 'Tên nhóm',
            accessor: 'tenNhom',
        },
        {
            label: 'Link nhóm',
            accessor: 'linkNhom',
        },
        {
            label: 'Id Mentor',
            accessor: 'idMentor',
        },
        {
            label: 'Mentor',
            accessor: 'mentor',
        },
        {
            label: 'User Nhóm zalo',
            accessor: 'userNhomZalos',
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
            Cell: ({}) => <DropdownStatus statusOptions={['passed', 'failed', 'Pending']} selectOption="Pending" />,
        },
        { label: 'Interviewer', accessor: 'interviewer' },
        {
            label: 'Status',
            accessor: 'status',
            Cell: ({}) => <DropdownStatus statusOptions={['passed', 'failed', 'Pending']} selectOption="Pending" />,
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

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOpenModalCreateGroup = () => {
        setOpenModalCreateGroup((prev) => !prev);
    };
    const handleOpenView = () => {
        setOpenModalView((prev) => !prev);
    };
    const handleOpenModalAdd = () => {
        setOpenModalAdd((prev) => !prev);
    };

    useEffect(() => {
        dispatch(fetchApiGetGroup());
    }, [dispatch]);

    const [dataGroup, setDataGroup] = useState<{ [key: string]: string }>({});
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataGroup((prev) => ({ ...prev, [name]: value }));
    };
    const handleCreateGroupZalo = (e: any) => {
        e.preventDefault();
        dispatch(fetchApiPostGroup(dataGroup));
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
                    <Table columns={columns} data={data} check />
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
                        {/* <div className="flex flex-col gap-2">
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
                        </div> */}
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold" htmlFor="">
                                Group Zalo
                            </label>
                            <Input
                                value={dataGroup.tenNhom}
                                name="tenNhom"
                                onChange={handleChangeInput}
                                className="py-2"
                                title="FE Intern System"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold" htmlFor="">
                                Link Group
                            </label>
                            <Input
                                value={dataGroup.linkNhom}
                                name="linkNhom"
                                onChange={handleChangeInput}
                                className="py-2"
                                title="Nhập link group"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-base font-semibold" htmlFor="">
                                Mentor
                            </label>
                            <Input
                                value={dataGroup.idMentor}
                                name="idMentor"
                                onChange={handleChangeInput}
                                className="py-2"
                                title=" Mentor"
                            />
                        </div>
                    </div>
                    <Button
                        variant={'info'}
                        size={'default'}
                        leftIcon={<FaUser />}
                        className="mt-4 lg:float-right lg:mr-10"
                        onClick={handleCreateGroupZalo}
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
