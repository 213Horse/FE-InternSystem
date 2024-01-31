import React, { ChangeEvent, useEffect, useState } from 'react';
import Login from '..';
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

type Props = {};

const ForgotPassword: React.FC = ({}: Props) => {
    const [changeOTP, setChangeOTP] = useState<boolean>(false);
    const [changePass, setChangePass] = useState<boolean>(false);
    const initialTime: number = 60;
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);
    const [showPass, setShowPass] = useState<boolean>(false);
    useEffect(() => {
        // Exit if timeLeft is already 0
        if (timeLeft === 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(intervalId); // Stop the interval when time reaches 0
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const handleRest = (e: any) => {
        e.preventDefault();
        setChangeOTP(true);
    };
    const handleChangePass = (e: any) => {
        e.preventDefault();
        setChangeOTP(true);
        setChangePass(true);
    };
    const handleShowPass = () => {
        setShowPass(true);
    };
    const handleHidePass = () => {
        setShowPass(false);
    };

    const [inputValue, setInputValue] = useState<number | ''>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Lọc chỉ cho phép nhập số
        const value = e.target.value.replace(/[^0-9]/g, '');

        // Chỉ cập nhật state nếu giá trị là số
        if (!isNaN(parseInt(value, 10)) || value === '') {
            setInputValue(value === '' ? '' : parseInt(value, 10));
        }
    };

    return (
        <Login>
            {!changeOTP && !changePass ? (
                <form action="" method="" className="flex flex-col items-center justify-center w-full h-full mx-auto">
                    <h1 className="font-semibold text-[40px] text-[#4889E9]">Reset your password</h1>
                    <p className="font-normal text-base text-[#667085]">
                        Please provide the email address that you used when you signed up for your account.{' '}
                    </p>
                    <div className="flex flex-col mt-2 relative w-full lg:w-[420px]">
                        <label className="text-base font-medium left-5 text-[#344054]" htmlFor="">
                            Email
                        </label>
                        <input
                            className="w-full border border-[#D0D5DD] text-[#D0D5DD] px-4 py-2 rounded-lg mt-1"
                            type="text"
                            placeholder="youremail@example.com"
                        />
                        <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%]" />
                    </div>
                    <p className="font-normal text-base text-[#667085] my-5">
                        We will send you an email that will allow you to reset your password.
                    </p>
                    <button
                        onClick={handleRest}
                        className="w-[292px] py-[8px] text-white mt-3 bg-[#4889e9] rounded-[8px] drop-shadow-sm"
                    >
                        Reset password
                    </button>
                </form>
            ) : changeOTP && !changePass ? (
                <form
                    action=""
                    method=""
                    className=" flex items-center justify-center h-full flex-col w-full lg:w-[550px] mx-auto"
                >
                    <h1 className="font-semibold text-[40px] text-[#4889E9]">OTP Verification</h1>
                    <p className="font-normal text-base lg:text-[20px] text-[#667085] leading-6">
                        Enter the 4 digit verification code received on your Email ID.
                    </p>
                    <div className="w-full flex items-center justify-between text-base lg:text-[24px] font-normal text-black mt-5 lg:px-7">
                        <div className="flex gap-1 lg:gap-3">
                            <p>Verification code:</p>
                            <p>0:{timeLeft}</p>
                        </div>
                        <a href="" className="text-base lg:text-[24px] font-normal text-[#4889E9] hover:underline">
                            Resend OTP
                        </a>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-[62px] h-[67px] border-4 border-[#CCCCCC] text-2xl focus:outline-0"
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-[62px] h-[67px] border-4 border-[#CCCCCC] text-2xl focus:outline-0"
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-[62px] h-[67px] border-4 border-[#CCCCCC] text-2xl focus:outline-0"
                            type="text"
                            name=""
                            id=""
                        />
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            className="w-[62px] h-[67px] border-4 border-[#CCCCCC] text-2xl focus:outline-0"
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                    <button
                        onClick={handleChangePass}
                        className="w-full py-[8px] text-white mt-3 bg-[#4889e9] rounded-[8px] drop-shadow-sm"
                    >
                        Verify
                    </button>
                </form>
            ) : (
                <form
                    action=""
                    method=""
                    className="flex items-center justify-center h-full flex-col w-full lg:w-[474px] mx-auto"
                >
                    <h1 className="font-semibold text-xl lg:text-[40px] text-[#4889E9]">Change Password</h1>
                    <div className="relative flex flex-col w-full mt-2">
                        <label className="font-medium text-md left-5" htmlFor="">
                            New Password *
                        </label>
                        <input
                            className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                            placeholder="********"
                            type={showPass ? 'text' : 'password'}
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
                    <div className="relative flex flex-col w-full mt-2">
                        <label className="font-medium text-md left-5" htmlFor="">
                            Confirm New Password*
                        </label>
                        <input
                            className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                            type="password"
                            placeholder="Re-enter your password"
                        />
                        <RiEyeLine className="w-[24px] h-[24px] absolute right-3 top-[50%] cursor-pointer" />
                        <RiEyeOffLine className="w-[24px] h-[24px] absolute right-3 top-[50%] cursor-pointer hidden" />
                    </div>
                    <button
                        onClick={handleChangePass}
                        className="w-[276px] py-[8px] text-white mt-3 bg-[#4889e9] rounded-[8px] drop-shadow-sm"
                    >
                        Change Password
                    </button>
                </form>
            )}
        </Login>
    );
};

export default ForgotPassword;
