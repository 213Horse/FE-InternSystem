import React, { ReactNode } from 'react';

type Props = {
    Isvisible: boolean;
    children?: ReactNode | string;
    title?: ReactNode | string;
    toggleShow?: any;
    width: number;
    height?: number;
};

export default function Modal({ Isvisible, children, title, toggleShow, width, height }: Props) {
    if (!Isvisible) {
        return null;
    }
    // const handleCloseModal = () => {
    //     showModal(false);
    // };
    return (
        <>
            {/* <div className="overlay fixed bg-black z-20 top-0 left-0 right-0 h-full opacity-35"></div> */}
            <div className="fixed inset-0 bg-black  z-20 top-0 left-0 right-0  h-full bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                <div
                    className={`w-[${width}px] flex flex-col bg-white p-3  rounded-lg`}
                    style={{ width: width ? width + 'px' : '500px', height: height ? height + 'px' : '' }}
                >
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">{title}</div>
                        <button className="text-black text-3xl place-self-end" onClick={toggleShow}>
                            &times;
                        </button>
                    </div>
                    <div className="bg-white">{children}</div>
                </div>
            </div>
        </>
    );
}
