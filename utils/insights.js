import { formatCurrency } from "./format";

export const getLeadInsight = (lead) => {
  const history = lead.status_history || [];
  const lastStep = history[history.length - 1];

  // ⏱️ Calculate inactivity
  const today = new Date();
  const last = new Date(lead.last_activity_at);
  const daysInactive = (today - last) / (1000 * 60 * 60 * 24);

  // 🔮 Prediction Logic
  let prediction = "";

  if (lead.deal_value > 4000000 && lead.status !== "delivered") {
    prediction = "⚠️ High-value deal at risk";
  } else if (
    lead.status === "negotiation" ||
    lead.status === "test_drive"
  ) {
    prediction = "🔥 High chance to convert";
  } else if (daysInactive > 5 && lead.status !== "delivered") {
    prediction = "💤 Lead going cold — follow up";
  } else if (lead.status === "new") {
    prediction = "⚡ Fresh lead — act fast";
  }

  // 🟥 LOST
  if (lead.status === "lost") {
    return `❌ Lost: ${lead.lost_reason || "No clear reason"}
💡 Improve follow-up or pricing
${prediction}`;
  }

  // 🟩 DELIVERED
  if (lead.status === "delivered") {
    return `✅ Delivered successfully
💰 Deal value: ₹${formatCurrency(lead.deal_value)}
🎯 Good conversion`;
  }

  // 🟨 NEGOTIATION
  if (lead.status === "negotiation") {
    return `💬 In negotiation
📊 Customer comparing options
💡 Offer better pricing
${prediction}`;
  }

  // 🟦 TEST DRIVE
  if (lead.status === "test_drive") {
    return `🚗 Test drive completed
🤔 Customer evaluating
💡 Follow up quickly
${prediction}`;
  }

  // 🟪 CONTACTED
  if (lead.status === "contacted") {
    return `📞 Contacted
⏳ Waiting response
💡 Push for test drive
${prediction}`;
  }

  // 🟧 ORDER PLACED
  if (lead.status === "order_placed") {
    return `📝 Order placed
🚚 Awaiting delivery`;
  }

  // 🆕 NEW
  if (lead.status === "new") {
    return `🆕 New lead
⚡ Contact immediately
${prediction}`;
  }

  // 🔁 FALLBACK
  return lastStep?.note || "ℹ️ No insight available";
};