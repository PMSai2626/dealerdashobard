export const getLeadPrediction = (lead) => {
  const today = new Date();
  const last = new Date(lead.last_activity_at);
  const days = (today - last) / (1000 * 60 * 60 * 24);

  // 🔴 High value at risk
  if (
    lead.deal_value > 4000000 &&
    lead.status !== "delivered"
  ) {
    return "⚠️ High-value deal at risk";
  }

  // 🔥 Likely to convert
  if (
    lead.status === "negotiation" ||
    lead.status === "test_drive"
  ) {
    return "🔥 High chance to convert";
  }

  // 💤 Lead going cold
  if (days > 5 && lead.status !== "delivered") {
    return "💤 Lead going cold — follow up";
  }

  // 🆕 New lead
  if (lead.status === "new") {
    return "⚡ Fresh lead — act fast";
  }

  return null;
};