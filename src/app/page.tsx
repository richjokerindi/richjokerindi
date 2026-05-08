"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function LandingPage() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [heroLineIndex, setHeroLineIndex] = useState(0);
  const [heroLinePhase, setHeroLinePhase] = useState<"in" | "out" | "prep">("in");
  const liveCards = useMemo(
    () => [
      {
        market: "XAUUSD",
        status: "THE MOVE CLOSED @ TP2",
        entry: "2364.20",
        target: "2378.40",
        result: "+142.0 PIPS",
      },
      {
        market: "XAUUSD",
        status: "THE MOVE ACTIVE",
        entry: "2381.50",
        target: "2390.00",
        result: "Awaiting confirmation",
      },
      {
        market: "XAUUSD",
        status: "THE PLAY LOGGED",
        entry: "2352.70",
        target: "2361.20",
        result: "+85.0 PIPS",
      },
    ],
    [],
  );
  const heroLines = useMemo(
    () => [
      "Beat the emotions.",
      "Master the impulse.",
      "Discipline beats drama.",
      "Control the risk.",
      "Keep your move.",
    ],
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroLinePhase("out");
      setTimeout(() => {
        setHeroLineIndex((prev) => (prev + 1) % heroLines.length);
        setHeroLinePhase("prep");
        requestAnimationFrame(() => setHeroLinePhase("in"));
      }, 260);
    }, 2500);
    return () => clearInterval(interval);
  }, [heroLines.length]);

  return (
    <main className="min-h-screen bg-[#08060d] text-[#c0c0c0]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(48,25,52,0.6),transparent_38%),radial-gradient(circle_at_86%_10%,rgba(212,175,55,0.14),transparent_35%),linear-gradient(145deg,#08060d_0%,#120d1a_52%,#050308_100%)]" />

      <header className="sticky top-0 z-50 border-b border-[#d4af37]/20 bg-[#0c0912]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden">
              {!logoFailed ? (
                <Image
                  src="/rji-logo-official.png"
                  alt="RICH JOKEY INDI Logo"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain mix-blend-screen drop-shadow-[0_0_14px_rgba(0,168,107,0.2)]"
                  onError={() => setLogoFailed(true)}
                  priority
                />
              ) : (
                <span className="text-base font-black tracking-tight text-[#d4af37]">RJ</span>
              )}
            </div>
            <div>
              <p className="text-xl font-black tracking-tight text-[#d4af37]">RICH JOKEY <span className="text-[#00a86b]">INDI</span></p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#c0c0c0]/65">The Market is a Joke, if you don't have the Edge.</p>
            </div>
          </div>

          <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#c0c0c0]/70 md:flex">
            <a href="#signals" className="hover:text-[#d4af37]">The Move</a>
            <a href="#edge" className="hover:text-[#d4af37]">The Edge</a>
            <a href="#pricing" className="hover:text-[#d4af37]">Access</a>
          </nav>

          <Link href="/access" className="rounded-xl border border-[#d4af37]/40 bg-[#301934] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d4af37] hover:bg-[#3f2146]">
            Secure Access
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center">
        <div className="mb-7 flex justify-center">
          <div className="p-1">
            <Image
              src="/rji-logo-official.png"
              alt="RICH JOKEY INDI Crest"
              width={272}
              height={272}
              className="rji-heartbeat h-52 w-52 object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(0,168,107,0.24)] md:h-64 md:w-64"
              priority
            />
          </div>
        </div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00a86b]/45 bg-[#0f1a15]/70 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#00a86b]">
          <span className="h-2 w-2 rounded-full bg-[#00a86b] shadow-[0_0_12px_rgba(0,168,107,0.9)]" />
          Institutional Feed Active
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl leading-tight text-[#f2f2f2] md:text-7xl">
          <span className="block">Don&apos;t play the game,</span>
          <span className="block h-[1.35em] overflow-hidden">
            <span
              className={`block text-[#d4af37] transition-all duration-300 ${
                heroLinePhase === "out"
                  ? "translate-y-6 opacity-0"
                  : heroLinePhase === "prep"
                    ? "-translate-y-6 opacity-0"
                    : "translate-y-0 opacity-100"
              }`}
            >
              {heroLines[heroLineIndex]}
            </span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#c0c0c0]/80 md:text-xl">
          RICH JOKEY INDI delivers precision gold signals with disciplined risk parameters. Fast entry intelligence, clear The Play structure, and measurable execution logs.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/access" className="rounded-2xl bg-[#d4af37] px-10 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-[#171717] hover:brightness-105">
            Enter The Inner Circle
          </Link>
          <a href="#signals" className="rounded-2xl border border-[#c0c0c0]/25 bg-[#14121a] px-10 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#c0c0c0] hover:border-[#d4af37]/55 hover:text-[#d4af37]">
            View Live Board
          </a>
        </div>
      </section>

      <section id="signals" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl text-[#f4f4f4]">Live The Move Board</h2>
            <p className="text-sm text-[#c0c0c0]/70">Professional signal stream for XAUUSD execution windows.</p>
          </div>
          <div className="rounded-xl border border-[#d4af37]/35 bg-[#16111f] px-4 py-2 text-right">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#c0c0c0]/60">Hit Precision</p>
            <p className="text-2xl font-extrabold text-[#d4af37]">96.3%</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {liveCards.map((card) => (
            <article key={`${card.market}-${card.entry}`} className="exec-card rounded-3xl border border-[#00a86b]/35 bg-[#121019]/90 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-lg font-black tracking-[0.08em] text-[#f2f2f2]">{card.market}</p>
                <span className="rounded-full border border-[#00a86b]/45 bg-[#0d1814] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#00a86b]">{card.status}</span>
              </div>
              <div className="space-y-2 text-sm text-[#c0c0c0]/80">
                <div className="flex justify-between"><span>Entry</span><span className="font-mono text-[#f2f2f2]">{card.entry}</span></div>
                <div className="flex justify-between"><span>Target</span><span className="font-mono text-[#f2f2f2]">{card.target}</span></div>
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-[#d4af37]">{card.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="edge" className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-4xl text-[#f4f4f4]">The Edge Protocol</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#c0c0c0]/80">
            Built for traders who value speed and structure over noise. We communicate with data, not hype.
          </p>
          <div className="mt-7 space-y-6">
            <div className="rounded-2xl border border-[#d4af37]/25 bg-[#16111f]/80 p-5">
              <h3 className="text-lg font-bold text-[#d4af37]">Agile Entry Intelligence</h3>
              <p className="mt-1 text-sm text-[#c0c0c0]/80">The Move is pushed immediately after confirmation. Time is money, execution delay is cost.</p>
            </div>
            <div className="rounded-2xl border border-[#d4af37]/25 bg-[#16111f]/80 p-5">
              <h3 className="text-lg font-bold text-[#d4af37]">Disciplined Risk Framework</h3>
              <p className="mt-1 text-sm text-[#c0c0c0]/80">Every setup includes Entry, TP stack, and SL boundary. Confidence comes from process, not emotion.</p>
            </div>
            <div className="rounded-2xl border border-[#d4af37]/25 bg-[#16111f]/80 p-5">
              <h3 className="text-lg font-bold text-[#d4af37]">Elite Access Layer</h3>
              <p className="mt-1 text-sm text-[#c0c0c0]/80">Private environment for members focused on results, consistency, and performance review.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#00a86b]/35 bg-gradient-to-b from-[#15121d] to-[#0c1010] p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00a86b]">Execution Snapshot</p>
          <h3 className="mt-2 text-3xl text-[#f4f4f4]">Professional. Direct. Trusted.</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#c0c0c0]/20 bg-[#11141a] p-4">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#c0c0c0]/65">Average Signal Delay</p>
              <p className="mt-1 text-2xl font-bold text-[#d4af37]">&lt; 1.2s</p>
            </div>
            <div className="rounded-xl border border-[#c0c0c0]/20 bg-[#11141a] p-4">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#c0c0c0]/65">Risk Template</p>
              <p className="mt-1 text-2xl font-bold text-[#d4af37]">1:2.6</p>
            </div>
            <div className="rounded-xl border border-[#c0c0c0]/20 bg-[#11141a] p-4">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#c0c0c0]/65">Focus Market</p>
              <p className="mt-1 text-2xl font-bold text-[#d4af37]">XAUUSD</p>
            </div>
            <div className="rounded-xl border border-[#c0c0c0]/20 bg-[#11141a] p-4">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#c0c0c0]/65">Monitoring Cycle</p>
              <p className="mt-1 text-2xl font-bold text-[#d4af37]">24/5</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-4xl text-[#f4f4f4]">Membership Access</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#c0c0c0]/75">Structured plans for serious traders who want speed, clarity, and a repeatable edge.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { name: "7 Days", price: "99 USD", note: "Trial speed cycle" },
            { name: "15 Days", price: "199 USD", note: "Balanced execution" },
            { name: "30 Days", price: "249 USD", note: "Full inner circle" },
          ].map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-[#d4af37]/30 bg-[#14111b] p-7">
              <p className="text-xs uppercase tracking-[0.14em] text-[#00a86b]">{plan.note}</p>
              <h3 className="mt-2 text-2xl font-bold text-[#f4f4f4]">{plan.name}</h3>
              <p className="mt-3 text-4xl font-black text-[#d4af37]">{plan.price}</p>
              <Link href="/access" className="mt-6 inline-block rounded-xl bg-[#301934] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d4af37] hover:bg-[#43224a]">
                Activate Plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/15 px-6 py-10 text-center text-xs text-[#c0c0c0]/60">
        <p>(C) 2026 RICH JOKEY INDI. Financial Signals.</p>
        <p className="mx-auto mt-2 max-w-3xl">Risk Warning: Trading carries risk. Past performance does not guarantee future results. Always apply disciplined risk management.</p>
      </footer>
    </main>
  );
}
