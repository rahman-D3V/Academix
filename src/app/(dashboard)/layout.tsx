import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%]  p-4">
        <Link href={'/'} className="flex items-center justify-center lg:justify-start gap-2">
          <Image src={'/globe.svg'}
            alt="logoImage"
            height={32}
            width={32}
    
          ></Image>

          <span className="hidden lg:block">LogoHere</span>

        </Link>
        <Menu/>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
