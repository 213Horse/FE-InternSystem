import { useState, type FC, type ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import useSideBar from "@/hooks/useSideBar";
import clsx from "clsx";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { useTransition, animated } from "@react-spring/web";
import { Accordion } from "@/components/ui/accordion";
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
    <div className="w-screen h-screen flex relative   ">
      {transitions(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="min-w-[300px] h-full   absolute inset-0  backdrop-blur-md  z-20 sm:block sm:relative  overflow-auto"
            >
              <div className="w-5/6 sm:w-full h-full bg-background ">
                <h1 className=" bg-background flex gap-2 items-center ">
                  <img
                    src={logo}
                    className="w-[270px] transition-all  object-contain  "
                  />

                  {item && (
                    <span
                      className="text-xl pr-3 cursor-pointer sm:hidden flex-1 flex justify-end "
                      onClick={() => {
                        setIsShow(!isShow);
                      }}
                    >
                      <RiMenuFoldFill />
                    </span>
                  )}
                </h1>
                <div className="flex flex-col  py-1 px-2  font-medium">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-0 "
                  >
                    {routeList.map((route) => (
                      <NavLink
                        key={route.href}
                        to={route.href}
                        className={({ isActive }) => {
                          return clsx(
                            "transition-all duration-500 ease-out ",
                            isActive ? "bg-slate-50 rounded-md" : " "
                          );
                        }}
                      >
                        <div
                          className=" flex  gap-2 items-center px-2 py-1"
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
          )
      )}
      <div className="flex flex-col w-full h-full  transition-all duration-300 ease-linear">
        <div className=" p-4  flex gap-2 items-center w-full shadow-lg border-b-2  ">
          <span
            className="text-xl  block  sm:pr-3 pr-1 cursor-pointer"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            {isShow ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
          </span>
          <div className="flex-1 ">Select</div>
        </div>
        <div className="flex-1 p-3 rounded-lg bg-secondary">
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
