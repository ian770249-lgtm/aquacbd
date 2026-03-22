"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to email service (Mailchimp / Klaviyo)
    setSubmitted(true);
  };

  return (
    <>
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: "#1b4332" }}>
              Aqua
            </span>
            <span
              className="text-2xl font-bold"
              style={{ color: "#48cae4" }}
            >
              CBD
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#why-water-soluble" className="hover:text-gray-900 transition-colors">
              Why Water Soluble
            </a>
            <a href="#colorado" className="hover:text-gray-900 transition-colors">
              Our Source
            </a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">
              FAQ
            </a>
          </nav>
          <a
            href="#waitlist"
            className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-colors"
            style={{ backgroundColor: "#1b4332" }}
          >
            Join Waitlist
          </a>
        </div>
      </header>

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #48cae4 100%)" }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 text-white">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#48cae4] animate-pulse" />
                Coming Soon — Join the Waitlist
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                CBD That Your Body{" "}
                <span style={{ color: "#48cae4" }}>Actually Absorbs</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Most CBD oil passes straight through you. AquaCBD is water soluble —
                meaning up to <strong className="text-white">5× more bioavailable</strong> than
                standard oil-based CBD. Sourced from Colorado, 99.9% pure, certified
                to the highest standards on the planet.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md" id="waitlist">
                {submitted ? (
                  <div className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white font-medium text-center">
                    ✓ You&apos;re on the list — we&apos;ll be in touch!
                  </div>
                ) : (
                  <>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/15"
                    />
                    <button
                      type="submit"
                      className="font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
                      style={{ backgroundColor: "#48cae4", color: "#1b4332" }}
                    >
                      Notify Me
                    </button>
                  </>
                )}
              </form>
              <p className="mt-3 text-sm text-white/50">
                No spam. We&apos;ll let you know when we launch, that&apos;s it.
              </p>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="border-b border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-lg">🌿</span> 99.9% Pure CBD Isolate
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🏔️</span> Colorado Certified
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🧪</span> Lab Tested — Pesticides, Heavy Metals & Mould
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💧</span> Up to 5× More Bioavailable Than Oil
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🇬🇧</span> Shipping to the UK
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY WATER SOLUBLE ── */}
        <section id="why-water-soluble" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1b4332" }}>
                Why Water Soluble CBD is Different
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                The science is simple. Your body is mostly water. Oil and water don&apos;t mix.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-red-100 bg-red-50">
                  <h3 className="font-bold text-lg text-red-800 mb-2">❌ CBD Oil (What Most Brands Sell)</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    Oil doesn&apos;t dissolve in water — and your bloodstream is mostly water.
                    Studies show that standard CBD oil has a bioavailability of just{" "}
                    <strong>6–19%</strong>. The rest is excreted without ever reaching your system.
                    You&apos;re literally flushing most of your money away.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-green-100" style={{ backgroundColor: "#f0faf4" }}>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#1b4332" }}>
                    ✓ AquaCBD — Water Soluble
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Using advanced nano-emulsification technology, our CBD is broken into
                    microscopic particles that mix seamlessly with water — and with your body.
                    Bioavailability reaches up to <strong>90%</strong>. You feel the difference.
                    Faster onset, more consistent effects, lower doses needed.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="font-semibold text-gray-700 mb-6 text-center">Bioavailability Comparison</h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">AquaCBD (Water Soluble)</span>
                      <span className="font-bold" style={{ color: "#1b4332" }}>up to 90%</span>
                    </div>
                    <div className="h-4 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: "90%", backgroundColor: "#2d6a4f" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Standard CBD Oil</span>
                      <span className="font-bold text-red-500">6–19%</span>
                    </div>
                    <div className="h-4 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full bg-red-400" style={{ width: "13%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">CBD Capsules</span>
                      <span className="font-bold text-orange-500">~20%</span>
                    </div>
                    <div className="h-4 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full bg-orange-400" style={{ width: "20%" }} />
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    * Bioavailability figures based on published peer-reviewed research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PURITY ── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#f0faf4" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1b4332" }}>
                Purity That Most Brands Can&apos;t Match
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                There is a difference between 97% and 99.9% — and it matters.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="text-5xl font-bold mb-2" style={{ color: "#48cae4" }}>99.9%</div>
                <div className="font-semibold text-gray-800 mb-3">CBD Purity</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Most UK retailers — including major health shops — sell products derived from
                  97% CBD isolate. Ours is 99.9%. That extra 2.9% isn&apos;t trivial when you&apos;re
                  putting something in your body every day.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="text-5xl font-bold mb-2" style={{ color: "#48cae4" }}>Zero</div>
                <div className="font-semibold text-gray-800 mb-3">Pesticides & Heavy Metals</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every batch is independently lab tested for pesticides, heavy metals, residual
                  solvents, and mould. Certificates of Analysis available for every product.
                  No excuses, no shortcuts.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="text-5xl font-bold mb-2" style={{ color: "#48cae4" }}>0.0%</div>
                <div className="font-semibold text-gray-800 mb-3">THC</div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Fully compliant with UK law. Our isolate contains zero detectable THC —
                  confirmed by third-party lab testing. Safe, legal, and effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── COLORADO ── */}
        <section id="colorado" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4" style={{ backgroundColor: "#e8f5e9", color: "#1b4332" }}>
                  🏔️ Source Matters
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1b4332" }}>
                  Why We Source Exclusively from Colorado
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Colorado was the <strong className="text-gray-900">first US state to legalise cannabis</strong> —
                    and with that came the most rigorous regulatory framework in the world.
                    A decade of refinement has produced standards that most jurisdictions are
                    still catching up to.
                  </p>
                  <p>
                    Colorado hemp farmers operate under strict licensing, mandatory testing,
                    and a traceability system that follows every plant from seed to extract.
                    When you buy AquaCBD, you can trace your product back to its source.
                  </p>
                  <p>
                    The result: CBD that is <strong className="text-gray-900">cleaner, purer, and more consistent</strong> than
                    anything produced in less regulated markets.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📋", title: "Licensed Growers", desc: "Every farm is state-licensed and annually inspected" },
                  { icon: "🔬", title: "Mandatory Lab Testing", desc: "Required by law at multiple stages of production" },
                  { icon: "🌱", title: "Seed-to-Shelf Traceability", desc: "Full chain of custody from plant to product" },
                  { icon: "🏅", title: "Certified Processors", desc: "Colorado&apos;s central processors meet pharmaceutical-grade standards" },
                ].map((item) => (
                  <div key={item.title} className="bg-gray-50 rounded-2xl p-5">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-800 text-sm mb-1">{item.title}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#1b4332" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-white/70 text-lg mb-14 max-w-xl mx-auto">
              Add AquaCBD to any drink. It mixes instantly. Your body absorbs it fast.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Add to Any Drink", desc: "A few drops into water, coffee, juice — anything. No oily residue, no taste." },
                { step: "02", title: "Mixes Instantly", desc: "Unlike CBD oil, AquaCBD fully dissolves. No floating oil layer. No waste." },
                { step: "03", title: "Absorbs Fast", desc: "Water soluble CBD enters your bloodstream significantly faster than oil. You feel it working." },
              ].map((item) => (
                <div key={item.step} className="text-left p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                  <div className="text-4xl font-bold mb-4" style={{ color: "#48cae4" }}>{item.step}</div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1b4332" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "Is water soluble CBD legal in the UK?",
                  a: "Yes. AquaCBD contains zero detectable THC and is fully compliant with UK law. CBD is a legal food supplement in the UK when it contains less than 0.2% THC — ours contains none.",
                },
                {
                  q: "What is the difference between water soluble CBD and CBD oil?",
                  a: "CBD oil is fat-soluble, meaning it doesn't mix with water — and your body is mostly water. This severely limits how much your body can absorb. Water soluble CBD uses nano-emulsification to break CBD into tiny particles that mix with water and are absorbed far more efficiently, with bioavailability up to 90% vs 6–19% for oil.",
                },
                {
                  q: "Why is 99.9% purity important?",
                  a: "The higher the purity, the less room there is for impurities, residual solvents, or unwanted compounds. Most CBD isolate sold in the UK is 97% pure — the remaining 3% can include contaminants. Our 99.9% isolate leaves almost no margin for anything other than pure CBD.",
                },
                {
                  q: "Why is Colorado-sourced CBD better?",
                  a: "Colorado was the first US state to legalise cannabis and has spent over a decade refining its regulatory framework. Colorado CBD producers face mandatory licensing, annual inspections, and multi-stage lab testing that far exceeds what is required in most other jurisdictions — including many EU countries.",
                },
                {
                  q: "How do I use water soluble CBD?",
                  a: "Simply add a few drops to any drink — water, coffee, juice, a smoothie. It dissolves completely with no oily residue or taste. Start with a low dose and adjust to what works for you.",
                },
                {
                  q: "When will AquaCBD be available?",
                  a: "We are finalising our import process and product range. Join our waitlist and you'll be the first to know — and first to access launch pricing.",
                },
              ].map((item) => (
                <div key={item.q} className="border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECOND CTA ── */}
        <section className="py-20 md:py-28" style={{ backgroundColor: "#f0faf4" }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1b4332" }}>
              Be First in Line
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              We&apos;re almost ready. Join the waitlist and get early access, launch pricing,
              and updates as we get closer to going live.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              {submitted ? (
                <div className="flex-1 border border-green-200 rounded-full px-6 py-3 font-medium text-center" style={{ color: "#1b4332", backgroundColor: "#e8f5e9" }}>
                  ✓ You&apos;re on the list!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:border-green-500 text-gray-900"
                  />
                  <button
                    type="submit"
                    className="font-semibold px-6 py-3 rounded-full text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                    style={{ backgroundColor: "#1b4332" }}
                  >
                    Join Waitlist
                  </button>
                </>
              )}
            </form>
          </div>
        </section>

        {/* ── LEGAL DISCLAIMER ── */}
        <section className="py-6 border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs text-gray-400 text-center leading-relaxed max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> AquaCBD products are food supplements and are not intended to diagnose,
              treat, cure, or prevent any disease or medical condition. The statements on this website have not
              been evaluated by the MHRA. Consult your doctor before use if you are pregnant, nursing, taking
              medication, or have a medical condition. Keep out of reach of children.
            </p>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#1b4332" }} className="text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-xl font-bold mb-1">
                <span>Aqua</span>
                <span style={{ color: "#48cae4" }}>CBD</span>
              </div>
              <p className="text-white/50 text-sm">Premium water soluble CBD. Coming soon to the UK.</p>
            </div>
            <div className="text-white/40 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} AquaCBD. All rights reserved.</p>
              <p className="mt-1">
                <a href="mailto:hello@watersolublecbd.co.uk" className="hover:text-white/70 transition-colors">
                  hello@watersolublecbd.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
