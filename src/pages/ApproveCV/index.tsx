import ScheduleInterview from '@/components/ui/FormScheduleInterview';
import FormSearchApprove from '@/components/ui/FormSearchApprove';
import Modal from '@/components/ui/Modal';
import Table, { TableColumn } from '@/components/ui/Table';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaEye, FaPlus, FaRegArrowAltCircleDown, FaRegEdit, FaRegTrashAlt, FaSearch } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import FormViewDetailIntern from './FormViewDetailIntern';
import DropdownStatus from '@/components/ui/DropDownStatus';
// import TabsApprove from './TabsApprove';

type Props = {};

const ApproveCV = ({}: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalView, setShowModalView] = useState<boolean>(false);
    const [showModalComment, setShowModalComment] = useState<boolean>(false);
    const [showModalFeedback, setShowModalFeedback] = useState<boolean>(false);

    const handleOpenModal = () => {
        setShowModal((prev) => !prev);
    };
    const handleOpenModalView = () => {
        setShowModalView((prev) => !prev);
    };
    const handleOpenModalComment = () => {
        setShowModalComment((prev) => !prev);
    };
    const handleOpenModalFeedback = () => {
        setShowModalFeedback((prev) => !prev);
    };

    const column: TableColumn[] = [
        { label: "intern's ID", dataIndex: 'internID' },
        { label: 'Date Submitted Form', dataIndex: 'dateSubmit' },
        { label: 'Full Name', dataIndex: 'fullName' },
        { label: 'Date Of Birth', dataIndex: 'dateOfBirth' },
        { label: 'Phone number', dataIndex: 'phone' },
        { label: 'Position', dataIndex: 'position' },

        { label: 'School', dataIndex: 'school' },
        { label: 'Address', dataIndex: 'address' },
        { label: 'Email', dataIndex: 'email' },
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
            label: 'Comments CV',
            dataIndex: 'commentCv',
            render: (
                <div className="flex items-center gap-2">
                    <Button className="text-black border-black" rightIcon={<FaEye />} variant={'outline'} size={'sm'}>
                        2 Comments
                    </Button>
                    <FaPlus onClick={handleOpenModalComment} className="cursor-pointer" />
                </div>
            ),
        },
        {
            label: 'Status',
            dataIndex: 'status',
            render: <DropdownStatus statusOptions={['passed', 'failed', 'Pending']} />,
        },
        {
            label: 'Button',
            dataIndex: 'button',
            render: (
                <div className="flex gap-2">
                    <Button variant={'outline'} onClick={handleOpenModalView}>
                        view
                    </Button>
                    <Button variant={'outline'} onClick={handleOpenModalFeedback}>
                        feedbacks
                    </Button>
                </div>
            ),
        },
    ];
    const tableData: { [key: string]: string | number }[] = [
        {
            internID: 1,
            dateSubmit: '12/09/2023',
            fullName: 'Phạm Văn vĩ',
            dateOfBirth: '25/08/2000',
            phone: '0796880078',
            position: 'Front End developer',
            school: 'Tôn Đức Thắng',
            address: 'Quận 8, Tp HCM',
            email: 'phamviabc@gamil.com',
        },
        {
            internID: 2,
            dateSubmit: '12/09/2023',
            fullName: 'Phạm Văn Nhiên',
            dateOfBirth: '25/08/2000',
            phone: '0796880078',
            position: 'Front End developer',
            school: 'Tôn Đức Thắng',
            address: 'Quận 8, Tp HCM',
            email: 'phamviabc@gamil.com',
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="rounded-2xl bg-white mb-6 flex items-center justify-between h-[60px] px-6">
                <div
                    className="px-3 py-1 text-gray-500 focus:border-[#000] focus:outline-0"
                    // type="text"
                    // placeholder="Search information"
                >
                    Search information
                </div>
                <div className="flex items-center gap-3">
                    <Button size={'sm'} leftIcon={<AiOutlineClockCircle />} variant={'info'} onClick={handleOpenModal}>
                        Schedule interview
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

                <Table className="" headers={column} data={tableData} width={1000} />
            </main>

            <Modal
                width={700}
                Isvisible={showModal}
                toggleShow={handleOpenModal}
                title="Schedule interview for Intern's ID: xxxx"
            >
                <ScheduleInterview />
            </Modal>
            <Modal width={800} toggleShow={handleOpenModalView} Isvisible={showModalView} title={''}>
                <FormViewDetailIntern tabShow={1} />
            </Modal>
            <Modal width={800} toggleShow={handleOpenModalComment} Isvisible={showModalComment} title={''}>
                <FormViewDetailIntern tabShow={2} />
            </Modal>
            <Modal width={800} toggleShow={handleOpenModalFeedback} Isvisible={showModalFeedback} title={''}>
                <FormViewDetailIntern tabShow={3} />
            </Modal>
        </div>
    );
};

export default ApproveCV;
