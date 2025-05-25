import OrderTracking from "@/components/modules/order/track/OrderTracking";
import { getMyOrders, verifyMyOrders } from "@/services/OrderServices";
import React from "react";

const OrdersTrackPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) => {
  const searchId = await searchParams;
  const { data: myOrders } = await getMyOrders();
  await verifyMyOrders(searchId?.order_id as string);
  const deliveredOrders = myOrders?.filter(
    (order: any) => order.orderStatus !== "Delivered"
  );

  return (
    <div className="max-w-4xl mx-auto">
      <OrderTracking myOrders={deliveredOrders} />
    </div>
  );
};

export default OrdersTrackPage;
