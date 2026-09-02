import { Fragment, useState } from "react";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";

const faqs = [
  [
    "Do you offer in-person or virtual sessions?",
    `Dr. Teel offers both in-person and virtual sessions. Sessions may take place either **in person** or by **telehealth**.

For in-person appointments, Dr. Teel’s office is located at 151 E. 80th Street, Suite 1B, on the northeast corner of 80th Street and Lexington Ave.

For telehealth appointments, please participate from a private location whenever possible. If you will be physically located outside of New York State at the time of a telehealth session, please let me know in advance, as applicable licensing laws may affect whether I am able to provide the session.`,
  ],
  [
    "Do you accept insurance?",
    `My practice is **self-pay** and **out-of-network**, and I do not participate with insurance plans. A superbill will be provided whenever your card is charged. You may submit the superbill to your insurance company for possible out-of-network reimbursement.
    
Insurance benefits vary, and I cannot guarantee whether your insurance company will reimburse you or the amount of any reimbursement. You are responsible for payment of the fees for your treatment.`,
  ],
  [
    "How long are sessions and how often do we meet?",
    `Sessions are typically 45-minutes in length. When we’re getting started, weekly sessions make the most sense.
    
As we get closer to meeting your goals, we can have more time between appointments or have shorter sessions. The idea is that we move toward meeting less.`,
  ],
  [
    "What happens during the first session?",
    `During the first session, we review what brought you to therapy and talk about your goals for treatment. I’ll typically ask questions to get a better sense of how you’ve been feeling, the history of your concerns, and what your goals are for treatment. Background information and context are important. By the end of the first session we should have a treatment plan in place.`,
  ],
  [
    "How do I schedule an appointment?",
    "Contact me using the “schedule a consultation” button or email me at mailto:drteel@teelcbt.com",
  ],
];

function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    return bold ? (
      <strong key={i}>{bold[1]}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    );
  });
}

function FaqAnswer({ text }) {
  return text.split(/\n\n+/).map((paragraph, i) => (
    <p key={i}>
      {paragraph.split("\n").map((line, j) => (
        <Fragment key={j}>
          {j > 0 && <br />}
          {renderInline(line)}
        </Fragment>
      ))}
    </p>
  ));
}

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions">
        A few practical details to help you know what to expect.
      </PageHero>
      <section className="section white">
        <div className="container">
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div className={`faq-item ${open === i ? "open" : ""}`} key={q}>
                <button
                  className="faq-q"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{q}</span>
                  <span>+</span>
                </button>
                <div className="faq-a">
                  <FaqAnswer text={a} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Still have questions?" buttonText="Contact Dr. Teel">
        I’m happy to help clarify the practical details before you schedule.
      </CTA>
    </>
  );
}
