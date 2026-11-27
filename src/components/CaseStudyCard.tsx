import Link from "next/link";

import { formatDate, type CaseStudyMeta } from "@/lib/case-studies";

export default function CaseStudyCard({ study: s }: { study: CaseStudyMeta }) {
  return (
    <Link
      href={`/case-studies/${s.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-400"
    >
      <div className="flex flex-1 flex-col p-7">
        <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">
          {s.client}
          {s.date && <> · {formatDate(s.date)}</>}
        </p>
        <h2 className="mt-3 text-xl font-medium tracking-tight text-zinc-900">{s.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="flex flex-wrap gap-1.5">
            {s.services.map((t) => (
              <span key={t} className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[11px] text-zinc-600">
                {t}
              </span>
            ))}
          </div>
          <i
            className="bi bi-arrow-right text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-900"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
