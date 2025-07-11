import { StatsGrid } from "@/components/dashboard/stats-grid"
import { ProgressCard } from "@/components/dashboard/progress-card"
import { TutorialCard } from "@/components/dashboard/tutorial-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Users, AlertCircle } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to your billing and payments management portal
        </p>
      </div>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Progress Card */}
        <ProgressCard />

        {/* Tutorial Card */}
        <TutorialCard />

        {/* Quick Actions Card */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload CSV / PDF
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Add Customer Contact
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Create Invoice
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Invoice List Section */}
      <Card className="shadow-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg">Invoice List with details</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              This is the list of all the customers with information. Click on the green button to go to email follow-up page of respective customer.
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Add Invoice
            </Button>
            <Button size="sm" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload In Bulk
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">No data</p>
              <p className="text-sm text-muted-foreground">
                Get started by uploading your first invoice or adding a customer contact.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Processing Status */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-medium">File Processing Status</p>
              <p className="text-sm text-muted-foreground">No files being processed</p>
            </div>
            <Button variant="ghost" size="sm">
              Close panel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}