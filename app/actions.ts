"use server";

import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation';
import {revalidatePath} from "next/cache";
import { Keluar, Masuk } from "@prisma/client";



export async function createBarang(formData: FormData) {
  await prisma.barang.create({
    data: {
      kodeBarang: formData.get("kodeBarang") as string,
      namaBarang: formData.get("namaBarang") as string,
    },
  });
  redirect('/dashboard/barang');
} 
export async function deleteBarang(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) throw new Error("Missing ID");

  // Delete related Keluar records
  await prisma.keluar.deleteMany({
    where: { barangId: id },
  });

  await prisma.masuk.deleteMany({
    where: { barangId: id },
  });

  await prisma.barang.delete({
    where: { id },
  });

  revalidatePath("/dashboard/barang");
}


export async function updateBarang(formData: FormData) {
  
  const id = formData.get("id") as string;
  const kodeBarang = formData.get("kodeBarang") as string;
  const namaBarang = formData.get("namaBarang") as string;
  
  await prisma.barang.update({
    where: { id },
    data: { kodeBarang, namaBarang },
  });

  revalidatePath("/dashboard/barang");
}
export async function createMasuk(formData: FormData) {
  const barangId = formData.get("kodeBarang") as string;
  const jumlahMasukString = formData.get("jumlahMasuk") as string;
  const tanggalString = formData.get("tanggal") as string;
  if (!barangId) {
    console.error("Barang ID is missing for Masuk");
    throw new Error("Kode Barang is required.");
  }

  if (!jumlahMasukString || isNaN(parseInt(jumlahMasukString, 10))) {
    console.error("Jumlah masuk is invalid");
    throw new Error("Jumlah Masuk must be a valid number.");
  }
  const jumlahMasuk = parseInt(jumlahMasukString, 10);

  if (jumlahMasuk <= 0) {
      console.error("Jumlah masuk must be positive");
      throw new Error("Jumlah Masuk must be a positive number.");
  }

  let finalDate: Date;

  if (tanggalString) {
    
    finalDate = new Date(tanggalString);

   
    if (isNaN(finalDate.getTime())) {
        console.error("Invalid date string received for Masuk:", tanggalString);
        throw new Error("Invalid date provided.");
    }
  } else {
   
    console.error("Tanggal is required for Masuk but was not provided.");
    throw new Error("Tanggal is required.");
  }

  try {
    await prisma.masuk.create({
      data: {
        barangId,
        jumlahMasuk, 
        tanggal: finalDate,
      },
    });

    revalidatePath("/dashboard/masuk");

    revalidatePath("/page");

  } catch (error) {
    console.error("Failed to create barang masuk:", error);
 
    throw error; 
  }

  redirect("/dashboard/masuk");
}
export async function updateMasuk(formData: FormData) {
  const id = formData.get("id") as string;
  const jumlahMasuk = Number(formData.get("jumlahMasuk"));
  const tanggal = new Date(formData.get("tanggal") as string);

  if (!id || isNaN(jumlahMasuk)) throw new Error("Invalid input");

  await prisma.masuk.update({
    where: { id },
    data: { jumlahMasuk, tanggal },
  });

  revalidatePath("/dashboard/masuk");
}

export async function deleteMasuk(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) throw new Error("Missing ID");
  await prisma.masuk.delete({
    where: { id },
  });
  revalidatePath("/dashboard/masuk");
}

export async function createKeluar(formData: FormData) {
  const barangId = formData.get("kodeBarang") as string;
  const jumlahKeluarString = formData.get("jumlahKeluar") as string;
  const tanggalString = formData.get("tanggal") as string;

  if (!barangId) {
    console.error("Barang ID is missing");
    throw new Error("Kode Barang is required.");
  }

  if (!jumlahKeluarString || isNaN(parseInt(jumlahKeluarString, 10))) {
    console.error("Jumlah keluar is invalid");
    throw new Error("Jumlah Keluar must be a valid number.");
  }
  const jumlahKeluar = parseInt(jumlahKeluarString, 10);

  if (jumlahKeluar <= 0) {
      console.error("Jumlah keluar must be positive");
      throw new Error("Jumlah Keluar must be a positive number.");
  }

  let finalDate: Date;

  if (tanggalString) {
    finalDate = new Date(tanggalString);

    if (isNaN(finalDate.getTime())) {
        console.error("Invalid date string received:", tanggalString);
        throw new Error("Invalid date provided.");
    }
  } else {

    console.error("Tanggal is required but was not provided.");
    throw new Error("Tanggal is required.");

  }

  try {
    await prisma.keluar.create({
      data: {
        barangId,
        jumlahKeluar,
        tanggal: finalDate, 
      },
    });
    revalidatePath("/dashboard/keluar");
  
    revalidatePath("/page");

  } catch (error) {
    console.error("Failed to create barang keluar:", error);
   
    throw error;
  }

  redirect("/dashboard/keluar");
}


export async function updateKeluar(formData: FormData) {
  const id = formData.get("id") as string;
  const jumlahKeluar = Number(formData.get("jumlahKeluar"));
  const tanggal = new Date(formData.get("tanggal") as string);

  if (!id || isNaN(jumlahKeluar)) throw new Error("Invalid input");

  await prisma.keluar.update({
    where: { id },
    data: { jumlahKeluar, tanggal },
  });

  revalidatePath("/dashboard/keluar");
}

export async function deleteKeluar(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) throw new Error("Missing ID");
  await prisma.keluar.delete({
    where: { id },
  });
  revalidatePath("/dashboard/keluar");
}


export interface MonthlyStockData {
  month: string;
  year: number;
  stock: number;
}

export async function getStockByBarangId(barangId: string): Promise<MonthlyStockData[]> {
  if (!barangId) {
    return [];
  }

  const barangMasuk = await prisma.masuk.findMany({
    where: { barangId },
    orderBy: { tanggal: "asc" },
  });

  const barangKeluar = await prisma.keluar.findMany({
    where: { barangId },
    orderBy: { tanggal: "asc" },
  });

  const monthlyData: {
    [key: string]: { year: number, monthIndex: number, masuk: number; keluar: number };
  } = {};
// Add type annotation for 'item'
  barangMasuk.forEach((item: Masuk) => {
    const date = new Date(item.tanggal);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const key = `${year}-${monthIndex}`;

    if (!monthlyData[key]) {
      monthlyData[key] = { year, monthIndex, masuk: 0, keluar: 0 };
    }
    monthlyData[key].masuk += item.jumlahMasuk;
  });

  // Add type annotation for 'item'
  barangKeluar.forEach((item: Keluar) => {
    const date = new Date(item.tanggal);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const key = `${year}-${monthIndex}`;

    if (!monthlyData[key]) {
      monthlyData[key] = { year, monthIndex, masuk: 0, keluar: 0 };
    }
    monthlyData[key].keluar += item.jumlahKeluar;
  });

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const result = Object.values(monthlyData)
    .map(data => ({
      month: monthNames[data.monthIndex],
      year: data.year,
      stock: data.masuk - data.keluar,
    }))
    .sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      // Find original month index for sorting
      const monthAIndex = monthNames.indexOf(a.month);
      const monthBIndex = monthNames.indexOf(b.month);
      return monthAIndex - monthBIndex;
    });
  return result;
}

export async function getAllBarang() {
  return prisma.barang.findMany({
    select: {
      id: true,
      namaBarang: true,
      kodeBarang: true,
    },
    orderBy: {
      namaBarang: 'asc'
    }
  });
}