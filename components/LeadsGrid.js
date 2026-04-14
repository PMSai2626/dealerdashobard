import LeadCard from "./LeadCard";

export default function LeadsGrid({ leads }) {
  return (
    <div className="grid md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}