export const getKPIs = (leads) => {
  const total = leads.length;

  const delivered = leads.filter(l => l.status === "delivered");
  const revenue = delivered.reduce((sum, l) => sum + l.deal_value, 0);

  const conversionRate = ((delivered.length / total) * 100).toFixed(2);

  return {
    total,
    revenue,
    conversionRate,
  };
};

export const getLeadsByBranch = (leads) => {
  const branchMap = {};

  leads.forEach(l => {
    if (!branchMap[l.branch_id]) {
      branchMap[l.branch_id] = [];
    }
    branchMap[l.branch_id].push(l);
  });

  return branchMap;
};

export const getAgingLeads = (leads) => {
  const today = new Date();

  return leads.filter(l => {
    const last = new Date(l.last_activity_at);
    const diff = (today - last) / (1000 * 60 * 60 * 24);
    return diff > 7;
  });
};