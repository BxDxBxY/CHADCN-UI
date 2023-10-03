import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
export default function TestPopover() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild className="w-[100px] ml-auto text-center rounded-md font-bold cursor-pointer select-none   bg-white">
          <p className="text-black">CLICK ME</p>
        </PopoverTrigger>
        <PopoverContent className="text-black">
          The waiting seconds was set manually for 4 seconds to show how the
          Skeleton works!
        </PopoverContent>
      </Popover>
    </>
  );
}
