import SystemComponent from '@/components/SystemComponent';
import ButtonCustom from '@/components/Custom/ButtonCustom';
import DropdownCustom from '@/components/Custom/DropdownCustom';
import { FolderArchiveIcon, PenSquareIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from 'lucide-react';
import { AiFillFunnelPlot } from 'react-icons/ai';
import AddProject from '@/components/ui/AddProject';
import { useState } from 'react';

type Props = {};

const ProjectManagement = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const toogleShow = () => {
        setShowModal((prev) => !prev);
    };

  const buttonData = [
    {
      id: 1,
      icon: FolderArchiveIcon,
      backgroundColor: "green-600",
      color: "white",
      width: "160",
      height: "45px",
      children: "Export Excel",
    },
    {
      id: 2,
      icon: PenSquareIcon,
      backgroundColor: "orange-500",
      color: "white",
      width: "160",
      height: "45px",
      children: "Edit",
    },
    {
      id: 3,
      icon: Trash2Icon,
      backgroundColor: "red-600",
      color: "white",
      width: "160",
      height: "45px",
      children: "Delete",
    },
    {
      id: 4,
      icon: PlusCircleIcon,
      backgroundColor: "blue-500",
      color: "white",
      width: "160",
      height: "45px",
      children: "Add New Project",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-3xl px-9 py-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Search for Information</p>
          <div className="flex gap-10">
            {buttonData.map((item) => (
              <ButtonCustom
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                color={item.color}
                width={item.width}
                height={item.height}
              >
                {item.children}
              </ButtonCustom>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl mt-5 min-h-10  px-9 py-4 flex flex-wrap gap-3">
        <div className="flex flex-col basis-3/4 gap-3">
          <div className=" justify-between flex gap-3">
            <DropdownCustom
              title="Enter the name of the project"
              onSelect={() => {}}
              options={["1", "2", "3"]}
            />

                        <DropdownCustom title="Enter Position" onSelect={() => {}} options={['1', '2', '3']} />

                        <DropdownCustom
                            title="Enter Technology"
                            onSelect={() => {}}
                            options={['1', '2', '3']}
                            width="1/3"
                        />
                    </div>
                    <div className=" justify-between flex gap-3">
                        <DropdownCustom title="Enter Leader" onSelect={() => {}} options={['1', '2', '3']} />

                        <DropdownCustom title="Enter Subleader" onSelect={() => {}} options={['1', '2', '3']} />

            <DropdownCustom
              title="Enter Mentor"
              onSelect={() => {}}
              options={["1", "2", "3"]}
              width="1/3"
            />
          </div>
          <div className=" justify-between flex gap-3">
            <DropdownCustom
              title="Enter Release Date"
              onSelect={() => {}}
              options={["1", "2", "3"]}
            />
          </div>
        </div>
        <div className="grow px-5 flex flex-col gap-2">
          <ButtonCustom
            icon={AiFillFunnelPlot}
            backgroundColor="white"
            color="black"
            width="160"
            height="45"
          >
            Clean filter
          </ButtonCustom>

          <ButtonCustom
            icon={SearchIcon}
            backgroundColor="blue-500"
            color="white"
            width="160"
            height="45"
          >
            Search
          </ButtonCustom>
        </div>
      </div>
      <div className="bg-white rounded-3xl mt-5 min-h-10 px-9 py-4 flex  ">
        <div className="grid grid-cols-3 gap-3 w-full">
          <SystemComponent />
          <SystemComponent />
          <SystemComponent />
          <SystemComponent />
          <SystemComponent />
          <SystemComponent />
        </div>
      </div>

            <AddProject toogleShow={toogleShow} show={showModal} />
        </div>
    );
};

export default ProjectManagement;
