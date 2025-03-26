import React from "react";

export default function NextJsCloneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full bg-white">
      {children}
    </div>
  );
} 