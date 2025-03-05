/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

// Register User
export const userRegister = async (userInfo: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("medi_mart_tk", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// Login User
export const userLogin = async (userInfo: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("medi_mart_tk", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// Get Current Logedin User From Cookie
export const getCurrentUser = async () => {
  const accesstoken = (await cookies()).get("accessToken")?.value;
  let decodeData = null;
  if (accesstoken) {
    decodeData = await jwtDecode(accesstoken);
    return decodeData;
  } else {
    return null;
  }
};

// Google Recaptcha
export const googleRecaptchaVerify = async (token: string) => {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_RECAPCHA_SERVER_KEY!,
        response: token,
      }),
    });
    return res.json();
  } catch (error: any) {
    throw Error(error);
  }
};

export const logOutUser = async () => {
  (await cookies()).delete("accessToken");
};

// Get Refresh Token
export const getRefreshToken = async () => {
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
