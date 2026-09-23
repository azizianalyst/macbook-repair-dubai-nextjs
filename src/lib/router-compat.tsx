"use client";
// Compatibility shim: emulates the react-router-dom API used across the ported
// components/pages, implemented on top of Next's App Router. Lets the migrated
// code keep using <Link to>, <NavLink>, useLocation(), useNavigate(), <Navigate>.
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { forwardRef, useEffect, type ComponentProps, type CSSProperties, type ReactNode } from "react";

export type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  to: string;
  end?: boolean;
  replace?: boolean;
};

// PREFETCH DEFAULT: Next prefetches every <Link> that scrolls into view. On this site a
// single model page issued 113 RSC prefetch requests for 28 distinct routes - each route
// fetched 2-5 times because several links point at it - and 195 KB of a 276 KB page load
// was redundant prefetch traffic (measured on production, 2026-09-23). That is real
// origin load from every visitor, and the shape that trips edge rate limits.
//
// `prefetch={false}` does NOT disable prefetching: it stops the automatic viewport
// prefetch while keeping the on-hover/on-touch prefetch, so navigation still feels
// instant but nothing is fetched until the visitor shows intent. Callers that genuinely
// want eager prefetch can still pass `prefetch` explicitly - it is spread after this.
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, end: _end, replace, ...rest }, ref) => (
    <NextLink ref={ref} href={to} replace={replace} prefetch={false} {...rest} />
  ),
);
Link.displayName = "Link";

export type NavLinkProps = Omit<ComponentProps<typeof NextLink>, "href" | "className" | "children"> & {
  to: string;
  end?: boolean;
  className?: string | ((state: { isActive: boolean; isPending: boolean }) => string);
  children?: ReactNode | ((state: { isActive: boolean; isPending: boolean }) => ReactNode);
  style?: CSSProperties | ((state: { isActive: boolean }) => CSSProperties);
};

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, end, className, children, style, ...rest }, ref) => {
    const pathname = usePathname() || "/";
    const isActive = end ? pathname === to : pathname === to || pathname.startsWith(to + "/");
    const state = { isActive, isPending: false };
    const cls = typeof className === "function" ? className(state) : className;
    const sty = typeof style === "function" ? style({ isActive }) : style;
    const kids = typeof children === "function" ? children(state) : children;
    return (
      <NextLink ref={ref} href={to} className={cls} style={sty} prefetch={false} aria-current={isActive ? "page" : undefined} {...rest}>
        {kids}
      </NextLink>
    );
  },
);
NavLink.displayName = "NavLink";

export function useLocation() {
  const pathname = usePathname() || "/";
  return { pathname, search: "", hash: "", state: null, key: "default" };
}

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, opts?: { replace?: boolean }) => {
    if (typeof to === "number") { if (typeof window !== "undefined") window.history.go(to); return; }
    if (opts?.replace) router.replace(to);
    else router.push(to);
  };
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [to, replace, router]);
  return null;
}

// Harmless passthroughs for any stray imports.
export const Outlet = ({ children }: { children?: ReactNode }) => <>{children}</>;
export function useParams() { return {} as Record<string, string>; }
export function useSearchParams(): [URLSearchParams, (v: URLSearchParams) => void] {
  return [new URLSearchParams(), () => {}];
}
