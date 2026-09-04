import React from "react";
import "../legal-pages.css";

const sections = [
  {
    icon: "person",
    title: "Information You Provide",
    children: (
      <>
        <p>
          You may voluntarily submit information through our contact form, such
          as your name, email address, phone number, preferred method of
          contact, and any other information you choose to provide.
        </p>

        <p className="legal-note">
          <strong>
            Please do not use the website contact form to submit detailed
            medical, mental health, or other sensitive information.
          </strong>{" "}
          Once contact has been established, confidential information may be
          exchanged through an appropriate secure communication method.
        </p>
      </>
    ),
  },
  {
    icon: "leaf",
    title: "How Information Is Used",
    children: (
      <p>
        Information submitted through the website may be used to respond to your
        inquiry, discuss scheduling or services, and communicate with you about
        the practice. Information will not be sold or used for targeted
        advertising.
      </p>
    ),
  },
  {
    icon: "cookie",
    title: "Website Analytics & Cookies",
    children: (
      <p>
        This website may use limited cookies or similar technologies necessary
        for site functionality and security. We do not use advertising cookies
        or technologies to create profiles of visitors for targeted advertising.
        If website analytics are used, they are configured to collect only
        information reasonably necessary to understand general website usage.
      </p>
    ),
  },
  {
    icon: "shield",
    title: "Service Providers",
    children: (
      <p>
        We may use third-party service providers to operate the website, host
        the site, process secure inquiries, or provide other technical services.
        Where a service provider handles protected health information on behalf
        of the practice, appropriate agreements and safeguards are used as
        required by applicable law.
      </p>
    ),
  },
  {
    icon: "lock",
    title: "Security",
    children: (
      <p>
        We use reasonable administrative and technical measures designed to
        protect information submitted through the website. However, no method of
        transmission or storage on the Internet can be guaranteed to be
        completely secure.
      </p>
    ),
  },
  {
    icon: "link",
    title: "Links to Other Websites",
    children: (
      <p>
        This website may contain links to third-party websites or services.
        Their privacy practices are governed by their own policies, and we
        encourage you to review those policies when leaving this website.
      </p>
    ),
  },
  {
    icon: "people",
    title: "Children’s Privacy",
    children: (
      <p>
        This website is intended for adults and is not designed to knowingly
        collect personal information directly from children.
      </p>
    ),
  },
  {
    icon: "edit",
    title: "Changes to This Privacy Policy",
    children: (
      <p>
        We may update this Privacy Policy as the website or our practices
        change. The effective date above indicates the most recent revision.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-shell legal-hero__inner">
          <p className="legal-eyebrow">PRIVACY</p>
          <h1>Privacy Policy</h1>
          <div className="legal-divider">
            <span />
            <span className="legal-divider__leaf">❦</span>
            <span />
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-shell legal-document">
          <p className="legal-effective">Effective: September 2026</p>

          <p className="legal-intro">
            Dr. Teel CBT respects your privacy. This Privacy Policy explains
            what information may be collected when you visit this website, how
            that information may be used, and the steps we take to protect it.
            This website is intended to provide general information about the
            practice and is not intended to replace confidential communication
            with your therapist or other health care provider.
          </p>

          <div className="legal-section-list">
            {sections.map((section) => (
              <LegalSection
                key={section.title}
                icon={section.icon}
                title={section.title}
              >
                {section.children}
              </LegalSection>
            ))}
          </div>

          <aside className="legal-contact-card">
            <div className="legal-contact-card__branch" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div>
              <h2>Questions about this policy?</h2>
              <p>
                Karen Teel, PhD
                <br />
                151 E. 80th Street, Suite 1B
                <br />
                New York, NY 10075
              </p>

              <div className="legal-contact-details">
                <a href="tel:+15165240822">516-524-0822</a>
                <a href="mailto:drteel@teelcbt.com">drteel@teelcbt.com</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function LegalSection({ icon, title, children }) {
  return (
    <section className="legal-section">
      <div className="legal-icon">
        <LegalIcon name={icon} />
      </div>

      <div className="legal-section__content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function LegalIcon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "lock") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="14" y="21" width="20" height="17" rx="3" {...common} />
        <path d="M18 21v-5a6 6 0 0 1 12 0v5" {...common} />
        <circle cx="24" cy="29" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M24 8 35 12v10c0 8-4.7 13.9-11 17-6.3-3.1-11-9-11-17V12l11-4Z"
          {...common}
        />
        <path d="m20 24 3 3 6-7" {...common} />
      </svg>
    );
  }

  if (name === "person") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="17" r="6" {...common} />
        <path d="M14 37c1.8-7 6-10 10-10s8.2 3 10 10" {...common} />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="18" cy="18" r="4" {...common} />
        <circle cx="30" cy="18" r="4" {...common} />
        <path d="M10 34c1-6 4.7-9 8-9 2.3 0 4.4 1.2 6 3" {...common} />
        <path d="M24 28c1.6-1.8 3.7-3 6-3 3.3 0 7 3 8 9" {...common} />
      </svg>
    );
  }

  if (name === "link") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m20 28-3 3a6 6 0 0 1-8-8l6-6a6 6 0 0 1 8 0" {...common} />
        <path d="m28 20 3-3a6 6 0 0 1 8 8l-6 6a6 6 0 0 1-8 0" {...common} />
        <path d="m18 30 12-12" {...common} />
      </svg>
    );
  }

  if (name === "edit") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 36h8l18-18-8-8-18 18v8Z" {...common} />
        <path d="m26 14 8 8" {...common} />
      </svg>
    );
  }

  if (name === "cookie") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M34 17c-5 0-7-3-7-7-8-1-16 5-16 14 0 8 6 14 14 14 9 0 15-8 14-16-3 0-5-2-5-5Z"
          {...common}
        />
        <circle cx="20" cy="22" r="1.5" fill="currentColor" />
        <circle cx="27" cy="29" r="1.5" fill="currentColor" />
        <circle cx="19" cy="31" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 39V18" {...common} />
      <path d="M23 25c-7-1-10-6-10-11 6 0 10 3 11 8" {...common} />
      <path d="M25 20c1-6 5-9 11-9 0 6-3 11-10 13" {...common} />
      <path d="M23 31c-5 0-8-3-9-7 5 0 8 2 10 5" {...common} />
    </svg>
  );
}
