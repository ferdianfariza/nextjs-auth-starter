"use client"

import * as React from "react"
import { Pie, PieChart, Cell } from "recharts" 

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getKeluarSummaryForPieChart, KeluarSummaryData } from "@/lib/getData" 

const PIE_CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--chart-6))", 
  "hsl(var(--chart-7))",
];

interface PieChartDataItem {
  name: string;
  value: number; 
  fill: string;
  barangId: string;
}


export function PieChartKeluar() {
  const [chartData, setChartData] = React.useState<PieChartDataItem[]>([]);
  const [chartConfig, setChartConfig] = React.useState<ChartConfig>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [totalOverallKeluar, setTotalOverallKeluar] = React.useState(0);


  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const summaryData: KeluarSummaryData[] = await getKeluarSummaryForPieChart();

        if (summaryData.length === 0) {
          setChartData([]);
          setChartConfig({});
          setTotalOverallKeluar(0);
          setIsLoading(false);
          return;
        }

        const newChartData: PieChartDataItem[] = summaryData.map((item, index) => ({
          name: item.namaBarang,
          value: item.totalKeluar,
          fill: PIE_CHART_COLORS[index % PIE_CHART_COLORS.length], 
          barangId: item.barangId,
        }));

        const newChartConfig: ChartConfig = {
          totalKeluar: { 
            label: "Total Keluar",
          },
        };
        summaryData.forEach((item, index) => {
          newChartConfig[item.namaBarang] = { 
            label: item.namaBarang,
            color: PIE_CHART_COLORS[index % PIE_CHART_COLORS.length],
          };
        });
        
        const overallTotal = summaryData.reduce((sum, item) => sum + item.totalKeluar, 0);
        setTotalOverallKeluar(overallTotal);
        setChartData(newChartData);
        setChartConfig(newChartConfig);

      } catch (err) {
        console.error("Failed to fetch pie chart data:", err);
        setError("Could not load chart data.");
        setChartData([]);
        setChartConfig({});
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Card className="flex flex-col items-center justify-center min-h-[300px]">
        <CardHeader>
          <CardTitle>Barang Keluar Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Loading chart data...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="flex flex-col items-center justify-center min-h-[300px]">
        <CardHeader>
          <CardTitle>Barang Keluar Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">{error}</p>
        </CardContent>
      </Card>
    );
  }
  
  if (chartData.length === 0 && !isLoading) {
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Barang Keluar Distribution</CardTitle>
          <CardDescription>Distribution of items going out.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0 flex items-center justify-center">
          <p className="text-muted-foreground">No data available for barang keluar.</p>
        </CardContent>
         <CardFooter className="flex-col gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            No items recorded as keluar yet.
          </div>
        </CardFooter>
      </Card>
    );
  }


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Barang Keluar</CardTitle>
        <CardDescription>
          Distribusi barang keluar (Total: {totalOverallKeluar})
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig} 
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip
              cursor={false} 
              content={<ChartTooltipContent indicator="dot" hideLabel={false} />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              labelLine={false}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`} 
              innerRadius={60} 
              outerRadius={80} 
              paddingAngle={2}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Pie chart untuk barang keluar
        </div>
      </CardFooter>
    </Card>
  )
}