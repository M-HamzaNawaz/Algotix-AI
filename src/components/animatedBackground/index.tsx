"use client";

import { useEffect, useRef } from "react";
import { initAnimatedBackground } from "./data";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = initAnimatedBackground(
      canvasRef as React.RefObject<HTMLCanvasElement>,
      containerRef as React.RefObject<HTMLDivElement>,
    );
    return cleanup;
  }, []);

  return (
    <div className="large-header" ref={containerRef}>
      <canvas id="demo-canvas" className="demo-canvas" ref={canvasRef} />
    </div>
  );
};

export default AnimatedBackground;
