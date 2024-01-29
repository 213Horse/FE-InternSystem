import ButtonCustom from '@/components/Custom/ButtonCustom';
import ChartCustom from '@/components/Custom/ChartCustom';
import DropdownCustom from '@/components/Custom/DropdownCustom';
import Statistic from '@/components/Custom/Statistic';
import { Clock, PenSquareIcon, PlusCircleIcon, Trash2Icon } from 'lucide-react';

const Dashboard = () => {
    const buttonData = [
        {
            id: 1,
            icon: Clock,
            className: 'bg-purple-600',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Schedule interview',
        },
        {
            id: 4,
            icon: PlusCircleIcon,
            className: 'bg-green-600',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Export Excel',
        },
        {
            id: 2,
            icon: PenSquareIcon,
            className: 'bg-orange-500',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Edit',
        },
        {
            id: 3,
            icon: Trash2Icon,
            className: 'bg-red-600',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Delete',
        },
    ];

    const data1 = [
        { label: '1', value: 130 },
        { label: '2', value: 170 },
        { label: '3', value: 100 },
    ];

    const data2 = [
        { label: '3', value: 40 },
        { label: '6', value: 60 },
        { label: '9', value: 50 },
        { label: '12', value: 75 },
    ];

    return (
        <div className="flex flex-col">
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
            <div className="bg-white rounded-3xl mt-5 min-h-10  px-9 py-4 flex flex-wrap gap-3">
                {/* <div className="flex justify-evenly w-full">
                    <Statistic value={200} label="Total students received CV" />
                    <Statistic value={150} label="Total students interviewed" />
                    <Statistic value={150} label="Total students passed" />
                    <Statistic value={150} label="Total students interning" />
                    <Statistic value={150} label="Total students interned" />
                </div> */}

                <div className="flex flex-wrap justify-evenly w-full">
                    <Statistic
                        value={200}
                        label="Total students received CV"
                        className="w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 mb-4"
                    />
                    <Statistic
                        value={150}
                        label="Total students interviewed"
                        className="w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 mb-4"
                    />
                    <Statistic
                        value={150}
                        label="Total students passed"
                        className="w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 mb-4"
                    />
                    <Statistic
                        value={150}
                        label="Total students interning"
                        className="w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 mb-4"
                    />
                    <Statistic
                        value={150}
                        label="Total students interned"
                        className="w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 mb-4"
                    />
                </div>

                {/* Chart */}
                <div className="flex justify-between flex-wrap w-full">
                    <ChartCustom
                        data={data1}
                        maxValue={200}
                        barSize={40}
                        xAxisLabel="Weeks"
                        yAxisLabel="Students"
                        chartTitle="Number of students interning in January, 2023"
                    />
                    <div>
                        <div className="p-5 flex justify-center">
                            <div>
                                <DropdownCustom
                                    options={[
                                        'All',
                                        'January',
                                        'February',
                                        'March',
                                        'April',
                                        'May',
                                        'June',
                                        'July',
                                        'August',
                                        'September',
                                        'October',
                                        'November',
                                        'December',
                                    ]}
                                    title="Select Month"
                                    onSelect={() => {}}
                                    rounded="rounded-full"
                                />
                            </div>
                            <DropdownCustom
                                options={['All', '2023', '2024', '2025']}
                                title="Select Year"
                                onSelect={() => {}}
                                rounded="rounded-full"
                            />
                        </div>
                    </div>
                    <ChartCustom
                        data={data1}
                        maxValue={200}
                        barSize={40}
                        xAxisLabel="Weeks"
                        yAxisLabel="Students"
                        chartTitle="FPT University"
                    />
                    <ChartCustom
                        data={data2}
                        maxValue={100}
                        barSize={40}
                        xAxisLabel="Months"
                        yAxisLabel="Students"
                        chartTitle="FPT University"
                    />
                </div>
                <div className="w-full">
                    <p className="text-center">Number of students interning in year 2023 by schools</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
