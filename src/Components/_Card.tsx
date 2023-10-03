import { Skeleton } from "./ui/skeleton";

export default function Card() {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div
          className="mr-[10px] duration-200 transition-all bg-gray-300 col-span-4  md:col-span-2 lg:col-span-1 p-[20px] aspect-video rounded-md mb-8"
          key={id}
        >
          <Skeleton className="bg-gray-500 mb-2 w-1/2 h-6"></Skeleton>
          <Skeleton className="bg-gray-200 mb-4 w-1/4 h-6"></Skeleton>
          <Skeleton className="bg-gray-400 h-60 w-full rounded-md" />
        </div>
      ))}
    </>
  );
}
