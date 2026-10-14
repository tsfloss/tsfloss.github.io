# Migration record — 14 October 2026

## Backups

Original commit: `9e472e4d` (master). The source checkout was clean before migration.

- Complete archive, including all Git history: `tsfloss-jekyll-backup-2026-10-14.tar.gz`, alongside this deliverable directory. Its SHA-256 checksum is in the corresponding `.sha256` file.
- Unmodified original folder retained at `~/tsfloss.github.io-jekyll-backup-2026-10-14` after installation.
- Git branch `backup/jekyll-2026-10-14` preserves the original commit in this checkout.
- Migrated source branch: `migration/astro-as-folio`.

## Preserved content

- Complete personal biography and profile photo from `_pages/about.md`.
- All 11 BibTeX entries. The source bibliography is byte-identical to the old file.
- Actual CV data from `assets/json/resume.json`, converted to standard JSONResume `basics`, with existing work summaries rendered as highlights.
- Original `Academic_CV.pdf`, byte-identical.
- All six research repository links, Scholar/ORCID/GitHub/X/INSPIRE links, and public asset folders.
- Main URLs: `/`, `/publications/`, `/cv/`, `/repositories/`, and `/assets/pdf/Academic_CV.pdf`.
- Empty optional sections remain available for future posts, projects, teaching, books, people, and news.

## Excluded from the new public content

The 2026 upstream merge had reintroduced template example posts/projects/people/teaching/news/books. They were not actual authored content in the pre-merge personal site. Those examples, along with the unused Einstein CV YAML, remain in the complete backup but are excluded from the new site. Old Jekyll layouts, Ruby plugins, Sass, theme JavaScript/CSS, Docker files, and theme-maintainer workflows are replaced by Astro/as-folio equivalents.

## Compatibility adjustments

- BibTeX parser accepts DOI citation keys containing periods and slashes.
- Publication detail routing supports slash-containing keys.
- LaTeX accents render as Unicode names while exported citations retain original LaTeX fields.
- INSPIRE `eprint` fields expose arXiv buttons; journal eprint PDF URLs expose PDF downloads.
- Thesis venue uses the original `school` field.
- Site search keeps Pagefind matches even when the query occurs only in page body text.
- Repository cards retain a direct link when the third-party image service fails; mobile cards fit narrow screens.
- Build no longer fetches or writes citation counts automatically; explicit refresh is available.

## Domain and deployment

Canonical URL and CNAME use `thomasfloss.com`, matching the observed redirect from `tsfloss.github.io`. No remote repository setting or DNS was modified. GitHub Actions is prepared to build pull requests and deploy `master` pushes. Before publishing, select GitHub Actions as the repository's Pages source. No push or production deployment was performed during migration.

## Validation

- Node 24.19.0, Yarn 4.13.0; dependencies pinned by `yarn.lock`.
- Production build: passed, 23 generated pages and Pagefind search index.
- Astro type check: zero errors/warnings; 123 inherited informational hints remain (mostly upstream deprecations and script annotations).
- Unit tests: 83 passed, including three tests against the real migrated bibliography.
- ESLint with autofix: passed.
- Static link/asset audit: 362 references checked, zero missing targets.
- Browser review: homepage/photo, light/dark modes, publication filtering, DOI detail route, CV content, repository links, site-wide search, mobile menu and mobile CV layout.
- Browser checks used the built site. The upstream Playwright suite was adapted to the new author name but was not separately run.

## Maintenance

See README.md for editing/building/deploying. Node 24+ is required; the existing system Node 22 is insufficient for this template version. Retain locked dependencies, update the framework/template deliberately, and review future updates in a branch rather than blindly merging template examples.
