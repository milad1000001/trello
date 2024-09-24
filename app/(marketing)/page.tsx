import { Medal } from "lucide-react";

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center justify-center gap-2 p-4 uppercase border shadow-sm rounded-3xl bg-amber-100 text-amber-700 w-fit">
        <Medal />
        No 1 task managment
      </div>
      <div className="text-6xl font-bold text-center">
        Taskify helps team move
      </div>
      <div className="p-4 text-3xl text-white rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-pink-600">
        work forward.
      </div>
      <div className="max-w-xs mx-auto text-sm text-center md:text-xl text-neutral-400 md:max-w-2xl">
        Collaborate, manage projects, and reach new productivity peaks.
        From high rises to the home office, the way your team works is unique - accomplish it all with taskify
      </div>
    </div>
  )
}
export default MarketingPage;