"use client";

import { ArrowDown, ArrowUp, Plus, WalletCards, X } from "lucide-react";
import { useState } from "react";

const transactions = [
  { direction: "in", title: "Demo wallet top-up", date: "14 Aug 2026, 12:00", type: "Top-up", amount: "+250.00 Credits", balance: "Balance 360.00 Credits" },
  { direction: "out", title: "Court 2 booking · CC-DEMO-101", date: "20 Aug 2026, 12:00", type: "Booking", amount: "-120.00 Credits", balance: "Balance 240.00 Credits" },
];

export function WalletUI() {
  const [balance, setBalance] = useState(240);
  const [topUpOpen, setTopUpOpen] = useState(false);
  const [filter, setFilter] = useState("All transactions");

  return (
    <main className="page wallet-page">
      <header className="page-intro compact">
        <div className="eyebrow">CLUB CREDITS</div>
        <h1>Your Wallet</h1>
        <p>Use Club Credits to book courts. They cannot be transferred or withdrawn as cash.</p>
      </header>

      <section className="wallet-feature">
        <div className="wallet-balance-panel">
          <div className="wallet-feature-icon"><WalletCards size={25} /></div>
          <span>Available balance</span>
          <div className="wallet-balance-number">{balance.toFixed(2)} <small>Credits</small></div>
          <strong>Equivalent to R{balance.toFixed(2)}</strong>
        </div>
        <div className="wallet-conversion-panel">
          <div className="eyebrow eyebrow-light">SIMPLE CONVERSION</div>
          <h2>R1.00 = 1 Club Credit</h2>
          <p>All actions in this prototype are simulated.</p>
          <button className="btn btn-light" onClick={() => setTopUpOpen(true)}><Plus size={18} /> Top Up Wallet</button>
        </div>
      </section>

      <section className="card transaction-history-card">
        <div className="transaction-history-head">
          <div><h2>Transaction history</h2><p>Every simulated wallet movement in one place.</p></div>
          <label className="transaction-filter"><span>SHOW</span><select value={filter} onChange={(event) => setFilter(event.target.value)} className="filter-control"><option>All transactions</option><option>Top-ups</option><option>Bookings</option><option>Refunds</option><option>Adjustments</option></select></label>
        </div>
        <div className="transaction-list">
          {transactions.filter((transaction) => filter === "All transactions" || (filter === "Top-ups" && transaction.type === "Top-up") || (filter === "Bookings" && transaction.type === "Booking")).map((transaction) => (
            <div className="transaction-row screenshot-transaction" key={transaction.title}>
              <div className={`transaction-icon ${transaction.direction === "in" ? "positive" : "booking"}`}>{transaction.direction === "in" ? <ArrowDown size={22} /> : <ArrowUp size={22} />}</div>
              <div className="transaction-main"><strong>{transaction.title}</strong><span>{transaction.date}</span></div>
              <span className="badge badge-gray">{transaction.type}</span>
              <div className={`transaction-amount ${transaction.direction === "in" ? "positive" : "negative"}`}>{transaction.amount}<small>{transaction.balance}</small></div>
            </div>
          ))}
        </div>
      </section>

      {topUpOpen && (
        <div className="modal-backdrop" onMouseDown={() => setTopUpOpen(false)}>
          <section className="modal topup-modal" role="dialog" aria-modal="true" aria-label="Top up wallet" onMouseDown={(event) => event.stopPropagation()}>
            <div className="modal-head"><div><div className="eyebrow">SIMULATED TOP-UP</div><h2>Add Club Credits</h2></div><button className="icon-button" onClick={() => setTopUpOpen(false)}><X size={18} /></button></div>
            <div className="modal-body"><p className="subtle">No card details or real payment information are collected. Choose a demo amount.</p><div className="topup-grid">{[100, 250, 500].map((amount) => <button key={amount} className="topup-option" onClick={() => { setBalance((current) => current + amount); setTopUpOpen(false); }}><strong>R{amount}</strong><span>+{amount} Credits</span></button>)}<button className="topup-option"><strong>Custom</strong><span>Choose amount</span></button></div></div>
          </section>
        </div>
      )}
    </main>
  );
}
