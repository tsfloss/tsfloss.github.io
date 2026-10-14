import { describe, expect, it } from 'vitest';

import raw from '../data/papers.bib?raw';
import { getAuthors, getVenue, parseBibtex } from './bibtex';
const entries = parseBibtex(raw);

describe('migrated personal bibliography', () => {
  it('preserves every citation key, including the DOI containing a slash', () => {
    const sourceKeys = [
      ...raw.matchAll(/@(?!string\b)(?:article|phdthesis|mastersthesis)\{([^,]+),/g),
    ].map((match) => match[1]);
    expect(sourceKeys).toHaveLength(11);
    expect(entries.map((entry) => entry.key)).toEqual(sourceKeys);
    expect(entries.find((entry) => entry.key === '10.1093/mnras/stae1818')?.fields.title).toContain(
      'Denoising diffusion delensing',
    );
  });
  it('displays both forms of LaTeX umlauts without changing the source author field', () => {
    for (const entry of entries) {
      expect(getAuthors(entry)).toContain('Thomas Flöss');
      expect(getAuthors(entry)).not.toContain('\\');
      expect(entry.fields.author).toContain('\\');
    }
  });
  it('preserves arXiv identifiers and the journal PDF download', () => {
    expect(entries.find((entry) => entry.key === 'Bottema:2025vww')?.fields.arxiv).toBe(
      '2502.11846',
    );
    expect(entries.find((entry) => entry.key === '10.1093/mnras/stae1818')?.fields.pdf).toMatch(
      /^https:.*\.pdf$/,
    );
    expect(getVenue(entries.find((entry) => entry.key === '2823143')!)).toBe(
      'University of Groningen',
    );
  });
});
