"use client"

import * as React from "react"
import type { TooltipProps } from "recharts"
import { cn } from "@/lib/utils"

interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

function ChartContainer({ config, children, className, ...props }: ChartContainerProps) {
  const [tooltipData, setTooltipData] = React.useState<{
    [key: string]: string | number
  } | null>(null)

  // Create CSS variables for chart colors
  const style = Object.entries(config).reduce<Record<string, string>>((acc, [key, value]) => {
    if (value.color) {
      acc[`--color-${key}`] = value.color
    }
    return acc
  }, {})

  return (
    <div className={cn("recharts-wrapper", className)} style={style} {...props}>
      {children}
    </div>
  )
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: any[]
  label?: string
  formatter?: (value: number, name: string, props: any) => React.ReactNode
  labelFormatter?: (label: string) => React.ReactNode
  itemSorter?: (a: any) => number
  className?: string
  hideLabel?: boolean
}

function ChartTooltipContent({
  active,
  payload,
  label,
  formatter,
  labelFormatter,
  itemSorter,
  className,
  hideLabel = false,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) {
    return null
  }

  const payloadData = itemSorter ? [...payload].sort(itemSorter) : payload

  return (
    <div className={cn("rounded-lg border bg-background p-2 shadow-md", className)}>
      {!hideLabel && (
        <div className="border-b px-2 py-1 text-sm font-medium">
          {labelFormatter ? labelFormatter(label as string) : label}
        </div>
      )}
      <div className="px-2 py-1">
        {payloadData.map((item, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between space-x-8 text-sm">
            <div className="flex items-center">
              <div
                className="mr-1 h-2 w-2 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <div className="font-medium">{formatter ? formatter(item.value, item.name, item) : item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ChartTooltipCustomProps extends TooltipProps<any, any> {
  children: React.ReactNode
}

function ChartTooltip({ children, ...props }: ChartTooltipCustomProps) {
  return <ChartTooltipCustomProps {...props}>{children}</ChartTooltipCustomProps>
}

export { ChartContainer, ChartTooltip, ChartTooltipContent }

