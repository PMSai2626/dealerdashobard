import data from "../../../data/dealership_data.json";
import { formatCurrency } from "@/utils/format";
import LeadsGrid from "@/components/LeadsGrid"; // ✅ he

export default async function BranchPage({ params }) {
  const { id } = await params;

  const branch = data.branches.find(b => b.id === id);
  const leads = data.leads.filter(l => l.branch_id === id);

  // KPI calculations
  const delivered = leads.filter(l => l.status === "delivered");
  const revenue = delivered.reduce((sum, l) => sum + l.deal_value, 0);

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
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto space-y-6">

      {/* 🔹 Header */}
      <div>
        <h1 className="text-3xl font-bold">
          {branch?.name}
        </h1>
        <p className="text-gray-500">{branch?.city}</p>
      </div>

      {/* 🔹 KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Total Leads</p>
          <h2 className="text-2xl font-bold">{leads.length}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold text-green-600">
            ₹{formatCurrency(revenue)}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <p className="text-gray-500">Delivered</p>
          <h2 className="text-2xl font-bold text-blue-600">
            {delivered.length}
          </h2>
        </div>

      </div>

      {/* 🔹 Leads Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Leads</h2>

        {leads.length === 0 ? (
          <p className="text-red-500">No leads found ❌</p>
        ) : (
          <LeadsGrid leads={leads} />   
        )}
      </div>

    </div>
  </div>
  );
}