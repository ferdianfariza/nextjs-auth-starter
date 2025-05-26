"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Stok = {
  id: string
  stok: number
  barang: {
    kodeBarang: string
    namaBarang: string
  }
}


export const columns: ColumnDef<Stok>[] = [
  {
    accessorKey: "number",
    header: "No.",
    cell: ({ row }) => row.index + 1 + ".",
  },
  {
    accessorKey: "barang.kodeBarang",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-right"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kode
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorFn: (row) => row.barang?.namaBarang ?? "-",
    id: "namaBarang", 
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-right"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
  accessorKey: "stok",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        className="text-right"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Stok
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    )
  },
  cell: ({ row }) => {
    const stok = row.original.stok
    return <div className="text-right font-semibold">{stok}</div>
  },
},
]