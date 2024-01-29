import { useEffect, useState } from 'react';
import iconGoogle from '@/assets/icons_google.png';
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import SignUp from '../../SignUp';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { User, fetchApiLogin } from '@/redux/slices/LoginSlice/LoginSlice';
import useDebounce from '@/hooks/useDebound';
import { useSelector } from 'react-redux';
import { accessTokenSelector } from '@/redux/selector';
import { RootState } from '@/redux/store';
import { FaSpinner } from 'react-icons/fa';

type Props = {
    title: string;
    id: number;
};

export default function index(props: Props) {
    const { title, id } = props;

    const dispatch = useDispatch<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [signUp, setSignUp] = useState<boolean>(false);
    const [showPass, setShowPass] = useState<boolean>(false);
    const navigate = useNavigate();

    const [messError, setMessError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [passWord, setPassword] = useState<string>('');

    const handleChangeSignUp = (e: any) => {
        e.preventDefault();
        setSignUp(true);
    };
    const handleForgot = (e: any) => {
        e.preventDefault();
        // alert('forgot password');
        navigate('/forgot');
    };
    const handleShowPass = () => {
        setShowPass(true);
    };
    const handleHidePass = () => {
        setShowPass(false);
    };

    const emailValue = useDebounce(email, 1000);
    const passwordValue = useDebounce(passWord, 1000);

    const token: any = useSelector((state: RootState) => state.LoginSlice.token);
    useEffect(() => {
        if (token !== null && token !== '' && token !== undefined) {
            sessionStorage.setItem('token', token);
        }
    }, []);
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const data: User = {
            username: emailValue,
            password: passwordValue,
        };
        if (data) {
            setLoading(true);
            dispatch(fetchApiLogin(data))
                .unwrap()
                .then(() => {
                    navigate('/Dashboard');
                })
                .catch(() => {
                    setMessError('Invalid username or password');
                    setLoading(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <>
            {signUp ? (
                <SignUp titleLogin={id} setSignUp={setSignUp} />
            ) : (
                <form className="lg:w-[360px]  w-full mx-auto">
                    <div className="w-full mt-4 text-start">
                        <h2 className="text-[40px] font-bold leading-9 text-[#4889E9] mb-3">{title}</h2>
                        <p className="text-base font-normal leading-6 text-[#667085]">
                            Please fill your detail to access your account
                        </p>

                        <div className="relative flex flex-col mt-2">
                            <label className="font-medium text-md left-5" htmlFor="">
                                Email
                            </label>
                            <input
                                className="w-full border border-[#D0D5DD] text-[#000] px-3 py-1 rounded-lg mt-1"
                                type="text"
                                placeholder="youremail@example.com"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            />
                            {/* <Input title="youremail@example.com" className='rounded-lg' icon={<RiCloseCircleLine />} /> */}
                            <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%]" />
                        </div>
                        <p className="text-sm font-medium text-red-700"> {!!messError ? messError : ''}</p>
                        <div className="relative flex flex-col mt-2">
                            <label className="font-medium text-md left-5" htmlFor="">
                                Password
                            </label>
                            <input
                                className="w-full border border-[#D0D5DD] text-[#000] px-3 py-1 rounded-lg mt-1"
                                type={showPass ? 'text' : 'password'}
                                placeholder="********"
                                value={passWord}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            />
                            <RiEyeLine
                                className={
                                    showPass ? 'hidden' : 'w-[24px] h-[24px] absolute right-3 top-[50%] cursor-pointer'
                                }
                                onClick={handleShowPass}
                            />
                            <RiEyeOffLine
                                className={
                                    showPass ? 'w-[24px] h-[24px] absolute right-3 top-[50%] cursor-pointer' : 'hidden'
                                }
                                onClick={handleHidePass}
                            />
                        </div>
                        <p className="text-sm font-medium text-red-700"> {!!messError ? messError : ''}</p>
                        <div className="flex items-center justify-between w-full mt-2">
                            <div className="flex gap-2 font-light text-[14px] leading-5">
                                <input type="checkbox" />
                                Remember me
                            </div>
                            <button onClick={handleForgot} className="text-[#DB0D4B] font-medium text-[14px] leading-5">
                                Forgot password?
                            </button>
                        </div>

                        <Button variant={'default'} size={'lg'} className="w-full mt-3" onClick={handleLogin}>
                            {loading ? <FaSpinner className="animate-spin" /> : ' Sign in'}
                        </Button>
                        <Button
                            variant={'link'}
                            size={'lg'}
                            onClick={handleChangeSignUp}
                            className="w-full my-4 drop-shadow-sm"
                        >
                            Sign up
                        </Button>
                        <div className="text-[14p] font-light text-center mb-3">OR LOGIN WITH</div>
                        <Button
                            variant={'outline'}
                            size={'lg'}
                            className="flex items-center justify-center w-full gap-3 drop-shadow-sm"
                        >
                            <img src={iconGoogle} alt="icon google" />
                            Google
                        </Button>
                    </div>
                </form>
            )}
        </>
    );
}
