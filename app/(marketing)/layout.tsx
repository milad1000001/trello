import { ReactNode } from "react"
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="flex items-center justify-center pt-40">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MarketingLayout;