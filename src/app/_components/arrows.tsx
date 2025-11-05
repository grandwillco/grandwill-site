export function ArrowHorizontal({ direction = "right" }: { direction?: "right" | "left" }) {
  const x1 = direction === "right" ? 16 : 124;
  const x2 = direction === "right" ? 124 : 16;
  return (
    <svg className="w-full h-full overflow-visible" viewBox="0 0 140 48" preserveAspectRatio="none">
      <defs>
        <marker
          id="arrowhead-h"
          markerWidth="16"
          markerHeight="16"
          refX="12"
          refY="8"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,0 L16,8 L0,16 Z" fill="currentColor" />
        </marker>
      </defs>
      <line x1={x1} y1={24} x2={x2} y2={24} stroke="currentColor" strokeWidth={2} markerEnd="url(#arrowhead-h)" />
    </svg>
  );
}

export function ArrowVertical() {
  return (
    <svg className="w-full h-full overflow-visible" viewBox="0 0 48 140" preserveAspectRatio="none">
      <defs>
        <marker
          id="arrowhead-v"
          markerWidth="16"
          markerHeight="16"
          refX="12"
          refY="8"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,0 L16,8 L0,16 Z" fill="currentColor" />
        </marker>
      </defs>
      <line x1={24} y1={16} x2={24} y2={124} stroke="currentColor" strokeWidth={2} markerEnd="url(#arrowhead-v)" />
    </svg>
  );
}

export function ArrowDiagTestToDfP() {
  return (
    <svg className="w-full h-full overflow-visible" viewBox="0 0 120 120" preserveAspectRatio="none">
      <defs>
        <marker
          id="arrowhead-d"
          markerWidth="16"
          markerHeight="16"
          refX="12"
          refY="8"
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path d="M0,0 L16,8 L0,16 Z" fill="currentColor" />
        </marker>
      </defs>
      <path d="M 20 100 L 100 20" fill="none" stroke="currentColor" strokeWidth={2} markerEnd="url(#arrowhead-d)" />
    </svg>
  );
}
