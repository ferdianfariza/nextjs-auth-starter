"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { PencilLine, Trash2 } from "lucide-react"
import { updateMasuk, deleteMasuk } from "@/app/actions"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"

export type Masuk = {
  id: string
  jumlahMasuk: number
  tanggal: Date
  barang: {
    kodeBarang: string
    namaBarang: string
  }
}

export const columns: ColumnDef<Masuk>[] = [
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
    id: "namaBarang", // required when using accessorFn
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
    accessorKey: "jumlahMasuk",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-right"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jumlah
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const jumlah = row.original.jumlahMasuk
      return <div className="text-right font-semibold">{jumlah}</div>
    },
  },
  {
    accessorKey: "tanggal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-right"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.original.tanggal)

      const formatted = date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "numeric",
        year: "numeric",
      })

      return <div className="text-right">{formatted}</div>
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Aksi</div>,
    cell: ({ row }) => {
      const masuk = row.original

      return (
        <div className="flex justify-end gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <PencilLine className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Barang Masuk</DialogTitle>
                <DialogDescription>Ubah data barang masuk.</DialogDescription>
              </DialogHeader>
              <form action={updateMasuk}>
                <input type="hidden" name="id" value={masuk.id} />
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="jumlahMasuk" className="text-right">
                      Jumlah
                    </Label>
                    <Input
                      id="jumlahMasuk"
                      name="jumlahMasuk"
                      type="number"
                      defaultValue={masuk.jumlahMasuk}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="tanggal" className="text-right">
                      Tanggal
                    </Label>
                    <Input
                      id="tanggal"
                      name="tanggal"
                      type="date"
                      defaultValue={
                        new Date(masuk.tanggal).toISOString().split("T")[0]
                      }
                      className="col-span-3"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Simpan Perubahan</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon" className="text-red-500 hover:text-red-700">
                <Trash2 className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Apakah kamu yakin?</DialogTitle>
                <DialogDescription>
                  Aksi ini tidak bisa diulangi. Ini akan secara permanen
                  menghapus data ini dari server.
                </DialogDescription>
              </DialogHeader>
              <form action={deleteMasuk}>
                <input type="hidden" name="id" value={masuk.id} />
                <DialogFooter>
                  <Button type="submit" variant="destructive">
                    Hapus Permanen
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )
    },
  },
]