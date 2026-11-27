import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { Marked } from "marked";

import { renderChart } from "./charts";

const md = new Marked({
  renderer: {
    code({ text, lang }) {
      return lang === "chart" ? renderChart(text) : false;
    },
  },
});

const DIR = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  metaTitle?: string;
  client: string;
  summary: string;
  date: string;
  services: string[];
  url?: string;
  cover?: string;
};

export type CaseStudy = CaseStudyMeta & { html: string };

function files() {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

function read(file: string): { meta: CaseStudyMeta; body: string } {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      metaTitle: data.metaTitle,
      client: data.client ?? "",
      summary: data.summary ?? "",
      date: data.date ? new Date(data.date).toISOString().slice(0, 10) : "",
      services: data.services ?? [],
      url: data.url,
      cover: data.cover,
    },
    body: content,
  };
}

export function getCaseStudies(): CaseStudyMeta[] {
  return files()
    .map((f) => read(f).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const file = `${slug}.md`;
  if (!files().includes(file)) return null;
  const { meta, body } = read(file);
  return { ...meta, html: md.parse(body, { async: false }) as string };
}

export function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}
