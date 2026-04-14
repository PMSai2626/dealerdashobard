export const getDashboardInsights = (leads, branches) => {
  const insights = [];

  const branchMap = {};

  leads.forEach((l) => {
    if (!branchMap[l.branch_id]) {
      branchMap[l.branch_id] = { total: 0, delivered: 0 };
    }

    branchMap[l.branch_id].total++;

    if (l.status === "delivered") {
      branchMap[l.branch_id].delivered++;
    }
  });

  let bestBranch = null;
  let worstBranch = null;

  Object.keys(branchMap).forEach((id) => {
    const data = branchMap[id];
    const conversion = data.delivered / data.total;

    if (!bestBranch || conversion > bestBranch.conversion) {
      bestBranch = { id, conversion };
    }

    if (!worstBranch || conversion < worstBranch.conversion) {
      worstBranch = { id, conversion };
    }
  });

  const best = branches.find((b) => b.id === bestBranch.id);
  const worst = branches.find((b) => b.id === worstBranch.id);

  insights.push({
    type: "success",
    text: `Best branch: ${best.name} (${best.city})`,
    branchId: best.id,
  });

  insights.push({
    type: "danger",
    text: `Underperforming: ${worst.name} (${worst.city})`,
    branchId: worst.id,
  });

  // 💤 Aging leads
  const today = new Date();
  const aging = leads.filter((l) => {
    const last = new Date(l.last_activity_at);
    const diff = (today - last) / (1000 * 60 * 60 * 24);
    return diff > 7 && l.status !== "delivered";
  });

  if (aging.length > 20) {
    insights.push({
      type: "warning",
      text: `${aging.length} leads need follow-up`,
    });
  }

  return insights;
};