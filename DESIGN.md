# Arkane OS Website — Designkonzept (Neubau v0.27)

Stand: Oktober 2026. Statische Site, kein Framework, kein Build-Step, keine externen Abhängigkeiten.

## Leitfrage

«Was müssen Entwickler und KI-Agenten sehen, und in welcher Reihenfolge ergibt es Sinn?»

1. **Was ist das?** — ein Satz, ohne Floskel. (Hero)
2. **Stimmt das?** — die Zahlen, mit Gate-Namen und Messumgebung. (Beweise)
3. **Wie funktioniert es?** — Kernel, Cells, Storage, Control Plane. (Architektur)
4. **Wie fange ich an?** — Clone, Build, Boot; für KIs: MCP-Endpunkt + maschinenlesbare Fakten. (Loslegen)
5. **Was kommt, was fehlt?** — Roadmap als ehrliche Liste «bewiesen / geplant». (auf der Startseite)

Die Positionierung «beweisbar statt versprochen» ist das Ordnungsprinzip: jede Behauptung trägt ein
Status-Label (`bewiesen` = Acceptance-Gate grün, `geplant` = steht in der Roadmap, nichts dazwischen).

## Seitenstruktur (7 → 4 Seiten)

| Seite | Inhalt | ersetzt |
|---|---|---|
| `index.html` | Hero, 4 Kennzahlen, drei Säulen, Für-KI-Agenten-Block, Stand & Roadmap | `index.html`, `roadmap.html` |
| `proof.html` | **Herzstück.** Beweistabelle (Behauptung · Zahl · Gate · Umgebung), dann je Thema ein Abschnitt mit ehrlichem Rahmen | `proof.html` |
| `architecture.html` | Exokernel, Cells & Contracts, Storage (Blobs, Paging, Store v4, Sealed), Control Plane (Console, MCP-Ops, Audit) | `architecture.html`, `storage.html`, `console.html` |
| `getit.html` | Drei Befehle, App installieren, SDK, KI-Agent anbinden (MCP-Ops), Ehrliche Kanten | `getit.html` |

Alte URLs bleiben erreichbar: `storage.html`, `console.html`, `roadmap.html` sind 1-KB-Weiterleitungen
(`meta refresh` + Link) auf die neuen Anker. Nichts bricht, nichts wird doppelt gepflegt.

Maschinenlesbar für KI-Agenten: `llms.txt` (Kurzfassung + Linkliste) und `facts.json` (alle Beweiszahlen
mit Gate, Umgebung, Version). `robots.txt` + `sitemap.xml` dazu.

## Gelöscht

- `index_1.html`, `index_old_v0.17.html`, `index_onepager_backup.html`, `design_concept.html` — Leichen (330 KB).
- `cells.js` (Canvas-Spielerei), `site.js` (Theme-Toggle, Boot-Overlay, Terminal-Animation) — ersetzt durch 40 Zeilen `site.js` (nur Mobile-Nav + Tabellen-Scrollhinweis).
- Light-Theme, Google Fonts (Fraunces/Plex), Boot-Overlay, Hero-Canvas, Spawn-Strips.
- `tests/scroll-behavior.test.js` (prüfte Lenis/GSAP, die es nicht mehr gibt) → `tests/site.test.js` prüft die neue Struktur.

## Visuelle Sprache

Richtung: Linear / Vercel — dunkel, präzise, viel Negativraum, Zahlen in Mono.

- **Farben**: Hintergrund `#09090b`, Fläche `#111114`, Linien `#232329`, Text `#ededef`, gedämpft `#8b8d98`.
  Ein Akzent: `#3ecf8e` (Gate-grün, «PASS»). Warnfarbe `#f59e0b` nur für `geplant`, Rot `#f87171` nur für
  «verweigert / stirbt». Keine Verläufe, keine Deko-Bilder.
- **Typografie**: `system-ui` (Inter/SF/Segoe je nach OS) für Text, `ui-monospace` für Zahlen, Gate-Namen,
  Code. Keine Webfonts → kein Netzaufruf, kein Layout-Sprung. Überschriften eng (`letter-spacing -0.02em`),
  H1 ≤ 56 px, Fliesstext 17 px / 1.6.
- **Raster**: Inhaltsbreite 1120 px, Lesebreite 720 px, Abstände 8-er-Raster (`--s1..--s8`).
- **Komponenten**: `nav` (sticky, Blur, 1-px-Linie), `.kpi` (Kennzahlkarte: Zahl, Einheit, Label, Gate),
  `.proof-table` (Behauptung · Wert · Gate · Umgebung), `.card`, `.pill` (bewiesen / geplant / Kante),
  `.term` (Terminalblock, keine Animation), `.eyebrow` (Abschnittsnummer), `.timeline` (Roadmap).
- **Bewegung**: keine. `prefers-reduced-motion` wird respektiert, weil es nichts zu reduzieren gibt.

## Sprache

Deutsch, nüchtern. Jede Zahl steht neben ihrer Messumgebung («KVM, AMD 5700G, release») und dem
Gate-Namen (`v27_gm5`, `v27_gm6`, `v26_mo1..4`, …). Was nicht gemessen ist, heisst «geplant» oder «nicht
gemessen» — nie «bald». Keine Superlative ohne Zahl.

## Qualitätskriterien

- Semantisches HTML (`header/nav/main/section/footer`, genau ein `h1`), `lang="de"`, Meta-Description,
  OG-Tags, Viewport, Theme-Color, Skip-Link, Fokus-Styles.
- Jede interne Referenz existiert (`npm test` prüft das).
- Mobil ab 360 px; Tabellen scrollen horizontal statt zu brechen.
- Keine externen Requests ausser dem GitHub-Link.
