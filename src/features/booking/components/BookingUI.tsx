"use client";

import { CheckCircle2, ChevronLeft, ChevronRight, Filter, X } from "lucide-react";
import { useMemo, useState } from "react";

type Court = {
  id: number;
  name: string;
  surface: string;
  price: number;
  unavailable: string[];
};

const courts: Court[] = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: `Court ${index + 1}`,
  surface: "Outdoor acrylic",
  price: 80,
  unavailable: index === 4 ? ["17:00"] : index === 5 ? ["16:00"] : [],
}));

const sundaySlots = ["15:00", "16:00", "17:00", "18:00"];

const augustDays = [
  { n: 27, outside: true }, { n: 28, outside: true }, { n: 29, outside: true }, { n: 30, outside: true }, { n: 31, outside: true },
  ...Array.from({ length: 31 }, (_, i) => ({ n: i + 1, outside: false })),
  { n: 1, outside: true }, { n: 2, outside: true }, { n: 3, outside: true }, { n: 4, outside: true }, { n: 5, outside: true }, { n: 6, outside: true },
];

export function BookingUI() {
  const [selectedDay, setSelectedDay] = useState(23);
  const [selected, setSelected] = useState<{ court: Court; time: string } | null>(null);
  const [freeHour, setFreeHour] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  const availableCourts = useMemo(
    () => courts.filter((court) => court.unavailable.length < sundaySlots.length).length,
    []
  );

  return (
    <main className="page booking-page">
      <header className="page-intro">
        <div className="eyebrow">BOOK A COURT</div>
        <h1>Choose a date. Find an open court.</h1>
        <p>Pick a day and available start time, then choose a one-hour, 90-minute or two-hour booking. Eligible membership hours are selected automatically.</p>
      </header>

      <section className="booking-workspace">
        <div className="card calendar-card">
          <div className="calendar-top">
            <div>
              <div className="eyebrow">SELECT A DATE</div>
              <h2>August 2026</h2>
            </div>
            <div className="calendar-actions">
              <button className="icon-button" aria-label="Previous month"><ChevronLeft size={20} /></button>
              <button className="icon-button" aria-label="Next month"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div className="calendar-weekdays">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => <div key={day}>{day}</div>)}
          </div>
          <div className="calendar-grid">
            {augustDays.map((day, index) => (
              <button
                key={`${day.n}-${index}`}
                className={`calendar-day ${day.outside ? "outside" : ""} ${!day.outside && selectedDay === day.n ? "selected" : ""}`}
                onClick={() => !day.outside && setSelectedDay(day.n)}
                disabled={day.outside}
              >
                <strong>{day.n}</strong>
                <small>{day.outside ? "6 courts" : "6 courts"}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="booking-results card">
          <div className="selected-date-header">
            <div>
              <div className="eyebrow eyebrow-light">SELECTED DATE</div>
              <h2>Sunday, {selectedDay} August</h2>
              <p>{availableCourts} of 6 courts have times available · Club open 15:00–19:00.</p>
            </div>
            <div className="availability-summary">
              <strong>{availableCourts}</strong>
              <span>COURTS<br />AVAILABLE</span>
            </div>
          </div>

          <div className="booking-filterbar">
            <div className="filter-label"><Filter size={17} /><span>REFINE TIMES</span></div>
            <div className="filter-controls">
              <select className="filter-control" aria-label="Court filter"><option>All courts</option>{courts.map(c => <option key={c.id}>{c.name}</option>)}</select>
              <select className="filter-control" aria-label="Time filter"><option>Any time</option><option>Afternoon</option><option>Evening</option></select>
              <select className="filter-control" aria-label="Availability filter"><option>Show all times</option><option>Available only</option></select>
            </div>
          </div>

          <div className="court-list">
            {courts.map((court) => {
              const openTimes = sundaySlots.filter((slot) => !court.unavailable.includes(slot));
              return (
                <article className="court-row" key={court.id}>
                  <div className="court-row-head">
                    <div className="court-identity">
                      <div className="court-number">{court.id}</div>
                      <div>
                        <h3>{court.name}</h3>
                        <p>{court.surface} · Club hours 15:00–19:00 · {court.price.toFixed(2)} Credits / hour</p>
                      </div>
                    </div>
                    <span className="badge badge-green">{openTimes.length} times open</span>
                  </div>
                  <div className="court-times">
                    {sundaySlots.map((time) => {
                      const unavailable = court.unavailable.includes(time);
                      return (
                        <button
                          key={time}
                          disabled={unavailable}
                          className={`time-slot ${unavailable ? "booked" : ""}`}
                          onClick={() => setSelected({ court, time })}
                        >
                          <strong>{time}</strong>
                          <small>{unavailable ? "UNAVAILABLE" : "BOOK"}</small>
                        </button>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selected && (
        <div className="modal-backdrop" onMouseDown={() => { setSelected(null); setConfirmed(false); }}>
          <section className="modal" role="dialog" aria-modal="true" aria-label="Booking confirmation" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div><div className="eyebrow">BOOKING CONFIRMATION</div><h2>Confirm your court</h2></div>
              <button className="icon-button" aria-label="Close" onClick={() => { setSelected(null); setConfirmed(false); }}><X size={18} /></button>
            </div>
            <div className="modal-body">
              {confirmed ? (
                <div className="confirmation-state">
                  <CheckCircle2 size={56} />
                  <h2>Booking confirmed</h2>
                  <p>Court {selected.court.id} is reserved for {selected.time}–{String(Number(selected.time.slice(0, 2)) + 1).padStart(2, "0")}:00.</p>
                  <span className="badge badge-green">Reference CC-0823-{String(selected.court.id).padStart(2, "0")}{selected.time.slice(0, 2)}</span>
                </div>
              ) : (
                <>
                  <div className="summary-grid">
                    <div className="summary-item"><span>Court</span><strong>{selected.court.name}</strong></div>
                    <div className="summary-item"><span>Date</span><strong>23 August 2026</strong></div>
                    <div className="summary-item"><span>Time</span><strong>{selected.time} – {String(Number(selected.time.slice(0, 2)) + 1).padStart(2, "0")}:00</strong></div>
                    <div className="summary-item"><span>Membership</span><strong>Pickle Pro · Active</strong></div>
                  </div>
                  <div className="toggle-row">
                    <div><strong>Use a free court hour</strong><span>2 hours remaining in this membership month</span></div>
                    <button className={`switch ${freeHour ? "on" : ""}`} onClick={() => setFreeHour((value) => !value)} aria-label="Use a free court hour"><span /></button>
                  </div>
                  <div className="price-box">
                    <div className="price-row"><span>Standard price</span><strong>{selected.court.price.toFixed(2)} Credits</strong></div>
                    <div className="price-row"><span>Membership free hour</span><strong>{freeHour ? `-${selected.court.price.toFixed(2)} Credits` : "0.00 Credits"}</strong></div>
                    <div className="price-row total"><span>Final Club Credits</span><strong>{freeHour ? "0.00" : selected.court.price.toFixed(2)} Credits</strong></div>
                    <div className="price-row"><span>Wallet after booking</span><strong>{freeHour ? "240.00" : (240 - selected.court.price).toFixed(2)} Credits</strong></div>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              {confirmed ? (
                <button className="btn btn-primary" onClick={() => { setSelected(null); setConfirmed(false); }}>Done</button>
              ) : (
                <><button className="btn btn-secondary" onClick={() => setSelected(null)}>Cancel</button><button className="btn btn-primary" onClick={() => setConfirmed(true)}>Confirm booking</button></>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
