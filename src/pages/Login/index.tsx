import { ReactNode } from 'react';
import logo from '../../assets/Logo_header_login.png';
import language from '../../assets/language.png';
import bgLogin from '../../assets/background-login.png';
import { ChevronDown } from 'lucide-react';
type Props = {
    children: ReactNode;
};

const Login: React.FC<Props> = ({ children }: Props) => {
    
    return (
        <div>
            <div className="container mx-auto">
                <main className="flex items-center justify-between text-center bg-white sticky left-0 right-0 top-0 w-full z-10 h-[72px]">
                    <div className="flex items-center justify-between flex-1">
                        <div className="lg:w-[184px] lg:h-[62px] w-[92px] h-[31px]">
                            <a href="/login">
                                <img className="object-cover w-full h-full" src={logo} alt="logo trang login" />
                            </a>
                        </div>
                        {/* <div className="relative inline-block text-left"> */}
                        <div>
                            <button
                                type="button"
                                className="flex items-center gap-2 bg-transparent border-none outline-none"
                            >
                                <img
                                    className="lg:h-[22px] lg:w-[44px] h-[11px] w-[22px]"
                                    src={language}
                                    alt="logo ngôn ngữ"
                                />
                                <span>EN</span>
                                <ChevronDown />
                            </button>
                        </div>
                        {/* sau này thêm dropdown vào */}
                        {/* </div> */}
                    </div>
                </main>
            </div>
            <div className="container w-full mx-auto mt-3">
                <div className="grid grid-cols-1 gap-3 text-center lg:grid-cols-2">
                    <div>{children}</div>
                    <div className="items-center justify-center hidden lg:flex">
                        <img src={bgLogin} alt="background login" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
