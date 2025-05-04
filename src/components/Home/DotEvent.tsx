import { cn } from "@/lib/utils";
import React from "react";
import EventContact from "./EventContact";

export function DotEventContact() {
  return (
    <div className="relative flex w-full items-center justify-center bg-slate-200 opacity-75">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      <EventContact />
    </div>
  );
}
