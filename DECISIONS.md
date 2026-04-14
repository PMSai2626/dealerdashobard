# DealerPulse – Decisions & Approach

## 🚀 What I Built

I built a dealership performance dashboard which helps the CEO and branch managers understand how their business is doing and where they need to take action.

Instead of just showing numbers, I focused on making the dashboard useful for real decision-making.

### Main Features:
- Overview dashboard with key metrics like total leads, revenue and conversion rate
- Branch-wise drill-down to see performance in detail
- Lead cards with hover insights explaining what is happening
- Simple prediction logic to highlight risky or important leads
- CEO insights panel which gives a quick summary of the business situation
- Alerts for leads that need follow-up

---

## 🎯 Why I Built It This Way

In most dashboards, we only see charts and numbers. But in real life, managers don’t have time to analyse everything.

So my goal was:
- Show what is happening
- Explain why it is happening
- Suggest what action to take

For example:
Instead of just showing "lost lead", I show the reason and what can be improved.

---

## 🧠 Key Product Decisions

### 1. Focus on Insights Instead of Just Data

I didn’t want to build a dashboard which only shows graphs.

I focused on:
- Making information easy to understand
- Helping users take quick decisions

Example:
Instead of:
“Leads in negotiation”

I show:
“High drop at negotiation stage – need better pricing or follow-up”

---

### 2. CEO Insights Panel

This is one of the main features.

At the top, I show:
- Best performing branch
- Underperforming branch
- Leads that need immediate follow-up
- Funnel problems

This helps the CEO quickly understand the situation without going deep into data.

---

### 3. Lead-Level Insights (Hover)

Each lead card gives more details when we hover:

- Current status explanation
- Reason if the lead is lost
- Suggested next action

Example:
❌ Lost: Budget issue  
💡 Try better pricing or follow-up

This makes the dashboard more useful for daily operations.

---

### 4. Simple Prediction Logic

I added basic logic to highlight important cases:

- High-value deals which are at risk
- Leads that are likely to convert
- Leads which are inactive for many days

This is not AI/ML, but simple rules which still give useful insights.

---

### 5. Drill-down Flow

User can move step by step:

Dashboard → Branch → Leads

This helps in:
- Getting overall view first
- Then analysing specific problems

---

## ⚖️ Tradeoffs

### 1. No Backend (Used JSON Data)

I used static JSON instead of APIs.

Reason:
- Faster development
- Focus more on UI and product thinking

---

### 2. Rule-Based Predictions

I used simple conditions instead of machine learning.

Reason:
- Easy to understand
- Works well for this dataset

---

### 3. No Login System

Since this is for demo, I skipped authentication and focused on dashboard experience.

---

## 🔮 What I Would Build Next

If I had more time, I would add:

- Real-time data using APIs
- Filters (date, branch, sales rep)
- Notifications for follow-ups
- Forecasting (target vs actual performance)
- Download reports (PDF/Excel)

---

## 📊 Observations from Data

While working on the dataset, I noticed:

- Many leads are getting stuck or lost at negotiation stage
- Some branches are clearly underperforming compared to others
- A lot of leads are not followed up on time
- High-value deals need better attention

---

## 🏁 Final Thought

I designed this dashboard in a way that it is not just showing data, but actually helping the business.

The idea was simple:

“Anyone should open the dashboard and immediately understand what is going wrong and what needs to be done.”
