"use client";

import { usePathname } from "next/navigation";
import UltraPremiumFooter from "./Footer";

export default function FooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🔒 Pages where footer should be hidden
  const hideFooter =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/register");

  return (
    <>
      {children}
      {!hideFooter && <UltraPremiumFooter />}
    </>
  );
}