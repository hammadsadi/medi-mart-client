'use server'
// Get All Medicines
export const getAllMedicines = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("refreshToken")?.value as string,
        },
      }
    );

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
