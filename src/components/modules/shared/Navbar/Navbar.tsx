import {  LogOut, ShoppingBag } from "lucide-react";
import Logo from "../Logo/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          Medi Mart
        </h1>
        <div className="max-w-md  flex-grow">
          <nav>
            <ul className="flex items-center gap-7">
              <li>
                <Link href="/" className="transition-all hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-all hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-all hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-all hover:text-primary">
                  Medicines
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="rounded-full p-0 size-10 relative"
          >
            <div className="absolute -top-1 -right-1 bg-primary text-white w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full shadow-md">
              0
            </div>
            <ShoppingBag />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Orders</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
