"use client";

import dynamic from "next/dynamic";
import React from "react";

const SubtleCanvas = dynamic(() => import("./SubtleCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function CanvasWrapper() {
  return <SubtleCanvas />;
}

