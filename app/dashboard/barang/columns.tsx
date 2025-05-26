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
import { deleteBarang, updateBarang } from "@/app/actions"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"


export type Barang = {
  id: string
  kodeBarang: string;
  namaBarang: string;
}

export const columns: ColumnDef<Barang>[] = [
  {
    accessorKey: "number",
    header: "No.",
    cell: ({ row }) => row.index + 1 + ".",
  },
  {
    accessorKey: "kodeBarang",
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
    cell: ({ row }) => {
      const barang = row.original.kodeBarang
      return <div className="font-semibold">{barang}</div>
    },
  },
  {
    accessorKey: "namaBarang",
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
    id: "actions",
    header: () => <div className="text-right">Aksi</div>,
    cell: ({ row }) => {
      const barang = row.original

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
                <DialogTitle>Edit Barang</DialogTitle>
                <DialogDescription>Ubah data barang di dalam gudang.</DialogDescription>
              </DialogHeader>
              <form action={updateBarang}>
                <input type="hidden" name="id" value={barang.id} />
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="kodeBarang" className="text-right">
                      Kode
                    </Label>
                    <Input
                      id="kodeBarang"
                      name="kodeBarang"
                      type="string"
                      defaultValue={barang.kodeBarang}
                      className="col-span-3"
                      required
                    />
                    <Label htmlFor="namaBarang" className="text-right">
                      Nama
                    </Label>
                    <Input
                      id="namaBarang"
                      name="namaBarang"
                      type="string"
                      defaultValue={barang.namaBarang}
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
              <form action={deleteBarang}>
                <input type="hidden" name="id" value={barang.id} />
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