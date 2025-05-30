import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

// Role Type
type Role = keyof typeof roleBasedRoutes;
const authRoututes = ["/login", "/register"];
const sharedRoutes = [/^\/dashboard\/profile/];
const roleBasedRoutes = {
  Customer: [
    /^\/user/,
    /^\/profile/,
    /^\/checkout/,
    /^\/orders-history/,
    /^\/track-order/,
  ],
  Admin: [/^\/admin/, /^\/profile/],
};
export const middleware = async (request: NextRequest) => {
  // Get Path Name
  const { pathname } = request.nextUrl;
  // Get User Info
  const userInfo = await getCurrentUser();
  // Check Path and User Info
  if (!userInfo) {
    if (authRoututes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/login?redirectPath=${pathname}`
        )
      );
    }
  }

  if (sharedRoutes.some((route) => pathname.match(route))) {
    return NextResponse.next();
  }

  // Check Role
  if (userInfo?.role && roleBasedRoutes[userInfo?.role as Role]) {
    const routes = roleBasedRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route)))
      return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile",
    "/checkout",
    "/orders-history",
    "/track-order",
    "/admin",
    "/admin/:page",
    "/user/:page",
  ],
};
