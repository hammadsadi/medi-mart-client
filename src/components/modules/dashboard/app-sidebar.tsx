"use client";

import * as React from "react";
import {
  Users,
  BriefcaseMedicalIcon,
  LogsIcon,
  HandCoins,
  LayoutDashboard,
  ListOrdered,
  User,
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

// This is sample data.
const data = {
  Admin: [
    {
      title: "Dashboard",
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
  ],
  Customer: [
    {
      title: "Order History",
      url: "/order-history/",
      icon: ListOrdered,
      isActive: true,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: User,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userInfo, setUserInfo] = React.useState<TUser | null>(null);
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
              <Link href="/">
                <div className="flex items-center justify-center"></div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">Medi Mart</h2>
                </div>
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
