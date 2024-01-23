type Props = {
    show: boolean;
    toogleShow: any;
};

const AddProject = (props: Props) => {
    return (
        <div>
            {props.show ? (
                <>
                    <div className="overlay fixed bg-black z-20 top-0 left-0 right-0 h-full opacity-35"></div>

                    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-6 rounded-xl shadow-md w-1/2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">Add New Project</h2>
                            <button className="text-gray-500 hover:text-gray-700" onClick={props.toogleShow}>
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

                        {/* Content */}
                        <form>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-base font-semibold text-gray-700 pb-2"
                                    >
                                        Project Name
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Technology
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Leader
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Sub Leader
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Mentor
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Release Date
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="projectName"
                                        className="block text-sm font-medium text-gray-700 pb-2"
                                    >
                                        Group Zalo
                                    </label>
                                    <input
                                        type="text"
                                        id="projectName"
                                        className="mt-1 p-2 border rounded-md w-full"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            {/* Add more form fields as needed */}

                            {/* Footer */}
                            <div className="flex justify-end mt-5">
                                <button
                                    type="button"
                                    className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                    onClick={props.toogleShow}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                                    onClick={() => console.log('Submit')}
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
