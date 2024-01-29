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
import { fetchApiGetInternInfo } from '@/redux/slices/ApproveCvSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { internInfo } from '@/redux/selector';

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
                <a href="#" className="underline cursor-pointer">
                    {value}
                </a>
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
    const data = [
        {
            mssv: 'SE111111',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyen Van A',
            ngaySinh: null,
            sdt: null,
            viTri: ['Frontend', 'Tester'],
            diaChi: null,
            emailCaNhan: null,
            emailTruong: null,
            linkCV: null,
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: null,
            duAn: [],
            nhomZalo: [],
            truongHoc: 'FPTU',
            status: null,
            createdTime: '29/01/2024 - 10:29:34',
            createdBy: 'VanA',
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/29/2024 10:29:34',
        },
        {
            mssv: 'SE173027',
            startDate: null,
            endDate: null,
            hoTen: 'Dinh Hoang Duong',
            ngaySinh: null,
            sdt: null,
            viTri: ['BackEnd', 'Leader'],
            diaChi: null,
            emailCaNhan: null,
            emailTruong: null,
            linkCV: null,
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: null,
            duAn: ['NhamaynuocFE', 'Intern System'],
            nhomZalo: ['Fe Nhamaynuoc', 'Be Nhamaynuoc', 'Leader Nhamaynuoc'],
            truongHoc: 'FPTU',
            status: null,
            createdTime: '29/01/2024 - 03:37:13',
            createdBy: 'duong1234',
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/29/2024 03:37:13',
        },
        {
            mssv: 'SE173027',
            startDate: null,
            endDate: null,
            hoTen: 'Dinh Hoang Duong',
            ngaySinh: null,
            sdt: null,
            viTri: [],
            diaChi: null,
            emailCaNhan: null,
            emailTruong: null,
            linkCV: null,
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: null,
            duAn: [],
            nhomZalo: [],
            truongHoc: 'FPTU',
            status: null,
            createdTime: '29/01/2024 - 03:36:50',
            createdBy: 'duong123',
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/29/2024 03:36:50',
        },
        {
            mssv: 'QE172299',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Thị Ngọc Thảo',
            ngaySinh: '16/11/2003',
            sdt: '0981123345',
            viTri: [],
            diaChi: 'Quận 9',
            emailCaNhan: 'tthao12345@gmail.com',
            emailTruong: 'thaontnqe172299@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SS150550',
            startDate: null,
            endDate: null,
            hoTen: 'Lưu Kim Hồng',
            ngaySinh: '09/09/2000',
            sdt: '0347720000',
            viTri: [],
            diaChi: 'Quận Thủ Đức',
            emailCaNhan: 'hong12345@gmail.com',
            emailTruong: 'honglkss150550@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SA170800',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Thị Trà',
            ngaySinh: '05/07/2003',
            sdt: '0944678759',
            viTri: [],
            diaChi: 'Quận 7',
            emailCaNhan: 'trant12345@gmail.com',
            emailTruong: 'trantsa170800@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'TOEIC 600',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SS170537',
            startDate: null,
            endDate: null,
            hoTen: 'Hoàng Hà My',
            ngaySinh: '08/04/2003',
            sdt: '0765112347',
            viTri: [],
            diaChi: 'Quận 2',
            emailCaNhan: 'myha12345@gmail.com',
            emailTruong: 'myhhss170537@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'TOEIC 780',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SS179944',
            startDate: null,
            endDate: null,
            hoTen: 'Trần Minh Quân',
            ngaySinh: '09/02/2003',
            sdt: '0982234893',
            viTri: [],
            diaChi: 'Quận Tân Phú',
            emailCaNhan: 'quantran12345@gmail.com',
            emailTruong: 'quantmss179944@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'TOEIC 650',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SA178822',
            startDate: null,
            endDate: null,
            hoTen: 'Đỗ Quân',
            ngaySinh: '10/04/2003',
            sdt: '0799114466',
            viTri: [],
            diaChi: 'Quận Tân Bình',
            emailCaNhan: 'quan12345@gmail.com',
            emailTruong: 'quandsa178822@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'TOEIC 750',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SS152233',
            startDate: null,
            endDate: null,
            hoTen: 'Đinh Thị Mỹ Hạnh',
            ngaySinh: '19/02/2000',
            sdt: '0655123789',
            viTri: [],
            diaChi: 'Quận 3',
            emailCaNhan: 'hanh12345@gmail.com',
            emailTruong: 'hanhdtmss152233@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'IELTS 6.0',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE150033',
            startDate: null,
            endDate: null,
            hoTen: 'Lục Cảnh Hòa',
            ngaySinh: '21/06/2000',
            sdt: '0838384912',
            viTri: [],
            diaChi: 'Quận 8',
            emailCaNhan: 'hoa12345@gmail.com',
            emailTruong: 'hoalcse150033@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'IELTS 7.5',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE150044',
            startDate: null,
            endDate: null,
            hoTen: 'Lê Vy',
            ngaySinh: '04/01/2000',
            sdt: '0905223134',
            viTri: [],
            diaChi: 'Quận 10',
            emailCaNhan: 'vyle12345@gmail.com',
            emailTruong: 'vylse150044@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'IELTS 7.0',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE171617',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Hoàng Thanh Vy',
            ngaySinh: '25/11/2003',
            sdt: '0886647668',
            viTri: [],
            diaChi: 'Quận 1',
            emailCaNhan: 'vy12345@gmail.com',
            emailTruong: 'vynhtse171617@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'IELTS 7.0',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE179233',
            startDate: null,
            endDate: null,
            hoTen: 'Trần Minh Vương',
            ngaySinh: '10/11/2003',
            sdt: '077664488',
            viTri: [],
            diaChi: 'Quận Thủ Đức',
            emailCaNhan: 'vuong12345@gmail.com',
            emailTruong: 'vuongtmse179233@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'IELTS 7.0',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE162211',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Đức Trí',
            ngaySinh: '04/02/2002',
            sdt: '0855664357',
            viTri: [],
            diaChi: 'Quận Gò Vấp',
            emailCaNhan: 'tri12345@gmail.com',
            emailTruong: 'trindse162211@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE159922',
            startDate: null,
            endDate: null,
            hoTen: 'Lê Lộc',
            ngaySinh: '10/10/2001',
            sdt: '0982234001',
            viTri: [],
            diaChi: 'Quận Tân Bình',
            emailCaNhan: 'loc12345@gmail.com',
            emailTruong: 'loclse159922@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE170790',
            startDate: null,
            endDate: null,
            hoTen: 'Trần Hà Linh',
            ngaySinh: '08/09/2003',
            sdt: '0811241423',
            viTri: [],
            diaChi: 'Quận Gò Vấp',
            emailCaNhan: 'linh12345@gmail.com',
            emailTruong: 'linhthse170790@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE161100',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Ngọc Nhi',
            ngaySinh: '21/12/2002',
            sdt: '0794556780',
            viTri: [],
            diaChi: 'Quận Bình Thạnh',
            emailCaNhan: 'nhi12345@gmail.com',
            emailTruong: 'nhinnse161100@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE160011',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Ngọc Như',
            ngaySinh: '23/11/2002',
            sdt: '0885414115',
            viTri: [],
            diaChi: 'Quận 9',
            emailCaNhan: 'nhu12345@gmail.com',
            emailTruong: 'nhunnse160011@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE172399',
            startDate: null,
            endDate: null,
            hoTen: 'Hà Đình Đức Anh',
            ngaySinh: '10/02/2003',
            sdt: '0998772446',
            viTri: [],
            diaChi: 'Quận 11',
            emailCaNhan: 'anh12345@gmail.com',
            emailTruong: 'anhhddse172399@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE150922',
            startDate: null,
            endDate: null,
            hoTen: 'Lương Trung Hiếu',
            ngaySinh: '09/09/2000',
            sdt: '0987651166',
            viTri: [],
            diaChi: 'Quận 10',
            emailCaNhan: 'hieu12345@gmail.com',
            emailTruong: 'hieuntse150922@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE160722',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Văn Tuấn Anh',
            ngaySinh: '12/09/2002',
            sdt: '0981172345',
            viTri: [],
            diaChi: 'Quận 8 ',
            emailCaNhan: 'anh12345@gmail.com',
            emailTruong: 'anhnvtse160722@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE171890',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyễn Hùng Hậu',
            ngaySinh: '11/04/2003',
            sdt: '0876445122',
            viTri: [],
            diaChi: 'Quận 9',
            emailCaNhan: 'hau12345@gmail.com',
            emailTruong: 'haunhse171890@fpt.edu.vn',
            linkCV: 'https://drive.google.com/file/d/1Z5DlgTbvy-bc5AJMjcD5Hmvyet8Driac/view?usp=sharing',
            gioiTinh: 'Nam',
            trinhDoTiengAnh: 'Đọc hiểu Tiếng Anh cơ bản',
            duAn: [],
            nhomZalo: [],
            truongHoc: null,
            status: 'true',
            createdTime: '26/01/2024 - 22:13:37',
            createdBy: null,
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 22:13:37',
        },
        {
            mssv: 'SE170001',
            startDate: null,
            endDate: null,
            hoTen: 'Nguyen Van A',
            ngaySinh: null,
            sdt: null,
            viTri: [],
            diaChi: null,
            emailCaNhan: null,
            emailTruong: null,
            linkCV: null,
            gioiTinh: 'Nữ',
            trinhDoTiengAnh: null,
            duAn: [],
            nhomZalo: [],
            truongHoc: 'FPTU',
            status: null,
            createdTime: '26/01/2024 - 19:54:59',
            createdBy: 'user1',
            deletedBy: null,
            deletedTime: null,
            lastUpdateBy: null,
            lastUpdatedTime: '01/26/2024 19:54:59',
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
    const data1 = useSelector((state: RootState) => state.Approve.internInfo);

    console.log(data1);

    useEffect(() => {
        dispatch(fetchApiGetInternInfo());
    }, [dispatch]);
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

                <Table columns={columns} data={data} check />
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
