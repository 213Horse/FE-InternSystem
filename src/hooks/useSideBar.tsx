import SideBarItem from '@/components/SideBarItem';
import { useMemo } from 'react';
import { AiFillHome } from 'react-icons/ai';

import { IconType } from 'react-icons';

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
                href: 'CvManagement'.replace(' ', '-'),
            },
            {
                item: <SideBarItem href="project-management" title="Project Management"></SideBarItem>,

                Icon: AiFillHome,
                href: 'Thu tiền'.replace(' ', '-'),
            },
            {
                item: (
                    <SideBarItem
                        title="List Management"
                        subChildren={[{ title: 'Intern List' }, { title: 'Group List' }]}
                    ></SideBarItem>
                ),
                Icon: AiFillHome,
                href: 'List Management'.replace(' ', '-'),
            },
            {
                item: <SideBarItem href="project-management" title="Project Management"></SideBarItem>,

                Icon: AiFillHome,
                href: 'Thu tiền'.replace(' ', '-'),
            },
        ],
        [],
    );
    return routeList;
};

export default useSideBar;
