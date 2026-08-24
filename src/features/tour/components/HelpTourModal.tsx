"use client";

import { CalendarDays, ClipboardList, WalletCards, BadgeCheck, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const steps = [
  { title: "Book a Court", body: "Choose a date from the monthly calendar, see which of the six courts are available, then select a one-hour time slot.", icon: CalendarDays },
  { title: "My Bookings", body: "Review upcoming, past and cancelled bookings. Eligible upcoming bookings can be cancelled from here.", icon: ClipboardList },
  { title: "Wallet", body: "View your Club Credit balance, make simulated top-ups and review booking charges, refunds and adjustments.", icon: WalletCards },
  { title: "Membership", body: "See your plan, membership dates, open-play access, tournament discount and remaining free court hours.", icon: BadgeCheck },
  { title: "Admin View", body: "Administrators manage bookings, courts, blocks, operating hours, members, memberships and wallet adjustments.", icon: ShieldCheck },
];

export function HelpTourModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  if (!open) return null;
  const current = steps[step];
  const Icon = current.icon;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="modal tour-modal" role="dialog" aria-modal="true" aria-label="Help and Tour" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div><div className="eyebrow">Help & Tour</div><h2 style={{margin:0}}>Getting around Club Court</h2></div>
          <button className="icon-button" aria-label="Close tour" onClick={onClose}><X size={18}/></button>
        </div>
        <div className="modal-body">
          <div className="tour-visual"><div className="tour-visual-icon"><Icon size={31}/></div></div>
          <div className="badge badge-navy">Step {step + 1} of {steps.length}</div>
          <h2 style={{marginTop:14, marginBottom:8}}>{current.title}</h2>
          <p className="subtle" style={{marginBottom:0}}>{current.body}</p>
          <div className="tour-progress">{steps.map((_, i) => <span key={i} className={i <= step ? "done" : ""}/>)}</div>
        </div>
        <div className="modal-footer" style={{justifyContent:"space-between"}}>
          <button className="btn btn-ghost" onClick={onClose}>Skip</button>
          <div style={{display:"flex", gap:8}}>
            <button className="btn btn-secondary" disabled={step === 0} onClick={() => setStep(Math.max(0, step - 1))}>Back</button>
            {step < steps.length - 1 ? <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Next</button> : <button className="btn btn-primary" onClick={onClose}>Finish</button>}
          </div>
        </div>
      </section>
    </div>
  );
}
