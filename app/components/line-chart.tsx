"use client"

import { TrendingUp } from "lucide-react" // Keep if you want the footer
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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

interface ChartDataPoint {
  month: string;
  [key: string]: unknown;
}

interface GenericLineChartProps {
  title: string;
  description: string;
  chartData: ChartDataPoint[];
  chartConfig: ChartConfig;
  dataKey: string;
  xAxisDataKey: string;
  lineColorVariable: string;
  footerText?: string;
  footerNote?: string;
}

export function GenericLineChart({
  title,
  description,
  chartData,
  chartConfig,
  dataKey,
  xAxisDataKey,
  lineColorVariable,
  footerText,
  footerNote,
}: GenericLineChartProps) {
  if (!chartData || chartData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-60 text-muted-foreground">
            No data available for the selected item.
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisDataKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => typeof value === 'string' ? value.slice(0, 3) : value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey={dataKey}
              type="natural"
              stroke={lineColorVariable}
              strokeWidth={2}
              dot={{
                fill: lineColorVariable,
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey={dataKey} // Ensure label shows the correct data
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      {(footerText || footerNote) && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          {footerText && (
            <div className="flex gap-2 font-medium leading-none">
              {footerText} <TrendingUp className="h-4 w-4" />
            </div>
          )}
          {footerNote && (
            <div className="leading-none text-muted-foreground">
              {footerNote}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  )
}