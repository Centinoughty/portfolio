import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  icon: ReactNode;
}

export default function Tag({ children, icon }: TagProps) {
  return (
    <>
      <p className="py-1 flex items-center gap-2 mb-2 text-gray-700">
        {icon}
        {children}
      </p>
    </>
  );
}
