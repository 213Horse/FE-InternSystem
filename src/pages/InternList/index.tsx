import ButtonCustom from '@/components/Custom/ButtonCustom';
import DropdownCustom from '@/components/Custom/DropdownCustom';
import FormSearchApprove from '@/components/ui/FormSearchApprove';
import FormSearchConfirm from '@/components/ui/FormSearchConfirm';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import Table, { TableColumn } from '@/components/ui/Table';
import { Button } from '@/components/ui/button';
import { fetchInternList } from '@/redux/slices/InternListSlice';
import { RootState } from '@/redux/store';
import { Eye, MailCheckIcon, Pen, PenSquareIcon, PlusCircleIcon, Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AiFillFunnelPlot, AiOutlineClockCircle } from 'react-icons/ai';
import { CiLock, CiMenuKebab } from 'react-icons/ci';

import { FaSave, FaSearch } from 'react-icons/fa';
import { GoMail, GoSearch } from 'react-icons/go';
import { IoFilterSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const ListManagement = () => {
    const [showModalView, setShowModalView] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalReport, setShowModalReport] = useState<boolean>(false);

    const dispatch = useDispatch<any>();
    const internsData = useSelector((state: RootState) => state.interns.data);

    console.log(internsData);

    useEffect(() => {
        dispatch(fetchInternList('https://internsystem.zouzoumanagement.xyz/api/interns/get'));
    }, [dispatch]);

    const handleShowModalView = () => {
        setShowModalView((prev) => !prev);
    };

    const handleShowModal = () => {
        setShowModal((prev) => !prev);
    };

    const handleShowModalReport = () => {
        setShowModalReport((prev) => !prev);
    };
    const columns = [
        { label: 'Intern ID', accessor: 'mssv' },
        { label: 'Start Date', accessor: 'startDate' },
        { label: 'Finish Date', accessor: 'endDate' },
        { label: 'Full Name', accessor: 'hoTen' },
        { label: 'Date Of Birth', accessor: 'ngaySinh' },
        { label: 'Phone Number', accessor: 'sdt' },
        { label: 'Position', accessor: 'viTri' },
        { label: 'School', accessor: 'truongHoc' },
        { label: 'Address', accessor: 'diaChi' },
        { label: 'Email', accessor: 'emailCaNhan' },
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
            accessor: 'Comments',
            Cell: ({}) => (
                <Button className="bg-white text-black border rounded-2xl" rightIcon={<Eye className="ml-2" />}>
                    2 Comments
                </Button>
            ),
        },
        { label: 'Role', accessor: 'Role' },
        { label: 'Project', accessor: 'duAn' },
        { label: 'Group Zalo', accessor: 'nhomZalo' },
        { label: 'Mentor', accessor: 'Mentor' },
        {
            label: 'Status',
            accessor: 'Status',
            Cell: ({}) => (
                <DropdownCustom
                    title="Pending"
                    onSelect={() => {}}
                    options={['Approved', 'Rejected']}
                    rounded="rounded-xl"
                ></DropdownCustom>
            ),
        },
        {
            label: 'Report Process',
            accessor: 'Report Process',
            Cell: ({}) => (
                <Button
                    className="rounded-xl bg-white text-black border"
                    rightIcon={<Pen className="ml-2" />}
                    onClick={handleShowModalReport}
                >
                    2 reports
                </Button>
            ),
        },
        {
            label: 'Button',
            accessor: 'Button',
            Cell: ({}) => (
                <Button className="rounded-2xl" variant={'outline'} onClick={handleShowModalView}>
                    View
                </Button>
            ),
        },
    ];
    const data = [
        {
            internID: 1,
            StartDate: '2 Jan 2023',
            FinishDate: '2 Apr 2023',
            FullName: 'Esther Eden',
            DateOfBirth: '25/08/2000',
            PhoneNumber: '0376782528',
            Position: 'Backend',
            School: 'FPT University',
            Address: 'District 9',
            Email: 'abc@gmail.com',
            Role: 'Leader',
            Project: 'Intern System',
            GroupZalo: 'FE Intern System',
            Mentor: 'Esther Eden',
        },
    ];
    const buttonData = [
        {
            id: 1,
            icon: MailCheckIcon,
            className: 'bg-purple-600 ',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Send email',
        },
        {
            id: 4,
            icon: PlusCircleIcon,
            className: 'bg-green-600 ',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Export Excel ',
        },
        {
            id: 2,
            icon: PenSquareIcon,
            className: 'bg-orange-500 ',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Edit',
        },
        {
            id: 3,
            icon: Trash2Icon,
            className: 'bg-red-600 ',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Delete',
        },
    ];

    return (
        <div className="flex flex-col gap-2">
            {/* <div className="rounded-2xl bg-white mb-6 flex items-center justify-between h-[40px] px-3 lg:h-[60px] lg:px-6">
                <p className="text-gray-500">Search for Information</p>
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
                                    <div className="flex gap-10">
                                        {buttonData.map((item) => (
                                            <ButtonCustom
                                                icon={item.icon}
                                                color={item.color}
                                                width={item.width}
                                                height={item.height}
                                                className={item.className}
                                            >
                                                {item.children}
                                            </ButtonCustom>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex gap-10">
                            {buttonData.map((item) => (
                                <ButtonCustom
                                    icon={item.icon}
                                    color={item.color}
                                    width={item.width}
                                    height={item.height}
                                    className={item.className}
                                >
                                    {item.children}
                                </ButtonCustom>
                            ))}
                        </div>
                    )}
                </>
            </div> */}
            <div className="bg-white rounded-3xl px-9 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-500 mb-4 sm:mb-0 hidden lg:flex">Search for Information</p>
                    <div className="flex flex-col md:flex-row gap-10 w-full lg:w-auto">
                        {buttonData.map((item) => (
                            <ButtonCustom
                                key={item.id}
                                icon={item.icon}
                                color={item.color}
                                width={item.width}
                                height={item.height}
                                className={item.className}
                            >
                                {item.children}
                            </ButtonCustom>
                        ))}
                    </div>
                </div>
            </div>

            <main className="grid grid-cols-1 px-4 pt-5 bg-white rounded-xl">
                <form className="flex flex-col items-start gap-5 mb-5 lg:items-center lg:flex-row">
                    <FormSearchConfirm />
                    <div className=" flex flex-col w-full gap-3 lg:w-1/5">
                        <ButtonCustom
                            icon={AiFillFunnelPlot}
                            className="bg-white"
                            color="black"
                            width="160"
                            height="45"
                        >
                            Clean filter
                        </ButtonCustom>

                        <ButtonCustom icon={GoSearch} className="bg-blue-500" color="white" width="160" height="45">
                            Search
                        </ButtonCustom>
                    </div>
                </form>

                <Table columns={columns} data={internsData} check />
            </main>

            <Modal width={800} height={500} toggleShow={handleShowModal} Isvisible={showModal} title={'Send Email'}>
                <div className="my-5 px-6">
                    <h1 className="font-bold">Choose types of Email</h1>
                    <div className="flex flex-col">
                        <div className="flex gap-5">
                            <DropdownCustom
                                title="Types of Email"
                                options={[
                                    'Email interview',
                                    'Email result',
                                    'Internship information',
                                    'Additional Profile',
                                    'Return Profile',
                                ]}
                                onSelect={() => {}}
                            ></DropdownCustom>
                            <textarea className="border grow h-[300px]" placeholder="Enter your email"></textarea>
                        </div>
                        <Button className="w-[150px] mt-5 ml-auto" variant={'info'} leftIcon={<GoMail />}>
                            Send email
                        </Button>
                    </div>
                </div>
            </Modal>

            <Modal
                width={800}
                title={'View details of Intern'}
                toggleShow={handleShowModalView}
                Isvisible={showModalView}
            >
                <div className="grid grid-cols-3 gap-5 p-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Intern ID
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Full Name
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Phone Number
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Position
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            School
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Address
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Email
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Link CV
                        </label>
                        {/* <Input title="Intern Id" className="rounded-[15px]" /> */}
                        <a href="" className="text-base text-black hover:underline">
                            Link
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Mentor
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Project
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Group Zalo
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-base font-semibold">
                            Role
                        </label>
                        <Input title="Intern Id" className="rounded-[15px]" />
                    </div>
                </div>
            </Modal>

            <Modal
                width={800}
                title={'View details of Intern'}
                toggleShow={handleShowModalReport}
                Isvisible={showModalReport}
            >
                <div className="flex flex-col">
                    <div className="grid grid-cols-3 gap-5 p-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Position
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Mentor
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="text-base font-semibold">
                                Project
                            </label>
                            <Input title="Intern Id" className="rounded-[15px]" />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="" className="text-base font-semibold">
                                Report
                            </label>
                            <Input title="Intern Id" className="rounded-[15px] " />
                        </div>
                    </div>
                    <Button leftIcon={<FaSave />} className="ml-auto mr-8" variant={'info'}>
                        Save Changes
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default ListManagement;
