import { ReactNode, useState } from 'react';
import LoginAandS from '../LoginAandS';
type Props = {};
interface tab {
    id: number;
    title: string;
    content: ReactNode;
    color: string;
}

interface MyObjectArray {
    myObject: tab[];
}

const Tabs: MyObjectArray = {
    myObject: [
        {
            id: 1,
            title: 'Admin',
            content: <LoginAandS title="Admin Login" id={1} />,
            color: 'red',
        },
        {
            id: 2,
            title: 'Human resources',
            content: 'Chức năng chưa hoàn thành',
            color: 'red',
        },
        {
            id: 3,
            title: 'Mentor',
            content: 'Chức năng chưa hoàn thành',
            color: 'red',
        },
        {
            id: 4,
            title: 'School',
            content: <LoginAandS title="School Login" id={4} />,
            color: 'red',
        },
        {
            id: 5,
            title: 'Intern',
            content: <LoginAandS title="Intern Login" id={5} />,
            color: 'red',
        },
    ],
};

export default function index({}: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const handleClick = (index: number) => {
        setActiveIndex(index);
    };
    const checkActive = (index: number, className: string) =>
        activeIndex === index ? className : 'text-[#66708550] border-transparent border-b-2';
    return (
        <div className="container flex flex-col space-x-4">
            <div className="flex gap-3 border-b-2 w-full justify-between items-center">
                {Tabs.myObject.map((item) => (
                    <button
                        onClick={() => handleClick(item.id)}
                        className={`${checkActive(item.id, 'text-[#4889E9] before-tabs')} lg:p-3 p-2 relative`}
                        key={item.id}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div className="text-center">
                {Tabs.myObject.map((item) => (
                    <div key={item.id} className={`panel ${checkActive(item.id, 'active')}`}>
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
