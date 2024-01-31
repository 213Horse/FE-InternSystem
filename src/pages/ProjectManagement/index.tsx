import SystemComponent from '@/components/SystemComponent';
import ButtonCustom from '@/components/Custom/ButtonCustom';
import DropdownCustom from '@/components/Custom/DropdownCustom';
import { FolderArchiveIcon, PenSquareIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from 'lucide-react';
import { AiFillFunnelPlot } from 'react-icons/ai';
import AddProject from '@/components/ui/AddProject';
import { useEffect, useState } from 'react';
import { GoChevronDown, GoSearch } from 'react-icons/go';
import Input from '@/components/ui/Input';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { fetchProjects } from '@/redux/slices/ProjectSlice';

const ProjectManagement = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch<any>();
    const projectsData = useSelector((state: RootState) => state.projects.data);

    console.log(showModal);

    useEffect(() => {
        dispatch(fetchProjects('https://internsystem.zouzoumanagement.xyz/api/du-ans/get'));
    }, [dispatch]);

    const toogleShow = () => {
        setShowModal((prev) => !prev);
    };

    const buttonData = [
        {
            id: 1,
            icon: FolderArchiveIcon,
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
        {
            id: 4,
            icon: PlusCircleIcon,
            className: 'bg-blue-500',
            color: 'white',
            width: '160',
            height: '45px',
            children: 'Add New Project',
            onClick: toogleShow,
        },
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
                                onClick={item.onClick}
                            >
                                {item.children}
                            </ButtonCustom>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-3xl mt-5 min-h-10  px-9 py-4 flex flex-wrap gap-3 w-full">
                <div className="flex flex-col lg:basis-3/4 gap-3 w-full sm:basis-full">
                    <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3">
                        <Input title="Enter name project" />
                        <Input icon={<GoChevronDown />} title="Enter Position" />
                        <Input title="Enter Technology" />
                        <Input title="Enter Leader" />
                        <Input title="Enter Subleader" />
                        <Input title="Enter Mentor" />
                        <Input type="date" title="Enter Release Date" />
                    </div>
                </div>
                <div className="grow px-5 flex flex-col gap-2">
                    <ButtonCustom icon={AiFillFunnelPlot} className="bg-white" color="black" width="160" height="45">
                        Clean filter
                    </ButtonCustom>

                    <ButtonCustom icon={GoSearch} className="bg-blue-500" color="white" width="160" height="45">
                        Search
                    </ButtonCustom>
                </div>
            </div>

            <div className="bg-white rounded-3xl mt-5 sm:mt-8 px-4 sm:px-8 md:px-12 py-4 flex">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2  lg:grid-cols-3 gap-3 w-full">
                    {projectsData && projectsData.length > 0 ? (
                        projectsData.map((data) => <SystemComponent key={data.id} data={data} />)
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <AddProject toggleShow={toogleShow} show={showModal} />
        </div>
    );
};

export default ProjectManagement;
