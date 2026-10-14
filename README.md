# Thomas Flöss — academic website

Migrated from Jekyll/al-folio to Astro/as-folio on 14 October 2026.

## Local development

Requires Node.js 24+ and Corepack. Use Yarn, as specified in `package.json`.

```sh
corepack enable
yarn install --immutable
yarn dev
```

## Build and verify

```sh
yarn check
yarn test
yarn build
yarn preview
```

## Edit content

- Biography: `src/data/about.mdx`
- Name, photo, social links, navigation, features: `src/config/site.ts`
- Publications: `src/data/papers.bib` (BibTeX). Original citation keys and LaTeX names are supported.
- CV: `src/data/resume.json` (JSONResume); download: `public/assets/pdf/Academic_CV.pdf`
- Research repositories: `src/data/repositories.yml`
- Images and other downloads: `public/assets/`
- Optional future posts/projects: `src/content/`

Citation counts can be refreshed explicitly with `yarn citations:update`; production builds do not fetch them.

## Deployment

The canonical domain defaults to `https://thomasfloss.com`, matching the existing public redirect; `public/CNAME` preserves that domain. Override `ASTRO_SITE` if needed. The root base path is empty. No DNS changes are needed for a framework migration.

The GitHub Actions workflow builds pull requests and deploys pushes to `master`. Before the first deployment, set repository Settings → Pages → Source to **GitHub Actions**. The new workflow uses Pages artifacts rather than pushing generated HTML to `gh-pages`.

The migration is local until you commit and push it. Review the preview before publication.

## Provenance and rollback

Theme: https://github.com/dadangnh/as-folio, commit `6a30d3e835830233f655820d42cde41d9b61ed2c`, MIT license (retained in `LICENSE`).

The old checkout, including its complete Git history, is archived separately. A `backup/jekyll-2026-10-14` branch preserves the original commit; the new local work is on `migration/astro-as-folio`. To undo the migration, keep the Astro work separately and restore the archived directory, or switch to the backup branch after saving local changes.

See `MIGRATION.md` for the inventory and validation record; `CUSTOMIZE.md` retains the upstream configuration reference.
