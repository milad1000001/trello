import Image from "next/image"
import TrelloLogo from "@/public/logo.svg"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center justify-center hidden transition cursor-pointer gap-x-2 hover:opacity-75 md:flex">
        <Image width={32} height={32} src={TrelloLogo} alt="icon" />
        <span>Taskify</span>
      </div >
    </Link>
  )
}