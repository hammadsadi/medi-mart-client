"use client";

import * as React from "react";
import logo from "@/assets/images/medi-mart.png";
import {
  Users,
  BriefcaseMedicalIcon,
  LogsIcon,
  HandCoins,
  LayoutDashboard,
  ListOrdered,
  User,
  Locate,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import { getCurrentUser } from "@/services/AuthServices";
import { TUser } from "@/types/user.types";
import Image from "next/image";
import clsx from "clsx";

// This is sample data.
const data = {
  Admin: [
    {
      title: "Overview",
      url: "/admin/",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Manage Medicines",
      url: "/admin/medicines",
      icon: BriefcaseMedicalIcon,
      isActive: true,
      items: [
        {
          title: "Medicines",
          url: "/admin/medicines",
        },
      ],
    },

    {
      title: "Manage Orders",
      url: "/admin/orders",
      icon: LogsIcon,
      items: [
        {
          title: "Orders",
          url: "/admin/orders",
        },
      ],
    },
    {
      title: "Manage Users",
      url: "/admin/users",
      icon: Users,
      items: [
        {
          title: "Users",
          url: "/admin/users",
        },
      ],
    },
    {
      title: "Manage Coupons",
      url: "/admin/coupon",
      icon: HandCoins,
      items: [
        {
          title: "Coupons",
          url: "/admin/coupon",
        },
      ],
    },
    {
      title: "My Profile",
      url: "/profile",
      icon: User,
      isActive: true,
    },
  ],
  Customer: [
    {
      title: "Track Order",
      url: "/track-order",
      icon: Locate,
      isActive: true,
    },
    {
      title: "Order History",
      url: "/orders-history",
      icon: ListOrdered,
      isActive: true,
    },

    {
      title: "My Profile",
      url: "/profile",
      icon: User,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userInfo, setUserInfo] = React.useState<TUser | null>(null);
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  React.useEffect(() => {
    const getCurrentUserInfo = async () => {
      const res = await getCurrentUser();
      setUserInfo(res);
      console.log(res);
    };
    getCurrentUserInfo();
  }, []);
  const NavData = {
    userInfo,
    navMain: data[userInfo?.role as keyof typeof data] || [],
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex items-center space-x-2">
                {/* Optional Logo Icon */}
                <div className="flex items-center justify-center">
                  <Image src={logo} alt="Logo" width={28} height={28} />
                </div>
                {/* Brand Name */}
                {/* <div
                  className={clsx(
                    "grid text-left text-sm leading-tight transition-all duration-300",
                    isCollapsed && "hidden"
                  )}
                >
                  <h2 className="font-bold text-xl">Medi Mart</h2>
                </div> */}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={NavData.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
