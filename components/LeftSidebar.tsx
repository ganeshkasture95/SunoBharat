"use client"

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

const LeftSidebar = () => {

  const pathname = usePathname();
  // const route = useRouter();
  return (
    <section className="left_sidebar">
      <nav className=" flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
          <Image src="/icons/microphone-2.svg" alt="logo" width={43} height={43} />
          <h1 className="text-34 text-2xl font-extrabold text-white-1 flex flex-rowx max-lg:hidden">Suno</h1>
          <h2 className="text-34 text-2xl font-extrabold text-[#DC5F00] max-lg:hidden">Bharat</h2>
        </Link>
        {sidebarLinks.map(({ route, label,imgURL }) => {
          const isActive = pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",    {'bg-nav-focus border-r-4 border-orange-1':isActive})}>
              <Image src={imgURL} alt="label" width={24} height={24}/>
              <p >{label}</p>
            </Link>
          )
        })}

        <Button className=" bg-orange-1 text-white-1 hover:scale-105 font-bold  transition h-10  w-36 rounded-md">Subscription</Button>
      </nav>
    </section>
  )
}

export default LeftSidebar