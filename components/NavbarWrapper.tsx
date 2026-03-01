"use client";

import { usePathname } from "next/navigation";
import GlassNavbar from "./GlassNavbar";

export default function NavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🔒 Pages where navbar should be hidden (auth pages)
  const hideNavbar =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/register");

  return (
    <>
      {!hideNavbar && <GlassNavbar />}
      {children}
    </>
  );
}