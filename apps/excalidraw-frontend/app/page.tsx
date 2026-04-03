import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      style={{
        fontFamily: "'Georgia', serif",
        background: "#F5F0E8",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        * { box-sizing: border-box; }

        .trace-root {
          font-family: 'DM Mono', monospace;
          background: #F5F0E8;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Paper grain overlay */
        .trace-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 100;
          opacity: 0.6;
        }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 48px;
          z-index: 50;
          mix-blend-mode: multiply;
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 900;
          font-style: italic;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 36px;
          align-items: center;
        }

        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          transition: color 0.15s;
        }

        .nav-link:hover { color: #1a1a1a; }

        .nav-cta {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: #1a1a1a;
          color: #F5F0E8;
          padding: 9px 20px;
          border: none;
          cursor: pointer;
          transition: background 0.15s;
        }

        .nav-cta:hover { background: #333; }

        /* Hero */
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          padding-top: 80px;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 48px 80px 72px;
          position: relative;
        }

        .hero-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-tag::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #888;
        }

        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(60px, 7vw, 100px);
          font-weight: 900;
          line-height: 0.92;
          color: #1a1a1a;
          letter-spacing: -2px;
          margin: 0 0 12px 0;
        }

        .hero-headline em {
          font-style: italic;
          font-weight: 400;
          color: #555;
        }

        .hero-subline {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          line-height: 1.8;
          color: #666;
          max-width: 380px;
          margin: 32px 0 52px 0;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .btn-primary {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: #1a1a1a;
          color: #F5F0E8;
          padding: 14px 32px;
          border: 2px solid #1a1a1a;
          cursor: pointer;
          transition: all 0.15s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          background: transparent;
          color: #1a1a1a;
        }

        .btn-ghost {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.15s;
        }

        .btn-ghost:hover { color: #1a1a1a; }

        /* Hero right - canvas illustration */
        .hero-right {
          position: relative;
          border-left: 1px solid #d8d0c4;
          overflow: hidden;
        }

        .canvas-area {
          position: absolute;
          inset: 0;
          background: #FDFAF4;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .canvas-illustration {
          width: 100%;
          height: 100%;
          position: relative;
        }

        /* Decorative cross-hatch corner */
        .corner-mark {
          position: absolute;
          width: 40px;
          height: 40px;
        }

        .corner-mark.tl { top: 24px; left: 24px; border-top: 1px solid #c8c0b4; border-left: 1px solid #c8c0b4; }
        .corner-mark.tr { top: 24px; right: 24px; border-top: 1px solid #c8c0b4; border-right: 1px solid #c8c0b4; }
        .corner-mark.bl { bottom: 24px; left: 24px; border-bottom: 1px solid #c8c0b4; border-left: 1px solid #c8c0b4; }
        .corner-mark.br { bottom: 24px; right: 24px; border-bottom: 1px solid #c8c0b4; border-right: 1px solid #c8c0b4; }

        /* Floating user cursors */
        .cursor-float {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          animation: drift linear infinite;
          pointer-events: none;
        }

        .cursor-float svg {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }

        .cursor-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          padding: 3px 8px;
          white-space: nowrap;
          letter-spacing: 0.05em;
        }

        @keyframes drift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(8px, -12px); }
          50% { transform: translate(-6px, 4px); }
          75% { transform: translate(10px, 10px); }
          100% { transform: translate(0, 0); }
        }

        /* Sketched lines on canvas */
        .sketch-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* Bottom strip */
        .bottom-strip {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          border-top: 1px solid #d8d0c4;
          padding: 14px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #F5F0E8;
          z-index: 40;
        }

        .strip-item {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999;
        }

        .strip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4CAF50;
          display: inline-block;
          margin-right: 8px;
          vertical-align: middle;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Feature row */
        .feature-row {
          display: flex;
          gap: 0;
          border-top: 1px solid #d8d0c4;
          margin-top: 80px;
        }

        .feature-item {
          flex: 1;
          padding: 32px 24px;
          border-right: 1px solid #d8d0c4;
        }

        .feature-item:last-child { border-right: none; }

        .feature-num {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #bbb;
          margin-bottom: 12px;
        }

        .feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          font-style: italic;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .feature-desc {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: #888;
          line-height: 1.7;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; }
          .hero-right { display: none; }
          .hero-left { padding: 60px 32px; }
          .nav { padding: 24px 32px; }
          .feature-row { flex-direction: column; }
          .feature-item { border-right: none; border-bottom: 1px solid #d8d0c4; }
        }
      `}</style>

      <div className="trace-root">
        {/* Nav */}
        <nav className="nav">
          <Link href="/" className="nav-logo">trace</Link>
          <div className="nav-links">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="/signin" className="nav-cta">Sign in</a>
          </div>
        </nav>

        {/* Hero */}
        <main className="hero">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-tag">Collaborative drawing</div>

            <h1 className="hero-headline">
              Draw<br />
              <em>together,</em><br />
              think<br />
              out loud.
            </h1>

            <p className="hero-subline">
              A shared canvas for teams who think visually.
              No decks, no docs — just lines, shapes, and the people you work with.
            </p>

            <div className="hero-actions">
              <a href="/signup" className="btn-primary">Start drawing</a>
              <button className="btn-ghost">See how it works</button>
            </div>

            {/* Features */}
            <div className="feature-row">
              {[
                { num: "01", title: "Real-time", desc: "See every stroke as it happens." },
                { num: "02", title: "Freeform", desc: "No templates. No constraints." },
                { num: "03", title: "Yours", desc: "Export, embed, share." },
              ].map((f) => (
                <div className="feature-item" key={f.num}>
                  <div className="feature-num">{f.num}</div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — canvas preview */}
          <div className="hero-right">
            <div className="canvas-area">
              <div className="corner-mark tl" />
              <div className="corner-mark tr" />
              <div className="corner-mark bl" />
              <div className="corner-mark br" />

              {/* Sketched illustration */}
              <svg className="sketch-svg" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
                {/* Background rule lines */}
                {[120, 200, 280, 360, 440, 520].map((y) => (
                  <line key={y} x1="60" y1={y} x2="540" y2={y} stroke="#E8E2D8" strokeWidth="0.5" />
                ))}

                {/* Sketched rectangle - wireframe */}
                <rect x="80" y="140" width="220" height="140" fill="none" stroke="#c8b89a" strokeWidth="1.5" strokeDasharray="none" />
                <line x1="80" y1="170" x2="300" y2="170" stroke="#c8b89a" strokeWidth="1" />
                <circle cx="96" cy="155" r="5" fill="none" stroke="#c8b89a" strokeWidth="1" />
                <circle cx="112" cy="155" r="5" fill="none" stroke="#c8b89a" strokeWidth="1" />
                <circle cx="128" cy="155" r="5" fill="none" stroke="#c8b89a" strokeWidth="1" />

                {/* Body lines of first box */}
                {[190, 205, 220, 235].map((y) => (
                  <line key={y} x1="96" y1={y} x2={y === 235 ? 200 : 284} y2={y} stroke="#d4c9b8" strokeWidth="1" />
                ))}

                {/* Second sketched box */}
                <rect x="340" y="200" width="180" height="120" fill="none" stroke="#b8a888" strokeWidth="1.5" />
                <rect x="355" y="220" width="60" height="60" fill="#EDE8DF" stroke="#c8b89a" strokeWidth="1" />
                {/* Image placeholder x */}
                <line x1="355" y1="220" x2="415" y2="280" stroke="#c8b89a" strokeWidth="0.8" />
                <line x1="415" y1="220" x2="355" y2="280" stroke="#c8b89a" strokeWidth="0.8" />
                {[235, 248, 261].map((y) => (
                  <line key={y} x1="428" y1={y} x2={y === 261 ? 470 : 505} y2={y} stroke="#d4c9b8" strokeWidth="1" />
                ))}

                {/* Freehand scribble arrow */}
                <path d="M300 210 C310 205, 325 202, 338 205" fill="none" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M334 200 L340 205 L333 210" fill="none" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Sticky note */}
                <rect x="90" y="340" width="130" height="100" fill="#F5E6C8" stroke="#D4B878" strokeWidth="1" />
                <line x1="90" y1="340" x2="220" y2="340" stroke="#C4A858" strokeWidth="2" />
                <text x="100" y="362" fontFamily="DM Mono, monospace" fontSize="9" fill="#8B7355">consider:</text>
                <text x="100" y="378" fontFamily="DM Mono, monospace" fontSize="9" fill="#6B5335">— snap to grid</text>
                <text x="100" y="393" fontFamily="DM Mono, monospace" fontSize="9" fill="#6B5335">— pen pressure</text>
                <text x="100" y="408" fontFamily="DM Mono, monospace" fontSize="9" fill="#6B5335">— layer system</text>
                {/* Sticky fold */}
                <path d="M204 440 L220 440 L220 424 Z" fill="#D4B878" />

                {/* Hand-drawn circle */}
                <path d="M380 380 C382 355, 410 345, 430 350 C455 356, 465 375, 460 398 C454 420, 432 432, 410 428 C385 422, 374 405, 380 380 Z" fill="none" stroke="#8B7355" strokeWidth="1.5" />
                <text x="405" y="391" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" fill="#6B5335" textAnchor="middle">user</text>
                <text x="405" y="406" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" fill="#6B5335" textAnchor="middle">flow</text>

                {/* Dotted connector lines */}
                <line x1="220" y1="390" x2="378" y2="388" stroke="#bbb" strokeWidth="1" strokeDasharray="4 4" />

                {/* Small annotation */}
                <text x="260" y="378" fontFamily="DM Mono, monospace" fontSize="8" fill="#aaa" textAnchor="middle">connects to</text>

                {/* Bottom rough underline text */}
                <text x="90" y="510" fontFamily="Playfair Display, serif" fontSize="28" fontStyle="italic" fontWeight="700" fill="#1a1a1a" opacity="0.08">trace</text>
                <line x1="90" y1="514" x2="222" y2="514" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.1" />
              </svg>

              {/* Floating cursors */}
              <div className="cursor-float" style={{ top: "22%", left: "18%", animationDuration: "7s", animationDelay: "0s" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2 L14 8 L8 10 L6 16 Z" fill="#E85D4A" stroke="#fff" strokeWidth="1" />
                </svg>
                <span className="cursor-label" style={{ background: "#E85D4A", color: "#fff" }}>mara</span>
              </div>

              <div className="cursor-float" style={{ top: "54%", right: "22%", animationDuration: "9s", animationDelay: "-3s" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2 L14 8 L8 10 L6 16 Z" fill="#3D6BE8" stroke="#fff" strokeWidth="1" />
                </svg>
                <span className="cursor-label" style={{ background: "#3D6BE8", color: "#fff" }}>soo</span>
              </div>

              <div className="cursor-float" style={{ bottom: "28%", left: "30%", animationDuration: "11s", animationDelay: "-5s" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2 L14 8 L8 10 L6 16 Z" fill="#2E8B57" stroke="#fff" strokeWidth="1" />
                </svg>
                <span className="cursor-label" style={{ background: "#2E8B57", color: "#fff" }}>rafe</span>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom strip */}
        <div className="bottom-strip">
          <span className="strip-item">
            <span className="strip-dot" />
            12 rooms open now
          </span>
          <span className="strip-item">trace — 2025</span>
          <span className="strip-item">Made for thinkers</span>
        </div>
      </div>
    </div>
  );
}