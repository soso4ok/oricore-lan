import Link from "next/link";
import FieldMap from "./components/FieldMap";
import OperationalScroll from "./components/OperationalScroll";
import styles from "./operational.module.css";

const PHASES = [
  {
    number: "01",
    name: "Trace",
    note: "Survey the terrain",
    body: "Automated discovery and system mapping expose execution paths, hidden dependencies, operational risks, and critical nodes that ordinary inventories miss.",
    detail: "Repository + runtime evidence",
  },
  {
    number: "02",
    name: "Extract",
    note: "Name what matters",
    body: "We isolate core operational workflows embedded in the estate and separate durable requirements from incidental technical debt.",
    detail: "Framework-agnostic system architecture",
  },
  {
    number: "03",
    name: "Verify",
    note: "Keep the chain of custody",
    body: "Every proposed change is tied to source evidence, before-and-after diffs, and characterization tests—so functional parity is inspectable, not assumed.",
    detail: "Evidence-backed specifications",
  },
  {
    number: "04",
    name: "Sync",
    note: "Leave a living record",
    body: "CI hooks revisit the map on every commit. Documentation, dependencies, and risk assessments remain current as the system moves.",
    detail: "Continuous system intelligence",
  },
] as const;

const LEDGER = [
  {
    label: "Source",
    value: "Code repositories, configuration, interfaces, and the operational people who know where exceptions live.",
  },
  {
    label: "Method",
    value: "Deterministic system mapping and verification—not a black-box translation exercise.",
  },
  {
    label: "Environment",
    value: "Your infrastructure, including private and air-gapped deployments. No source code or context leaves your boundary.",
  },
  {
    label: "Outputs",
    value: "Traceable system maps, PR-ready specifications, before/after diffs, characterization tests, and native Gherkin scenarios.",
  },
] as const;

function ApolastMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? styles.markCompact : styles.mark}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 24A20 20 0 0 1 24 4v20H4Z" fill="currentColor" />
      <path d="M24 4a20 20 0 0 1 20 20H24V4Z" fill="currentColor" />
      <path d="M24 24h20A20 20 0 0 1 24 44V24Z" fill="currentColor" />
      <path d="M4 24h20v20A20 20 0 0 1 4 24Z" fill="currentColor" />
      <path d="M24 24h8v8h-8z" fill="#477b64" />
    </svg>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className={styles.sectionLabel}>
      <span>{number}</span>
      <span>{children}</span>
    </p>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className={diagonal ? styles.arrowDiagonal : styles.arrow}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 12h16M14 5l7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.site}>
      <OperationalScroll />
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.wordmark} aria-label="Apolast home">
            <ApolastMark compact />
            <span>Apolast</span>
          </Link>

          <nav className={styles.headerNav} aria-label="Homepage navigation">
            <a href="#field-map" data-scroll-to="" data-scroll-to-offset="-20">
              The map
            </a>
            <a href="#method" data-scroll-to="" data-scroll-to-offset="-20">
              Method
            </a>
            <a href="#sovereignty" data-scroll-to="" data-scroll-to-offset="-20">
              Sovereignty
            </a>
            <Link href="/solutions/bfsi">BFSI</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>

          <a className={styles.headerCta} href="mailto:hello@apolast.com">
            <span>Start a conversation</span>
            <Arrow />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={styles.container}>
            <div className={styles.heroTopline}>
              <p className={styles.fieldNote}>Field guide for complex operations</p>
              <p className={styles.heroCoordinates}>Issue 01 · Europe / Global</p>
            </div>

            <div className={styles.heroBody}>
              <p className={styles.heroIndex} aria-hidden="true">
                <span>01</span>
                <span>ORIENTATION</span>
              </p>
              <h1 id="hero-heading" className={styles.heroTitle}>
                <span>Make the</span>
                <span>hidden system</span>
                <span>
                  <em>legible.</em>
                </span>
              </h1>
            </div>

            <div className={styles.heroFooter}>
              <p className={styles.heroIntro}>
                Apolast turns inherited code, runtime behavior, and operational
                knowledge into a living record your teams can inspect, improve,
                and carry forward.
              </p>
              <a className={styles.primaryCta} href="mailto:hello@apolast.com">
                Tell us about your estate
                <Arrow />
              </a>
              <p className={styles.heroStatus}>
                <span className={styles.statusDot} />
                On-premise · Evidence first · Built to endure
              </p>
            </div>

            <div className={styles.heroRule} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className={styles.contextSection} aria-labelledby="context-heading">
          <div className={styles.container}>
            <SectionLabel number="02">The inherited-context problem</SectionLabel>
            <div className={styles.contextGrid}>
              <h2 id="context-heading" className={`${styles.displayHeading} ${styles.reveal}`}>
                A system can still compile while its reason for existing
                disappears.
              </h2>
              <div className={`${styles.contextCopy} ${styles.reveal}`}>
                <p>
                  Most modernization programmes can see the code. The costly
                  part is what the code no longer explains: why a branch exists,
                  where an exception is essential, and which operations hold the
                  enterprise together.
                </p>
                <p>
                  Apolast gives that context a durable form before it gets
                  translated, retired, or accidentally designed away. You move
                  with a map—not a guess.
                </p>
              </div>
            </div>
            <aside className={`${styles.marginNote} ${styles.reveal}`}>
              <span className={styles.notePin} aria-hidden="true" />
              <p>
                Migration risk hides in the gap between what a source file says
                and what the operation means.
              </p>
              <span>Margin note / 02</span>
            </aside>
          </div>
        </section>

        <section
          id="field-map"
          className={styles.mapSection}
          aria-labelledby="map-heading"
        >
          <div className={styles.container}>
            <div className={styles.mapHeading}>
              <SectionLabel number="03">Living-system field map</SectionLabel>
              <div>
                <h2 id="map-heading" className={`${styles.displayHeading} ${styles.reveal}`}>
                  Map the system before you move it.
                </h2>
                <p className={`${styles.mapIntro} ${styles.reveal}`}>
                  A living system map connects the estate you inherited to the
                  operations you need to protect. It makes the route from source
                  evidence to deployable change visible—and continuously
                  accountable.
                </p>
              </div>
            </div>
            <div className={styles.mapFrame}>
              <FieldMap />
            </div>
            <div className={styles.mapFootnotes}>
              <p>
                <span>READING THE MAP</span>
                The green routes are verified relationships, not speculative
                links.
              </p>
              <p>
                <span>WHY IT LIVES</span>
                CI synchronization refreshes the record whenever the estate
                changes.
              </p>
            </div>
          </div>
        </section>

        <section id="method" className={styles.methodSection} aria-labelledby="method-heading">
          <div className={styles.container}>
            <div className={styles.methodIntro}>
              <SectionLabel number="04">A route through the work</SectionLabel>
              <h2 id="method-heading" className={`${styles.displayHeading} ${styles.reveal}`}>
                Modernization is an operational sequence, not a leap of faith.
              </h2>
            </div>

            <ol className={styles.phaseList}>
              {PHASES.map((phase) => (
                <li className={`${styles.phase} ${styles.reveal}`} key={phase.number}>
                  <div className={styles.phaseNumber}>
                    <span>{phase.number}</span>
                    <i aria-hidden="true" />
                  </div>
                  <div className={styles.phaseTitle}>
                    <p>{phase.note}</p>
                    <h3>{phase.name}</h3>
                  </div>
                  <p className={styles.phaseBody}>{phase.body}</p>
                  <p className={styles.phaseDetail}>{phase.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="ledger" className={styles.ledgerSection} aria-labelledby="ledger-heading">
          <div className={styles.container}>
            <div className={styles.ledgerIntro}>
              <SectionLabel number="05">Evidence ledger</SectionLabel>
              <h2 id="ledger-heading" className={`${styles.displayHeading} ${styles.reveal}`}>
                Every claim leaves a trace.
              </h2>
              <p className={styles.ledgerLead}>
                Useful modernization output is not a slide deck. It is a
                verifiable record of how a recommendation was reached, where it
                belongs, and how the next team can challenge it.
              </p>
            </div>

            <dl className={styles.ledger}>
              {LEDGER.map((entry) => (
                <div className={`${styles.ledgerRow} ${styles.reveal}`} key={entry.label}>
                  <dt>{entry.label}</dt>
                  <dd>{entry.value}</dd>
                  <span className={styles.ledgerTick} aria-hidden="true">
                    ↗
                  </span>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="sovereignty"
          className={styles.sovereigntySection}
          aria-labelledby="sovereignty-heading"
        >
          <div className={styles.container}>
            <div className={styles.sovereigntyGrid}>
              <div>
                <SectionLabel number="06">Sovereignty and assurance</SectionLabel>
                <h2 id="sovereignty-heading" className={styles.sovereigntyHeading}>
                  Your context stays where it belongs.
                </h2>
              </div>
              <div className={styles.sovereigntyCopy}>
                <p>
                  Apolast is designed for the operations that cannot hand their
                  code, customer data, or institutional knowledge to a public
                  black box.
                </p>
                <p>
                  Deploy on your infrastructure with private AI where it helps,
                  deterministic analysis where it must, and evidence that
                  supports DORA and NIS2 obligations.
                </p>
                <Link className={styles.textLink} href="/solutions/bfsi">
                  Explore the BFSI route
                  <Arrow />
                </Link>
              </div>
            </div>

            <div className={styles.assuranceList}>
              <article>
                <span>01</span>
                <h3>On your infrastructure</h3>
                <p>Air-gapped and private deployment options for sensitive estates.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Private AI, bounded by evidence</h3>
                <p>Use local models where helpful without asking them to invent truth.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Audit-ready continuity</h3>
                <p>Keep a traceable operational record for change, review, and assurance.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} aria-labelledby="conversation-heading">
          <div className={styles.container}>
            <div className={styles.ctaTopline}>
              <SectionLabel number="07">Begin with the difficult part</SectionLabel>
              <span>CONFIDENTIAL FIRST CONVERSATION</span>
            </div>
            <div className={styles.ctaGrid}>
              <h2 id="conversation-heading" className={styles.ctaHeading}>
                Bring us the part of the map no one can explain.
              </h2>
              <div className={styles.ctaCopy}>
                <p>
                  Tell us where the operational context is thin, the migration
                  risk is high, or the estate has outlived its documentation.
                  We&apos;ll help you draw the first useful line.
                </p>
                <a className={styles.secondaryCta} href="mailto:hello@apolast.com">
                  hello@apolast.com
                  <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerMain}>
            <div>
              <Link href="/" className={styles.footerBrand} aria-label="Apolast home">
                <ApolastMark />
                <span>Apolast</span>
              </Link>
              <p>Operational clarity for inherited systems.</p>
            </div>
            <nav className={styles.footerNav} aria-label="Footer navigation">
              <div>
                <p>EXPLORE</p>
                <a href="#field-map">The map</a>
                <a href="#method">Method</a>
                <a href="#ledger">Evidence ledger</a>
              </div>
              <div>
                <p>ROUTES</p>
                <Link href="/solutions/bfsi">BFSI</Link>
                <Link href="/pricing">Pricing</Link>
                <a href="mailto:hello@apolast.com">Contact</a>
              </div>
              <div>
                <p>LEGAL</p>
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
              </div>
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 Apolast. All rights reserved.</span>
            <span>Field guide / operational cartography</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
