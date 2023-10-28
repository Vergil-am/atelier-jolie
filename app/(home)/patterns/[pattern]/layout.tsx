import PatternsSideBar from "@/components/patternsSideBar"


export default function PatternsLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { pattern: string }
}) {
  return (
    <main className="flex">
      <PatternsSideBar pattern={params.pattern} />
      {children}
    </main>
  )
}
