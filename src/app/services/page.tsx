import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Services — Grand Will Co.",
  description: "Product innovation, prototyping & testing, manufacturing, quality, logistics, and retail readiness.",
};

export default function ServicesPage() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h7l-2 9 7-13h6L14 12l2-9-7 13H3z" />
        </svg>
      ),
      title: "Product Innovation & Development",
      text: "Concepting, industrial design, and engineering to turn ideas into manufacturable products.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19h16M7 19V5h10v14M9 8h6m-6 4h6" />
        </svg>
      ),
      title: "Prototyping & Testing",
      text: "Rapid iterations—3D printing, CNC, sheet metal, electronics—plus validation and test plans.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7h18M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
        </svg>
      ),
      title: "Contract Manufacturing",
      text: "Sourcing and vendor management with DFM/PPAP, assembly instructions, and ramp support.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3 3 9l9 6 9-6-9-6ZM3 15l9 6 9-6" />
        </svg>
      ),
      title: "Quality Assurance & Compliance",
      text: "GD&T drawings, DFMEA/DRB, regulatory and audit-ready documentation.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 12l3-3m-3 3 3 3M21 12l-3-3m3 3-3 3" />
        </svg>
      ),
      title: "Logistics & Fulfillment",
      text: "Packaging, labeling, and fulfillment workflows from pilot runs to national rollouts.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      ),
      title: "Retail Sales",
      text: "Placement and readiness for major retailers—Walmart, Lowe’s, Ace, Home Depot, Amazon.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-slate-500">Grand Will Co.</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold">Services</h1>
          <p className="mt-4 text-slate-600">
            End-to-end product development: from concept and prototyping to manufacturing, quality, logistics, and retail readiness.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="rounded-2xl h-full">
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-content-center mb-3">
                  {f.icon}
                </div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
