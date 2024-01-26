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
            {/* <div className="fixed top-0 left-0 right-0 z-20 h-full bg-black overlay opacity-35"></div> */}
            <div className="fixed inset-0 top-0 left-0 right-0 z-20 flex items-center justify-center h-full bg-black bg-opacity-20 backdrop-blur-sm">
                <div
                    className={` flex flex-col bg-white p-3  rounded-lg`}
                    style={{ width: width ? width + 'px' : '500px', height: height ? height + 'px' : '' }}
                >
                    <div className="flex items-center justify-between">
                        <div className="text-base font-semibold lg:text-xl">{title}</div>
                        <button className="text-3xl text-black place-self-end" onClick={toggleShow}>
                            &times;
                        </button>
                    </div>
                    <div className="bg-white">{children}</div>
                </div>
            </div>
        </>
    );
}
