import React, { useState } from 'react';
import iconGoogle from '@/assets/icons_google.png';
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import SignUp from '../../SignUp';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string;
    id: number;
};

export default function index(props: Props) {
    const { title, id } = props;
    const [signUp, setSignUp] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleChangeSignUp = (e: any) => {
        e.preventDefault();
        setSignUp(true);
    };
    const handleForgot = (e: any) => {
        e.preventDefault();
        // alert('forgot password');
        navigate('/forgot');
    };
    return (
        <>
            {signUp ? (
                <SignUp titleLogin={id} setSignUp={setSignUp} />
            ) : (
                <form className="w-[360px] mx-auto">
                    <div className="w-full text-start mt-4">
                        <h2 className="text-[40px] font-bold leading-9 text-[#4889E9] mb-3">{title}</h2>
                        <p className="text-base font-normal leading-6 text-[#667085]">
                            Please fill your detail to access your account
                        </p>

                        <div className="flex flex-col mt-2 relative">
                            <label className="text-md font-medium left-5" htmlFor="">
                                Email
                            </label>
                            <input
                                className="w-full border border-[#D0D5DD] text-[#D0D5DD] px-4 py-2 rounded-lg mt-1"
                                type="text"
                                placeholder="youremail@example.com"
                            />
                            <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%]" />
                        </div>
                        <div className="flex flex-col mt-2 relative">
                            <label className="text-md font-medium left-5" htmlFor="">
                                Password
                            </label>
                            <input
                                className="w-full border border-[#D0D5DD] text-[#D0D5DD] px-4 py-2 rounded-lg mt-1"
                                type="password"
                                placeholder="********"
                            />
                            <RiEyeLine className="w-[24px] h-[24px] absolute right-3 top-[50%]" />
                            <RiEyeOffLine className="w-[24px] h-[24px] absolute right-3 top-[50%] hidden" />
                        </div>
                        <div className="w-full flex items-center justify-between mt-2">
                            <div className="flex gap-2 font-light text-[14px] leading-5">
                                <input type="checkbox" />
                                Remember me
                            </div>
                            <button onClick={handleForgot} className="text-[#DB0D4B] font-medium text-[14px] leading-5">
                                Forgot password?
                            </button>
                        </div>

                        <button className="w-full py-[8px] mt-3 bg-[#4889e9] rounded-[8px] drop-shadow-sm">
                            Sign in
                        </button>
                        <button
                            onClick={handleChangeSignUp}
                            className="w-full py-[8px] mt-4 bg-[#EFF4FB] rounded-[8px] drop-shadow-sm"
                        >
                            Sign up
                        </button>
                        <div className="text-[14p] font-light text-center my-3">OR LOGIN WITH</div>
                        <button className="w-full py-[8px] bg-[#ffffff] rounded-[8px] drop-shadow-sm flex items-center justify-center gap-3">
                            <img src={iconGoogle} alt="icon google" />
                            Google
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}
