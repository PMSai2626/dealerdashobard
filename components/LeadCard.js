import { formatCurrency } from "@/utils/format";
import { getLeadInsight } from "@/utils/insights";
import InsightTooltip from "./InsightTooltip";

export default function LeadCard({ lead }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "lost":
        return "bg-red-100 text-red-700";
      case "negotiation":
        return "bg-yellow-100 text-yellow-700";
      case "test_drive":
        return "bg-blue-100 text-blue-700";
      case "order_placed":
        return "bg-purple-100 text-purple-700";
      case "contacted":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
     <div className="relative group bg-white p-5 rounded-2xl shadow hover:shadow-xl transition cursor-pointer min-h-[130px] flex flex-col justify-between">

    {/* Top */}
    <div>
      <h3 className="font-semibold text-lg leading-tight">
        {lead.customer_name}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {lead.model_interested}
      </p>
    </div>

    {/* Bottom */}
    <div className="flex justify-between items-center mt-4">

      <span className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${getStatusColor(lead.status)}`}>
        {lead.status}
      </span>

      <span className="font-semibold text-sm">
        ₹{formatCurrency(lead.deal_value)}
      </span>

    </div>

    {/* Tooltip */}
    <InsightTooltip text={getLeadInsight(lead)} />

  </div>
  );
}