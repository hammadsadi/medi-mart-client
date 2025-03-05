/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// Create Medicine
export const createMedicine = async (data: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/medicine/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("MEDICINE");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get All Medicine
export const getAllMedicines = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/medicine`,
      {
        next: {
          tags: ["MEDICINE"],
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Get Single Medicine
export const getSingleMedicines = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/medicine/${id}`,
      {
        next: {
          tags: ["MEDICINE"],
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Update Medicine
export const updateMedicine = async (data: any, medicineId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/medicine/${medicineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("MEDICINE");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// Delete Medicine
export const deleteMedicine = async (medicineId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/medicine/${medicineId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("medi_mart_tk")?.value as string,
        },
      }
    );
    revalidateTag("MEDICINE");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
