import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Apolast",
  description: "Apolast Privacy Policy for B2B relationships, software, and services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-[800px] mx-auto px-6 sm:px-8">
          <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="mb-12 w-24 h-[6px] bg-[#2FCA54]"></div>

          <div className="space-y-10 text-[17px] leading-[1.7] text-[#333333]">
            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">1. Introduction</h2>
              <p className="mb-4">1.1 Apolast is committed to protecting the privacy and security of personal data processed in connection with its B2B relationships and services.</p>
              <p>1.2 This Privacy Policy describes how Apolast, acting as data controller for certain activities, collects, uses and protects personal data, and explains the on‑premise, “Private AI / Zero Data Retention” nature of the Apolast Software.</p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">2. Scope</h2>
              <p className="mb-4">2.1 This Privacy Policy applies to personal data relating to:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) representatives of Customers, prospective customers, system integrators, suppliers, investors and other business partners;</li>
                <li>b) visitors to Apolast’s websites and recipients of Apolast’s marketing communications;</li>
                <li>c) individuals whose data may be included in limited telemetry or support logs transmitted to Apolast when optional remote support or analytics are enabled.</li>
              </ul>
              <p>2.2 This Privacy Policy does not apply to Customer end‑user data or proprietary source code processed solely within Customer’s infrastructure by the on‑premise Software, where Apolast has no access and does not act as controller or processor.</p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">3. Identity of the Controller and Contact Details</h2>
              <p className="mb-4">3.1 For the activities covered by this Privacy Policy, Apolast (ТОВ) and/or the relevant holding or contracting entity identified in the applicable contract acts as data controller within the meaning of GDPR.</p>
              <p>3.2 Contact details for privacy inquiries, including any Data Protection Officer (where required), are provided in Apolast’s contracts and on its website.</p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">4. Categories of Personal Data</h2>
              <p className="mb-4">4.1 Apolast may collect and process the following categories of personal data about business contacts:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) Identification data: name, position, employer, professional role.</li>
                <li>b) Contact data: business email address, business phone number, postal address, preferred language.</li>
                <li>c) Contract and billing data: invoicing details, tax IDs, payment history, contract metadata.</li>
                <li>d) Communication data: contents of emails, support tickets, meeting notes, feedback and surveys.</li>
                <li>e) Website and marketing data: IP address, device and browser information, cookies and similar identifiers, usage data, preferences, interactions with marketing campaigns.</li>
                <li>f) Telemetry and support data (if enabled): technical logs, error codes, performance metrics and configuration parameters related to Software operation, designed to minimize inclusion of proprietary code or directly identifiable end‑user data.</li>
              </ul>
              <p>4.2 Apolast does not intentionally collect special categories of personal data (e.g. health data) in the course of normal B2B activities.</p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">5. Sources of Personal Data</h2>
              <p className="mb-4">5.1 Personal data is obtained from:</p>
              <ul className="list-none space-y-3 pl-4">
                <li>a) direct interactions (emails, meetings, calls, events);</li>
                <li>b) forms and interfaces on Apolast websites or product portals;</li>
                <li>c) Customer or partner onboarding processes;</li>
                <li>d) optional telemetry and support channels when configured to send data to Apolast;</li>
                <li>e) publicly available business data (e.g. professional networks) where permitted by law.</li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">6. On‑Premise “Private AI” and Zero Data Retention</h2>
              <p className="mb-4">6.1 The Apolast Software is deployed on‑premise and processes Customer Codebase and related data entirely within Customer’s environment; by default, Customer’s proprietary code and end‑user personal data are not transmitted to Apolast‑controlled servers or public cloud LLMs.</p>
              <p className="mb-4">6.2 Apolast follows a “Private AI” and “Zero Data Retention” strategy:</p>
              <ul className="list-none space-y-3 pl-4">
                <li>a) Apolast does not use Customer Codebase or end‑user data to train public LLMs;</li>
                <li>b) Apolast does not routinely store Customer’s application data on its own systems;</li>
                <li>c) any data temporarily accessed for support or troubleshooting is strictly limited, used only for the specific purpose, and deleted or anonymised afterwards.</li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">7. Purposes and Legal Bases</h2>
              <p className="mb-4">7.1 Apolast processes personal data for the following purposes and legal bases under GDPR:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) Contract performance (Art. 6(1)(b) GDPR): managing pre‑contractual discussions, entering into and performing B2B contracts, issuing invoices, delivering Services.</li>
                <li>b) Legal obligations (Art. 6(1)(c) GDPR): complying with accounting, tax, sanctions and regulatory requirements.</li>
                <li>c) Legitimate interests (Art. 6(1)(f) GDPR):
                  <ul className="list-disc space-y-2 pl-6 mt-2">
                    <li>managing and expanding business relationships;</li>
                    <li>ensuring cybersecurity and service integrity;</li>
                    <li>improving and supporting the Software (subject to telemetry minimisation);</li>
                    <li>defending legal claims and maintaining evidence.</li>
                  </ul>
                </li>
                <li>d) Consent (Art. 6(1)(a) GDPR): for certain marketing communications or optional telemetry where required; consent may be withdrawn at any time.</li>
              </ul>
              <p>7.2 Apolast applies GDPR principles of lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity, confidentiality and accountability to all relevant processing activities.</p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">8. Relation to DORA and NIS2 Compliance Tooling</h2>
              <p className="mb-4">8.1 Customers may deploy Apolast as part of internal compliance frameworks under DORA, for example to maintain IT asset inventories, dependency mapping and resilience testing capabilities.</p>
              <p className="mb-4">8.2 Customers may use SBOM generation and asset visibility features to support NIS2 supply‑chain security obligations, vendor risk assessments and documentation.</p>
              <p>8.3 Apolast does not determine Customer’s purposes for processing end‑user data within Customer’s environment; Customers remain responsible for their own data protection frameworks, notices and role definitions (controller/processor).</p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">9. Data Sharing and Recipients</h2>
              <p className="mb-4">9.1 Apolast may share personal data, on a need‑to‑know basis, with:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) Apolast group companies and holding entities for internal administration and contract fulfillment;</li>
                <li>b) System Integrators and implementation partners engaged by Customer or Apolast to deliver projects, subject to contractual confidentiality and data protection obligations;</li>
                <li>c) professional advisers (lawyers, auditors, accountants);</li>
                <li>d) providers of infrastructure, CRM, communications, ticketing and analytics tools used by Apolast;</li>
                <li>e) competent authorities, regulators or courts, where required by law.</li>
              </ul>
              <p>9.2 Apolast does not sell personal data and does not use Customer Codebase or end‑user data to train public LLMs.</p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">10. International Transfers</h2>
              <p className="mb-4">10.1 Where personal data is transferred outside the European Economic Area, Apolast will implement appropriate safeguards such as:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) adequacy decisions under Art. 45 GDPR;</li>
                <li>b) standard contractual clauses (SCCs) or equivalent instruments;</li>
                <li>c) supplementary technical and organisational measures where required.</li>
              </ul>
              <p>10.2 Specific transfer mechanisms may be described in the DPA and relevant contract schedules.</p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">11. Data Retention</h2>
              <p className="mb-4">11.1 Apolast retains personal data only for as long as necessary for the purposes for which it was collected, taking into account:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) contractual obligations and limitations periods;</li>
                <li>b) statutory retention requirements (e.g. accounting and tax);</li>
                <li>c) the need to preserve evidence for legal claims.</li>
              </ul>
              <p>11.2 After expiry of the retention period, personal data is deleted or irreversibly anonymised, unless further retention is required by law.</p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">12. Data Subject Rights</h2>
              <p className="mb-4">12.1 Under GDPR and applicable data protection laws, individuals whose personal data Apolast processes may have the following rights (subject to conditions):</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) right to be informed;</li>
                <li>b) right of access;</li>
                <li>c) right to rectification;</li>
                <li>d) right to erasure;</li>
                <li>e) right to restriction of processing;</li>
                <li>f) right to data portability;</li>
                <li>g) right to object to processing based on legitimate interests or direct marketing;</li>
                <li>h) rights related to automated decision‑making and profiling, where applicable.</li>
              </ul>
              <p>12.2 Requests to exercise these rights can be submitted using the contact details provided in contracts or on Apolast’s website. Apolast will respond within the time limits set by law, typically one month.</p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">13. Security Measures</h2>
              <p className="mb-4">13.1 Apolast implements appropriate technical and organisational measures to protect personal data, including:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) role‑based access controls;</li>
                <li>b) secure development and deployment practices;</li>
                <li>c) encryption in transit and at rest where proportionate;</li>
                <li>d) logging and monitoring of security‑relevant events;</li>
                <li>e) staff training and confidentiality undertakings.</li>
              </ul>
              <p>13.2 For Customers subject to DORA and NIS2, Apolast’s contractual commitments and documentation can assist in vendor and supply‑chain risk assessments.</p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">14. Cookies and Online Tracking</h2>
              <p className="mb-4">14.1 Apolast’s websites may use cookies and similar technologies to:</p>
              <ul className="list-none space-y-3 pl-4 mb-4">
                <li>a) enable core site functionality and security;</li>
                <li>b) collect aggregate analytics and performance data;</li>
                <li>c) support limited marketing activities.</li>
              </ul>
              <p>14.2 Where required by law, consent will be obtained via a cookie banner or preference center, and users can manage cookie settings or use browser controls to block or delete cookies.</p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">15. Changes to this Privacy Policy</h2>
              <p className="mb-4">15.1 Apolast may update this Privacy Policy to reflect changes in laws, services or processing activities. The current version will be published on Apolast’s website with the effective date indicated.</p>
              <p>15.2 Where changes are significant, Apolast may notify Customers via appropriate channels (e.g. email or customer portals).</p>
            </div>

            {/* 16 */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-4">16. Contact and Complaints</h2>
              <p className="mb-4">16.1 For questions about this Privacy Policy or Apolast’s data protection practices, individuals may contact Apolast using the contact information provided in contracts and on the website.</p>
              <p>16.2 Data subjects have the right to lodge a complaint with their local data protection authority if they believe their rights have been infringed.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
