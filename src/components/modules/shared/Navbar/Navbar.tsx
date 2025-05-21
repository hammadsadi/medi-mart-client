"use client";

import { LogOut, MenuIcon, ShoppingBag } from "lucide-react";
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

  const handleLogout = async () => {
    await logOutUser();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  // Helper to check active nav item
  const isActive = (path: string, exact = false) => {
    if (exact) return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white w-full shadow-sm">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-lg md:text-2xl font-black flex items-center gap-1">
          <Logo />
          <Link href="/">Medi Mart</Link>
        </h1>

        <div className="max-w-md hidden md:flex flex-grow">
          <nav>
            <ul className="flex items-center gap-3 md:gap-5 text-base">
              <li>
                <Link
                  href="/"
                  className={`transition-all hover:text-primary ${
                    isActive("/", true) ? "text-primary font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Mega Menu for Shop */}
              <li className="relative group">
                <Link
                  href="/shop"
                  className={`transition-all hover:text-primary ${
                    isActive("/shop") ? "text-primary font-semibold" : ""
                  }`}
                >
                  Shop
                </Link>

                {/* Mega Menu Panel */}
                <div className="absolute left-0 top-full w-[600px] p-6 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transform transition-all duration-300 ease-in-out grid grid-cols-3 gap-6 z-50">
                  <div>
                    <h4 className="font-semibold mb-2">Categories</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        <Link href="/shop/pain-relief">Pain Relief</Link>
                      </li>
                      <li>
                        <Link href="/shop/diabetes">Diabetes</Link>
                      </li>
                      <li>
                        <Link href="/shop/heart">Heart</Link>
                      </li>
                      <li>
                        <Link href="/shop/supplements">Supplements</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Brands</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        <Link href="/shop/napa">Napa</Link>
                      </li>
                      <li>
                        <Link href="/shop/seclo">Seclo</Link>
                      </li>
                      <li>
                        <Link href="/shop/omeprazole">Omeprazole</Link>
                      </li>
                      <li>
                        <Link href="/shop/ors">ORS</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">More</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>
                        <Link href="/offers">Offers</Link>
                      </li>
                      <li>
                        <Link href="/best-sellers">Best Sellers</Link>
                      </li>
                      <li>
                        <Link href="/new-arrivals">New Arrivals</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/doctors"
                  className={`transition-all hover:text-primary ${
                    isActive("/doctors", true)
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/health-tips"
                  className={`transition-all hover:text-primary ${
                    isActive("/health-tips", true)
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  Health Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition-all hover:text-primary ${
                    isActive("/about", true) ? "text-primary font-semibold" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-all hover:text-primary ${
                    isActive("/contact", true)
                      ? "text-primary font-semibold"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-2">
          {/* Cart Button */}
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

          {/* Mobile Dropdown */}
          <div className="md:hidden flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <MenuIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shop">Shop</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                {user && (
                  <DropdownMenuItem>
                    <Link href="/orders">Order History</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                  {user ? (
                    <Link href="/profile">
                      <Avatar>
                        <AvatarImage
                          src={
                            user?.image ||
                            "https://res.cloudinary.com/djlpoyqau/image/upload/v1741195711/clinets-profile_gwta7f.png"
                          }
                        />
                        <AvatarFallback className="uppercase">
                          {user?.name?.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </Link>
                  ) : (
                    <Link href="/login">
                      <Button>Login</Button>
                    </Link>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Profile Menu */}
          <div className="hidden md:flex">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      src={
                        user?.image ||
                        "https://res.cloudinary.com/djlpoyqau/image/upload/v1741195711/clinets-profile_gwta7f.png"
                      }
                    />
                    <AvatarFallback className="uppercase">
                      {user?.name?.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {user.role === "Customer" && (
                    <>
                      <DropdownMenuItem>
                        <Link href="/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/orders">Orders History</Link>
                      </DropdownMenuItem>
                    </>
                  )}
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
                    <LogOut className="mr-2" /> Logout
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
      </div>
    </header>
  );
}
