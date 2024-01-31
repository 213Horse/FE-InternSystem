import ScheduleInterview from '@/components/ui/FormScheduleInterview';
import FormSearchApprove from '@/components/ui/FormSearchApprove';
import Modal from '@/components/ui/Modal';
import Table from '@/components/ui/Table';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaEye, FaPlus, FaRegArrowAltCircleDown, FaRegEdit, FaRegTrashAlt, FaSearch } from 'react-icons/fa';
import { IoFilterSharp } from 'react-icons/io5';
import FormViewDetailIntern from './FormViewDetailIntern';
import DropdownStatus from '@/components/ui/DropDownStatus';
import { useMediaQuery } from 'react-responsive';
import { CiMenuKebab } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiGetInternInfo, fetchApiGetInternInfoByMssv } from '@/redux/slices/ApproveCvSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { Link } from 'react-router-dom';

type Props = {};

const ApproveCV = ({}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalView, setShowModalView] = useState<boolean>(false);
    const [showModalComment, setShowModalComment] = useState<boolean>(false);
    const [showModalFeedback, setShowModalFeedback] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const isMobile = useMediaQuery({ query: '(max-width:678px)' });

    // useSelector

    const columns = [
        { label: 'MSSV', accessor: 'mssv' },
        { label: 'Ngày bắt đầu', accessor: 'startDate' },
        { label: 'Ngày kết thúc', accessor: 'endDate' },
        { label: 'Họ Tên', accessor: 'hoTen' },
        { label: 'Ngày sinh', accessor: 'ngaySinh' },
        { label: 'số điện thoại', accessor: 'sdt' },
        {
            label: 'vị trí',
            accessor: 'viTri',
            Cell: ({ value }: { value: string[] | null }) => (
                <span>
                    {Array.isArray(value) &&
                        value.map((item, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightgreen',
                                }}
                                className={`inline-block px-2 py-1 mr-2 rounded-lg`}
                            >
                                {item}
                            </span>
                        ))}
                </span>
            ),
        },
        { label: 'địa chỉ', accessor: 'diaChi' },
        { label: 'Email cá nhân', accessor: 'emailCaNhan' },

        { label: 'Email trường', accessor: 'emailTruong' },
        {
            label: 'Cv',
            accessor: 'linkCV',
            Cell: ({ value }: { value: string }) => (
                <Link target="#blank" to={value} className="underline cursor-pointer">
                    Link
                </Link>
            ),
        },
        { label: 'Giới tính', accessor: 'gioiTinh' },
        { label: 'Tiếng Anh', accessor: 'trinhDoTiengAnh' },
        {
            label: 'Dự án',
            accessor: 'duAn',
            Cell: ({ value }: { value: string[] | null }) => (
                <span>
                    {Array.isArray(value) &&
                        value.map((item, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightgreen',
                                }}
                                className={`inline-block px-2 py-1 mr-2 rounded-lg `}
                            >
                                {item}
                            </span>
                        ))}
                </span>
            ),
        },
        {
            label: 'Nhóm zalo',
            accessor: 'nhomZalo',
            Cell: ({ value }: { value: string[] | null }) => (
                <span>
                    {Array.isArray(value) &&
                        value.map((item, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightgreen',
                                }}
                                className={`inline-block px-2 py-1 mr-2 rounded-lg `}
                            >
                                {item}
                            </span>
                        ))}
                </span>
            ),
        },
        { label: 'Trường', accessor: 'truongHoc' },
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
            Cell: ({ value }: { value: string }) => (
                <DropdownStatus
                    statusOptions={['true', 'false']}
                    selectOption={value !== null ? value : 'pending'}
                    // onClick={}
                />
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

    const data1 = useSelector((state: RootState) => state.approve.data);

    useEffect(() => {
        dispatch(fetchApiGetInternInfo());
    }, [dispatch]);

    const handleRowClick = (rowData: any) => {
        // Handle the data of the clicked row in the parent component
        console.log('Clicked Row Data:', rowData.rowData);
        dispatch(fetchApiGetInternInfoByMssv(rowData.rowData.mssv));
        // setIdDataRow(rowData.rowData.id);
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

            <main className="grid grid-cols-1 px-4 pt-5 bg-white rounded-xl">
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

                <Table columns={columns} data={data1} onRowClick={handleRowClick} check />
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
