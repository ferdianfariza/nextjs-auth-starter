"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Truck } from "lucide-react"
import { createKeluar} from "@/app/actions"
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

export function TambahBarangKeluarCard({ barang }: Props) {
  const [open, setOpen] = React.useState(false)
  const [selectedBarang, setSelectedBarang] = React.useState<{
    id: string
    label: string
  } | null>(null)
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Card className="w-full">
      <CardHeader>
        <Truck size="50" className="mb-5"/>
        <CardTitle>Barang Keluar</CardTitle>
        <CardDescription>Isi data berikut untuk menambahkan barang keluar gudang.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createKeluar}>
          <div className="grid gap-4">

            {/* --- Kode Barang Combobox --- */}
            <div>
              <Label>Kode Barang</Label>
              <input type="hidden" name="kodeBarang" value={selectedBarang?.id ?? ""} />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                  >
                    {selectedBarang?.label || "Pilih Kode Barang"}
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
                            onSelect={() => {
                              setSelectedBarang({
                                id: b.id,
                                label: `${b.kodeBarang} - ${b.namaBarang}`,
                              })
                              setOpen(false)
                            }}
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

            {/* --- Jumlah Input --- */}
            <div>
              <Label htmlFor="jumlahKeluar">Jumlah Masuk</Label>
              <Input
                id="jumlahKeluar"
                name="jumlahKeluar"
                type="number"
                placeholder="Masukkan jumlah"
                required
              />
            </div>

            <div>
  <Label htmlFor="tanggal">Tanggal</Label>
  <input
    type="date"
    id="tanggal"
    name="tanggal"
    value={date ? date.toISOString().split("T")[0] : ""}
    onChange={(e) => setDate(new Date(e.target.value))}
    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
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
