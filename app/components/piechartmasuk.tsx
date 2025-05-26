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
import { getMasukSummaryForPieChart, MasukSummaryData } from "@/lib/getData" 

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

export function PieChartMasuk() {
  const [chartData, setChartData] = React.useState<PieChartDataItem[]>([]);
  const [chartConfig, setChartConfig] = React.useState<ChartConfig>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [totalOverallMasuk, setTotalOverallMasuk] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const summaryData: MasukSummaryData[] = await getMasukSummaryForPieChart();

        if (summaryData.length === 0) {
          setChartData([]);
          setChartConfig({});
          setTotalOverallMasuk(0);
          setIsLoading(false);
          return;
        }

        const newChartData: PieChartDataItem[] = summaryData.map((item, index) => ({
          name: item.namaBarang,
          value: item.totalMasuk,
          fill: PIE_CHART_COLORS[index % PIE_CHART_COLORS.length],
          barangId: item.barangId,
        }));

        const newChartConfig: ChartConfig = {
          totalMasuk: { 
            label: "Total Masuk",
          },
        };
        summaryData.forEach((item, index) => {
          newChartConfig[item.namaBarang] = {
            label: item.namaBarang,
            color: PIE_CHART_COLORS[index % PIE_CHART_COLORS.length],
          };
        });

        const overallTotal = summaryData.reduce((sum, item) => sum + item.totalMasuk, 0);
        setTotalOverallMasuk(overallTotal);
        setChartData(newChartData);
        setChartConfig(newChartConfig);

      } catch (err) {
        console.error("Failed to fetch pie chart data for Masuk:", err);
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
          <CardTitle>Barang Masuk Distribution</CardTitle>
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
          <CardTitle>Barang Masuk Distribution</CardTitle>
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
          <CardTitle>Barang Masuk Distribution</CardTitle>
          <CardDescription>Distribution of items coming in.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0 flex items-center justify-center">
          <p className="text-muted-foreground">No data available for barang masuk.</p>
        </CardContent>
         <CardFooter className="flex-col gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            No items recorded as masuk yet.
          </div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Barang Masuk </CardTitle>
        <CardDescription>
          Distribusi barang masuk (Total: {totalOverallMasuk})
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
              label={({  percent }) => `${(percent * 100).toFixed(0)}%`}
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
          Pie chart untuk barang masuk
        </div>
      </CardFooter>
    </Card>
  );
}