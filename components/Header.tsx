import Image from "next/image";

interface headerProps {
    children: React.ReactNode;
    className?: string;
}

const Header:React.FC<headerProps> = ({children, className}) => {
  return (
    <div className=" font-[600] text-xl pt-2  flex items-center">
      <div className="flex md:hidden gap-x-2 items-center">
        {/* <button className="rounded-full p-2 flex items-center hover:opacity-75 transition">
          <Image src={'/images/logoMobile.svg'} width={200} height={200} alt="logo" />
        </button> */}
      </div>
        {children}
    </div>
  )
}

export default Header