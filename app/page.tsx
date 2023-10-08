import Box from "@/components/shared/Box";

export default function Home() {
  return (
    <Box>
      <h1 className="text-2xl">Tasks</h1>
      <div className="flex justify-between mt-8">
        <input
          type="search"
          placeholder="Search"
          className="bg-neutral-800 p-2 text-sm outline-none"
        />
        <button className="bg-white text-neutral-900 px-8 text-sm py-2">
          New
        </button>
      </div>
      <div className="h-64 text-neutral-400 bg-neutral-800 mt-4 flex justify-center items-center">
        Table
      </div>
    </Box>
  );
}
