import { addProject } from '@/redux/slices/ProjectSlice';
import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
    show: boolean;
    toggleShow: () => void;
};

type FormData = {
    ten: string;
    position: string;
    technology: string;
    leaderId: string;
    leaderName: string;
    mentor: string;
    thoiGianBatDau: Date;
    thoiGianKetThuc: Date;
    groupZalo: string;
};
const AddProject: React.FC<Props> = (props) => {
    const dispatch = useDispatch<any>();
    const [formData, setFormData] = useState<FormData>({
        ten: '',
        position: '',
        technology: '',
        leaderId: '',
        leaderName: '',
        mentor: '',
        thoiGianBatDau: new Date(),
        thoiGianKetThuc: new Date(),
        groupZalo: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // Cập nhật state object chỉ với trường dữ liệu tương ứng
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'thoiGianBatDau' || name === 'thoiGianKetThuc' ? new Date(value) : value,
        }));
    };

    const handleSubmit = async () => {
        console.log('Submitted values:', formData);

        try {
            // Dispatch the addProject action with the new project data
            await dispatch(addProject(formData));
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error adding project: ', error);
        }
        props.toggleShow();
    };

    return (
        <div>
            {props.show ? (
                <>
                    <div className="overlay fixed bg-black z-20 top-0 left-0 right-0 h-full opacity-35"></div>

                    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-6 rounded-xl shadow-md w-1/2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Add New Project</h2>
                            <button className="text-gray-500 hover:text-gray-700" onClick={props.toggleShow}>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <form>
                            <div className="grid grid-cols-3 gap-4">
                                {Object.keys(formData).map((key) => (
                                    <div className="mb-3" key={key}>
                                        <label htmlFor={key} className="block text-sm font-medium text-gray-700 pb-2">
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </label>
                                        {key === 'thoiGianBatDau' || key === 'thoiGianKetThuc' ? (
                                            <input
                                                type="date"
                                                id={key}
                                                name={key}
                                                className="mt-1 p-2 border rounded-md w-full"
                                                placeholder=""
                                                value={(formData[key as keyof FormData] as string | Date)?.toString()}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                id={key}
                                                name={key}
                                                className="mt-1 p-2 border rounded-md w-full"
                                                placeholder=""
                                                value={(formData[key as keyof FormData] as string | Date)?.toString()}
                                                onChange={handleChange}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end mt-5">
                                <button
                                    type="button"
                                    className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                    onClick={props.toggleShow}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                                    onClick={handleSubmit}
                                >
                                    Create Project
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default AddProject;
