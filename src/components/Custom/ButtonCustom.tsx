interface ButtonProps {
  children: string;
  icon?: any;
  color?: string;
  width: string;
  height: string;
  roundFull?: boolean;
  backgroundColor: string;
  onClick?: () => void;
}

const ButtonCustom = ({
  icon: Icon,
  color,
  width,
  height,
  backgroundColor = "#fff",
  roundFull,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`min-w-[150px] min-h-[40px] w-[${width}px] h-[${height}px] ${
        roundFull ? "rounded-full" : "rounded-2xl"
      } p-2.5 text-${color} text-xs flex items-center justify-center gap-2 border bg-${backgroundColor}`}
      onClick={onClick}
    >
      {Icon && <Icon className="mr-2 w-4" />}

      {children}
    </button>
  );
};

export default ButtonCustom;
