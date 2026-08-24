"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, LockKeyhole, Mail, UserRound } from "lucide-react";

export function AuthUI({ mode }: { mode: "login" | "register" }) {
  const login = mode === "login";
  return (
    <main style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1.05fr .95fr", background: "var(--page-background)" }}>
      <section style={{ background: "linear-gradient(125deg,#07182c 0%,#0c2946 56%,#087d72 120%)", color: "white", padding: "clamp(32px,6vw,84px)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
        <div className="brand" style={{ color: "white", padding: 0 }}>
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-ball-dot dot-one" /><span className="brand-ball-dot dot-two" /><span className="brand-ball-dot dot-three" /><span className="brand-ball-dot dot-four" />
          </span>
          <span className="brand-copy"><strong>Club Court</strong><small>PICKLEBALL CLUB</small></span>
        </div>
        <div style={{ maxWidth: 560 }}>
          <div style={{ width: 58, height: 58, borderRadius: 17, display: "grid", placeItems: "center", background: "rgba(112,221,209,.12)", border: "1px solid rgba(112,221,209,.22)", marginBottom: 26, color: "#70ddd1" }}><CalendarDays size={28} /></div>
          <div className="eyebrow eyebrow-light">CLUB COURT BOOKING</div>
          <h1 style={{ color: "white", fontSize: "clamp(42px,5vw,64px)", lineHeight: 1.02, fontWeight: 300, letterSpacing: "-.045em", maxWidth: 540, margin: "14px 0 18px" }}>Your court time, organised.</h1>
          <p style={{ color: "rgba(235,244,248,.72)", fontSize: 15, lineHeight: 1.75, maxWidth: 500 }}>Book one of six pickleball courts, use membership free hours, manage Club Credits and keep your playing schedule in one place.</p>
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,.48)", letterSpacing: ".04em" }}>CLUB COURT · PICKLEBALL CLUB</div>
      </section>
      <section style={{ display: "grid", placeItems: "center", padding: "32px 22px" }}>
        <div style={{ width: "min(430px,100%)" }}>
          <div className="eyebrow">{login ? "WELCOME BACK" : "CREATE ACCOUNT"}</div>
          <h1 style={{ fontSize: 38, lineHeight: 1.08, fontWeight: 400, letterSpacing: "-.04em", margin: "12px 0 10px" }}>{login ? "Sign in to Club Court" : "Join Club Court"}</h1>
          <p className="subtle">{login ? "Access bookings, your wallet and membership benefits." : "Create your player profile to start booking courts."}</p>
          <div style={{ display: "grid", gap: 14, marginTop: 28 }}>
            {!login && <AuthField label="Full name" icon={<UserRound size={17} />} placeholder="Your name" />}
            <AuthField label="Email address" icon={<Mail size={17} />} placeholder="you@example.com" />
            <AuthField label="Password" icon={<LockKeyhole size={17} />} placeholder="••••••••" password />
            <Link href="/book" className="btn btn-primary" style={{ width: "100%", height: 47 }}>{login ? "Sign in" : "Create account"}<ArrowRight size={17} /></Link>
          </div>
          <p className="subtle" style={{ textAlign: "center", fontSize: 11, marginTop: 22 }}>{login ? "New to Club Court? " : "Already have an account? "}<Link href={login ? "/register" : "/login"} style={{ color: "var(--teal-700)", fontWeight: 850 }}>{login ? "Create an account" : "Sign in"}</Link></p>
        </div>
      </section>
    </main>
  );
}

function AuthField({ label, icon, placeholder, password = false }: { label: string; icon: React.ReactNode; placeholder: string; password?: boolean }) {
  return <label><span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "var(--navy-900)", marginBottom: 7 }}>{label}</span><div style={{ position: "relative" }}><span style={{ position: "absolute", left: 13, top: 13, color: "var(--text-muted)" }}>{icon}</span><input type={password ? "password" : "text"} className="filter-control" style={{ width: "100%", paddingLeft: 42, height: 45 }} placeholder={placeholder} /></div></label>;
}
