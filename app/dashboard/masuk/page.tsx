import prisma from "@/lib/prisma";
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default async function MasukPage() {
  const masuk = await prisma.masuk.findMany({
    orderBy: {
      tanggal: "desc",
    },
    include: {
      barang: {
        select: {
          kodeBarang: true,
          namaBarang: true,
        },
      },
    },
  })
  return (
    <div className=" p-3 lg:p-8 gap-8">
      <DataTable columns={columns} data={masuk}/>
    </div>
  )
}
