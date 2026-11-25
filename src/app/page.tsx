import Link from "next/link";

import { contact, faq, plans, projects, services, type Plan } from "@/content";

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {desc && <p className="mt-4 text-zinc-600">{desc}</p>}
    </div>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <i className="bi bi-check2 mt-0.5 text-indigo-600" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-7">
      <h3 className="font-medium text-zinc-900">{plan.name}</h3>
      <p className="mt-1 text-sm text-zinc-500">{plan.desc}</p>
      <p className="mt-6 text-xs text-zinc-500">Starting at</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">
        {plan.price}
        {plan.unit && <span className="text-sm font-normal text-zinc-500">{plan.unit}</span>}
      </p>
      {plan.features && (
        <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-6 text-sm text-zinc-600">
          {plan.features.map((f) => (
            <Check key={f}>{f}</Check>
          ))}
        </ul>
      )}
    </div>
  );
}

function TieredPlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-medium text-zinc-900">{plan.name}</h3>
        <p className="text-sm text-zinc-500">
          From {plan.price}
          {plan.unit}
        </p>
      </div>
      <p className="mt-1 text-sm text-zinc-500">{plan.desc}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {plan.tiers?.map((t) => (
          <div key={t.name} className="rounded-xl bg-zinc-50 p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {t.name}
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight">
              {t.from && <span className="mr-1 text-sm font-normal text-zinc-500">from</span>}
              {t.price}
              {t.unit && <span className="text-sm font-normal text-zinc-500">{t.unit}</span>}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              {t.features.map((f) => (
                <Check key={f}>{f}</Check>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const simplePlans = plans.filter((p) => !p.tiers);
  const tieredPlans = plans.filter((p) => p.tiers);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(99,102,241,0.10),transparent)]"
        />
        <div className="container-x pb-20 pt-20 md:pb-28 md:pt-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Taking on new projects
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              We design, build and grow{" "}
              <span className="text-zinc-400">digital products.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-600">
              Since 2023, Stipill has been a software and growth studio. From technical strategy to
              websites, apps, search visibility and motion — one team, end to end.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href={contact.whatsapp} target="_blank" className="btn-primary">
                <i className="bi bi-whatsapp" aria-hidden /> Start a project
              </Link>
              <Link href="#pricing" className="btn-secondary">
                View pricing <i className="bi bi-arrow-right" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mt-20 border-t border-zinc-100 pt-8">
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">
              Built for & by
            </p>
            <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3 text-sm font-medium text-zinc-500">
              {projects.map((p) => (
                <span key={p.client}>{p.client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-zinc-100 bg-zinc-50/60 py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Services"
            title="Everything you need to launch and grow."
            desc="Strategy, engineering, visibility and storytelling under one roof, so nothing gets lost between vendors."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.name} className="bg-white p-8">
                <div className="flex items-center justify-between">
                  <i className={`bi ${s.icon} text-xl text-indigo-600`} aria-hidden />
                  <span className="text-xs tabular-nums text-zinc-400">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-medium text-zinc-900">{s.name}</h3>
                {s.tag && <p className="mt-0.5 text-xs text-zinc-500">{s.tag}</p>}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.desc}</p>
              </div>
            ))}
            <div className="flex flex-col justify-between bg-zinc-900 p-8 text-white">
              <p className="text-lg font-medium leading-snug">
                Not sure where to start? Book a consult and we&apos;ll map it out together.
              </p>
              <Link
                href={contact.whatsapp}
                target="_blank"
                className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
              >
                Talk to us <i className="bi bi-arrow-right" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Selected work"
            title="Products we've shipped."
            desc="Client work and in-house products, live and in use."
          />
          <ul className="mt-14 divide-y divide-zinc-100 border-y border-zinc-100">
            {projects.map((p) => (
              <li key={p.client}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-center gap-2 py-6 md:grid-cols-[1.2fr_1fr_auto] md:gap-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-medium text-zinc-900">{p.client}</span>
                    {p.inHouse && (
                      <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-500">
                        In-house
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-600">{p.work.join(" · ")}</p>
                  <span className="flex items-center gap-2 text-sm text-zinc-400 transition group-hover:text-zinc-900">
                    {p.domain}
                    <i
                      className="bi bi-arrow-up-right transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-zinc-100 bg-zinc-50/60 py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Pricing"
            title="Transparent, honest pricing."
            desc="Clear starting prices so you can plan. After a short call, every project gets a fixed quote based on its scope."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {simplePlans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {tieredPlans.map((p) => (
              <TieredPlanCard key={p.name} plan={p} />
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            All prices in INR. Need something custom?{" "}
            <Link href="#contact" className="text-zinc-900 underline underline-offset-4">
              Get a quote
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions."
            desc="Can't find what you're looking for? Just reach out."
          />
          <div className="divide-y divide-zinc-100 border-y border-zinc-100">
            {faq.map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-zinc-900 [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <i
                    className="bi bi-plus text-lg text-zinc-400 transition group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 pr-10 text-sm leading-relaxed text-zinc-600">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-24">
        <div className="container-x">
          <div className="rounded-3xl bg-zinc-900 px-8 py-16 text-white md:px-16">
            <div className="grid gap-12 md:grid-cols-2 md:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Have an idea? Let&apos;s build it.
                </h2>
                <p className="mt-4 max-w-md text-zinc-400">
                  Tell us what you&apos;re working on. We&apos;ll get back with a plan,
                  timeline and quote.
                </p>
                <Link
                  href={contact.whatsapp}
                  target="_blank"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
                >
                  <i className="bi bi-whatsapp" aria-hidden /> Chat on WhatsApp
                </Link>
              </div>
              <div className="space-y-6 md:justify-self-end">
                <a href={`mailto:${contact.email}`} className="group block">
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Email</p>
                  <p className="mt-1 text-lg group-hover:underline">{contact.email}</p>
                </a>
                <a href={contact.phoneHref} className="group block">
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Phone</p>
                  <p className="mt-1 text-lg group-hover:underline">{contact.phone}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
