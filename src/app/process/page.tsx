import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { ArrowHorizontal, ArrowVertical, ArrowDiagTestToDfP } from "../_components/arrows";

// NOTE: No `"use client"` here and no `export const metadata` in this file.

export default function ProcessPage() {
  const process = {
    concept: {
      title: "Concept Development",
      items: [
        "Concept definition",
        "Constraint sizing",
        "Industrial Design (CMF, sketches)",
        "Concept 3D CAD models",
        "Concept presentation",
      ],
    },
    dfp: {
      title: "Design for Prototyping",
      items: [
        "Engineering calculations",
        "Electronics schematic & layout",
        "3D CAD development",
        "BOM development",
        "Assembly instructions",
        "Photorealistic rendering",
      ],
    },
    proto: {
      title: "Prototyping",
      items: ["Component fabrication", "PCB fabrication", "Component procurement", "Assembly"],
    },
    test: {
      title: "Testing",
      items: [
        "Individual component validation",
        "Feasibility of assembly",
        "Functional testing",
        "Consumer feedback",
      ],
    },
    detail: {
      title: "Detailed Design",
      items: [
        "3D CAD (DFM)",
        "2D drafting with GD&T",
        "CAM",
        "Assembly instructions",
        "BOM finalization",
      ],
    },
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-slate-500">Grand Will Co.</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold">Our Product Development Process</h1>
          <p className="mt-4 text-slate-600">
            Design is iterative. We move from concept to production—and loop based on test results and feedback.
          </p>
        </div>

        {/* Desktop flowchart */}
        <div className="relative mt-10 hidden md:grid mx-auto max-w-5xl overflow-visible grid-cols-[1fr_120px_1fr] grid-rows-[auto_80px_auto_80px_auto]">
          {/* Step 1 */}
          <div className="col-[1] row-[1]">
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <Badge variant="secondary" className="rounded-full w-fit">Step 1</Badge>
                <CardTitle className="mt-2 text-lg">{process.concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  {process.concept.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="col-[3] row-[1]">
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <Badge variant="secondary" className="rounded-full w-fit">Step 2</Badge>
                <CardTitle className="mt-2 text-lg">{process.dfp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  {process.dfp.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="col-[3] row-[3]">
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <Badge variant="secondary" className="rounded-full w-fit">Step 3</Badge>
                <CardTitle className="mt-2 text-lg">{process.proto.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  {process.proto.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Step 4 */}
          <div className="col-[1] row-[3]">
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <Badge variant="secondary" className="rounded-full w-fit">Step 4</Badge>
                <CardTitle className="mt-2 text-lg">{process.test.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  {process.test.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Step 5 */}
          <div className="col-[1] row-[5]">
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <Badge variant="secondary" className="rounded-full w-fit">Step 5</Badge>
                <CardTitle className="mt-2 text-lg">{process.detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  {process.detail.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* connectors */}
          <div className="col-[2] row-[1] text-slate-300 pointer-events-none flex items-center justify-center">
            <div className="w-full h-12 overflow-visible"><ArrowHorizontal direction="right" /></div>
          </div>
          <div className="col-[3] row-[2] text-slate-300 pointer-events-none flex items-center justify-center">
            <div className="w-20 h-full overflow-visible"><ArrowVertical /></div>
          </div>
          <div className="col-[2] row-[3] text-slate-300 pointer-events-none flex items-center justify-center">
            <div className="w-full h-12 overflow-visible"><ArrowHorizontal direction="left" /></div>
          </div>
          <div className="col-[1] row-[4] text-slate-300 pointer-events-none flex items-center justify-center">
            <div className="w-20 h-full overflow-visible"><ArrowVertical /></div>
          </div>
          <div className="col-[2] row-[2] w-full h-full text-slate-300 pointer-events-none overflow-visible">
            <ArrowDiagTestToDfP />
          </div>

          <div className="absolute right-2 top-2 text-xs text-slate-500 bg-white/80 rounded-full px-2 py-1">
            Iterate as needed
          </div>
        </div>

        {/* Mobile flow */}
        <div className="mt-10 md:hidden max-w-3xl mx-auto">
          {[
            { n: 1, data: process.concept },
            { n: 2, data: process.dfp },
            { n: 3, data: process.proto },
            { n: 4, data: process.test },
            { n: 5, data: process.detail },
          ].map((s, idx, arr) => (
            <div key={s.data.title}>
              <Card className="rounded-2xl">
                <CardHeader>
                  <Badge variant="secondary" className="rounded-full w-fit">Step {s.n}</Badge>
                  <CardTitle className="mt-2 text-lg">{s.data.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {s.data.items.map((i: string) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> {i}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {idx < arr.length - 1 && (
                <div className="flex items-center justify-center my-3 text-slate-300" aria-hidden>
                  <div className="w-px h-6 bg-slate-300" />
                  <div className="mx-2 w-6 h-8 overflow-visible"><ArrowVertical /></div>
                  <div className="w-px h-6 bg-slate-300" />
                </div>
              )}
            </div>
          ))}
          <p className="mt-4 text-center text-xs text-slate-500">Iterate as needed</p>
        </div>
      </div>
    </section>
  );
}
