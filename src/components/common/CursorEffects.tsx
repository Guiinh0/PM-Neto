"use client";

import React, { useEffect, useState } from "react";

export const CursorEffects: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Apenas desktop com ponteiro fino e sem prefers-reduced-motion
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rafId = requestAnimationFrame(() => setIsVisible(true));

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          window.getComputedStyle(target).cursor === "pointer";
        setIsPointer(!!isClickable);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Brilho amarelo sutil seguindo o cursor (raio 300px, opacidade ~0.10) */}
      <div
        className="pointer-events-none fixed z-30 transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255, 209, 0, 0.08) 0%, rgba(255, 209, 0, 0.02) 40%, transparent 70%)",
        }}
      />

      {/* Círculo customizado de 12px que expande para 28px sobre links/botões */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full border border-[#FFD100]/60 transition-all duration-150 ease-out hidden lg:block ${
          isPointer
            ? "w-8 h-8 bg-[#FFD100]/20 -ml-4 -mt-4 border-[#FFD100]"
            : "w-3 h-3 bg-[#FFD100]/60 -ml-1.5 -mt-1.5"
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </>
  );
};
