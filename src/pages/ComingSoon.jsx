import React from "react";
import "../coming-soon.css";

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="coming-soon__glow coming-soon__glow--one" />
      <div className="coming-soon__glow coming-soon__glow--two" />

      <section className="coming-soon__panel">
        <div className="coming-soon__mark" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="53"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M60 88V42M60 63c-9-2-16-9-17-20 10 0 17 5 19 14M61 55c4-10 12-15 22-14-1 11-8 19-20 22M59 73c-8 0-14-5-17-12 8-1 14 2 18 8M62 72c6-7 13-9 21-7-3 8-9 13-18 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34 92c7 6 16 10 26 10 12 0 22-4 30-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="coming-soon__eyebrow">TEEL CBT</p>

        <h1>
          A thoughtful space
          <span>is taking shape.</span>
        </h1>

        <p className="coming-soon__intro">
          Our new website is coming soon. In the meantime, you can reach Dr.
          Karen Teel directly with questions about services or scheduling.
        </p>

        <div className="coming-soon__divider">
          <span />
          <span className="coming-soon__leaf">❦</span>
          <span />
        </div>

        <div className="coming-soon__contact">
          <a
            href="mailto:drteel@teelcbt.com"
            className="coming-soon__contact-link"
          >
            <span className="coming-soon__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3.5 6.5h17v11h-17z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            <span>
              <small>Email</small>
              drteel@teelcbt.com
            </span>
          </a>

          <a href="tel:+15165240822" className="coming-soon__contact-link">
            <span className="coming-soon__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7.1 3.8 9.5 7l-1.7 2.1c1.4 2.8 3.3 4.7 6.1 6.1l2.1-1.7 3.2 2.4c.5.4.7 1 .5 1.6-.6 2-2.2 3.3-4.3 3.1C8.4 19.7 3.3 14.6 2.4 7.6 2.2 5.5 3.5 3.9 5.5 3.3c.6-.2 1.2 0 1.6.5Z" />
              </svg>
            </span>
            <span>
              <small>Phone</small>
              516-524-0822
            </span>
          </a>
        </div>

        <p className="coming-soon__note">
          If you are experiencing an emergency, call 911 or go to your nearest
          emergency room.
        </p>
      </section>

      <footer className="coming-soon__footer">
        <span>
          © {new Date().getFullYear()} Dr. Karen Teel, Psychologist PLLC
        </span>
        <span>New York, NY</span>
      </footer>
    </main>
  );
}
