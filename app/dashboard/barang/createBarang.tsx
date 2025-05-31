"use client"

import * as React from "react"
import { PackagePlus } from "lucide-react"
import { Check, ChevronsUpDown } from "lucide-react"
import { createBarang } from "@/app/actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface Props {
  barang: {
    id: string
    kodeBarang: string
    namaBarang: string
  }[]
}

export function TambahBarangCard({ barang }: Props) {
  const [open, setOpen] = React.useState(false)
    const [selectedBarang] = React.useState<{
      id: string
      label: string
    } | null>(null)
  return (
    <Card className="w-full">
      <CardHeader>
        <PackagePlus size={50} className="mb-5" />
        <CardTitle>Daftar Barang</CardTitle>
        <CardDescription>
          Isi data berikut untuk menambahkan daftar barang di dalam gudang.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Form Tambah Barang */}
        <form action={createBarang}>
          <div className="grid gap-4">

            {/* --- Kode Barang Combobox --- */}
            <div>
              <Label>List Barang</Label>
              <input type="hidden"/>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                  >
                    {selectedBarang?.label || "Lihat Barang"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Cari barang..." />
                    <CommandList>
                      <CommandEmpty>Barang tidak ditemukan.</CommandEmpty>
                      <CommandGroup>
                        {barang.map((b) => (
                          <CommandItem
                            key={b.id}
                            value={b.namaBarang}
                            
                          >
                            {b.kodeBarang} - {b.namaBarang}
                            <Check
                              className={cn(
                                "ml-auto h-4 w-4",
                                selectedBarang?.id === b.id ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="kodeBarang">Kode Barang</Label>
              <Input
                id="kodeBarang"
                name="kodeBarang"
                type="text"
                placeholder="Kode Barang"
                required
              />
            </div>

            <div>
              <Label htmlFor="namaBarang">Nama Barang</Label>
              <Input
                id="namaBarang"
                name="namaBarang"
                type="text"
                placeholder="Masukkan nama barang"
                required
              />
            </div>
          </div>

          <CardFooter className="mt-4 px-0 justify-end p-0">
            <Button type="submit">Tambahkan</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}
