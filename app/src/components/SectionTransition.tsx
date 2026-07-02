"use client";

import { ReactNode } from "react";

type SectionTransitionProps = {
  children: ReactNode;
  className?: string;
  accent?: string;
  direction?: "left" | "right" | "up";
};

type RevealOptions = {
  delay?: number;
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  amount?: number;
};

export function getRevealProps(_options: RevealOptions = {}) {
  return {};
}

export function SectionTransition({
  children,
  className,
}: SectionTransitionProps) {
  return <div className={className}>{children}</div>;
}
