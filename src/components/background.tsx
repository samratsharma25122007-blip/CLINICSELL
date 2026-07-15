"use client";
import { StaticMeshGradient } from "@/components/ui/static-mesh-gradient";

// Calm clinical blues/teals — professional, low-saturation palette that
// keeps dark timeline text readable while replacing the flat white.
const COLORS = ["#f4f8fc", "#dcebf7", "#c3ddf0", "#cfe9e4", "#e8f0f9"];

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
