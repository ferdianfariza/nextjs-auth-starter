"use client"

import * as React from "react"
import { PackagePlus } from "lucide-react"

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

interface Props {
  barang: {
    id: string
    kodeBarang: string
    namaBarang: string
  }[]
}

export function ListBarang({ barang }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <PackagePlus size={50} className="mb-5" />
        <CardTitle>Daftar Barang</CardTitle>
        <CardDescription>
          Barang yang ada di gudang
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Tampilkan Daftar Barang */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Barang Tersedia:</h3>
          {barang.length === 0 ? (
            <p className="text-sm text-gray-500">Belum ada barang.</p>
          ) : (
            <ul className="space-y-2">
              {barang.map((item) => (
                <li
                  key={item.id}
                  className="bg-white p-3 border rounded-md shadow-sm flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium">{item.namaBarang}</div>
                    <div className="text-sm text-gray-500">
                      Kode: {item.kodeBarang}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
