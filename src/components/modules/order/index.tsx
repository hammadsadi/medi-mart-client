"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MMTable } from "@/components/ui/core/MMTable";
import { TOrderInfo } from "@/types/order.types";

import { currencyFormatter } from "@/lib/currencyFormatter";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const ManageOrders = ({ myOrders }: { myOrders: TOrderInfo[] }) => {
  const columns: ColumnDef<TOrderInfo>[] = [
    {
      accessorKey: "medicines",
      header: "Medicine Name",
      cell: ({ row }) => {
        return (
          <div className="flex items-center space-x-3">
            <span className="truncate">
              {row.original.medicines[0].medicine?.name?.slice(0, 10)}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "totalPrice",
      header: "Total Price",
      cell: ({ row }) => (
        <span>{currencyFormatter(row.original.totalPrice)}</span>
      ),
    },

    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => (
        <span
          className={cn(
            " py-[2px] px-1 text-xs rounded",
            row.original.paymentStatus === "Pending" && "bg-yellow-400",
            row.original.paymentStatus === "Paid" && "bg-primary text-white",
            row.original.paymentStatus === "Failed" && "bg-rose-600"
          )}
        >
          {row.original.paymentStatus}
        </span>
      ),
    },
    {
      accessorKey: "isCheck",
      header: "Check Status",
      cell: ({ row }) => (
        <span
          className={cn(
            " py-[2px] px-1 text-xs rounded",
            row.original.isCheck === "In-Review" && "bg-yellow-400",
            row.original.isCheck === "Accepted" && "bg-primary text-white",
            row.original.isCheck === "Deny" && "bg-rose-600"
          )}
        >
          {row.original.isCheck}
        </span>
      ),
    },
    {
      accessorKey: "orderStatus",
      header: "Delivery Status",
      cell: ({ row }) => {
        return (
          <>
            <span>
              <Badge>{row.original?.orderStatus}</Badge>
            </span>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <h1 className="text-xl font-bold">Orders History</h1>
      </div>
      <MMTable columns={columns} data={myOrders || []} />
    </div>
  );
};

export default ManageOrders;
