interface ButtonProps {
  children: string;
  icon?: any;
  color?: string;
  width?: string;
  height?: string;
  roundFull?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

const ButtonCustom = ({
  icon: Icon,
  color,
  width,
  height,
  backgroundColor,
  roundFull,
  onClick,
  children,
}: ButtonProps) => {
  const buttonStyle = `bg-${backgroundColor} w-${width} h-${height}  p-2.5 ${
    roundFull ? "rounded-full" : "rounded-2xl"
  } text-${color} text-xs flex items-center justify-center gap-2 border`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {Icon && <Icon className="mr-2 w-4" />}

      {children}
    </button>
  );
};

export default ButtonCustom;
