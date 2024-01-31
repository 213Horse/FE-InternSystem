import clsx from 'clsx';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

type Props = {
    title: string;
    Icon?: IconType;
    href?: string;
    subChildren?: Props[];
    currentRoute?: string;
};

const SideBarItem = ({ title, href, subChildren, currentRoute }: Props) => {
    const subChildrenLength = subChildren ? subChildren.length : 0;
    const newhref = title.replace(' ', '-');
    const segment = currentRoute?.length ? currentRoute : '';
    console.log(href, segment + '/' + (href ? href : newhref));

    return (
        <div className="flex flex-col w-full">
            {!subChildrenLength ? (
                <div className="w-full">
                    <NavLink
                        to={segment + '/' + (href ? href : newhref)}
                        className={({ isActive }) => {
                            return clsx(
                                'w-full flex transition-all duration-500 ease-out  ',
                                isActive ? 'text-primary bg-blue-50 rounded-md' : ' ',
                            );
                        }}
                    >
                        {title}
                    </NavLink>
                </div>
            ) : (
                <Accordion type="single" collapsible className="w-full border-0 ">
                    <AccordionItem value={title} className="w-full border-0">
                        <NavLink
                            to={segment + '/' + (href ? href : newhref)}
                            className={({ isActive }) => {
                                return clsx(
                                    'w-full  transition-all duration-500 ease-out  ',
                                    isActive ? 'text-primary bg-blue-50 rounded-md' : ' ',
                                );
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <AccordionTrigger className="p-0 hover:no-underline">{title}</AccordionTrigger>
                        </NavLink>
                        <AccordionContent className="flex flex-col py-2 pl-4">
                            <div className="flex flex-col w-full gap-2">
                                {subChildren?.map((item, index) => {
                                    return (
                                        <div className="pl-1" key={index}>
                                            <SideBarItem
                                                {...item}
                                                currentRoute={segment + '/' + (href ? href : newhref)}
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
