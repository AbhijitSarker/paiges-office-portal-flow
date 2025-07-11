import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

export function TutorialCard() {
  return (
    <Card className="shadow-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-lg">Watch Tutorial</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Watch this small video to get started.
          </p>
        </div>
        <Button variant="ghost" size="sm">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Play className="h-8 w-8 text-primary-foreground ml-1" />
            </div>
            <p className="text-sm text-muted-foreground">Click to play tutorial</p>
          </div>
        </div>
        <Button className="w-full" variant="outline">
          <Play className="mr-2 h-4 w-4" />
          Watch Tutorial
        </Button>
      </CardContent>
    </Card>
  )
}