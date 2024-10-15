"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/lib/types";
import { Edit, Trash } from "lucide-react";

export const columnsProducts: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        alt={row.original.productName}
        width={50}
        height={50}
      />
    ),
  },
  {
    accessorKey: "productName",
    header: "Product Name",
    cell: ({ row }) => row.original.productName,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => row.original.category,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
  },
  {
    accessorKey: "piece",
    header: "Piece",
    cell: ({ row }) => row.original.piece,
  },
  {
    accessorKey: "availableColors",
    header: "Available Colors",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex space-x-1">
          {product.availableColors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center justify-center border rounded-md bg-gray-4">
        <Edit className="w-6 h-6 cursor-pointer text-gray-text py-1 pr-2 border-r-[1px]" />
        <Trash className="w-6 h-6 cursor-pointer text-noti-red py-1 pl-2" />
      </div>
    ),
  },
];
