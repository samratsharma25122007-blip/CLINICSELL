"use client";
import { StaticMeshGradient } from "@/components/ui/static-mesh-gradient";

// Light, premium cool palette so dark timeline text stays readable
// while the flat white background is replaced by the mesh gradient.
const COLORS = ["#eef6ff", "#bfe3ff", "#a7f3eb", "#c9d6ff", "#e9d5ff"];

export function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <StaticMeshGradient
        colors={COLORS}
        fit="cover"
        scale={1.3}
        rotation={230}
        offsetX={0}
        offsetY={0}
        positions={3}
        waveX={0.6}
        waveXShift={0.35}
        waveY={0.85}
        waveYShift={0.5}
        mixing={0.88}
        grainMixer={0}
        grainOverlay={0.06}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
