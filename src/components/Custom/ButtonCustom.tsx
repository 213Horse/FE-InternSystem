interface ButtonProps {
    children: string;
    icon?: any;
    color?: string;
    width: string;
    height: string;
    roundFull?: boolean;
    className?: string;
    onClick?: () => void;
}

const ButtonCustom = ({ icon: Icon, color, width, height, className, roundFull, onClick, children }: ButtonProps) => {
    return (
        <div
            className={`min-w-[140px] w-[${width}px] h-[${height}px] ${
                roundFull ? 'rounded-full' : 'rounded-2xl'
            } p-2.5 text-${color} text-xs flex items-center justify-center gap-2 border ${className} cursor-pointer hover:opacity-90 `}
            onClick={onClick}
        >
            {Icon && <Icon className="mr-2 w-4 3sm:hidden" />}

            {children}
        </div>
    );
};

export default ButtonCustom;
