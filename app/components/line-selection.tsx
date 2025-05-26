"use client";

import { useState, useEffect, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GenericLineChart } from "./line-chart"; 
import { getStockByBarangId, MonthlyStockData } from "@/app/actions"; 
import { ChartConfig } from "@/components/ui/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Barang {
  id: string;
  namaBarang: string;
  kodeBarang: string;
}

interface StockChartSelectorProps {
  allBarang: Barang[];
  initialBarangId?: string;
}

const chartConfigBase = {
  stock: {
    label: "Stock",
    color: "hsl(var(--chart-1))", 
  },
} satisfies ChartConfig;

export function StockChartSelector({ allBarang, initialBarangId }: StockChartSelectorProps) {
  const [selectedBarangId, setSelectedBarangId] = useState<string | undefined>(initialBarangId || (allBarang.length > 0 ? allBarang[0].id : undefined));
  const [chartData, setChartData] = useState<MonthlyStockData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const selectedBarang = allBarang.find(b => b.id === selectedBarangId);

  useEffect(() => {
    if (selectedBarangId) {
      setIsLoading(true);
      setError(null);
      startTransition(async () => {
        try {
          const data = await getStockByBarangId(selectedBarangId);
          setChartData(data);
        } catch (err) {
          console.error("Failed to fetch stock data:", err);
          setError("Failed to load stock data. Please try again.");
          setChartData([]); 
        } finally {
          setIsLoading(false);
        }
      });
    } else {
      setChartData([]); 
    }
  }, [selectedBarangId]);

  const handleBarangChange = (barangId: string) => {
    setSelectedBarangId(barangId);
  };

  const formattedChartData = chartData.map(d => ({
    month: `${d.month.slice(0,3)} ${d.year.toString().slice(2)}`, 
    stock: d.stock,
  }));

  return (
    <Card className="w-full">
    <CardHeader>
      <CardTitle>Stock Chart</CardTitle>
      <CardDescription>
        Pilih barang untuk melihat grafik stok bulanan.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <Select onValueChange={handleBarangChange} defaultValue={selectedBarangId}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pilih Barang" />
        </SelectTrigger>
        <SelectContent>
          {allBarang.map((barang) => (
            <SelectItem key={barang.id} value={barang.id}>
              {barang.namaBarang} ({barang.kodeBarang})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isLoading || isPending ? (
        <div className="flex items-center justify-center h-60 text-muted-foreground">
          Loading chart data...
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-60 text-red-500">
          {error}
        </div>
      ) : (
        <GenericLineChart
          title={`Stock Chart: ${selectedBarang?.namaBarang || "N/A"}`}
          description={`Monthly stock levels (Masuk - Keluar)`}
          chartData={formattedChartData}
          chartConfig={chartConfigBase}
          dataKey="stock"
          xAxisDataKey="month"
          lineColorVariable="var(--color-stock)"
          footerNote={`Data stok bulanan untuk ${selectedBarang?.namaBarang || "the selected item"}`}
        />
      )}
    </CardContent>
  </Card>
);
}