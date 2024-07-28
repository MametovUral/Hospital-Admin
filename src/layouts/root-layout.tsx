import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Settings,
  Users,
  LayoutGrid,
  Search,
} from "lucide-react";

import logo from "@/assets/logo.svg";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function RootLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutGrid, text: "Dashboard" },
    { icon: Stethoscope, text: "Doctor" },
    { icon: Users, text: "Patient" },
    { icon: Settings, text: "Worker" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-[#fff]  pb-9 pt-7 flex flex-col border-r transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-[75px] px-2" : "w-64 px-4"
        }`}
      >
        <div className="mb-10 gap-4 cursor-pointer items-center justify-center flex transition duration-200">
          <img className="size-8" src={logo} alt="logo" />
          {!isCollapsed && (
            <div className="flex text-xl font-semibold ">
              <span className="text-[#3371EB]">Med</span>
              <span className="text-[#676767]">Central</span>
            </div>
          )}
        </div>

        <nav className="flex-1 transition duration-200">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="group gap-5 flex items-center text-[#A9A9A9]  py-2.5 px-4 rounded transition duration-200 hover:bg-[#3371EB] hover:text-white mb-2"
            >
              <item.icon className="w-6 h-6 text-[#A9A9A9] group-hover:text-white " />
              {!isCollapsed && (
                <span className="transition duration-2000 ">{item.text}</span>
              )}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mt-auto flex items-center justify-center p-2 rounded-full bg-[#3371EB] text-white hover:bg-blue-400 transition-colors duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="w-6 h-6" />
          ) : (
            <ChevronLeft className="w-6 h-6" />
          )}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-[#fff] flex border-b shadow-md px-[30px] py-6">
          <div className="flex items-center ">
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
          <div className="relative mr-5 ml-auto  md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8F8F8;] p-4">
          <h2 className="text-2xl font-semibold mb-4">---------</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
