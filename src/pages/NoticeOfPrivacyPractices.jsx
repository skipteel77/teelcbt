import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../legal-pages.css";

const noAuthUses = [
  "When disclosure is required by state or federal law, and the use or disclosure complies with and is limited to the relevant requirements of such law.",
  "For public health activities, including reporting suspected child, elder, or dependent adult abuse, or preventing or reducing a serious threat to anyone’s health or safety.",
  "For health oversight activities, including audits and investigations.",
  "For judicial and administrative proceedings, including responding to a court or administrative order, although my preference is to obtain an Authorization from you before doing so.",
  "For law enforcement purposes, including reporting crimes occurring on my premises.",
  "To coroners or medical examiners, when such individuals are performing duties authorized by law.",
  "For research purposes, including studying and comparing the mental health of patients who received one form of therapy versus those who received another form of therapy for the same condition.",
  "Specialized government functions, including ensuring the proper execution of military missions; protecting the President of the United States; conducting intelligence or counter-intelligence operations; or helping to ensure the safety of those working within or housed in correctional institutions.",
  "For workers’ compensation purposes. Although my preference is to obtain an Authorization from you, I may provide your PHI in order to comply with workers’ compensation laws.",
  "Appointment reminders and health related benefits or services. I may use and disclose your PHI to contact you to remind you that you have an appointment with me. I may also use and disclose your PHI to tell you about treatment alternatives, or other health care services or benefits that I offer.",
];

const rights = [
  {
    title: "The Right to Request Limits on Uses and Disclosures of Your PHI.",
    text: "You have the right to ask me not to use or disclose certain PHI for treatment, payment, or health care operations purposes. I am not required to agree to your request, and I may say “no” if I believe it would affect your health care.",
  },
  {
    title:
      "The Right to Request Restrictions for Out-of-Pocket Expenses Paid for In Full.",
    text: "You have the right to request restrictions on disclosures of your PHI to health plans for payment or health care operations purposes if the PHI pertains solely to a health care item or a health care service that you have paid for out-of-pocket in full.",
  },
  {
    title: "The Right to Choose How I Send PHI to You.",
    text: "You have the right to ask me to contact you in a specific way (for example, home or office phone), or to send mail to a different address, and I will agree to all reasonable requests.",
  },
  {
    title: "The Right to See and Get Copies of Your PHI.",
    text: "Other than “psychotherapy notes” and “SUD counseling notes” you have the right to get an electronic or paper copy of your medical record and other information that I have about you. I will provide you with a copy of your record, or a summary of it, if you agree to receive a summary, within 30 days of receiving your written request, and I may charge a reasonable, cost-based fee for doing so.",
  },
  {
    title: "The Right to Get a List of the Disclosures I Have Made.",
    text: "You have the right to request a list of instances in which I have disclosed your PHI for purposes other than treatment, payment, or health care operations, or for which you provided me with an Authorization. I will respond to your request for an accounting of disclosures within 60 days of receiving your request. The list I will give you will include disclosures made in the last six years unless you request a shorter time. I will provide the list to you at no charge, but if you make more than one request in the same year, I will charge you a reasonable cost-based fee for each additional request. You also have the right to request an accounting of disclosures specifically for your substance use disorder records protected under 42 C.F.R. Part 2.",
  },
  {
    title: "The Right to Correct or Update Your PHI.",
    text: "If you believe that there is a mistake in your PHI, or that a piece of important information is missing from your PHI, you have the right to request that I correct the existing information or add the missing information. I may say “no” to your request, but I will tell you why in writing within 60 days of receiving your request.",
  },
  {
    title: "The Right to Get a Paper or Electronic Copy of this Notice.",
    text: "You have the right to get a paper copy of this Notice, and you have the right to get a copy of this notice by e-mail. And, even if you have agreed to receive this Notice via e-mail, you also have the right to request a paper copy of it.",
  },
];

function NppSection({ number, title, icon, children }) {
  return (
    <section className="npp-section">
      <div className="npp-section-heading">
        <div className="npp-icon" aria-hidden="true">
          {icon}
        </div>
        <div>
          <div className="npp-section-number">{number}</div>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="npp-section-body">{children}</div>
    </section>
  );
}

