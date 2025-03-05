"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Manage Medicines",
      url: "/admin/medicines",
      icon: SquareTerminal,
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
      icon: Bot,
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
      icon: BookOpen,
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
      icon: BookOpen,
      items: [
        {
          title: "Coupons",
          url: "/admin/coupon",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
