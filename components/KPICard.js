export default function KPICard({ title, value }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-5 rounded-2xl shadow-lg">
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-3xl font-bold">{value}</h2>
    </div>
  );
}   