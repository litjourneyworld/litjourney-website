"use client";

import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-[120px] pb-20 px-6 md:px-12 bg-black border-t-[3px] border-green">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-green uppercase mb-8">
          Lit Journey · Partner Deck · 2026
        </p>
        <h1 className="font-playfair leading-[1.05] mb-7">
          <span className="block text-[clamp(60px,9vw,110px)] font-extrabold text-white">Light Up</span>
          <span className="block text-[clamp(60px,9vw,110px)] font-bold italic text-green">Every Journey.</span>
        </h1>
        <p className="text-base font-normal text-muted max-w-[480px] leading-[1.7] mb-12">
          Your trusted gateway to European markets — full-cycle distribution for AI and innovative consumer brands.
        </p>
        <div className="flex gap-4 justify-center mb-20">
          <a
            href="#contact"
            className="py-3.5 px-8 bg-green rounded text-sm font-semibold text-black border-none tracking-[0.03em] transition-colors hover:bg-green-d no-underline"
          >
            Schedule a Call
          </a>
          <button
            type="button"
            className="py-3.5 px-8 bg-transparent rounded text-sm font-semibold text-white border-[1.5px] border-[#444] tracking-[0.03em] transition-colors hover:border-white"
          >
            View Our Portfolio
          </button>
        </div>
        <div className="flex w-full max-w-[640px] border-t border-border pt-10">
          <div className="flex-1 text-center">
            <div className="font-playfair text-5xl font-extrabold text-white leading-none">3</div>
            <div className="text-xs font-medium text-muted mt-1.5 tracking-[0.06em] uppercase">Product Lines</div>
          </div>
          <div className="flex-1 text-center border-l border-border">
            <div className="font-playfair text-5xl font-extrabold text-white leading-none">8+</div>
            <div className="text-xs font-medium text-muted mt-1.5 tracking-[0.06em] uppercase">Partner Brands</div>
          </div>
          <div className="flex-1 text-center border-l border-border">
            <div className="font-playfair text-5xl font-extrabold text-white leading-none">2</div>
            <div className="text-xs font-medium text-muted mt-1.5 tracking-[0.06em] uppercase">EU Warehouses</div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="py-[100px] px-6 md:px-12 bg-light text-black">
        <div className="max-w-[1120px] mx-auto">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase mb-4">Who We Are</p>
            <h2 className="font-playfair text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1]">
              Trusted gateway
              <br />
              to European markets.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mt-14">
            <div className="who-text">
              <p className="text-base leading-[1.8] text-[#444] mt-6 max-w-[420px]">
                Lit Journey is a specialized European distributor focused on outdoor, sports, and innovative consumer
                products — dedicated to bringing cutting-edge Asian brands to European consumers.
              </p>
              <p className="text-base leading-[1.8] text-[#444] mt-4 max-w-[420px]">
                With dual warehouses in Germany and Poland and a team built from OPPO, Ericsson, and Vodafone, we
                don&apos;t just distribute — we build your European brand from the ground up.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white border border-[#e0e0d8] rounded-lg py-5 px-6 flex items-center gap-5">
                <div className="font-playfair text-[42px] font-extrabold text-green min-w-[60px]">3</div>
                <div>
                  <strong className="text-[15px] font-bold text-black block">Product Lines</strong>
                  <span className="text-[13px] text-muted">AI Eyewear · Travel · Outdoor</span>
                </div>
              </div>
              <div className="bg-white border border-[#e0e0d8] rounded-lg py-5 px-6 flex items-center gap-5">
                <div className="font-playfair text-[42px] font-extrabold text-green min-w-[60px]">8+</div>
                <div>
                  <strong className="text-[15px] font-bold text-black block">Partner Brands</strong>
                  <span className="text-[13px] text-muted">Across all categories</span>
                </div>
              </div>
              <div className="bg-white border border-[#e0e0d8] rounded-lg py-5 px-6 flex items-center gap-5">
                <div className="font-playfair text-[42px] font-extrabold text-green min-w-[60px]">2</div>
                <div>
                  <strong className="text-[15px] font-bold text-black block">EU Warehouses</strong>
                  <span className="text-[13px] text-muted">Germany · Poland</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR DIFFERENCE */}
      <section id="services" className="py-[100px] px-6 md:px-12 bg-black">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase mb-4">Our Difference</p>
          <h2 className="font-playfair text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white">
            We don&apos;t stop at Sell-in.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            <div className="bg-card rounded-xl p-9 border-t-[3px] border-[#444]">
              <p className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase mb-5">Traditional Distributor</p>
              <h3 className="font-playfair text-[22px] font-extrabold text-white mb-6">Sell-in only.</h3>
              <div className="space-y-0">
                <div className="flex items-start gap-3 py-2.5 border-b border-border">
                  <span className="text-base mt-0.5 shrink-0">✓</span>
                  <p className="text-sm text-[#bbb] leading-[1.5]">Sell-in — wholesale to retailer</p>
                </div>
                <div className="flex items-start gap-3 py-2.5 border-b border-border">
                  <span className="text-base mt-0.5 shrink-0 text-[#555]">✗</span>
                  <p className="text-sm text-[#bbb] leading-[1.5]">Sell-through — not managed</p>
                </div>
                <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-none">
                  <span className="text-base mt-0.5 shrink-0 text-[#555]">✗</span>
                  <p className="text-sm text-[#bbb] leading-[1.5]">Sell-out — left to retailer alone</p>
                </div>
              </div>
              <div className="mt-7 text-[13px] italic py-4 px-5 rounded-md leading-[1.6] bg-[#222] text-[#777]">
                &quot;We ship it. What happens next is your problem.&quot;
              </div>
            </div>
            <div className="bg-card rounded-xl p-9 border-t-[3px] border-green">
              <p className="text-[11px] font-bold tracking-[0.16em] text-green uppercase mb-5">Lit Journey</p>
              <h3 className="font-playfair text-[22px] font-extrabold text-white mb-6">Full-cycle partner.</h3>
              <div className="space-y-0">
                <div className="flex items-start gap-3 py-2.5 border-b border-border">
                  <span className="text-base mt-0.5 shrink-0 text-green">✓</span>
                  <p className="text-sm text-[#bbb] leading-[1.5]">Sell-in — wholesale to retailer</p>
                </div>
                <div className="flex items-start gap-3 py-2.5 border-b border-border">
                  <span className="text-base mt-0.5 shrink-0 text-green">✓</span>
                  <p className="text-sm text-[#bbb] leading-[1.5]">Sell-through — sales training & channel ops</p>
                </div>
                <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-none">
                  <span className="text-base mt-0.5 shrink-0 text-green">✓</span>
                  <p className="text-sm text-[#bbb] leading-[1.5]">Sell-out — in-store experience & consumer sell</p>
                </div>
              </div>
              <div className="mt-7 text-[13px] italic py-4 px-5 rounded-md leading-[1.6] bg-green/10 text-green border border-green/20">
                &quot;We build the retail stage — so your product performs where it matters most.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-[100px] px-6 md:px-12 bg-light text-black">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase mb-4">Product Portfolio</p>
          <h2 className="font-playfair text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1]">
            Three categories.
            <br />
            One trusted partner.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white border border-[#e0e0d8] rounded-xl py-9 px-7 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <div className="text-3xl mb-5">🥽</div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-green uppercase mb-2">AI Eyewear</p>
              <h3 className="font-playfair text-[22px] font-extrabold text-black mb-3">Smart AI Glasses</h3>
              <p className="text-sm leading-[1.7] text-[#666] mb-5">
                Intelligent eyewear combining fashion and technology — our flagship high-margin category driving the
                future of wearables in Europe.
              </p>
              <div className="text-[13px] font-semibold text-green">€89 – €349</div>
              <div className="text-xs text-muted mt-1">RayNeo · Cycling Glasses 318</div>
            </div>
            <div className="bg-white border border-[#e0e0d8] rounded-xl py-9 px-7 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <div className="text-3xl mb-5">🛴</div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-green uppercase mb-2">Travel Equipment</p>
              <h3 className="font-playfair text-[22px] font-extrabold text-black mb-3">Journey Essentials</h3>
              <p className="text-sm leading-[1.7] text-[#666] mb-5">
                E-scooters, SUP boards, and short-trip gear — the traffic-driving category that brings new customers into
                the Lit Journey ecosystem.
              </p>
              <div className="text-[13px] font-semibold text-green">€149 – €699</div>
              <div className="text-xs text-muted mt-1">FireQilin · Beis · SUP Board Freesun</div>
            </div>
            <div className="bg-white border border-[#e0e0d8] rounded-xl py-9 px-7 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <div className="text-3xl mb-5">🏕️</div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-green uppercase mb-2">Outdoor Gear</p>
              <h3 className="font-playfair text-[22px] font-extrabold text-black mb-3">Adventure Ready</h3>
              <p className="text-sm leading-[1.7] text-[#666] mb-5">
                Premium outdoor equipment for Europe&apos;s growing adventure sports market — high repeat-purchase,
                community-driven category.
              </p>
              <div className="text-[13px] font-semibold text-green">€9 – €89</div>
              <div className="text-xs text-muted mt-1">Lee Weiker · Accessories & DIY Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section className="py-[100px] px-6 md:px-12 bg-black">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase mb-4">Market Opportunity</p>
          <h2 className="font-playfair text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white">
            Why now.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="text-center py-9 px-6 bg-card rounded-xl">
              <div className="font-playfair text-5xl font-extrabold text-green leading-none mb-2">€18B+</div>
              <div className="text-[13px] font-semibold text-white mb-2">EU Outdoor & Sports Market</div>
              <div className="text-xs text-muted leading-[1.5]">
                2024 market size across all European consumer categories
              </div>
            </div>
            <div className="text-center py-9 px-6 bg-card rounded-xl">
              <div className="font-playfair text-5xl font-extrabold text-green leading-none mb-2">11%</div>
              <div className="text-[13px] font-semibold text-white mb-2">Annual Growth Rate</div>
              <div className="text-xs text-muted leading-[1.5]">
                Smart Wearables segment CAGR — fastest growing in consumer tech
              </div>
            </div>
            <div className="text-center py-9 px-6 bg-card rounded-xl">
              <div className="font-playfair text-5xl font-extrabold text-green leading-none mb-2">450M+</div>
              <div className="text-[13px] font-semibold text-white mb-2">Addressable Consumers</div>
              <div className="text-xs text-muted leading-[1.5]">
                European consumers actively seeking innovative Asian products
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-[100px] px-6 md:px-12 bg-light text-black">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase mb-4">Why Partner With Us</p>
          <h2 className="font-playfair text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1]">
            What sets us apart.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div className="bg-[#111] rounded-xl py-9 px-7 border-t-2 border-green">
              <p className="font-playfair text-[13px] font-bold text-green tracking-[0.1em] mb-5">01</p>
              <h3 className="text-lg font-bold text-white mb-3">World-Class Team</h3>
              <p className="text-sm leading-[1.7] text-[#999]">
                OPPO Europe, Ericsson, Vodafone — our founders have built and scaled distribution across European
                markets at the highest level.
              </p>
            </div>
            <div className="bg-[#111] rounded-xl py-9 px-7 border-t-2 border-green">
              <p className="font-playfair text-[13px] font-bold text-green tracking-[0.1em] mb-5">02</p>
              <h3 className="text-lg font-bold text-white mb-3">European-Native Ops</h3>
              <p className="text-sm leading-[1.7] text-[#999]">
                Dual warehouse strategy in Germany and Poland. Fast fulfillment, seamless returns, and full EU
                regulatory compliance — built in, not bolted on.
              </p>
            </div>
            <div className="bg-[#111] rounded-xl py-9 px-7 border-t-2 border-green">
              <p className="font-playfair text-[13px] font-bold text-green tracking-[0.1em] mb-5">03</p>
              <h3 className="text-lg font-bold text-white mb-3">High-Growth Focus</h3>
              <p className="text-sm leading-[1.7] text-[#999]">
                Smart AI Glasses, Travel Equipment, Outdoor Gear — three of Europe&apos;s fastest-growing consumer
                categories. We know these markets deeply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="process" className="py-[100px] px-6 md:px-12 bg-black">
        <div className="max-w-[1120px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-green uppercase mb-4">
            How We Work Together
          </p>
          <h2 className="font-playfair text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white">
            From conversation to launch
            <br />
            in four steps.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 sm:gap-8 mt-14 relative">
            <div className="absolute top-7 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-green to-green-d z-0 hidden md:block" />
            <div className="text-center px-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center font-playfair text-lg font-extrabold text-black mx-auto mb-6">
                01
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">Initial Conversation</h3>
              <p className="text-[13px] leading-[1.6] text-[#999]">
                We learn your market, customers, and goals. No pressure — just clarity.
              </p>
            </div>
            <div className="text-center px-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center font-playfair text-lg font-extrabold text-black mx-auto mb-6">
                02
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">Agreement & Setup</h3>
              <p className="text-[13px] leading-[1.6] text-[#999]">
                We define partnership type, territory, and terms. Onboarding in 2–4 weeks.
              </p>
            </div>
            <div className="text-center px-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center font-playfair text-lg font-extrabold text-black mx-auto mb-6">
                03
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">Launch & Support</h3>
              <p className="text-[13px] leading-[1.6] text-[#999]">
                Inventory stocked, marketing assets delivered, first sales push begins.
              </p>
            </div>
            <div className="text-center px-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center font-playfair text-lg font-extrabold text-black mx-auto mb-6">
                04
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">Grow Together</h3>
              <p className="text-[13px] leading-[1.6] text-[#999]">
                Quarterly reviews, new product drops, co-marketing. A genuine long-term partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-green text-center">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-playfair text-[clamp(28px,4vw,44px)] font-extrabold text-black mb-4">
            Ready to bring your brand into Europe?
          </h2>
          <p className="text-base text-black/60 mb-10">
            Schedule a 30-minute intro call and receive a tailored proposal within 5 days.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mb-10">
            <a
              href="mailto:info@litjourneyworld.com"
              className="flex items-center gap-2.5 text-[15px] font-semibold text-black no-underline"
            >
              <span className="text-xl">✉</span> info@litjourneyworld.com
            </a>
            <a
              href="tel:+491701522229"
              className="flex items-center gap-2.5 text-[15px] font-semibold text-black no-underline"
            >
              <span className="text-xl">📞</span> +49 170 1522229
            </a>
            <a
              href="https://litjourneyworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[15px] font-semibold text-black no-underline"
            >
              <span className="text-xl">🌐</span> litjourneyworld.com
            </a>
          </div>
          <a
            href="mailto:info@litjourneyworld.com"
            className="inline-block py-4 px-10 bg-black rounded text-[15px] font-bold text-white no-underline border-none tracking-[0.04em] transition-colors hover:bg-[#222]"
          >
            Schedule a 30-min Call →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-border py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="font-playfair text-base font-extrabold tracking-[0.08em] text-white">
          LIT <span className="text-green">JOURNEY</span>
        </div>
        <p className="text-xs text-muted">© 2026 Lit Journey. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-muted no-underline transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-xs text-muted no-underline transition-colors hover:text-white">
            Terms
          </a>
          <a href="#contact" className="text-xs text-muted no-underline transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );}