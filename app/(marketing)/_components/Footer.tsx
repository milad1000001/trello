import { Logo } from "@/components/logo/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="fixed bottom-0 flex items-center w-full p-2 px-4 bg-white">
      <div className="flex items-center justify-between w-full md:max-w-screen-2xl">
        <div>
          <Logo />
        </div>
        <div className="flex items-center justify-between w-full mx-auto md:block md:text-right">
          <Button asChild variant="ghost">
            <Link href="/">
              Privacy Policy
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">
              Terms of service
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}