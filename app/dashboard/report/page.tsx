export const dynamic = "force-dynamic";

import { StockChartSelector } from "@/app/components/line-selection";
import { getAllBarang } from "@/app/actions";
import { PieChartKeluar } from "@/app/components/piechartkeluar";
import { PieChartMasuk } from "@/app/components/piechartmasuk";

export default async function Page() {
  const allBarang = await getAllBarang();

  return (
    <main className="p-6 lg:p-8">
      <div className="flex flex-col md:grid gap-8 xl:grid-cols-3 grid-row-2 xl:grid-rows-3 auto-rows-fr">

        {/* Chart takes 2 columns and spans 2 rows (full height) */}
        <div className="xl:col-span-2 xl:row-span-2">
          <StockChartSelector allBarang={allBarang} />
        </div>

        {/* Each pie chart takes one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-none xl:col-span-1 gap-8">
            <div className="col-span-1">
              <PieChartMasuk />
            </div>
            <div className="col-span-1">
              <PieChartKeluar />
            </div>
        </div>
      
      </div>
    </main>
  );
}
