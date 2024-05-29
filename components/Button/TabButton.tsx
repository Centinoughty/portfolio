import { ReactNode } from "react";

interface TabButtonProps {
  children: ReactNode;
  textOnly: boolean;
}

export default function TabButton({ children, textOnly }: TabButtonProps) {
  const cssClasses = textOnly ? "" : "";
  return <button className={cssClasses}>{children}</button>;
}
