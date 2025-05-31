export const dynamic = "force-dynamic"; // This disables SSG and ISR

import prisma from "@/lib/prisma";
import { TambahBarangMasukCard } from "./dashboard/masuk/createMasuk";
import { TambahBarangKeluarCard } from "./dashboard/keluar/createKeluar";
import { TambahBarangCard } from "./dashboard/barang/createBarang";
import { auth } from '@clerk/nextjs/server'




export default async function Home() {

  const { userId } = await auth()

  if (!userId) {
    return <div>Sign in to view this page</div>
  }

  const barang = await prisma.barang.findMany({
    orderBy:{
      kodeBarang: "asc",
    }
  });

  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  md:flex-row p-4 md:p-8 gap-4 md:gap-8">
      <div className="col-span-1">
      <TambahBarangMasukCard barang={barang} />
      </div>
      <div className="col-span-1">
      <TambahBarangKeluarCard barang={barang} />
      </div>
      <div className="col-span-1">
      <TambahBarangCard barang={barang} />
      </div>

    </div>
  );
}
