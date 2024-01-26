import DropdownCustom from '@/components/Custom/DropdownCustom';
import FormSearchApprove from '@/components/ui/FormSearchApprove';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import Table, { TableColumn } from '@/components/ui/Table';
import { Button } from '@/components/ui/button';
import { Eye, Pen } from 'lucide-react';
import { useState } from 'react';

import { FaPlus, FaRegArrowAltCircleDown, FaRegEdit, FaRegTrashAlt, FaSave, FaSearch } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { IoFilterSharp } from 'react-icons/io5';

const ListManagement = () => {
    const [showModalView, setShowModalView] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalReport, setShowModalReport] = useState<boolean>(false);

    const handleShowModalView = () => {
        setShowModalView((prev) => !prev);
    };

    const handleShowModal = () => {
        setShowModal((prev) => !prev);
    };

    const handleShowModalReport = () => {
        setShowModalReport((prev) => !prev);
    };
    const column: TableColumn[] = [
        { label: 'Intern ID', dataIndex: 'internID' },
        { label: 'Start Date', dataIndex: 'StartDate' },
        { label: 'Finish Date', dataIndex: 'FinishDate' },
        { label: 'Full Name', dataIndex: 'FullName' },
        { label: 'Date Of Birth', dataIndex: 'DateOfBirth' },
        { label: 'Phone Number', dataIndex: 'PhoneNumber' },
        { label: 'Position', dataIndex: 'Position' },
        { label: 'School', dataIndex: 'School' },
        { label: 'Address', dataIndex: 'Address' },
        { label: 'Email', dataIndex: 'Email' },
        {
            label: 'CV',
            dataIndex: 'cv',
            render: (
                <a href="#" className="underline">
                    Link
                </a>
            ),
        },
        {
            label: 'Comments',
            dataIndex: 'Comments',
            render: (
                <Button className="bg-white text-black border rounded-2xl" rightIcon={<Eye className="ml-2" />}>
                    2 Comments
                </Button>
            ),
        },
        { label: 'Role', dataIndex: 'Role' },
        { label: 'Project', dataIndex: 'Project' },
        { label: 'Group Zalo', dataIndex: 'GroupZalo' },
        { label: 'Mentor', dataIndex: 'Mentor' },
        {
            label: 'Status',
            dataIndex: 'Status',
            render: (
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
            dataIndex: 'Report Process',
            render: (
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
            dataIndex: 'Button',
            render: (
                <Button className="rounded-2xl" variant={'outline'} onClick={handleShowModalView}>
                    View
                </Button>
            ),
        },
    ];
    const tableData: { [key: string]: string | number }[] = [
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

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between bg-white h-[70px] mb-3 rounded-3xl px-10">
                <p className="text-gray-500">Search for Information</p>
                <div className="flex gap-10">
                    <Button size={'sm'} leftIcon={<GoMail />} variant={'info'} onClick={handleShowModal}>
                        Send email
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
            </div>

            <main className="flex flex-col bg-white px-4 pt-5 rounded-xl">
                <form className="flex items-center gap-5 mb-4">
                    <FormSearchApprove />
                    <div className="flex flex-col gap-3 w-1/5">
                        <Button
                            className="w-4/5 text-black border-black"
                            leftIcon={<IoFilterSharp />}
                            variant={'outline'}
                            size={'sm'}
                        >
                            Clean Filters
                        </Button>
                        <Button
                            className="w-4/5 text-black border-black"
                            leftIcon={<FaSearch />}
                            variant={'default'}
                            size={'sm'}
                        >
                            search
                        </Button>
                    </div>
                </form>

                <Table headers={column} data={tableData} className="" check />
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
