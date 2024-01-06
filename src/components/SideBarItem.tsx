import clsx from "clsx";
import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type Props = {
  title: string;
  Icon?: IconType;
  href?: string;
  subChildren?: Props[];
  currentRoute?: string;
};

const SideBarItem = ({
  title,
  Icon,
  href,
  subChildren,
  currentRoute,
}: Props) => {
  const subChildrenLength = subChildren ? subChildren.length : 0;
  const newhref = title.replace(" ", "-");
  const segment = currentRoute?.length ? currentRoute : "";
  console.log(href, segment + "/" + (href ? href : newhref));

  return (
    <div className="w-full flex flex-col">
      {!subChildrenLength ? (
        <div className="w-full">
          <NavLink
            to={segment + "/" + (href ? href : newhref)}
            className={({ isActive }) => {
              return clsx(
                "w-full flex transition-all duration-500 ease-out  ",
                isActive ? "text-primary bg-blue-50 rounded-md" : " "
              );
            }}
          >
            {title}
          </NavLink>
        </div>
      ) : (
        <Accordion type="single" collapsible className="w-full border-0 ">
          <AccordionItem value={title} className="border-0 w-full">
            <NavLink
              to={segment + "/" + (href ? href : newhref)}
              className={({ isActive }) => {
                return clsx(
                  "w-full  transition-all duration-500 ease-out  ",
                  isActive ? "text-primary bg-blue-50 rounded-md" : " "
                );
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <AccordionTrigger className="hover:no-underline p-0">
                {title}
              </AccordionTrigger>
            </NavLink>
            <AccordionContent className="pl-4 flex flex-col py-2">
              <div className="w-full flex flex-col gap-2">
                {subChildren?.map((item) => {
                  return (
                    <div className="pl-1">
                      <SideBarItem
                        {...item}
                        currentRoute={segment + "/" + (href ? href : newhref)}
                      ></SideBarItem>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default SideBarItem;
