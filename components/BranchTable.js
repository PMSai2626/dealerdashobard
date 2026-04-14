import Link from "next/link";

export default function BranchTable({ branches, leads }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {branches.map(b => {
        const count = leads.filter(l => l.branch_id === b.id).length;

        return (
          <Link key={b.id} href={`/branch/${b.id}`}>
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">

              <h3 className="text-gray-800 font-semibold text-lg">{b.name}</h3>
              <p className="text-gray-600 text-sm">{b.city}</p>

              <p className="mt-2 text-blue-600 font-semibold">
                {count} Leads →
              </p>

            </div>
          </Link>
        );
      })}
    </div>
  );
}