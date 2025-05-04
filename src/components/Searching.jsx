import { Search } from "lucide-react";

const Searching = ({ query, onQueryChange }) => (
  <div className="relative w-full my-8">
    <Search
      className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
      size={22}
    />
    <input
      type="text"
      placeholder="Type to find workouts, tools, or zones..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      className="w-full pl-12 pr-5 py-3.5 rounded-full bg-white border border-purple-300 shadow-[0_2px_10px_rgba(150,100,255,0.15)] text-gray-800 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
    />
  </div>
);

export default Searching;
