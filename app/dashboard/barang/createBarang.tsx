"use client"

import * as React from "react"
import { PackagePlus  } from "lucide-react"

import { createBarang} from "@/app/actions"
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

export function TambahBarangCard() {

  return (
    <Card className="w-full">
      <CardHeader>
        <PackagePlus  size="50" className="mb-5"/>
        <CardTitle>Daftar Barang</CardTitle>
        <CardDescription>Isi data berikut untuk menambahkan daftar barang di dalam gudang.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={createBarang}>
          <div className="grid gap-4">



            {/* --- Jumlah Input --- */}
            <div>
              <Label htmlFor="kodeBarang">Kode Barang</Label>
              <Input
                id="kodeBarang"
                name="kodeBarang"
                type="string"
                placeholder="Kode Barang"
                required
              />
            </div>

            {/* --- Jumlah Input --- */}
            <div>
              <Label htmlFor="namaBarang">Nama Barang</Label>
              <Input
                id="namaBarang"
                name="namaBarang"
                type="string"
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
