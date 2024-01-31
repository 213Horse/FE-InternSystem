import { fetchApiRegister } from '@/redux/slices/LoginSlice';
import { AppDispatch } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

interface Props {
    titleLogin: number;
    setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp = (props: Props) => {
    const { titleLogin, setSignUp } = props;
    const dispatch = useDispatch<AppDispatch>();
    const [dataRegister, setDataRegister] = useState<{ [key: string]: string }>({});
    const [role, setRole] = useState<string>('');
    const navigate = useNavigate();
    useEffect(() => {
        if (titleLogin === 1) {
            setRole('Admin');
        } else if (titleLogin === 2) {
            setRole('Human');
        } else if (titleLogin === 3) {
            setRole('Mentor');
        } else if (titleLogin === 4) {
            setRole('School');
        } else if (titleLogin === 5) {
            setRole('intern');
        }
    }, []);
    const handleSignIn = (e: any) => {
        e.preventDefault();
        setSignUp(false);
    };

    const handleChangeInput = (e: any) => {
        const { name, value } = e.target;
        setDataRegister((prev) => ({ ...prev, [name]: value, role: role }));
    };

    const handleSignUp = (e: any) => {
        e.preventDefault();
        dispatch(fetchApiRegister(dataRegister))
            .unwrap()
            .then(() => {
                toast.success('đăng ký thành Công');
                navigate('/login');
            })
            .catch(() => {
                toast.error('Đăng ký không thành công');
            });
    };
    return (
        <>
            <ToastContainer autoClose={1000} position="top-right" />
            <form className="lg:w-[360px] w-full mx-auto">
                <div className="w-full mt-4 text-start">
                    <h2 className="text-[40px] font-bold leading-9 text-[#4889E9] mb-3">Sign Up</h2>
                    <p className="text-base font-normal leading-6 text-[#667085]">
                        Please fill your detail to access your account
                    </p>
                    <div className="relative flex flex-col mt-2">
                        <label className="font-medium text-md left-5" htmlFor="">
                            {titleLogin === 1
                                ? 'Full Name'
                                : titleLogin === 2
                                ? 'Human'
                                : titleLogin === 3
                                ? 'Name Mentor'
                                : titleLogin === 4
                                ? 'School'
                                : titleLogin === 5
                                ? 'Full Name'
                                : ''}
                        </label>
                        <input
                            className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                            type="text"
                            placeholder={
                                titleLogin === 1 || titleLogin === 5
                                    ? 'Enter your full name'
                                    : titleLogin === 4
                                    ? 'Enter your school name'
                                    : ''
                            }
                            value={titleLogin === 4 ? dataRegister.truong : dataRegister.hoVaTen}
                            name={titleLogin === 4 ? 'truong' : 'hoVaTen'}
                            onChange={handleChangeInput}
                        />
                        <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                    </div>
                    {titleLogin === 5 ? (
                        <>
                            <div className="relative flex flex-col mt-2">
                                <label className="font-medium text-md left-5" htmlFor="">
                                    School
                                </label>
                                <input
                                    value={dataRegister.truong}
                                    name="truong"
                                    onChange={handleChangeInput}
                                    className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                                    type="text"
                                    placeholder={'Enter your school name'}
                                />
                                <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                            </div>
                            <div className="relative flex flex-col mt-2">
                                <label className="font-medium text-md left-5" htmlFor="">
                                    Student's ID
                                </label>
                                <input
                                    value={dataRegister.mssv}
                                    name="mssv"
                                    onChange={handleChangeInput}
                                    className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                                    type="text"
                                    placeholder={'Enter your Student ID'}
                                />
                                <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                    <div className="relative flex flex-col mt-2">
                        <label className="font-medium text-md left-5" htmlFor="">
                            Username
                        </label>
                        <input
                            className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                            type="text"
                            placeholder="Please Username"
                            value={dataRegister.username}
                            name="username"
                            onChange={handleChangeInput}
                        />
                        <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                    </div>
                    <div className="relative flex flex-col mt-2">
                        <label className="font-medium text-md left-5" htmlFor="">
                            Password
                        </label>
                        <input
                            className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                            type="password"
                            placeholder="********"
                            value={dataRegister.password}
                            name="password"
                            onChange={handleChangeInput}
                        />
                        <RiEyeLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                        <RiEyeOffLine className="w-[24px] h-[24px] absolute right-3 top-[50%] hidden text-[#cccccc] cursor-pointer" />
                    </div>
                    <div className="relative flex flex-col mt-2">
                        <label className="font-medium text-md left-5" htmlFor="">
                            Re-type Password
                        </label>
                        <input
                            className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                            type="password"
                            placeholder="Re enter your password"
                        />
                        <RiEyeLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                        <RiEyeOffLine className="w-[24px] h-[24px] absolute right-3 top-[50%] hidden text-[#cccccc] cursor-pointer  " />
                    </div>
                    <button
                        onClick={handleSignUp}
                        className="w-full py-[8px] mt-3 bg-[#4889e9] rounded-[8px] drop-shadow-sm"
                    >
                        Sign Up
                    </button>
                    <div className="flex items-center justify-center text-center">
                        Already have account?{' '}
                        <button
                            onClick={handleSignIn}
                            className="font-medium text-base text-[#4889E9] underline cursor-pointer"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUp;
