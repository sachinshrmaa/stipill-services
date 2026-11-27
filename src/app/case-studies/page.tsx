import type { Metadata } from "next";
import Link from "next/link";

import CaseStudyCard from "@/components/CaseStudyCard";
import { contact } from "@/content";
import { getCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Stipill Agency",
  description: "How Stipill helps businesses design, build and grow digital products.",
};

export default function CaseStudiesPage() {
  const studies = getCaseStudies();

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            The work, in detail.
          </h1>
          <p className="mt-4 text-zinc-600">
            The problems our clients brought us, what we built, and what changed.
          </p>
        </div>

        {studies.length === 0 ? (
          <div className="mt-14 rounded-2xl border border-dashed border-zinc-200 p-10 text-center text-zinc-500">
            Case studies are on the way.{" "}
            <Link href={contact.whatsapp} target="_blank" className="text-zinc-900 underline underline-offset-4">
              Ask us about our work
            </Link>
            .
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {studies.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
