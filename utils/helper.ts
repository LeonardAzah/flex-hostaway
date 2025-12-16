import { usePathname } from "next/navigation";

export function useIsActive(href?: string) {
  const pathname = usePathname() || "";
  if (!href) return false;
  return pathname === href || pathname.startsWith(href + "/");
}
