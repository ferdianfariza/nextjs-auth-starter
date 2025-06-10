export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { columns } from "./columns"
import { DataTable } from "./data-table"

export default async function KeluarPage() {

    const barang = await prisma.barang.findMany({
      orderBy:{
        kodeBarang: "asc",
      }
    });

  return (
    <div className=" p-3 lg:p-8 gap-8">
      <DataTable columns={columns} data={barang}/>
    </div>
  )
}
