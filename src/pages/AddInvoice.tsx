import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Plus, 
  User, 
  FileText, 
  Calendar,
  DollarSign,
  AlertTriangle,
  Save,
  RotateCcw
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AddInvoice() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Plus className="h-8 w-8" />
          Add Invoice
        </h1>
        <p className="text-muted-foreground mt-1">
          Select a customer contact and fill out the invoice details.
        </p>
      </div>

      {/* Alert for no contacts */}
      <Alert className="border-warning/20 bg-warning/10">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <AlertDescription className="text-warning-foreground">
          No customer contacts available. Please{" "}
          <Button variant="link" className="h-auto p-0 text-primary underline">
            add a customer contact first
          </Button>{" "}
          to create an invoice.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customerContact" className="text-sm font-medium">
                  Select Customer Contact <span className="text-destructive">*</span>
                </Label>
                <Select disabled>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Choose a customer contact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-contacts">No contacts available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Details */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Invoice Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="invoiceNumber" className="text-sm font-medium">
                    Invoice Number <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="invoiceNumber"
                    placeholder="Type Invoice Number"
                    className="h-11"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueAmount" className="text-sm font-medium">
                    Due Amount <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="dueAmount"
                      placeholder="Type Due Amount"
                      className="h-11 pl-10"
                      disabled
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dueDate" className="text-sm font-medium">
                  Due Date <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="dueDate"
                    placeholder="Select date"
                    className="h-11 pl-10"
                    disabled
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1 h-11" disabled>
              <Save className="mr-2 h-4 w-4" />
              Create Invoice
            </Button>
            <Button variant="outline" className="h-11" disabled>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Setup Required */}
          <Card className="shadow-card bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-base text-destructive">Setup Required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="mb-3">Before creating invoices, you need:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2"></div>
                    <span>At least one customer contact</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full" size="sm">
                <User className="mr-2 h-4 w-4" />
                Add Customer Contact
              </Button>
            </CardContent>
          </Card>

          {/* Invoice Information */}
          <Card className="shadow-card bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base">Invoice Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p className="mb-2"><strong>Required Fields:</strong></p>
                <ul className="space-y-1">
                  <li>• Customer contact</li>
                  <li>• Invoice number</li>
                  <li>• Due amount</li>
                  <li>• Due date</li>
                </ul>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2"><strong>After creation:</strong></p>
                <ul className="space-y-1">
                  <li>• Send email follow-ups</li>
                  <li>• Track payment status</li>
                  <li>• Generate reports</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}