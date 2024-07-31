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
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutGrid, text: "Dashboard", path: "/" },
    { icon: Settings, text: "Worker", path: "worker" },
    { icon: Stethoscope, text: "Doctor", path: "doctor" },
    { icon: Users, text: "Patient", path: "patient" },
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
          <ul className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <li key={item.path} className="group">
                <NavLink
                  to={item.path}
                  key={index}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-[#3371eb] text-white " : ""
                    }   className=" gap-5 flex items-center text-[#A9A9A9]  py-2.5 px-4 rounded transition duration-200 hover:bg-[#3371EB] "`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={`w-6 h-6 ${
                          isActive ? "text-white" : "text-[#A9A9A9]"
                        } group-hover:text-white`}
                      />
                      {!isCollapsed && (
                        <span className="group-hover:text-white transition duration-2000">
                          {item.text}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
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
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-white bg-red-500 hover:bg-red-500/80">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8F8F8;] p-4">
          <div className="w-full  gap-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
