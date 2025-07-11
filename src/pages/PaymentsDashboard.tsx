import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  TrendingUp, 
  Activity, 
  RefreshCw, 
  Download,
  Calendar
} from "lucide-react"

const paymentStats = [
  {
    title: "Last 30 Days Total Collected",
    value: "$0.00 USD",
    subtitle: "Transferred in last 30 days",
    detail: "0 payments",
    icon: DollarSign,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Last 30 Days Net Received",
    value: "$0.00 USD", 
    subtitle: "After platform fees",
    detail: "Net earnings from last 30 days",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Number of Transactions",
    value: "0",
    subtitle: "Successfully transferred transactions",
    detail: "In the last 30 days",
    icon: Activity,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "30-Day Growth",
    value: "0 %",
    subtitle: "vs Previous 30 Days",
    detail: "Previous period: $0.00",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

export default function PaymentsDashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Activity className="h-8 w-8" />
            Payments Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your payment collections and transaction history
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover">
          <Download className="mr-2 h-4 w-4" />
          View All Payments
        </Button>
      </div>

      {/* Payment Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
          <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {stat.title}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {stat.subtitle}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Payments Section */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl">Recent Payments</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Latest payment transactions and transfers
            </p>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No payments found</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              When you start receiving payments, they'll appear here with detailed transaction information.
            </p>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Set up your first invoice
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}