import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { contact } from "@/content";
import { formatDate, getCaseStudies, getCaseStudy } from "@/lib/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudies().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getCaseStudy(params.slug);
  if (!s) return {};
  return { title: s.metaTitle ?? `${s.title} — Stipill Case Study`, description: s.summary };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const s = getCaseStudy(params.slug);
  if (!s) notFound();

  return (
    <article className="py-16 md:py-24">
      <div className="container-x max-w-3xl">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900"
        >
          <i className="bi bi-arrow-left" aria-hidden /> All case studies
        </Link>

        <p className="eyebrow mt-10">{s.client}</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          {s.title}
        </h1>
        {s.summary && <p className="mt-5 text-lg text-zinc-600">{s.summary}</p>}

        <dl className="mt-8 grid gap-6 border-y border-zinc-100 py-6 text-sm sm:grid-cols-3">
          {s.services.length > 0 && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-400">Services</dt>
              <dd className="mt-1 text-zinc-900">{s.services.join(", ")}</dd>
            </div>
          )}
          {s.date && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-400">Date</dt>
              <dd className="mt-1 text-zinc-900">{formatDate(s.date)}</dd>
            </div>
          )}
          {s.url && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-zinc-400">Live</dt>
              <dd className="mt-1">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 underline underline-offset-4"
                >
                  {s.url.replace(/^https?:\/\//, "")}
                </a>
              </dd>
            </div>
          )}
        </dl>

        {s.cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={s.cover}
            alt={`${s.client} project`}
            className="mt-10 w-full rounded-2xl border border-zinc-200"
          />
        )}

        <div
          className="prose prose-zinc mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-indigo-600"
          dangerouslySetInnerHTML={{ __html: s.html }}
        />

        <div className="mt-16 rounded-2xl bg-zinc-900 p-8 text-white md:p-10">
          <p className="text-xl font-medium">Want results like this?</p>
          <p className="mt-2 text-zinc-400">Tell us about your project and we&apos;ll get back with a plan.</p>
          <Link
            href={contact.whatsapp}
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            <i className="bi bi-whatsapp" aria-hidden /> Start a project
          </Link>
        </div>
      </div>
    </article>
  );
}
