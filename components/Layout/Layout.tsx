import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
