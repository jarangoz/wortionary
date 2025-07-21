import { useState } from "react";
import { Search, Menu } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 sm:px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img
            src="/task1/logo.png"
            alt="Wortionary Logo"
            className="w-8 sm:w-10 h-8 sm:h-10"
          />
          <span className="text-white font-semibold text-lg">Wortionary</span>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <div className="relative w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
              aria-hidden="true"
            />
            <Input
              type="search"
              aria-label="Header search"
              placeholder="Search..."
              className="pl-9 h-10 bg-gray-800 text-white border-none focus:ring-0 rounded-full w-full text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            className="sm:hidden text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </Button>
                    <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden mt-4 flex justify-center">
          <div className="relative w-full max-w-xs">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
              aria-hidden="true"
            />
            <Input
              type="search"
              aria-label="Header search mobile"
              placeholder="Search..."
              className="pl-9 h-10 bg-gray-800 text-white border-none focus:ring-0 rounded-full w-full text-sm"
            />
          </div>
        </div>
      )}
    </header>
  );
}
