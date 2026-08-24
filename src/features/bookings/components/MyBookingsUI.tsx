"use client";

import Link from "next/link";
import { Clock3, Plus } from "lucide-react";
import { useState } from "react";

type BookingTab = "Upcoming" | "Past" | "Cancelled";

const bookings = {
  Upcoming: [{ day: "22", month: "AUG", court: "Court 2", date: "Saturday, 22 August 2026", time: "09:00–10:30", reference: "CC-260822-101", player: "Bernard Small", standard: "120.00 Credits", payment: "Club Credits", final: "120.00 Credits", status: "Upcoming" }],
  Past: [{ day: "16", month: "AUG", court: "Court 4", date: "Sunday, 16 August 2026", time: "15:00–16:00", reference: "CC-260816-415", player: "Bernard Small", standard: "80.00 Credits", payment: "Membership free hour", final: "0.00 Credits", status: "Completed" }],
  Cancelled: [{ day: "09", month: "AUG", court: "Court 1", date: "Sunday, 9 August 2026", time: "16:00–17:00", reference: "CC-260809-116", player: "Bernard Small", standard: "80.00 Credits", payment: "Club Credits · Refunded", final: "80.00 Credits", status: "Cancelled" }],
} satisfies Record<BookingTab, Array<Record<string, string>>>;

export function MyBookingsUI() {
  const [tab, setTab] = useState<BookingTab>("Upcoming");

  return (
    <main className="page bookings-page">
      <div className="page-header booking-page-header">
        <div className="page-intro compact">
          <div className="eyebrow">YOUR SCHEDULE</div>
          <h1>My Bookings</h1>
          <p>Review upcoming games, past court time and cancellations.</p>
        </div>
        <Link href="/book" className="btn btn-primary"><Plus size={18} /> Book another court</Link>
      </div>

      <div className="tabs booking-tabs">
        {(["Upcoming", "Past", "Cancelled"] as BookingTab[]).map((item) => (
          <button key={item} className={`tab ${tab === item ? "active" : ""}`} onClick={() => setTab(item)}>
            {item}<span>{bookings[item].length}</span>
          </button>
        ))}
      </div>

      <div className="booking-list screenshot-booking-list">
        {bookings[tab].map((booking) => (
          <article className="card booking-reference-card" key={booking.reference}>
            <div className="booking-date-block"><strong>{booking.day}</strong><span>{booking.month}</span></div>
            <div className="booking-reference-main">
              <h2>{booking.court}</h2>
              <div className="booking-time"><Clock3 size={16} /><span>{booking.date} · {booking.time}</span></div>
              <div className="booking-meta-grid">
                <div><span>REFERENCE</span><strong>{booking.reference}</strong></div>
                <div><span>PLAYER</span><strong>{booking.player}</strong></div>
                <div><span>STANDARD PRICE</span><strong>{booking.standard}</strong></div>
                <div><span>PAYMENT TYPE</span><strong>{booking.payment}</strong></div>
                <div><span>FINAL CLUB CREDITS</span><strong>{booking.final}</strong></div>
              </div>
            </div>
            <div className="booking-reference-actions">
              <span className={`badge ${tab === "Upcoming" ? "badge-green" : tab === "Cancelled" ? "badge-danger" : "badge-gray"}`}>{booking.status}</span>
              <button className="btn btn-secondary">View Details</button>
              {tab === "Upcoming" && <button className="text-danger-button">Cancel Booking</button>}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
