import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

export function ProgressCard() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Your Progress</CardTitle>
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            2/2
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Upload File - Upload File</span>
          </div>
          <Progress value={100} className="h-2" />
        </div>
        
        <Button className="w-full" variant="default">
          Continue to Next Step
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}