import { ReactNode } from "react"

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Header */}
      <main className="flex items-center justify-center pt-40">
        {children}
      </main>
      {/* Footer */}
    </div>
  )
}

export default MarketingLayout;