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
import { useMediaQuery } from 'react-responsive';
import { CiMenuKebab } from 'react-icons/ci';
// import TabsApprove from './TabsApprove';

type Props = {};

const ApproveCV = ({}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalView, setShowModalView] = useState<boolean>(false);
    const [showModalComment, setShowModalComment] = useState<boolean>(false);
    const [showModalFeedback, setShowModalFeedback] = useState<boolean>(false);

    const isMobile = useMediaQuery({ query: '(max-width:678px)' });

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
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // const closeDropdown = () => {
    //     setIsOpen(false);
    // };

    const columns = [
        { label: "intern's ID", accessor: 'id', width: '50px' },
        { label: 'Date Submitted Form', accessor: 'dateSubmit' },
        { label: 'Full Name', accessor: 'fullName' },
        { label: 'Date Of Birth', accessor: 'dateOfBirth' },
        { label: 'Phone number', accessor: 'phone' },
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
            label: 'Comments CV',
            accessor: 'commentCv',
            Cell: ({}) => (
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
            accessor: 'status',
            Cell: () => (
                <div>
                    <DropdownStatus statusOptions={['passed', 'failed', 'Pending']} />
                </div>
            ),
        },
        {
            label: 'Button',
            accessor: 'button',
            Cell: () => (
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
    ];
    // const data = [
    //     { id: 1, name: 'John Doe', age: 25 },
    //     { id: 2, name: 'Jane Doe', age: 30 },
    //     // Add more data as needed
    // ];

    // const columns = [
    //     { Header: 'ID', accessor: 'id', width: '50' },
    //     { Header: 'Name', accessor: 'name', width: '200' },
    //     { Header: 'Age', accessor: 'age', width: '80' },
    // ];
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
                                        onClick={handleOpenModal}
                                    >
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
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Button
                                size={'sm'}
                                leftIcon={<AiOutlineClockCircle />}
                                variant={'info'}
                                onClick={handleOpenModal}
                            >
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
                    )}
                </>
            </div>

            <main className="flex flex-col px-4 pt-5 bg-white rounded-xl">
                <form className="flex flex-col items-start gap-5 mb-4 lg:items-center lg:flex-row">
                    <FormSearchApprove />
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

            <Modal
                width={isMobile ? 500 : 700}
                Isvisible={showModal}
                toggleShow={handleOpenModal}
                title="Schedule interview for Intern's ID: xxxx"
            >
                <ScheduleInterview />
            </Modal>
            <Modal width={isMobile ? 500 : 800} toggleShow={handleOpenModalView} Isvisible={showModalView} title={''}>
                <FormViewDetailIntern tabShow={1} />
            </Modal>
            <Modal
                width={isMobile ? 500 : 800}
                toggleShow={handleOpenModalComment}
                Isvisible={showModalComment}
                title={''}
            >
                <FormViewDetailIntern tabShow={2} />
            </Modal>
            <Modal
                width={isMobile ? 500 : 800}
                toggleShow={handleOpenModalFeedback}
                Isvisible={showModalFeedback}
                title={''}
            >
                <FormViewDetailIntern tabShow={3} />
            </Modal>
        </div>
    );
};

export default ApproveCV;
