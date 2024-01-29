interface Props {
    value: number;
    label: string;
    className?: string;
}

const Statistic = (props: Props) => {
    return (
        <div
            className={`min-w-[200px] min-h-[150px] border-2 border-purple-600 rounded-xl flex flex-col px-6 py-4 justify-center gap-3 items-center ${props.className}`}
        >
            <h1 className="font-bold text-4xl">{props.value}</h1>
            <p className="text-center">{props.label}</p>
        </div>
    );
};

export default Statistic;
