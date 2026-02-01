import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

interface ExampleCardProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ExampleCard({ title, description, children }: ExampleCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="border-b border-[var(--color-border)]">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center p-6 min-h-[200px]">
        {children}
      </CardContent>
    </Card>
  )
}
