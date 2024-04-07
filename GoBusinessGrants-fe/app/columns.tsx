"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Data } from "./data";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Data>[] = [
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
        <a href={row.getValue("link")} className="hover:underline">
          {row.getValue("name")}
        </a>
      );
    },
  },
  {
    accessorKey: "stage",
    header: "Stage",
    cell: ({ row }) => {
      return (
        <ul className="list-disc">
          {row.getValue("stage").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "industry",
    header: "Industry",
  },
  {
    accessorKey: "businessNeeds",
    header: "Business needs",
  },
  {
    accessorKey: "issuingOrganization",
    header: "Issuing organisation",
  },
  {
    accessorKey: "shortDescription",
    header: "Description",
  },
  {
    accessorKey: "eligibility",
    header: "Eligibility",
    cell: ({ row }) => {
      const updatedValue = row.getValue("eligibility").slice(0, 2);
      updatedValue[1] += "...";
      return (
        <ul className="list-disc">
          {updatedValue.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "amountOfFunding",
    header: "Amount",
  },
];
