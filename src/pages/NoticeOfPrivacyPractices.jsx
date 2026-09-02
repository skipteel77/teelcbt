import React from "react";
import "../legal-pages.css";

export default function NoticeOfPrivacyPractices() {
  return (
    <div className="legal-page">
        <section className="legal-hero">
          <div className="legal-shell legal-hero__inner">
            <p className="legal-eyebrow">HIPAA</p>
            <h1>Notice of Privacy Practices</h1>

            <div className="legal-divider">
              <span />
              <span className="legal-divider__leaf">❦</span>
              <span />
            </div>

            <p className="legal-effective legal-effective--centered">
              Effective: September 2026
            </p>
          </div>
        </section>

        <section className="legal-content">
          <div className="legal-shell legal-document">
            <div className="notice-alert">
              <div className="notice-alert__icon">🔒</div>
              <p>
                <strong>
                  THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
                  USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS
                  INFORMATION.
                </strong>{" "}
                PLEASE REVIEW IT CAREFULLY.
              </p>
            </div>

            <div className="notice-grid">
              <NoticeBlock title="Your Rights" icon="person">
                <p>
                  You have rights with respect to your health information. These
                  include the right to:
                </p>
                <ul>
                  <li>Get an electronic or paper copy of your health record</li>
                  <li>Ask us to correct your health record</li>
                  <li>Request confidential communications</li>
                  <li>Ask us to limit what we use or share</li>
                  <li>Get a list of certain disclosures</li>
                  <li>Get a copy of this Notice</li>
                  <li>Choose someone to act on your behalf</li>
                  <li>
                    File a complaint if you believe your rights are violated
                  </li>
                </ul>
              </NoticeBlock>

              <NoticeBlock title="Your Choices" icon="settings">
                <p>
                  For certain health information, you may tell us your choices
                  about what we share.
                </p>
                <ul>
                  <li>
                    Share information with family, close friends, or others
                    involved in your care
                  </li>
                  <li>
                    Choose whether certain information may be shared where your
                    permission is required by law
                  </li>
                </ul>
              </NoticeBlock>

              <NoticeBlock
                title="How We May Use or Share Information"
                icon="hands"
              >
                <p>
                  We may use or share your health information as permitted by
                  law, including:
                </p>

                <div className="notice-subsection">
                  <h3>Treatment</h3>
                  <p>
                    We may use your health information to provide, coordinate,
                    or manage your care and may share relevant information with
                    other health professionals involved in your treatment when
                    permitted by law.
                  </p>
                </div>

                <div className="notice-subsection">
                  <h3>Payment</h3>
                  <p>
                    We may use and disclose information as needed to obtain
                    payment for services, including billing and
                    insurance-related activities when applicable.
                  </p>
                </div>

                <div className="notice-subsection">
                  <h3>Health Care Operations</h3>
                  <p>
                    We may use information to operate the practice, improve
                    services, maintain records, and conduct other activities
                    permitted by law.
                  </p>
                </div>

                <p>
                  We may also use or disclose information when required or
                  permitted by law, including certain public-health, safety,
                  legal, or governmental purposes.
                </p>
              </NoticeBlock>

              <NoticeBlock title="Our Responsibilities" icon="shield">
                <p>We are required by law to:</p>
                <ul>
                  <li>
                    Maintain the privacy and security of your protected health
                    information
                  </li>
                  <li>
                    Notify you as required by law if a breach occurs that may
                    have compromised your information
                  </li>
                  <li>
                    Follow the duties and privacy practices described in the
                    Notice currently in effect
                  </li>
                  <li>
                    Not use or disclose information other than as described
                    unless authorized by you or otherwise permitted or required
                    by law
                  </li>
                </ul>
              </NoticeBlock>

              <NoticeBlock title="Changes to This Notice" icon="document">
                <p>
                  We may change the terms of this Notice. Any revised Notice
                  will apply to health information we already have as well as
                  information we receive in the future.
                </p>
                <p>
                  The current Notice will be available on this website and upon
                  request.
                </p>
              </NoticeBlock>

              <NoticeBlock title="Complaints" icon="alert">
                <p>
                  If you believe your privacy rights have been violated, you may
                  file a complaint with us or with the U.S. Department of Health
                  and Human Services Office for Civil Rights.
                </p>

                <div className="notice-contact">
                  <h3>Contact the Practice</h3>
                  <p>
                    Karen Teel, PhD
                    <br />
                    Privacy Contact
                    <br />
                    151 E. 80th Street, Suite 1B
                    <br />
                    New York, NY 10075
                  </p>

                  <a href="tel:+15165240822">516-524-0822</a>
                  <a href="mailto:drteel@teelcbt.com">drteel@teelcbt.com</a>
                </div>

                <p className="legal-note">
                  We will not retaliate against you for filing a complaint.
                </p>
              </NoticeBlock>
            </div>

            <div className="legal-contact-card legal-contact-card--notice">
              <div>
                <h2>Questions or requests about your health information?</h2>
                <p>
                  Karen Teel, PhD
                  <br />
                  Privacy Contact
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
            </div>
          </div>
        </section>
    </div>
  );
}

function NoticeBlock({ title, children, icon }) {
  return (
    <section className="notice-block">
      <div className="legal-icon">
        <NoticeIcon name={icon} />
      </div>

      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function NoticeIcon({ name }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      {name === "person" && (
        <>
          <circle
            cx="24"
            cy="20"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M17 33c1.5-5 4.2-7 7-7s5.5 2 7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </>
      )}

      {name === "shield" && (
        <path
          d="M24 15l7 3v6c0 5-2.9 8.5-7 10.5C19.9 32.5 17 29 17 24v-6l7-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      )}

      {name === "document" && (
        <>
          <path
            d="M19 15h8l5 5v13H19z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M27 15v6h5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M22 26h7M22 30h6" stroke="currentColor" strokeWidth="1.7" />
        </>
      )}

      {name === "alert" && (
        <>
          <path d="M24 17v10" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="24" cy="31" r="1.4" fill="currentColor" />
        </>
      )}

      {name === "settings" && (
        <>
          <path
            d="M17 19h14M17 24h14M17 29h14"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="21"
            cy="19"
            r="2"
            fill="#f3f5ee"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="27"
            cy="24"
            r="2"
            fill="#f3f5ee"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="23"
            cy="29"
            r="2"
            fill="#f3f5ee"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      )}

      {name === "hands" && (
        <>
          <path
            d="m17 24 5-4 4 3 5-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="m17 25 5 6 3-2 3 2 5-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
