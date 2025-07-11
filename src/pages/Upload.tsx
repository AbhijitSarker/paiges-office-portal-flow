import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Upload, 
  FileText, 
  File,
  CheckCircle,
  Clock,
  AlertCircle,
  X
} from "lucide-react"

const uploadSteps = [
  { id: 1, title: "Select File Type", completed: true },
  { id: 2, title: "Upload File", completed: false, current: true },
  { id: 3, title: "Processing", completed: false },
  { id: 4, title: "Complete", completed: false },
]

export default function UploadPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Upload className="h-8 w-8" />
          Upload CSV / PDF
        </h1>
        <p className="text-muted-foreground mt-1">
          Upload customer data and invoices from CSV files or PDF documents
        </p>
      </div>

      {/* Progress Steps */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Upload Progress</h3>
            <Badge variant="outline">Step 2 of 4</Badge>
          </div>
          <div className="flex items-center gap-4">
            {uploadSteps.map((step, index) => (
              <div key={step.id} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.completed 
                    ? 'bg-accent text-accent-foreground' 
                    : step.current 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step.completed ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <span className={`text-sm ${
                  step.completed || step.current ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
                {index < uploadSteps.length - 1 && (
                  <div className="w-8 h-0.5 bg-muted mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Upload Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* File Upload */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Step 2: Upload File</CardTitle>
              <p className="text-sm text-muted-foreground">
                Select and upload your CSV or PDF file (max 10MB)
              </p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Drop your file here</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      or click to browse your computer
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="outline">CSV</Badge>
                      <Badge variant="outline">PDF</Badge>
                      <Badge variant="outline">Max 10MB</Badge>
                    </div>
                  </div>
                  <Button>
                    <File className="mr-2 h-4 w-4" />
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing Queue */}
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Processing Queue</CardTitle>
              <Button variant="ghost" size="sm">
                <X className="h-4 w-4" />
                Close panel
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-8 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">No files being processed</p>
                  <p className="text-sm text-muted-foreground">
                    Upload a file to see processing status here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upload Guidelines */}
          <Card className="shadow-card bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base">Upload Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="mb-2"><strong>Supported Formats:</strong></p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• CSV files with customer data</li>
                  <li>• PDF invoices and documents</li>
                </ul>
              </div>
              <div className="text-sm">
                <p className="mb-2"><strong>File Requirements:</strong></p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Maximum file size: 10MB</li>
                  <li>• One file at a time</li>
                  <li>• UTF-8 encoding for CSV</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CSV Template */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">CSV Template</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Download our CSV template to ensure proper formatting
              </p>
              <Button variant="outline" className="w-full" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </CardContent>
          </Card>

          {/* Recent Uploads */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Recent Uploads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground text-center py-4">
                  No recent uploads
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}