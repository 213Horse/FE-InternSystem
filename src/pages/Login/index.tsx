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
                <main className="bg-white sticky left-0 right-0 top-0 w-full z-10 h-[72px]">
                    <div className="flex items-center justify-between">
                        <div className="lg:w-[184px] lg:h-[62px] w-[150px] h-[40px]">
                            <img className="w-full h-full" src={logo} alt="logo trang login" />
                        </div>
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" className="border-none outline-none bg-transparent flex gap-2">
                                    <img className="h-[22px] w-[44px]" src={language} alt="logo ngôn ngữ" />
                                    <span>EN</span>
                                    <ChevronDown />
                                </button>
                            </div>
                            {/* sau này thêm dropdown vào */}
                        </div>
                    </div>
                </main>
            </div>
            <div className="container mx-auto mt-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>{children}</div>
                    <div className="lg:flex items-center justify-center hidden">
                        <img src={bgLogin} alt="background login" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
