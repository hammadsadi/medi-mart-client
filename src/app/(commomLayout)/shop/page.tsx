import ShopManage from "@/components/modules/shop";
import React from "react";
type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const ShopPage = () => {
  return (
    <div>
      <ShopManage />
    </div>
  );
};

export default ShopPage;
