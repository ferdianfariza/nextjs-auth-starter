import prisma from "@/lib/prisma";
import { columns, Stok } from "./columns"; 
import { DataTable } from "./data-table";


async function getCurrentStockData(): Promise<Stok[]> {
  const allBarang = await prisma.barang.findMany({
    select: {
      id: true,
      kodeBarang: true,
      namaBarang: true,
    },
  });

  const totalMasukByBarang = await prisma.masuk.groupBy({
    by: ['barangId'],
    _sum: {
      jumlahMasuk: true,
    },
  });

  const totalKeluarByBarang = await prisma.keluar.groupBy({
    by: ['barangId'],
    _sum: {
      jumlahKeluar: true,
    },
  });

  const masukMap = new Map(
    totalMasukByBarang.map(item => [item.barangId, item._sum.jumlahMasuk || 0])
  );
  const keluarMap = new Map(
    totalKeluarByBarang.map(item => [item.barangId, item._sum.jumlahKeluar || 0])
  );

  const stokData: Stok[] = allBarang.map(barang => {
    const totalMasuk = masukMap.get(barang.id) || 0;
    const totalKeluar = keluarMap.get(barang.id) || 0;
    const currentStok = totalMasuk - totalKeluar;

    return {
      id: barang.id, 
      barang: {
        kodeBarang: barang.kodeBarang,
        namaBarang: barang.namaBarang,
      },
      stok: currentStok,
    };
  });

  return stokData;
}


export default async function StokPage() {
  const stokData = await getCurrentStockData();

  return (
    <div className="p-3 lg:p-8">
      <DataTable columns={columns} data={stokData} />
    </div>
  );
}