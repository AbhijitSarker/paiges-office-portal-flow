import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Crown, 
  Check, 
  Star,
  Zap,
  Users,
  FileText,
  BarChart,
  Shield,
  ArrowRight
} from "lucide-react"

const features = [
  { name: "Monthly Invoices", demo: "10", basic: "100", premium: "Unlimited", pro: "Unlimited" },
  { name: "Customer Contacts", demo: "5", basic: "50", premium: "500", pro: "Unlimited" },
  { name: "File Uploads", demo: "1", basic: "10", premium: "50", pro: "Unlimited" },
  { name: "Payment Processing", demo: "❌", basic: "✅", premium: "✅", pro: "✅" },
  { name: "Email Automation", demo: "❌", basic: "Basic", premium: "Advanced", pro: "AI-Powered" },
  { name: "Analytics & Reports", demo: "❌", basic: "Basic", premium: "Advanced", pro: "Custom" },
  { name: "API Access", demo: "❌", basic: "❌", premium: "✅", pro: "✅" },
  { name: "Priority Support", demo: "❌", basic: "❌", premium: "✅", pro: "24/7" },
]

export default function CurrentPlan() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Crown className="h-8 w-8" />
            Current Plan
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your subscription and explore available plans
          </p>
        </div>
        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
          Demo Account
        </Badge>
      </div>

      {/* Current Plan Status */}
      <Card className="shadow-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Demo Plan</h3>
                <p className="text-muted-foreground">Try all features with limited usage</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">Free</p>
              <p className="text-sm text-muted-foreground">Limited time access</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Demo Plan */}
          <Card className="shadow-card border-primary/20 relative">
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">Current</Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Demo</CardTitle>
              <div className="text-2xl font-bold">Free</div>
              <p className="text-sm text-muted-foreground">Try before you buy</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  10 Monthly Invoices
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  5 Customer Contacts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  1 File Upload
                </li>
              </ul>
              <Button className="w-full" disabled>
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Basic Plan */}
          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-lg">Basic</CardTitle>
              <div className="text-2xl font-bold">$29<span className="text-sm font-normal">/month</span></div>
              <p className="text-sm text-muted-foreground">Perfect for small businesses</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  100 Monthly Invoices
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  50 Customer Contacts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Payment Processing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Basic Email Automation
                </li>
              </ul>
              <Button className="w-full">
                Upgrade to Basic
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="shadow-card hover:shadow-elegant transition-shadow border-accent/50 relative">
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent text-accent-foreground">Popular</Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mb-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg">Premium</CardTitle>
              <div className="text-2xl font-bold">$79<span className="text-sm font-normal">/month</span></div>
              <p className="text-sm text-muted-foreground">Advanced features & automation</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Unlimited Invoices
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  500 Customer Contacts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Advanced Analytics
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  API Access
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">
                Upgrade to Premium
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg">Pro</CardTitle>
              <div className="text-2xl font-bold">$199<span className="text-sm font-normal">/month</span></div>
              <p className="text-sm text-muted-foreground">Enterprise-grade solution</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Everything Unlimited
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  AI-Powered Automation
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  24/7 Priority Support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Custom Integration
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feature Comparison */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Feature Comparison</CardTitle>
          <p className="text-sm text-muted-foreground">
            Compare features across all plans to find the best fit for your needs
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Demo</th>
                  <th className="text-center py-3 px-4">Basic</th>
                  <th className="text-center py-3 px-4">Premium</th>
                  <th className="text-center py-3 px-4">Pro</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{feature.name}</td>
                    <td className="text-center py-3 px-4">{feature.demo}</td>
                    <td className="text-center py-3 px-4">{feature.basic}</td>
                    <td className="text-center py-3 px-4">{feature.premium}</td>
                    <td className="text-center py-3 px-4">{feature.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}