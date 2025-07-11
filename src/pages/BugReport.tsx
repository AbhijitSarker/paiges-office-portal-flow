import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Bug, 
  Send, 
  Info,
  Camera,
  Monitor,
  Smartphone
} from "lucide-react"

export default function BugReport() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Bug className="h-8 w-8" />
          Report a Bug
        </h1>
        <p className="text-muted-foreground mt-1">
          Help us improve by reporting issues you encounter
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Bug Report Details</CardTitle>
              <p className="text-sm text-muted-foreground">
                Please provide as much detail as possible to help us resolve the issue
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bugTitle" className="text-sm font-medium">
                  Bug Title <span className="text-destructive">*</span>
                </Label>
                <Input 
                  id="bugTitle"
                  placeholder="Brief description of the issue"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bugDescription" className="text-sm font-medium">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea 
                  id="bugDescription"
                  placeholder="Describe what happened and what you expected to happen..."
                  className="min-h-32"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stepsToReproduce" className="text-sm font-medium">
                  Steps to Reproduce
                </Label>
                <Textarea 
                  id="stepsToReproduce"
                  placeholder="1. Go to...&#10;2. Click on...&#10;3. See error..."
                  className="min-h-24"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="browser" className="text-sm font-medium">
                    Browser & Version
                  </Label>
                  <Input 
                    id="browser"
                    placeholder="e.g., Chrome 120.0"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="device" className="text-sm font-medium">
                    Device & OS
                  </Label>
                  <Input 
                    id="device"
                    placeholder="e.g., Windows 11, iPhone 15"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="errorMessage" className="text-sm font-medium">
                  Error Messages
                </Label>
                <Textarea 
                  id="errorMessage"
                  placeholder="Copy any error messages you see..."
                  className="min-h-20"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1 h-11">
              <Send className="mr-2 h-4 w-4" />
              Submit Bug Report
            </Button>
            <Button variant="outline" className="h-11">
              Clear Form
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Bug Report Tips */}
          <Card className="shadow-card bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="h-4 w-4" />
                Reporting Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="mb-2"><strong>To help us fix issues faster:</strong></p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Be specific about what went wrong</li>
                  <li>• Include steps to reproduce the issue</li>
                  <li>• Mention your browser and device</li>
                  <li>• Copy any error messages</li>
                  <li>• Attach screenshots if helpful</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Device Info Helper */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Device Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Desktop/Laptop</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Mobile Device</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Include your device type and operating system version
              </p>
            </CardContent>
          </Card>

          {/* Screenshot Helper */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Screenshots
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Screenshots can help us understand the issue better. Consider including:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Error messages</li>
                <li>• Unexpected behavior</li>
                <li>• Console errors (F12)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="shadow-card bg-accent/5 border-accent/20">
            <CardContent className="p-4">
              <div className="text-sm">
                <p className="font-medium mb-1">Need immediate help?</p>
                <p className="text-muted-foreground">
                  For urgent issues, contact our support team directly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}