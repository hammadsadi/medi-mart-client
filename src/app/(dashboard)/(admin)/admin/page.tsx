"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { TMedicine } from "@/types/medicines.types";
import { getStaticsInfoForAdmin } from "@/services/OrderServices";
import { getAllFeaturesMedicines } from "@/services/Medicine";

interface IOverviewData {
  totalEarnings: number;
  totalOrders: number;
  totalMedicine: number;
  totalUsers: number;
  stockLavel: number;
  totalPendingPrescription: number;
}

const COLORS = ["#4f46e5", "#10b981", "#facc15", "#f97316"];
// const COLORS = ["#10b981", "#10b981", "#facc15", "#f97316"];

export default function DashboardOverview() {
  const [overViewInfo, setOverviewInfo] = useState<IOverviewData>();
  const [latestMedicineList, setLatestMedicineList] = useState<TMedicine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const [staticsInfoRes, latestMedicinesRes] = await Promise.all([
          getStaticsInfoForAdmin(),
          getAllFeaturesMedicines(),
        ]);
        setOverviewInfo(staticsInfoRes?.data);
        setLatestMedicineList(latestMedicinesRes?.data?.data);
      } catch (error) {
        console.error("Dashboard fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    getInfo();
  }, []);

  const cardData = [
    { title: "Total Sales", value: `৳${overViewInfo?.totalEarnings || 0}` },
    { title: "Orders", value: `${overViewInfo?.totalOrders || 0}` },
    { title: "Customers", value: `${overViewInfo?.totalUsers || 0}` },
    { title: "New Medicines", value: `${overViewInfo?.totalMedicine || 0}` },
  ];

  const pieData = [
    { name: "Low Stock", value: overViewInfo?.stockLavel || 0 },
    {
      name: "Prescriptions",
      value: overViewInfo?.totalPendingPrescription || 0,
    },
    { name: "Orders", value: overViewInfo?.totalOrders || 0 },
    { name: "Users", value: overViewInfo?.totalUsers || 0 },
  ];

  const barData = [
    { name: "Jan", sales: 8200 },
    { name: "Feb", sales: 6300 },
    { name: "Mar", sales: 10400 },
    { name: "Apr", sales: 9780 },
    { name: "May", sales: 12890 },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Card key={idx} className="shadow-sm">
                <CardContent className="p-4 space-y-2">
                  <Skeleton className="h-5 w-3/4 bg-primary/10" />
                  <Skeleton className="h-8 w-full bg-primary/10" />
                </CardContent>
              </Card>
            ))
          : cardData.map((card, index) => (
              <Card
                key={index}
                className="shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary mt-1">
                    {card.value}
                  </p>
                </CardContent>
              </Card>
            ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card className="h-[350px]">
          <CardContent className="h-full p-4 flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Monthly Sales
            </h3>
            {loading ? (
              <div className="flex-1 flex items-center justify-center">
                <Skeleton className="h-full w-full rounded-md bg-primary/10" />
              </div>
            ) : (
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <XAxis
                      dataKey="name"
                      stroke="#888"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis stroke="#888" tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "0.5rem",
                        borderColor: "#4f46e5",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="h-[350px]">
          <CardContent className="h-full p-4 flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-primary">
              System Stats
            </h3>
            {loading ? (
              <div className="flex-1 flex items-center justify-center">
                <Skeleton className="h-full w-full rounded-md bg-primary/10" />
              </div>
            ) : (
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "0.5rem",
                        borderColor: "#4f46e5",
                      }}
                      formatter={(value) => [value, "Count"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Medicines Table */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4 text-primary">
            Recent Medicines
          </h3>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Skeleton
                    key={idx}
                    className="h-12 w-full rounded-md bg-primary/10"
                  />
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-primary">Name</TableHead>
                    <TableHead className="text-primary">Category</TableHead>
                    <TableHead className="text-primary">Stock</TableHead>
                    <TableHead className="text-primary">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {latestMedicineList?.map((item) => (
                    <TableRow key={item._id} className="hover:bg-primary/5">
                      <TableCell className="font-medium">
                        {item?.name}
                      </TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.stock > 50
                              ? "bg-green-100 text-green-800"
                              : item.stock > 10
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.stock}
                        </span>
                      </TableCell>
                      <TableCell className="font-semibold">
                        ৳{item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
