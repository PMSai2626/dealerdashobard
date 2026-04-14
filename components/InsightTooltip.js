export default function InsightTooltip({ text }) {
  return (
    <div className="
      absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full
      opacity-0 group-hover:opacity-100 group-hover:translate-y-3
      transition-all duration-300 z-20 w-[260px]
    ">

      <div className="
        bg-gray-900/95 backdrop-blur-md text-white
        text-xs p-4 rounded-2xl shadow-2xl border border-gray-700
      ">

        {/* 🔥 Title */}
        <p className="text-gray-300 text-[11px] mb-1 uppercase tracking-wide">
          Insight
        </p>

        {/* 🔥 Content */}
        <p className="leading-relaxed whitespace-pre-line">
          {text}
        </p>

      </div>

    </div>
  );
}