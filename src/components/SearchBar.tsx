import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps  {
  initialValue: string;
  onSearch: (search: string) => void;
};

export function SearchBar({ initialValue, onSearch }: SearchBarProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg" role="search" onSubmit={handleSubmit}>
        <Search className="text-gray-400 mr-3" aria-hidden="true" />
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="Type to search..."
          aria-label="Search input"
          className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0"
        />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white ml-4">
        Search
      </Button>
    </form>
  );
}