export default function NoticeOfPrivacyPractices() {
  return (
    <>
      <main className="npp-page">
        <section className="npp-hero">
          <div className="npp-shell">
            <p className="npp-eyebrow">HIPAA NOTICE</p>
            <h1>Notice of Privacy Practices</h1>
            <div className="npp-divider">
              <span />
              <span className="npp-divider-leaf">❦</span>
              <span />
            </div>
            <div className="npp-practice-meta">
              <strong>Dr. Karen Teel, Psychologist PLLC</strong>
              <span>151 E. 80th St., Suite 1B, New York, NY 10075</span>
              <a href="mailto:drteel@teelcbt.com">drteel@teelcbt.com</a>
              <a href="tel:+15165240822">516-524-0822</a>
            </div>
            <p className="npp-effective">
              <strong>EFFECTIVE DATE OF THIS NOTICE</strong>
              <br />
              This notice went into effect on September 15, 2026
            </p>
          </div>
        </section>

        <section className="npp-content">
          <div className="npp-shell npp-document">
            <div className="npp-alert">
              <div className="npp-alert-icon" aria-hidden="true">
                🔒
              </div>
              <p>
                <strong>
                  THIS NOTICE DESCRIBES HOW HEALTH INFORMATION MAY BE USED AND
                  DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.
                  PLEASE REVIEW IT CAREFULLY.
                </strong>
              </p>
            </div>

            <div className="npp-actions">
              <button
                type="button"
                onClick={() => window.print()}
                className="npp-print-button"
              >
                Print this notice
              </button>
            </div>

            <NppSection
              number="I"
              title="My Pledge Regarding Health Information"
              icon="◌"
            >
              <p>
                I understand that health information about you and your health
                care is personal. I am committed to protecting health
                information about you. I create a record of the care and
                services you receive from me. I need this record to provide you
                with quality care and to comply with certain legal requirements.
                This notice applies to all of the records of your care generated
                by this mental health care practice. This notice will tell you
                about the ways in which I may use and disclose health
                information about you. I also describe your rights to the health
                information I keep about you, and describe certain obligations I
                have regarding the use and disclosure of your health
                information.
              </p>
              <p>I am required by law to:</p>
              <ul>
                <li>
                  Make sure that protected health information (“PHI”) that
                  identifies you is kept private.
                </li>
                <li>
                  Give you this notice of my legal duties and privacy practices
                  with respect to health information.
                </li>
                <li>
                  Follow the terms of the notice that is currently in effect.
                </li>
              </ul>
              <p>
                I am also required by law to provide you with adequate notice of
                your rights and my legal duties if I create or maintain records
                protected by 42 C.F.R. Part 2.
              </p>
              <p>
                I can change the terms of this Notice, and such changes will
                apply to all information I have about you. The new Notice will
                be available upon request, in my office, and on my website.
              </p>
            </NppSection>

            <NppSection
              number="II"
              title="How I May Use and Disclose Health Information About You"
              icon="↔"
            >
              <p>
                The following categories describe different ways that I use and
                disclose health information. For each category of uses or
                disclosures I will explain what I mean and try to give some
                examples. Not every use or disclosure in a category will be
                listed. However, all of the ways I am permitted to use and
                disclose information will fall within one of the categories.
              </p>

              <div className="npp-subcard">
                <h3>For Treatment, Payment, or Health Care Operations</h3>
                <p>
                  Federal privacy rules (regulations) allow health care
                  providers who have direct treatment relationship with the
                  patient/client to use or disclose the patient/client’s
                  personal health information without the patient’s written
                  authorization, to carry out the health care provider’s own
                  treatment, payment or health care operations. I may also
                  disclose your protected health information for the treatment
                  activities of any health care provider. This too can be done
                  without your written authorization. For example, if a
                  clinician were to consult with another licensed health care
                  provider about your condition, we would be permitted to use
                  and disclose your personal health information, which is
                  otherwise confidential, in order to assist the clinician in
                  diagnosis and treatment of your mental health condition.
                </p>
                <p>
                  If your records are protected under 42 C.F.R. Part 2, certain
                  uses and disclosures permitted by HIPAA for treatment,
                  payment, and health care operations are materially limited by
                  the stricter standards of those regulations. Furthermore,
                  information disclosed pursuant to these rules may be subject
                  to redisclosure by the recipient and may no longer be
                  protected by federal privacy standards.
                </p>
                <p>
                  Disclosures for treatment purposes are not limited to the
                  minimum necessary standard. Because therapists and other
                  health care providers need access to the full record and/or
                  full and complete information in order to provide quality
                  care. The word “treatment” includes, among other things, the
                  coordination and management of health care providers with a
                  third party, consultations between health care providers and
                  referrals of a patient for health care from one health care
                  provider to another.
                </p>
              </div>

              <div className="npp-subcard">
                <h3>Lawsuits and Disputes</h3>
                <p>
                  If you are involved in a lawsuit, I may disclose health
                  information in response to a court or administrative order. I
                  may also disclose health information about your child in
                  response to a subpoena, discovery request, or other lawful
                  process by someone else involved in the dispute, but only if
                  efforts have been made to tell you about the request or to
                  obtain an order protecting the information requested. However,
                  for records protected by 42 C.F.R. Part 2, such records or
                  testimony relaying their content shall not be used or
                  disclosed in civil, criminal, administrative, or legislative
                  proceedings against you unless you provide specific written
                  consent or a court order is issued in accordance with 42
                  C.F.R. Part 2.
                </p>
              </div>
            </NppSection>

            <NppSection
              number="III"
              title="Certain Uses and Disclosures Require Your Authorization"
              icon="✓"
            >
              <ol className="npp-numbered-list">
                <li>
                  <strong>Psychotherapy Notes.</strong> I do keep “psychotherapy
                  notes” as that term is defined in 45 CFR § 164.501, and any
                  use or disclosure of such notes requires your Authorization
                  unless the use or disclosure is:
                  <ul>
                    <li>For my use in treating you.</li>
                    <li>
                      For my use in training or supervising mental health
                      practitioners to help them improve their skills in group,
                      joint, family, or individual counseling or therapy.
                    </li>
                    <li>
                      For my use in defending myself in legal proceedings
                      instituted by you.
                    </li>
                    <li>
                      For use by the Secretary of Health and Human Services to
                      investigate my compliance with HIPAA.
                    </li>
                    <li>
                      Required by law and the use or disclosure is limited to
                      the requirements of such law.
                    </li>
                    <li>
                      Required by law for certain health oversight activities
                      pertaining to the originator of the psychotherapy notes.
                    </li>
                    <li>
                      Required by a coroner who is performing duties authorized
                      by law.
                    </li>
                    <li>
                      Required to help avert a serious threat to the health and
                      safety of others.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Substance Use Disorder (SUD) Counseling Notes.
                  </strong>{" "}
                  I may also maintain “SUD counseling notes,” which are notes
                  recorded by a substance use disorder provider documenting the
                  contents of a counseling session. Any use or disclosure of
                  these notes requires your separate written authorization,
                  which cannot be combined with a consent for other types of
                  records. You can revoke your consent at any time except to the
                  extent that I have already acted upon it to disclose these
                  notes in accordance with your initial authorization.
                </li>
                <li>
                  <strong>Marketing Purposes.</strong> As a psychotherapist, I
                  will not use or disclose your PHI for marketing purposes.
                </li>
                <li>
                  <strong>Sale of PHI.</strong> As a psychotherapist, I will not
                  sell your PHI in the regular course of my business.
                </li>
              </ol>
            </NppSection>

            <NppSection
              number="IV"
              title="Certain Uses and Disclosures Do Not Require Your Authorization"
              icon="§"
            >
              <p>
                Subject to certain limitations in the law, I can use and
                disclose your PHI without your Authorization for the following
                reasons:
              </p>
              <ol className="npp-numbered-list">
                {noAuthUses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </NppSection>

            <NppSection
              number="V"
              title="Certain Uses and Disclosures Require You to Have the Opportunity to Object"
              icon="!"
            >
              <ol className="npp-numbered-list">
                <li>
                  <strong>Disclosures to family, friends, or others.</strong> I
                  may provide your PHI to a family member, friend, or other
                  person that you indicate is involved in your care or the
                  payment for your health care, unless you object in whole or in
                  part. The opportunity to consent may be obtained retroactively
                  in emergency situations.
                </li>
                <li>
                  <strong>Fundraising.</strong> If I intend to use or disclose
                  your records protected by 42 C.F.R. Part 2 for fundraising for
                  my benefit, I will provide you with a clear and conspicuous
                  opportunity to opt-out before any such use or disclosure
                  occurs.
                </li>
              </ol>
            </NppSection>

            <NppSection
              number="VI"
              title="You Have the Following Rights With Respect to Your PHI"
              icon="◎"
            >
              <div className="npp-rights-grid">
                {rights.map((right, index) => (
                  <article className="npp-right-card" key={right.title}>
                    <span className="npp-right-card-number">{index + 1}</span>
                    <div>
                      <h3>{right.title}</h3>
                      <p>{right.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </NppSection>

            <aside className="npp-contact-card">
              <div>
                <p className="npp-eyebrow">PRIVACY CONTACT</p>
                <h2>Questions about this notice?</h2>
                <p>Dr. Karen Teel, Psychologist PLLC</p>
                <p>151 E. 80th St., Suite 1B, New York, NY 10075</p>
              </div>
              <div className="npp-contact-links">
                <a href="mailto:drteel@teelcbt.com">drteel@teelcbt.com</a>
                <a href="tel:+15165240822">516-524-0822</a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
