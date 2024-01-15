/* eslint-disable @next/next/no-img-element */
"use client";

import PageTitle from "@/components/pageTitle";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="avatar-image"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: 'Last Order'
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

export const data: Payment[] = [
  {
    name: "Aisha Ahmed",
    email: "aisha@example.com",
    lastOrder: "2024-02-15",
    method: "PayPal",
  },
  {
    name: "Omar Hassan",
    email: "omar@example.com",
    lastOrder: "2024-01-20",
    method: "Debit Card",
  },
  {
    name: "Fatima Ali",
    email: "fatima@example.com",
    lastOrder: "2024-03-05",
    method: "Bank Transfer",
  },
  {
    name: "Khaled Ibrahim",
    email: "khaled@example.com",
    lastOrder: "2024-02-01",
    method: "Cash on Delivery",
  },
  {
    name: "Layla Abdi",
    email: "layla@example.com",
    lastOrder: "2024-04-10",
    method: "Bitcoin",
  },
  {
    name: "Yusuf Mohamed",
    email: "yusuf@example.com",
    lastOrder: "2024-03-20",
    method: "Google Pay",
  },
  {
    name: "Nadia Hussein",
    email: "nadia@example.com",
    lastOrder: "2024-01-25",
    method: "Apple Pay",
  },
  {
    name: "Ahmed Farah",
    email: "ahmed@example.com",
    lastOrder: "2024-04-05",
    method: "Ethereum",
  },
  {
    name: "Sara Jama",
    email: "sara@example.com",
    lastOrder: "2024-02-10",
    method: "Venmo",
  },
  {
    name: "Aliya Ahmed",
    email: "aliya@example.com",
    lastOrder: "2024-03-15",
    method: "MasterCard",
  },
  {
    name: "Hassan Abdi",
    email: "hassan@example.com",
    lastOrder: "2024-05-12",
    method: "Visa",
  },
  {
    name: "Naima Ahmed",
    email: "naima@example.com",
    lastOrder: "2024-06-08",
    method: "Stripe",
  },
  {
    name: "Yusuf Ibrahim",
    email: "yusufib@example.com",
    lastOrder: "2024-07-03",
    method: "Cash on Delivery",
  },
  {
    name: "Amira Farah",
    email: "amira@example.com",
    lastOrder: "2024-08-19",
    method: "PayPal",
  },
  {
    name: "Abdirahman Ali",
    email: "abdirahman@example.com",
    lastOrder: "2024-09-25",
    method: "Google Pay",
  },
  {
    name: "Hoda Jama",
    email: "hoda@example.com",
    lastOrder: "2024-10-11",
    method: "Bank Transfer",
  },
  {
    name: "Khalid Hussein",
    email: "khalid@example.com",
    lastOrder: "2024-11-06",
    method: "Ethereum",
  },
  {
    name: "Layla Osman",
    email: "laylaos@example.com",
    lastOrder: "2024-12-22",
    method: "Apple Pay",
  },
  {
    name: "Ibrahim Abdi",
    email: "ibrahim@example.com",
    lastOrder: "2025-01-14",
    method: "Bitcoin",
  },
  {
    name: "Nadia Mohamed",
    email: "nadia.m@example.com",
    lastOrder: "2025-02-28",
    method: "MasterCard",
  },
];
