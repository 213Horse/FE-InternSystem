import SideBarItem from '@/components/SideBarItem';
import { useMemo } from 'react';
import { AiFillHome, AiFillSchedule, AiOutlineSchedule } from 'react-icons/ai';
import { GiCaveman, GiBirdCage, GiElephant, GiNestBirds } from 'react-icons/gi';
import { ImManWoman } from 'react-icons/im';
import { BsFillPinMapFill } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
type ItemType = {
    item: React.ReactNode;
    Icon: IconType;
    href: string;
};

// type ItemType = {
//   item: React.ReactNode;
//   href: string;
// };
const useSideBar = () => {
    const routeList = useMemo<ItemType[]>(
        () => [
            {
                item: <SideBarItem title="Dashboard"></SideBarItem>,
                Icon: AiFillHome,
                href: 'Hợp đồng và đăng ký'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="CV Management"
                        subChildren={[{ title: 'Approve CV' }, { title: 'Confirm CV' }]}
                    ></SideBarItem>
                ),
                Icon: AiFillHome,
                href: 'Hợp đồng và đăng ký'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="Hợp đồng và đăng ký"
                        subChildren={[
                            {
                                title: 'Quản lý hợp đồng',
                            },
                            {
                                title: 'Báo cáo hợp đồng',
                                subChildren: [
                                    {
                                        title: 'Phát triển KH mới',
                                    },
                                    {
                                        title: 'Bảng kê danh sách KH',
                                    },
                                ],
                            },
                        ]}
                    ></SideBarItem>
                ),

                Icon: AiFillHome,
                href: 'Hợp đồng và đăng ký'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="Thống kê"
                        subChildren={[
                            {
                                title: 'Thống kê số liệu',
                            },
                        ]}
                    ></SideBarItem>
                ),

                Icon: AiFillHome,
                href: 'Thống kê'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="Ghi chỉ & hóa đơn"
                        subChildren={[
                            {
                                title: 'Số đọc chỉ số',
                            },
                            {
                                title: 'Tạo sổ đọc chỉ số DH tổng',
                            },
                            {
                                title: 'Tạo sổ đọc chỉ số DH block',
                            },
                            {
                                title: 'Nhập chỉ số',
                            },
                            {
                                title: 'Hóa đơn',
                            },
                            {
                                title: 'In hóa đơn',
                            },
                        ]}
                    ></SideBarItem>
                ),
                Icon: AiFillHome,
                href: 'Hợp đồng và đăng ký'.replace(' ', '-'),
            },

            {
                item: (
                    <SideBarItem
                        title="Thu tiền"
                        subChildren={[
                            {
                                title: 'Thanh toán',
                            },
                        ]}
                    ></SideBarItem>
                ),
                Icon: AiFillHome,
                href: 'Ghi chỉ & hóa đơn'.replace(' ', '-'),
            },
            {
                item: <SideBarItem href="project-management" title="Project Management"></SideBarItem>,

                Icon: AiFillHome,
                href: 'Thu tiền'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="Thất thoát"
                        subChildren={[
                            {
                                title: 'Quản lý đồng hồ tổng',
                            },
                            {
                                title: 'Quản lý thất thoát',
                            },
                            {
                                title: 'Quản lý đồng hồ block',
                            },
                        ]}
                    ></SideBarItem>
                ),

                Icon: AiFillHome,
                href: 'Thất thoát'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="Cấu hình"
                        subChildren={[
                            {
                                title: 'CH Đối tượng giá',
                            },
                            {
                                title: 'CH Vùng, địa bàn',
                            },
                            {
                                title: 'CH Khu vực',
                            },
                            {
                                title: 'CH Tuyến đọc',
                            },
                            {
                                title: 'CH Bảng giá',
                            },
                            {
                                title: 'CH Phương thức TT',
                            },
                            {
                                title: 'CH Trạng thái chỉ số',
                            },
                            {
                                title: 'CH Kỳ',
                            },
                            {
                                title: 'CH Lý do thay',
                            },
                            {
                                title: 'CH Lý do hủy',
                            },
                            {
                                title: 'CH Kiểu đồng hồ',
                            },
                            {
                                title: 'CH Người lắp đặt',
                            },
                            {
                                title: 'CH Đối tượng',
                            },
                            {
                                title: 'CH Nước sản xuất',
                            },
                            {
                                title: 'CH Hãng sản xuất',
                            },
                        ]}
                    ></SideBarItem>
                ),

                Icon: AiFillHome,
                href: 'Cấu hình'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="Quản trị"
                        subChildren={[
                            {
                                title: 'Phân quyền chức năng',
                            },
                            {
                                title: 'Phân quyền tổ chức',
                                subChildren: [
                                    {
                                        title: 'Thông tin tổ chức',
                                    },
                                    {
                                        title: 'Thành viên',
                                    },
                                    {
                                        title: 'Phân nhóm quyền',
                                    },
                                    {
                                        title: 'Phòng ban/ đơn vị',
                                    },
                                    {
                                        title: 'Nhật Ký hoạt động',
                                    },
                                ],
                            },
                            {
                                title: 'Quản lý nhà máy',
                                subChildren: [
                                    {
                                        title: 'Nhà máy',
                                    },
                                    {
                                        title: 'Người dùng',
                                    },
                                ],
                            },
                        ]}
                    ></SideBarItem>
                ),

                Icon: AiFillHome,
                href: 'Quản trị'.replace(' ', '-'),
            },
        ],
        [],
    );
    return routeList;
};

export default useSideBar;
