"use client";

import { Link } from "lucide-react";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  return (
    <div
      style={{
        fontFamily: "'DM Mono', monospace",
        background: "#F5F0E8",
        minHeight: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        * { box-sizing: border-box; }

        /* Grain */
        .auth-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 100;
          opacity: 0.6;
        }

        /* Left panel */
        .auth-left {
          width: 52%;
          background: #1a1a1a;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px 48px;
          overflow: hidden;
        }

        .auth-left::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.8;
        }

        .left-logo {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 900;
          font-style: italic;
          color: #F5F0E8;
          letter-spacing: -0.5px;
          text-decoration: none;
          position: relative;
          z-index: 2;
        }

        .left-content {
          position: relative;
          z-index: 2;
        }

        .left-quote {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 400;
          font-style: italic;
          color: #F5F0E8;
          line-height: 1.1;
          margin: 0 0 32px 0;
          letter-spacing: -1px;
        }

        .left-quote span {
          color: #8B7355;
        }

        .left-meta {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .left-meta::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #555;
        }

        /* Canvas preview in left panel */
        .left-canvas-preview {
          position: absolute;
          bottom: 120px;
          right: 0;
          width: 55%;
          height: 280px;
          opacity: 0.12;
          pointer-events: none;
        }

        /* Right panel */
        .auth-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 72px;
          position: relative;
        }

        .form-header {
          margin-bottom: 48px;
        }

        .form-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .form-tag::before {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #888;
        }

        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 38px;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -1px;
          line-height: 1;
          margin: 0;
        }

        .form-title em {
          font-style: italic;
          font-weight: 400;
          color: #888;
        }

        /* Form fields */
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 32px;
          border: 1px solid #d8d0c4;
        }

        .field-wrap {
          position: relative;
          border-bottom: 1px solid #d8d0c4;
        }

        .field-wrap:last-child {
          border-bottom: none;
        }

        .field-label {
          position: absolute;
          top: 14px;
          left: 16px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #aaa;
          pointer-events: none;
          transition: all 0.15s;
        }

        .field-input {
          width: 100%;
          background: #FDFAF4;
          border: none;
          outline: none;
          padding: 30px 16px 12px 16px;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          color: #1a1a1a;
          font-weight: 400;
          transition: background 0.15s;
        }

        .field-input::placeholder {
          color: transparent;
        }

        .field-input:focus {
          background: #fff;
        }

        .field-input:focus ~ .field-label,
        .field-input:not(:placeholder-shown) ~ .field-label {
          font-size: 8px;
          top: 10px;
          color: #888;
        }

        /* Submit button */
        .btn-submit {
          width: 100%;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: #1a1a1a;
          color: #F5F0E8;
          border: 2px solid #1a1a1a;
          padding: 16px 32px;
          cursor: pointer;
          transition: all 0.15s;
          margin-bottom: 24px;
        }

        .btn-submit:hover {
          background: transparent;
          color: #1a1a1a;
        }

        /* Toggle link */
        .form-toggle {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: #888;
          text-align: center;
        }

        .form-toggle a {
          color: #1a1a1a;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 28px 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: #d8d0c4;
        }

        .divider-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #bbb;
        }

        /* Bottom rule lines (decorative) */
        .rule-lines {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 200px;
          overflow: hidden;
          opacity: 0.15;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .auth-left { display: none; }
          .auth-right { padding: 60px 32px; }
        }
      `}</style>

      <div
        className="auth-root"
        style={{ display: "flex", width: "100%", minHeight: "100vh" }}
      >
        {/* Left */}
        <div className="auth-left">
          <Link href="/" className="left-logo">trace</Link>

          {/* Background sketch lines */}
          <svg
            className="left-canvas-preview"
            viewBox="0 0 400 280"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="20" y="20" width="180" height="120" fill="none" stroke="#F5F0E8" strokeWidth="1" />
            <line x1="20" y1="44" x2="200" y2="44" stroke="#F5F0E8" strokeWidth="0.8" />
            {[60, 76, 92, 108].map((y) => (
              <line key={y} x1="32" y1={y} x2={y === 108 ? 140 : 188} y2={y} stroke="#F5F0E8" strokeWidth="0.6" />
            ))}
            <rect x="240" y="60" width="140" height="100" fill="none" stroke="#F5F0E8" strokeWidth="1" />
            <line x1="240" y1="60" x2="380" y2="160" stroke="#F5F0E8" strokeWidth="0.5" />
            <line x1="380" y1="60" x2="240" y2="160" stroke="#F5F0E8" strokeWidth="0.5" />
            <path d="M60 180 C90 160, 140 200, 180 175" fill="none" stroke="#F5F0E8" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M220 185 L235 175 L225 190" fill="none" stroke="#F5F0E8" strokeWidth="1.2" strokeLinecap="round" />
            {[200, 216, 232, 248].map((y) => (
              <line key={y} x1="20" y1={y} x2="380" y2={y} stroke="#F5F0E8" strokeWidth="0.3" />
            ))}
          </svg>

          <div className="left-content">
            <p className="left-quote">
              Your best ideas<br />
              start as <span>lines.</span>
            </p>
            <div className="left-meta">Draw with anyone, anywhere</div>
          </div>
        </div>

        {/* Right */}
        <div className="auth-right">
          <div className="form-header">
            <div className="form-tag">{isSignin ? "Welcome back" : "Get started"}</div>
            <h1 className="form-title">
              {isSignin ? (
                <>Sign <em>in.</em></>
              ) : (
                <>Create <em>account.</em></>
              )}
            </h1>
          </div>

          {/* Fields */}
          <div className="field-group">
            <div className="field-wrap">
              <input
                className="field-input"
                type="email"
                placeholder="Email"
                id="email"
              />
              <label className="field-label" htmlFor="email">Email address</label>
            </div>
            <div className="field-wrap">
              <input
                className="field-input"
                type="password"
                placeholder="Password"
                id="password"
              />
              <label className="field-label" htmlFor="password">Password</label>
            </div>
            {!isSignin && (
              <div className="field-wrap">
                <input
                  className="field-input"
                  type="password"
                  placeholder="Confirm"
                  id="confirm"
                />
                <label className="field-label" htmlFor="confirm">Confirm password</label>
              </div>
            )}
          </div>

          {isSignin && (
            <div style={{ textAlign: "right", marginTop: "-20px", marginBottom: "24px" }}>
              <a
                href="#"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "#888",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  letterSpacing: "0.05em",
                }}
              >
                Forgot password?
              </a>
            </div>
          )}

          <button className="btn-submit" onClick={() => {}}>
            {isSignin ? "Sign in to trace" : "Create account"}
          </button>

          <div className="form-toggle">
            {isSignin ? (
              <>
                New here?{" "}
                <a href="/signup">Start drawing for free</a>
              </>
            ) : (
              <>
                Already drawing?{" "}
                <a href="/signin">Sign in</a>
              </>
            )}
          </div>

          {/* Decorative rule lines bottom-right */}
          <div className="rule-lines">
            <svg width="100%" height="200" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
              {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y) => (
                <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1a1a1a" strokeWidth="0.5" />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}