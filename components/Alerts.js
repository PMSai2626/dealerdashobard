export default function Alerts({ agingLeads }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow">
      <h2 className="text-red-700 font-bold text-lg">⚠️ Attention Needed</h2>

      {agingLeads.length > 0 ? (
        <p className="text-red-600 mt-1">
          {agingLeads.length} leads not contacted for 7+ days
        </p>
      ) : (
        <p className="text-green-600 mt-1">All leads are active ✅</p>
      )}
    </div>
  );
}