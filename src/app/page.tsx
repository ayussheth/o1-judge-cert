import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-primary)] mb-4">
              Danveer Technologies &middot; Visa Partnership Program
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-tight mb-6">
              O1 Visa Judge Sponsorship Program
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Evaluate cutting-edge projects and earn O1 visa sponsorship through demonstrated expertise in technology assessment.
            </p>
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <Link
                href="/register"
                className="btn-primary text-base py-3.5 px-8 w-full"
              >
                Apply as Judge
              </Link>
              <div className="flex flex-col items-center gap-2 mt-1">
                <a
                  href="#program"
                  className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  View Program Details &darr;
                </a>
                <a
                  href="#stories"
                  className="text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                >
                  See Success Stories &darr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-gray-100 py-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-[var(--color-primary)]">
                2,400+
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Judges sponsored since 2022
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--color-primary)]">
                98%
              </p>
              <p className="text-sm text-gray-500 mt-1">
                I-140 approval rate
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--color-primary)]">
                14 days
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Average processing time
              </p>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="program" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3 text-center">
              How the Program Works
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
              A straightforward path from hackathon evaluation to O1 visa
              eligibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-minimal">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                  Apply &amp; Get Verified
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Submit your credentials. Our team reviews your background
                  against USCIS extraordinary ability criteria within 48 hours.
                </p>
              </div>
              <div className="card-minimal">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                  Judge Hackathon Projects
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Evaluate submissions from top-tier hackathons. Your scores
                  directly contribute to your portfolio of institutional
                  recognition.
                </p>
              </div>
              <div className="card-minimal">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[var(--color-primary)] flex items-center justify-center font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">
                  Receive Sponsorship
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Upon completing your judging commitment, receive your I-140
                  labor certification and O1 visa sponsorship package.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="stories" className="border-y border-gray-100 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-10 text-center">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-minimal">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  &ldquo;I was skeptical at first, but the Danveer team walked
                  me through every step. I received my O1 approval in just 12
                  days after judging.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--color-navy)] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    AP
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-navy)]">
                      Arjun Patel
                    </p>
                    <p className="text-xs text-gray-400">
                      ML Engineer, ex-Google
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-minimal">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  &ldquo;The judging experience itself was valuable. Building an
                  O1 case around it was the bonus I didn&apos;t expect.
                  Genuinely grateful.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    SK
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-navy)]">
                      Sofia Kowalski
                    </p>
                    <p className="text-xs text-gray-400">
                      Product Designer, Figma
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-minimal">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  &ldquo;Genuinely remarkable program. The judging work was
                  fulfilling, and the visa sponsorship came through faster than
                  expected. Would definitely recommend.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[var(--color-navy-light)] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    SS
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-navy)]">
                      Sonal Shrivastava
                    </p>
                    <p className="text-xs text-gray-400">
                      Product Manager, Sequoia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">
            Ready to Begin?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Applications are reviewed on a rolling basis. Expiry: April 2, 2026.
          </p>
          <Link href="/register" className="btn-primary text-base py-3 px-8">
            Apply as Judge
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
