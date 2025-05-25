"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  const isExactActive = (url: string) =>
    pathname === url || pathname === `${url}/`;

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground tracking-wider px-3 mb-1 uppercase">
        Menu
      </SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const hasChildren = item.items?.length;

          // Check if any sub-item is active
          const isAnyChildActive = item.items?.some((sub) =>
            isExactActive(sub.url)
          );
          // Parent is active only if no child is active and current path matches
          const isParentActive = isExactActive(item.url) && !isAnyChildActive;

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isParentActive || isAnyChildActive}
            >
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link
                    href={item.url}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors",
                      isParentActive
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:bg-muted/40"
                    )}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>

                {hasChildren && (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="transition-transform data-[state=open]:rotate-90">
                        <ChevronRight className="w-4 h-4" />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="overflow-hidden transition-all data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                      <SidebarMenuSub className="ml-2 border-l border-muted pl-3">
                        {item?.items?.map((subItem) => {
                          const isSubItemActive = isExactActive(subItem.url);

                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  href={subItem.url}
                                  className={cn(
                                    "block px-2 py-1.5 text-sm rounded-md transition-colors",
                                    isSubItemActive
                                      ? "bg-primary text-white"
                                      : "text-muted-foreground hover:bg-muted/30"
                                  )}
                                >
                                  {subItem.title}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
