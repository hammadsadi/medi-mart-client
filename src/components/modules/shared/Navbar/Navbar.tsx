"use client";
import { LogOut, ShoppingBag } from "lucide-react";
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
import { useUser } from "@/context/UserContext";
import { logOutUser } from "@/services/AuthServices";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";
import { useAppSelector } from "@/redux/hooks";
import { cartMedicineSelector } from "@/redux/features/cart/cartSlice";
export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const medicinesAll = useAppSelector(cartMedicineSelector);

  // Handle Logout
  const handleLogout = async () => {
    await logOutUser();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };
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
                <Link
                  href="/shop"
                  className="transition-all hover:text-primary"
                >
                  Shop
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
          <Link href="/cart">
            <Button
              variant="outline"
              className="rounded-full p-0 size-10 relative"
            >
              <div className="absolute -top-1 -right-1 bg-primary text-white w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full shadow-md">
                {medicinesAll?.length}
              </div>
              <ShoppingBag />
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src={`${
                      user?.image ||
                      "https://res.cloudinary.com/djlpoyqau/image/upload/v1741195711/clinets-profile_gwta7f.png"
                    }`}
                  />
                  <AvatarFallback className="uppercase">
                    {user?.name?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/carts">Carts</Link>
                </DropdownMenuItem>
                {user.role === "Admin" && (
                  <DropdownMenuItem>
                    <Link href="/admin">Dashboard</Link>
                  </DropdownMenuItem>
                )}

                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
