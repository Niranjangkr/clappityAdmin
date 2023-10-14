'use client'

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import Image from "next/image";
import { ChevronFirst, ChevronLast, MoreHorizontal, LucideGem } from "lucide-react";
import classNames from "classnames";
import CardData from "./CardData";

interface SideBarProps {
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
    const [ expanded, setExpanded ] = useState(true)
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: 'Home',
            active: pathname === '/',
            href: '/',
            icon: '/images/icons/home.svg',
        },
        {
            label: 'Interview Vault',
            active: pathname === '/interviewVault/allInterviews',
            href: '/interviewVault/allInterviews',
            icon: '/images/icons/inteveiwValt.svg',
            subRoutes: [
                {
                    label: 'All Interviews',
                    active: pathname === '/interviewVault',
                    href: '/interviewVault/allInterviews'
                },
                {
                    label: 'Question Bank',
                    active: pathname === '/interviewVault/questionBank',
                    href: '/interviewVault/questionBank'
                },
                {
                    label: 'Resources',
                    active: pathname === '/interviewVault/resources',
                    href: '/interviewVault/resources'
                },
            ]
        },
        {
            label: 'My Interviews',
            active: pathname === '/myInterviews',
            href: '/myInterviews',
            icon: '/images/icons/myInterviews.svg',
        },
        {
            label: 'Settings',
            active: pathname === '/settings',
            href: '/settings',
            icon: '/images/icons/settings.svg',
        },
    ], [pathname])
    return (
        <div className="flex h-full">
            <div className={`hidden md:flex flex-col gap-y-2 h-full ${expanded?"w-[300px]":"w-[100px] justify-center"} p-2 `}>
                <div className={`flex items-center ${!expanded&&"flex-col"}`}>
                    <Image src={expanded?'/images/logo.svg':'/images/logoMobile.svg'} 
                    width={155} height={155}
                    alt="logo" 
                    className={`${expanded?'px-6 w-[160px]':'min-w-[120px] ml-4'} h-[38px] overflow-hidden`}
                    />
                    <button className={`rounded-lg hover:bg-gray-100 p-1.5 pt-[10px] ${!expanded&&"w-full p-4"}`} onClick={()=> setExpanded(prevState => !prevState)} >
                        {expanded?<ChevronFirst />:<ChevronLast />}
                    </button>
                </div>
                <Box>
                    <div className={`flex flex-col gap-y-4 ${!expanded?"w-full px-0 pt-[10px]": "px-5 py-4"}`}>
                        {routes.map((item) => (
                            <div className={`${item.subRoutes?'':'hover:bg-[#F6F6F8]'} rounded-lg ${item.active?'bg-[#F6F6F8]':''}`}>
                                <SidebarItem
                                    key={item.label}
                                    {...item}
                                    expanded={expanded}
                                />
                                {/* nested routes */}
                                {
                                    item.subRoutes && (
                                        <div className={`relative ${!expanded?'bullet2':'bullet'}`}>
                                            {item.subRoutes.map((subItem, index) => (
                                                <div key={index} 
                                                className={`flex flex-row h-auto items-center w-full hover:bg-[#F6F6F8] rounded-lg ${item.active?'bg-[#F6F6F8]':''}`}>
                                                    <Link
                                                        href={subItem.href}
                                                        className={`
                                                            flex flex-row gap-x-4 text-md font-medium cursor-pointer text-[#ABABAB] hover:text-[#2563EB] transition py-1 ml-[3.4rem] before:absolute 
                                                            before:bg-[#ABABAB]
                                                            before:w-2 
                                                            before:h-2 
                                                            before:rounded-full
                                                            ${!expanded?
                                                                "before:left-[35%] before:transform   before:-translate-x-[35%] before:translate-y-[8px]"
                                                                :" before:left-[5px] before:transform before:translate-y-[8px]"}
                                                            before:hover:bg-[#2563EB] z-10
                                                            ${subItem.active && 'text-[#2563EB] before:bg-[#2563EB]'}
                                                        `}
                                                    >
                                                         {expanded ? subItem.label : '\u00A0'}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full px-5 flex flex-col justify-center relative">
                    {/* card */}
                    {
                        expanded?
                        <div className={`px-5 bg-[#F9FAFB] rounded-lg`}>
                            <div className="w-full h-[130px] pt-2">
                                <CardData />
                            </div>
                        </div>:
                        <LucideGem className={`hover:bg-[#F6F6F8]`}/>
                    }
                    <div className="absolute bottom-0 flex items-center gap-x-5 pb-4">
                        <Image
                            // src={user?.image || ClerkUser?.imageUrl || "/images/user.png"}
                            src={"/images/user.png"}
                            height={40}
                            width={40}
                            alt="logo"
                            style={{ objectFit: 'contain' }}
                            className="rounded-full"
                        />
                        <div className={classNames({
                            "font-medium transition-all overflow-hidden flex justify-between gap-x-4 items-center": true,
                            "hidden": !expanded
                            
                        })}>
                            <p className='text-[#373D41] text-[16px] font-semibold'>
                                {/* {user?.fullName} */}
                                Niranjan Gaonkar
                            </p>
                            <MoreHorizontal size={20} />
                        </div>
                    </div>
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    )
}

export default SideBar