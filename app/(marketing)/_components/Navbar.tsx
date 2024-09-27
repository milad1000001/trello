import { Logo } from "@/components/logo/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="fixed top-0 flex items-center w-full px-4 bg-white h-14">
      <div className="flex items-center justify-between w-full md:max-w-screen-2xl">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-between w-full mx-auto md:block md:text-right">
          <Button asChild variant={"ghost"}>
            <Link href="/Login">
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="/Signup">
              Signup
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}