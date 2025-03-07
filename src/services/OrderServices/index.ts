/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { TOrderDetails } from "@/types/order.types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// Create Order
export const createOrder = async (data: TOrderDetails) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("MYORDER");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get my Orders
export const getMyOrders = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/my-orders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        next: {
          tags: ["MYORDER"],
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Verify my Orders
export const verifyMyOrders = async (order_id: string) => {
  console.log(order_id);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/verify?order_id=${order_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
      }
    );
    revalidateTag("MYORDER");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};