import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react"

const stats = [
  {
    title: "Total Invoices",
    value: "0",
    subtitle: "All time invoices",
    icon: FileText,
    trend: null,
  },
  {
    title: "Lifetime Total Collected",
    value: "$0.00 USD",
    subtitle: "Total payments collected",
    icon: DollarSign,
    trend: "+0%",
    trendType: "positive" as const,
  },
  {
    title: "Lifetime Net Received",
    value: "$0.00 USD",
    subtitle: "After platform fees",
    icon: TrendingUp,
    trend: "+0%",
    trendType: "positive" as const,
  },
  {
    title: "Pending Amounts",
    value: "$0.00 USD",
    subtitle: "Yet to be collected",
    icon: Clock,
    trend: null,
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">
                {stat.subtitle}
              </p>
              {stat.trend && (
                <Badge 
                  variant={stat.trendType === "positive" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {stat.trend}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}