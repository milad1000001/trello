import { ClerkProvider } from "@clerk/nextjs"

const PlatromLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full flex justify-center items-center">
        {children}
      </div>
    </ClerkProvider>
  )
}

export default PlatromLayout;