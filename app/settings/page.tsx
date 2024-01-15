/* eslint-disable @next/next/no-img-element */
"use client";

import PageTitle from "@/components/pageTitle";
import { DataTable } from "@/components/ui/dataTable";
import { ColumnDef } from "@tanstack/react-table";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Settings>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

type Settings = {
  category: string;
  value: string | number | boolean;
};

export const data: Settings[] = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];
