"use client";

import { useRouter } from "next/navigation";

export default function InsightsPanel({ insights }) {
  const router = useRouter();

  const getStyle = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 text-green-700";
      case "danger":
        return "bg-red-50 text-red-700";
      case "warning":
        return "bg-yellow-50 text-yellow-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return "🔥";
      case "danger":
        return "⚠️";
      case "warning":
        return "💤";
      default:
        return "💡";
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        💡 CEO Insights
      </h2>

      <div className="space-y-3">
        {insights.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              item.branchId && router.push(`/branch/${item.branchId}`)
            }
            className={`p-3 rounded-xl text-sm flex items-center gap-2 cursor-pointer hover:scale-[1.02] transition ${getStyle(item.type)}`}
          >
            <span>{getIcon(item.type)}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}