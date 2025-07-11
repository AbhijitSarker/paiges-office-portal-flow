import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  UserPlus, 
  User, 
  Mail, 
  Phone,
  MapPin,
  Save,
  RotateCcw
} from "lucide-react"

export default function AddContact() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <UserPlus className="h-8 w-8" />
          Add Customer Contact
        </h1>
        <p className="text-muted-foreground mt-1">
          Fill out all the fields to add a new customer contact. Customer contacts can be attached to invoices later.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Contact Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                Customer Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customerName" className="text-sm font-medium">
                    Customer Name <span className="text-destructive">*</span>
                  </Label>
                  <Input 
                    id="customerName"
                    placeholder="Type customer name"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="text-sm font-medium">
                    Mobile Number
                  </Label>
                  <Input 
                    id="mobileNumber"
                    placeholder="Type Phone Number"
                    className="h-11"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Type Email"
                  className="h-11"
                />
              </div>
            </CardContent>
          </Card>

          {/* Billing Address Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Billing Address Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="streetAddress" className="text-sm font-medium">
                  Street Address
                </Label>
                <Input 
                  id="streetAddress"
                  placeholder="Enter street address"
                  className="h-11"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">
                    City
                  </Label>
                  <Input 
                    id="city"
                    placeholder="Enter city"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium">
                    State
                  </Label>
                  <Input 
                    id="state"
                    placeholder="Enter state code (e.g., NY)"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-sm font-medium">
                    Zip Code
                  </Label>
                  <Input 
                    id="zipCode"
                    placeholder="Enter zip code"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium">
                    Country
                  </Label>
                  <Input 
                    id="country"
                    placeholder="Enter country code (e.g., US)"
                    className="h-11"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1 h-11">
              <Save className="mr-2 h-4 w-4" />
              Create Contact
            </Button>
            <Button variant="outline" className="h-11">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Form Help */}
          <Card className="shadow-card bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base">Contact Information Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p className="mb-2"><strong>Required Fields:</strong></p>
                <ul className="space-y-1">
                  <li>• Customer name</li>
                  <li>• Email address</li>
                </ul>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2"><strong>Optional but Recommended:</strong></p>
                <ul className="space-y-1">
                  <li>• Complete billing address</li>
                  <li>• Mobile phone number</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                View All Contacts
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Import from CSV
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}