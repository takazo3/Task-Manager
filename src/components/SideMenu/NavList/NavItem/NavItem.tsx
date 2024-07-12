'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}
const NavItem:React.FC<NavItemProps> = ( { label, link, icon }) => {
  const pathName = usePathname();
  return (
    <Link href={link} className={`flex p-4 items-center w-full hover:bg-teal-400 font-medium
    ${pathName=== link ? 'bg-indigo-500 border-r-4 border-r-pink-300' : ''}`}>
        <div className="mr-1">{icon}</div>
        <div>{label}</div>
    </Link>
  )
}

export default NavItem
