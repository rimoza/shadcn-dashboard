/* eslint-disable @next/next/no-img-element */
"use client";

import PageTitle from "@/components/pageTitle";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "order",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Shipped",
            "bg-green-200": row.getValue("status") === "Delivered",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

type Order = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const data: Order[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-02-12",
    method: "Paypal",
  },
  {
    order: "ORD002",
    status: "Shipped",
    lastOrder: "2023-03-05",
    method: "Credit Card",
  },
  {
    order: "ORD003",
    status: "Delivered",
    lastOrder: "2023-04-20",
    method: "Bank Transfer",
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-05-15",
    method: "Cash on Delivery",
  },
  {
    order: "ORD005",
    status: "Shipped",
    lastOrder: "2023-06-10",
    method: "Google Pay",
  },
  {
    order: "ORD006",
    status: "Delivered",
    lastOrder: "2023-07-25",
    method: "Stripe",
  },
  {
    order: "ORD007",
    status: "Pending",
    lastOrder: "2023-08-18",
    method: "Apple Pay",
  },
  {
    order: "ORD008",
    status: "Shipped",
    lastOrder: "2023-09-03",
    method: "Ethereum",
  },
  {
    order: "ORD009",
    status: "Delivered",
    lastOrder: "2023-10-12",
    method: "Venmo",
  },
  {
    order: "ORD010",
    status: "Pending",
    lastOrder: "2023-11-30",
    method: "MasterCard",
  },
  {
    order: "ORD011",
    status: "Shipped",
    lastOrder: "2024-01-02",
    method: "Visa",
  },
  {
    order: "ORD012",
    status: "Delivered",
    lastOrder: "2024-02-15",
    method: "Bitcoin",
  },
  {
    order: "ORD013",
    status: "Pending",
    lastOrder: "2024-03-20",
    method: "Debit Card",
  },
  {
    order: "ORD014",
    status: "Shipped",
    lastOrder: "2024-04-10",
    method: "Cash on Delivery",
  },
  {
    order: "ORD015",
    status: "Delivered",
    lastOrder: "2024-05-05",
    method: "PayPal",
  },
  {
    order: "ORD016",
    status: "Pending",
    lastOrder: "2024-06-22",
    method: "Google Pay",
  },
  {
    order: "ORD017",
    status: "Shipped",
    lastOrder: "2024-07-17",
    method: "Bank Transfer",
  },
  {
    order: "ORD018",
    status: "Delivered",
    lastOrder: "2024-08-08",
    method: "Credit Card",
  },
  {
    order: "ORD019",
    status: "Pending",
    lastOrder: "2024-09-25",
    method: "Stripe",
  },
  {
    order: "ORD020",
    status: "Shipped",
    lastOrder: "2024-10-30",
    method: "Cash on Delivery",
  },
  {
    order: "ORD021",
    status: "Delivered",
    lastOrder: "2024-11-14",
    method: "Apple Pay",
  },
  {
    order: "ORD022",
    status: "Pending",
    lastOrder: "2024-12-01",
    method: "Ethereum",
  },
  {
    order: "ORD023",
    status: "Shipped",
    lastOrder: "2025-01-20",
    method: "Venmo",
  },
  {
    order: "ORD024",
    status: "Delivered",
    lastOrder: "2025-02-05",
    method: "MasterCard",
  },
  {
    order: "ORD025",
    status: "Pending",
    lastOrder: "2025-03-12",
    method: "Visa",
  },
  {
    order: "ORD026",
    status: "Shipped",
    lastOrder: "2025-04-18",
    method: "Bitcoin",
  },
  {
    order: "ORD027",
    status: "Delivered",
    lastOrder: "2025-05-22",
    method: "Debit Card",
  },
  {
    order: "ORD028",
    status: "Pending",
    lastOrder: "2025-06-10",
    method: "Cash on Delivery",
  },
  {
    order: "ORD029",
    status: "Shipped",
    lastOrder: "2025-07-15",
    method: "PayPal",
  },
  {
    order: "ORD030",
    status: "Delivered",
    lastOrder: "2025-08-20",
    method: "Google Pay",
  },
  {
    order: "ORD031",
    status: "Pending",
    lastOrder: "2025-09-01",
    method: "Bank Transfer",
  },
  {
    order: "ORD032",
    status: "Shipped",
    lastOrder: "2025-10-12",
    method: "Credit Card",
  },
  {
    order: "ORD033",
    status: "Delivered",
    lastOrder: "2025-11-25",
    method: "Stripe",
  },
  {
    order: "ORD034",
    status: "Pending",
    lastOrder: "2026-01-03",
    method: "Ethereum",
  },
  {
    order: "ORD035",
    status: "Shipped",
    lastOrder: "2026-02-15",
    method: "Apple Pay",
  },
  {
    order: "ORD036",
    status: "Delivered",
    lastOrder: "2026-03-28",
    method: "Venmo",
  },
  {
    order: "ORD037",
    status: "Pending",
    lastOrder: "2026-04-10",
    method: "MasterCard",
  },
  {
    order: "ORD038",
    status: "Shipped",
    lastOrder: "2026-05-18",
    method: "Visa",
  },
  {
    order: "ORD039",
    status: "Delivered",
    lastOrder: "2026-06-22",
    method: "Bitcoin",
  },
  {
    order: "ORD040",
    status: "Pending",
    lastOrder: "2026-07-05",
    method: "Debit Card",
  },
];
