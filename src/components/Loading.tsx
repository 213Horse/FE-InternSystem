import { FaSpinner } from 'react-icons/fa';

type Props = {};

const Loading = (props: Props) => {
    return (
        <div className="h-screen flex gap-5 items-center justify-center text-3xl font-bold text-blue-800">
            {/* <div ></div> */}
            <FaSpinner className="animate-spin" />
            Vui lòng đợi trong giây lát
        </div>
    );
};

export default Loading;
