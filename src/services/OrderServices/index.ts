/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { TOrderDetails } from "@/types/order.types";
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
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
