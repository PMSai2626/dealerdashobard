import data from "../data/dealership_data.json";
import KPICard from "../components/KPICard";
import Alerts from "../components/Alerts";
import BranchTable from "../components/BranchTable";
import InsightsPanel from "../components/InsightsPanel";

import { getKPIs, getAgingLeads } from "../utils/calculations";
import { getDashboardInsights } from "../utils/insightEngine";
import { formatCurrency } from "../utils/format";

export default function Dashboard() {
  const leads = data.leads;
  const branches = data.branches;

  const kpis = getKPIs(leads);
  const agingLeads = getAgingLeads(leads);

  // 🔥 NEW: Insights Logic
  const insights = getDashboardInsights(leads, branches);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* 🔥 HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              DealerPulse Dashboard 🚗
            </h1>
            <p className="text-gray-500 mt-1">
              Monitor dealership performance & take action
            </p>
          </div>

          <div className="mt-3 md:mt-0">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              June – December 2025
            </span>
          </div>
        </div>

        {/* 🔥 CEO INSIGHTS PANEL */}
        <InsightsPanel insights={insights} />

        {/* 🔹 KPI SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <KPICard
            title="Total Leads"
            value={kpis.total}
          />

          <KPICard
            title="Revenue"
            value={`₹${formatCurrency(kpis.revenue)}`}
          />

          <KPICard
            title="Conversion Rate"
            value={`${kpis.conversionRate}%`}
          />

        </div>

        {/* 🔹 ALERTS */}
        <Alerts agingLeads={agingLeads} />

        {/* 🔹 BRANCH SECTION */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Branch Performance
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Compare performance across all dealership branches
          </p>

          <BranchTable branches={branches} leads={leads} />
        </div>

      </div>
    </div>
  );
}