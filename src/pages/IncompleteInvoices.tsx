import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  FileCheck, 
  Search, 
  Edit, 
  RefreshCw,
  AlertTriangle,
  CheckCircle
} from "lucide-react"

export default function IncompleteInvoices() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <FileCheck className="h-8 w-8" />
            Incomplete Invoices
          </h1>
          <p className="text-muted-foreground mt-1">
            Review and complete invoices with missing information
          </p>
        </div>
        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
          <AlertTriangle className="mr-1 h-3 w-3" />
          Action Required
        </Badge>
      </div>

      {/* Search and Actions */}
      <Card className="shadow-card">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search incomplete invoices..."
                className="pl-10"
              />
            </div>
            <Button>
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync All Complete
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Incomplete Invoices Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Invoices Requiring Completion</CardTitle>
          <p className="text-sm text-muted-foreground">
            Complete missing information to sync these invoices to your main list
          </p>
        </CardHeader>
        <CardContent>
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 pb-4 border-b text-sm font-medium text-muted-foreground">
            <div>Customer Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Invoice Number</div>
            <div>Due Amount</div>
            <div>Due Date</div>
            <div>Action</div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">All Invoices Complete!</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Great job! All your invoices have complete information. When invoices need attention, they'll appear here.
            </p>
            <div className="flex gap-3">
              <Button variant="outline">
                <FileCheck className="mr-2 h-4 w-4" />
                View All Invoices
              </Button>
              <Button>
                <Edit className="mr-2 h-4 w-4" />
                Create New Invoice
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card className="shadow-card bg-muted/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">What makes an invoice incomplete?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Missing customer billing address</li>
                <li>• Incomplete city or state information</li>
                <li>• Missing due amount or due date</li>
                <li>• Invalid customer contact details</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}