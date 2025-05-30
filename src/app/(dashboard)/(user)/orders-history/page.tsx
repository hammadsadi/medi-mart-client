import ManageOrders from "@/components/modules/order";
import { getMyOrders, verifyMyOrders } from "@/services/OrderServices";
import React from "react";

const OrdersPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchId = await searchParams;
  const { data: myOrders } = await getMyOrders();
  await verifyMyOrders(searchId?.order_id as string);
  const deliveredOrders = myOrders?.filter(
    (order: any) => order.orderStatus === "Delivered"
  );

  return (
    <div className="max-w-4xl mx-auto">
      <ManageOrders myOrders={deliveredOrders} />
    </div>
  );
};

export default OrdersPage;
