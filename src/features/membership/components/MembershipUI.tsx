import { BadgeCheck, BookOpenText, Clock3, Trophy, UsersRound } from "lucide-react";

export function MembershipUI() {
  return (
    <main className="page membership-page">
      <div className="page-header membership-page-header">
        <div className="page-intro compact">
          <div className="eyebrow">YOUR CLUB BENEFITS</div>
          <h1>Membership</h1>
          <p>Membership payments happen at the club. Free court hours and Club Credits are tracked separately.</p>
        </div>
        <span className="badge badge-purple">Active</span>
      </div>

      <section className="membership-feature">
        <div className="membership-feature-title">
          <div className="membership-plan-icon"><BookOpenText size={26} /></div>
          <div>
            <div className="eyebrow eyebrow-light">CURRENT CATEGORY</div>
            <h2>Pickle Pro</h2>
            <p>Active until 11 November 2026</p>
          </div>
        </div>

        <div className="membership-feature-grid">
          <div className="membership-feature-stat"><span>OPEN PLAY</span><strong>Unlimited</strong><small>Included while active</small></div>
          <div className="membership-feature-stat"><span>FREE COURT HOURS</span><strong>2 of 2 free court hours<br />remaining</strong><small>Current membership month · no rollover</small></div>
          <div className="membership-feature-stat"><span>TOURNAMENT DISCOUNT</span><strong>20%</strong><small>Stored for future tournaments</small></div>
          <div className="membership-feature-stat"><span>DAYS REMAINING</span><strong>80</strong><small>Next allowance 12 Sept</small></div>
        </div>
      </section>

      <section className="card membership-period-card">
        <div className="membership-period-head">
          <div><h2>Current membership month</h2><p>Allowances follow your activation anniversary, not calendar months.</p></div>
          <span className="badge badge-gray">No rollover</span>
        </div>
        <div className="membership-period-grid">
          <div><span>MEMBERSHIP STARTED</span><strong>12 Aug 2026</strong></div>
          <div><span>MEMBERSHIP ENDS</span><strong>11 Nov 2026</strong></div>
          <div><span>CURRENT ALLOWANCE PERIOD</span><strong>12 Aug–11 Sept</strong></div>
          <div><span>HOURS USED</span><strong>0 of 2</strong></div>
        </div>

        <div className="membership-benefit-row">
          <div className="mini-benefit"><UsersRound size={18} /><span><strong>Unlimited open play</strong><small>Included throughout the active term.</small></span></div>
          <div className="mini-benefit"><Clock3 size={18} /><span><strong>Two monthly free hours</strong><small>Separate allowance in each membership month.</small></span></div>
          <div className="mini-benefit"><Trophy size={18} /><span><strong>20% tournament discount</strong><small>Stored as a membership benefit.</small></span></div>
        </div>
      </section>

      <section className="card membership-activity-card">
        <div className="membership-period-head"><div><h2>Membership activity</h2><p>Payment, activation and allowance events are kept together.</p></div><BadgeCheck size={20} /></div>
        <div className="transaction-list">
          <div className="transaction-row"><div className="transaction-icon positive"><Clock3 size={18} /></div><div className="transaction-main"><strong>Monthly allowance created</strong><span>12 Aug 2026 · 12 Aug–11 Sept</span></div><span className="badge badge-green">2 hours granted</span></div>
          <div className="transaction-row"><div className="transaction-icon"><BadgeCheck size={18} /></div><div className="transaction-main"><strong>Pickle Pro activated</strong><span>12 Aug 2026 · Card Machine payment recorded by admin</span></div><span className="badge badge-navy">Active</span></div>
        </div>
      </section>
    </main>
  );
}
