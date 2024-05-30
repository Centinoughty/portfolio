import React from "react";

interface TagProps {
  label: string;
  icon: React.ReactNode;
}

export default function Tag({ icon, label }: TagProps) {
  return (
    <p className="flex">
      {icon}
      <span>{label}</span>
    </p>
  );
}
