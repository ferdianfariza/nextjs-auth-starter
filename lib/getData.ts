"use server"
import prisma from "@/lib/prisma"

export async function getMostKeluarMasuk() {
  const barangPalingBanyakKeluar = await prisma.keluar.groupBy({
    by: ["barangId"],
    _sum: { jumlahKeluar: true },
    orderBy: { _sum: { jumlahKeluar: "desc" } },
    take: 1,
  })

  const barangPalingBanyakMasuk = await prisma.masuk.groupBy({
    by: ["barangId"],
    _sum: { jumlahMasuk: true },
    orderBy: { _sum: { jumlahMasuk: "desc" } },
    take: 1,
  })

  const detailBarangMasuk = barangPalingBanyakMasuk.length
    ? await prisma.barang.findUnique({
        where: { id: barangPalingBanyakMasuk[0].barangId },
      })
    : null

  const detailBarangKeluar = barangPalingBanyakKeluar.length
    ? await prisma.barang.findUnique({
        where: { id: barangPalingBanyakKeluar[0].barangId },
      })
    : null

  return {
    palingMasuk: barangPalingBanyakMasuk.length
      ? {
          barangId: barangPalingBanyakMasuk[0].barangId,
          namaBarang: detailBarangMasuk?.namaBarang ?? "Unknown",
          jumlahMasuk: barangPalingBanyakMasuk[0]._sum.jumlahMasuk ?? 0,
        }
      : null,
    palingKeluar: barangPalingBanyakKeluar.length
      ? {
          barangId: barangPalingBanyakKeluar[0].barangId,
          namaBarang: detailBarangKeluar?.namaBarang ?? "Unknown",
          jumlahKeluar: barangPalingBanyakKeluar[0]._sum.jumlahKeluar ?? 0,
        }
      : null,
  }
}

export interface KeluarSummaryData {
  barangId: string;
  namaBarang: string;
  totalKeluar: number;
}



export async function getKeluarSummaryForPieChart(): Promise<KeluarSummaryData[]> {
  const keluarRecords = await prisma.keluar.findMany({
    select: {
      jumlahKeluar: true,
      barang: { // Accessing the related Barang model
        select: {
          id: true,
          namaBarang: true,
        },
      },
    },
  });

  if (!keluarRecords || keluarRecords.length === 0) {
    return [];
  }

  const summary = new Map<string, { namaBarang: string; totalKeluar: number }>();

  keluarRecords.forEach((record) => {
    if (record.barang) { // Good practice to check if relation loaded
      const barangId = record.barang.id;
      const currentData = summary.get(barangId);
      if (currentData) {
        summary.set(barangId, {
          ...currentData,
          totalKeluar: currentData.totalKeluar + record.jumlahKeluar,
        });
      } else {
        summary.set(barangId, {
          namaBarang: record.barang.namaBarang,
          totalKeluar: record.jumlahKeluar,
        });
      }
    }
  });

  const result: KeluarSummaryData[] = [];
  summary.forEach((value, key) => {
    result.push({
      barangId: key,
      namaBarang: value.namaBarang,
      totalKeluar: value.totalKeluar,
    });
  });

  return result.sort((a, b) => b.totalKeluar - a.totalKeluar);
}

export interface MasukSummaryData {
  barangId: string;
  namaBarang: string;
  totalMasuk: number;
}

export async function getMasukSummaryForPieChart(): Promise<MasukSummaryData[]> {
  const masukRecords = await prisma.masuk.findMany({
    select: {
      jumlahMasuk: true,
      barang: {
        select: {
          id: true,
          namaBarang: true,
        },
      },
    },
  });

  if (!masukRecords || masukRecords.length === 0) {
    return [];
  }

  const summary = new Map<string, { namaBarang: string; totalMasuk: number }>();

  masukRecords.forEach((record) => {
    if (record.barang) { 
      const barangId = record.barang.id;
      const currentData = summary.get(barangId);
      if (currentData) {
        summary.set(barangId, {
          ...currentData,
          totalMasuk: currentData.totalMasuk + record.jumlahMasuk,
        });
      } else {
        summary.set(barangId, {
          namaBarang: record.barang.namaBarang,
          totalMasuk: record.jumlahMasuk,
        });
      }
    }
  });

  const result: MasukSummaryData[] = [];
  summary.forEach((value, key) => {
    result.push({
      barangId: key,
      namaBarang: value.namaBarang,
      totalMasuk: value.totalMasuk,
    });
  });

  return result.sort((a, b) => b.totalMasuk - a.totalMasuk);
}