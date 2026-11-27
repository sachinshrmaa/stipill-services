# Stipill Solutions and Services

Official website of Stipill.

## Posting a case study

1. Copy `content/case-studies/_template.md` to `content/case-studies/<slug>.md` (the filename becomes the URL `/case-studies/<slug>`).
2. Fill in the frontmatter (`title`, `client`, `summary`, `date`, `services`, optional `url` and `cover`) and write the body in Markdown.
3. Put cover images in `public/images/`. Files starting with `_` are ignored.

The two most recent case studies also appear on the homepage.

## Brand logos ("Trusted by")

Add logo files to `public/logos/` and set `logo: "/logos/<file>.svg"` on the brand in `trustedBy` in `src/content.ts`. Brands without a logo show a text wordmark.
