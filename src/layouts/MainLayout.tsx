import { useState, type FC, type ReactNode } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import useSideBar from '@/hooks/useSideBar';
import clsx from 'clsx';
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri';
import { useTransition, animated } from '@react-spring/web';
import { Accordion } from '@/components/ui/accordion';
import { Settings } from 'lucide-react';

interface MainLayoutProps {
    children?: ReactNode;
}
const smSize = 640;
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const routeList = useSideBar();
    const [isShow, setIsShow] = useState(true);
    const transitions = useTransition(isShow, {
        from: { opacity: 0, x: -100 },
        enter: { opacity: 1, x: 0 },
    });
    return (
        <>
            <div className="relative flex">
                {transitions(
                    (style, item) =>
                        item && (
                            <animated.div
                                style={style}
                                className="min-w-[200px] backdrop-blur-md  z-20 sm:block sticky top-0 h-screen"
                            >
                                <div className="w-5/6 h-full sm:w-full bg-background ">
                                    <h1 className="flex items-center gap-2 bg-background">
                                        <img src={logo} className="w-[270px] transition-all  object-contain  " />

                                        {item && (
                                            <span
                                                className="flex justify-end flex-1 pr-3 text-xl cursor-pointer sm:hidden "
                                                onClick={() => {
                                                    setIsShow(!isShow);
                                                }}
                                            >
                                                <RiMenuFoldFill />
                                            </span>
                                        )}
                                    </h1>
                                    <div className="flex flex-col h-full px-2 py-1 font-medium">
                                        <Accordion type="single" collapsible className="w-full border-0 ">
                                            {routeList.map((route) => (
                                                <NavLink
                                                    key={route.href}
                                                    to={route.href}
                                                    className={({ isActive }) => {
                                                        return clsx(
                                                            'transition-all duration-500 ease-out ',
                                                            isActive ? 'bg-slate-50 rounded-md px-2' : ' ',
                                                        );
                                                    }}
                                                >
                                                    <div
                                                        className="flex items-center gap-2 px-2 py-1 "
                                                        onClick={() => {
                                                            if (window.innerWidth < smSize) {
                                                                setIsShow(false);
                                                            }
                                                        }}
                                                    >
                                                        {route.item}
                                                    </div>
                                                </NavLink>
                                            ))}
                                        </Accordion>
                                    </div>
                                </div>
                            </animated.div>
                        ),
                )}
                {/* <div className="flex flex-col w-full h-full transition-all duration-300 ease-linear">
                    <div className="flex items-center w-full gap-2 p-4 border-b-2 shadow-lg ">
                        <span
                            className="block pr-1 text-xl cursor-pointer sm:pr-3"
                            onClick={() => {
                                setIsShow(!isShow);
                            }}
                        >
                            {isShow ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
                        </span>
                        <div className="flex-1 ">Select</div>
                    </div>

                    <div className="flex-1 p-3 rounded-lg bg-secondary">{children || <Outlet />}</div>
                </div> */}
                <div className="flex flex-col w-full h-full transition-all duration-300 ease-linear">
                    <div className="flex items-center w-full gap-2 p-2 border-b-2 shadow-lg ">
                        <span
                            className="block pr-1 text-xl cursor-pointer sm:pr-3"
                            onClick={() => {
                                setIsShow(!isShow);
                            }}
                        >
                            {isShow ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
                        </span>
                        <div className="flex-1 text-xl font-bold">Project Management</div>
                        <div className="flex items-center gap-10 pr-5">
                            <div className="flex items-center gap-5">
                                <img
                                    className="object-cover w-10 h-10 rounded-full"
                                    src="https://app.abaha.vn/images/admin.png"
                                    alt="image"
                                />
                                <div>
                                    <h3 className="text-base font-medium">Nhật Hào</h3>
                                    <p className="text-sm font-normal text-gray-400">Admin</p>
                                </div>
                            </div>
                            <Settings />
                        </div>
                    </div>
                    <div className="flex-1 p-3 rounded-lg bg-secondary">{children || <Outlet />}</div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
