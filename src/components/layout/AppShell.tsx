"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  CircleHelp,
  Coins,
  Menu,
  ShieldCheck,
  WalletCards,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { HelpTourModal } from "@/features/tour/components/HelpTourModal";

const nav = [
  { href: "/book", label: "Book a Court" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/membership", label: "Membership" },
  { href: "/wallet", label: "Wallet" },
  { href: "/admin", label: "Admin View" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [tourOpen, setTourOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(pathname.startsWith("/admin") ? "Admin" : "Player");

  useEffect(() => {
    setRole(pathname.startsWith("/admin") ? "Admin" : "Player");
  }, [pathname]);

  function changeRole(nextRole: string) {
    setRole(nextRole);
    router.push(nextRole === "Admin" ? "/admin" : "/book");
  }

  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/book" className="brand" aria-label="Club Court home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-ball-dot dot-one" />
              <span className="brand-ball-dot dot-two" />
              <span className="brand-ball-dot dot-three" />
              <span className="brand-ball-dot dot-four" />
            </span>
            <span className="brand-copy">
              <strong>Club Court</strong>
              <small>PICKLEBALL CLUB</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {nav.map(({ href, label }) => {
              const active = href === "/admin" ? pathname.startsWith("/admin") : pathname === href;
              return (
                <Link key={href} href={href} className={`nav-link ${active ? "active" : ""}`}>
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <label className="role-control">
              <span>DEMO ROLE</span>
              <select value={role} onChange={(event) => changeRole(event.target.value)} aria-label="Demo role">
                <option>Player</option>
                <option>Admin</option>
              </select>
            </label>

            <Link href="/wallet" className="header-wallet" aria-label="Wallet balance 240 credits">
              <WalletCards size={17} />
              <span className="wallet-copy"><strong>240.00</strong><small>Credits</small></span>
            </Link>

            <button className="header-help" onClick={() => setTourOpen(true)}>
              <CircleHelp size={17} />
              <span>Help &amp; Tour</span>
            </button>

            <div className="profile-summary">
              <div className="profile-avatar">BS</div>
              <div className="profile-copy">
                <strong>Bernard Small</strong>
                <span>Pickle Pro</span>
              </div>
            </div>

            <button className="mobile-menu-button" aria-label="Open navigation" onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu-panel">
            <div className="mobile-profile-row">
              <div className="profile-avatar">BS</div>
              <div><strong>Bernard Small</strong><span>Pickle Pro · 240.00 Credits</span></div>
            </div>
            <nav className="mobile-menu-links" aria-label="Mobile menu">
              {nav.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
              ))}
              <button onClick={() => { setTourOpen(true); setMenuOpen(false); }}><CircleHelp size={17} /> Help &amp; Tour</button>
              <button onClick={() => { changeRole(role === "Admin" ? "Player" : "Admin"); setMenuOpen(false); }}><ShieldCheck size={17} /> Switch to {role === "Admin" ? "Player" : "Admin"}</button>
            </nav>
          </div>
        )}
      </header>

      {children}

      <nav className="mobile-nav" aria-label="Mobile primary navigation">
        {nav.slice(0, 4).map(({ href, label }) => (
          <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label.replace("My ", "")}</Link>
        ))}
        <Link href="/admin" className={pathname.startsWith("/admin") ? "active" : ""}>Admin</Link>
      </nav>

      <HelpTourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </div>
  );
}
