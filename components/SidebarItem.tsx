import Link from "next/link";
import {twMerge} from 'tailwind-merge'
import Image from "next/image";

interface sideBarItemProps {
    icon: string;
    label: string;
    active?: boolean;
    href: string;
    expanded: boolean
    // subRoutes?: sideBarItemProps[];
}

const SidebarItem: React.FC<sideBarItemProps> = ({icon, label, active, href, expanded}) => {
  return (
    <Link href={href} className={twMerge('flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer text-black hover:text-[#2563EB] transition py-1', active && 'text-[#2563EB]', !expanded && 'px-5 py-3')}>
        <Image src={icon} alt="icon" width={22} height={22} className=""/>
        <div></div>
        {expanded?label:""}
    </Link>
  )
}

export default SidebarItem