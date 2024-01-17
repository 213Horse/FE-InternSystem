import React from 'react';
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

interface Props {
    titleLogin: number;
    setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp = (props: Props) => {
    const { titleLogin, setSignUp } = props;

    const handleSignIn = (e: any) => {
        e.preventDefault();
        setSignUp(false);
    };

    return (
        <form className="w-[360px] mx-auto">
            <div className="w-full text-start mt-4">
                <h2 className="text-[40px] font-bold leading-9 text-[#4889E9] mb-3">Sign Up</h2>
                <p className="text-base font-normal leading-6 text-[#667085]">
                    Please fill your detail to access your account
                </p>
                <div className="flex flex-col mt-2 relative">
                    <label className="text-md font-medium left-5" htmlFor="">
                        {titleLogin === 1
                            ? 'Full Name'
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
                    />
                    <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                </div>
                {titleLogin === 5 ? (
                    <>
                        <div className="flex flex-col mt-2 relative">
                            <label className="text-md font-medium left-5" htmlFor="">
                                School
                            </label>
                            <input
                                className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                                type="text"
                                placeholder={'Enter your school name'}
                            />
                            <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                        </div>
                        <div className="flex flex-col mt-2 relative">
                            <label className="text-md font-medium left-5" htmlFor="">
                                Student's ID
                            </label>
                            <input
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
                <div className="flex flex-col mt-2 relative">
                    <label className="text-md font-medium left-5" htmlFor="">
                        Email
                    </label>
                    <input
                        className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                        type="text"
                        placeholder="youremail@example.com"
                    />
                    <RiCloseCircleLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                </div>
                <div className="flex flex-col mt-2 relative">
                    <label className="text-md font-medium left-5" htmlFor="">
                        Password
                    </label>
                    <input
                        className="w-full border border-[#D0D5DD] text-[#000] px-4 py-2 rounded-lg mt-1"
                        type="password"
                        placeholder="********"
                    />
                    <RiEyeLine className="w-[24px] h-[24px] absolute right-3 top-[50%] text-[#cccccc] cursor-pointer" />
                    <RiEyeOffLine className="w-[24px] h-[24px] absolute right-3 top-[50%] hidden text-[#cccccc] cursor-pointer" />
                </div>
                <div className="flex flex-col mt-2 relative">
                    <label className="text-md font-medium left-5" htmlFor="">
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
                <button className="w-full py-[8px] mt-3 bg-[#4889e9] rounded-[8px] drop-shadow-sm">Sign in</button>
                <div className="text-center flex items-center justify-center">
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
    );
};

export default SignUp;
