// Renders ```chart JSON blocks in case-study markdown as static HTML bar charts.
//
// Block format:
// {
//   "title": "Chart title",
//   "labels": ["M1", "M2", ...],
//   "series": [{ "name": "Series", "values": [1, 2, ...] }],
//   "stacked": true,            // optional: stack series in one chart; otherwise one panel per series
//   "source": "Source caption"  // optional
// }

type Series = { name: string; values: number[] };
type ChartSpec = { title: string; labels: string[]; series: Series[]; stacked?: boolean; source?: string };

const COLORS = ["bg-indigo-600", "bg-indigo-300", "bg-zinc-400"];

const esc = (s: string) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const fmt = (n: number) => n.toLocaleString("en-IN");

function bars(labels: string[], series: Series[], colorOffset = 0) {
  const totals = labels.map((_, i) => series.reduce((sum, s) => sum + (s.values[i] ?? 0), 0));
  const max = Math.max(...totals, 1);

  const cols = labels
    .map((label, i) => {
      const segments = series
        .map((s, j) => {
          const v = s.values[i] ?? 0;
          return `<div class="${COLORS[(j + colorOffset) % COLORS.length]} w-full first:rounded-t-md" style="height:${(v / max) * 100}%"></div>`;
        })
        .reverse() // first series sits at the bottom
        .join("");
      return `<div class="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
  <span class="text-xs font-medium tabular-nums text-zinc-900">${fmt(totals[i])}</span>
  <div class="flex w-full max-w-12 flex-col justify-end" style="height:${(totals[i] / max) * 100}%">${segments}</div>
</div>`;
    })
    .join("");

  const axis = labels.map((l) => `<span class="flex-1 text-center">${esc(l)}</span>`).join("");

  return `<div class="flex h-44 items-end gap-2 border-b border-zinc-200 pb-px sm:gap-3">${cols}</div>
<div class="mt-2 flex gap-2 text-xs text-zinc-500 sm:gap-3">${axis}</div>`;
}

function table(spec: ChartSpec) {
  const head = spec.labels.map((l) => `<th>${esc(l)}</th>`).join("");
  const rows = spec.series
    .map((s) => `<tr><th>${esc(s.name)}</th>${s.values.map((v) => `<td>${fmt(v)}</td>`).join("")}</tr>`)
    .join("");
  return `<table class="sr-only"><caption>${esc(spec.title)}</caption><tr><th></th>${head}</tr>${rows}</table>`;
}

export function renderChart(json: string): string {
  let spec: ChartSpec;
  try {
    spec = JSON.parse(json);
  } catch {
    return `<pre>Invalid chart block</pre>`;
  }

  const legend = (series: Series[]) =>
    `<div class="mt-4 flex flex-wrap gap-4 text-xs text-zinc-600">${series
      .map(
        (s, j) =>
          `<span class="inline-flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-sm ${COLORS[j % COLORS.length]}"></span>${esc(s.name)}</span>`,
      )
      .join("")}</div>`;

  const body = spec.stacked
    ? bars(spec.labels, spec.series) + (spec.series.length > 1 ? legend(spec.series) : "")
    : `<div class="grid gap-8 ${spec.series.length > 1 ? "sm:grid-cols-2" : ""}">${spec.series
        .map(
          (s, j) =>
            `<div><p class="mb-3 text-sm font-medium text-zinc-700">${esc(s.name)}</p>${bars(spec.labels, [s], j)}</div>`,
        )
        .join("")}</div>`;

  return `<figure class="not-prose my-10 rounded-2xl border border-zinc-200 p-6 md:p-8">
<p class="mb-6 text-base font-semibold tracking-tight text-zinc-900">${esc(spec.title)}</p>
<div aria-hidden="true">${body}</div>
${table(spec)}
${spec.source ? `<figcaption class="mt-6 text-xs text-zinc-400">${esc(spec.source)}</figcaption>` : ""}
</figure>`;
}
