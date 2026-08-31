import React from "react";
import "./services-anxiety-section.css";

const groups = [
    {
      title: "Thoughts & Worry",
      icon: "brain",
      items: [
        {
          title: "Excessive Worry / Obsessional Thinking",
          icon: "thoughts",
          blurb:
            "When thoughts feel difficult to turn off, therapy can help you step out of repetitive worry, relate differently to uncertainty, and feel less controlled by your thoughts.",
        },
        {
          title: "Nervousness",
          icon: "pulse",
          blurb:
            "If you often feel tense, restless, or on edge, we can work on understanding what keeps anxiety activated and building practical ways to respond differently.",
        },
        {
          title: "High Self-Criticism / Perfectionism",
          icon: "person",
          blurb:
            "Learn to recognize rigid standards and harsh self-judgment, while developing a more flexible and balanced way of approaching yourself and your goals.",
        },
      ],
    },
    {
      title: "Fear & Physical Symptoms",
      icon: "shield",
      items: [
        {
          title: "Feeling Overwhelmed / Panic / Dread",
          icon: "cloud",
          blurb:
            "When anxiety feels intense or consuming, therapy can help you understand what is happening, reduce fear of the experience itself, and regain a sense of control.",
        },
        {
          title: "Phobias / Fears",
          icon: "alert",
          blurb:
            "Gradually and safely face situations that have become frightening or restrictive, so fear has less influence over the choices you make.",
        },
        {
          title: "Physical Panic Symptoms",
          icon: "heartPulse",
          blurb:
            "Understand sensations such as a racing heart, dizziness, shortness of breath, or tightness, and learn to experience them with less fear and reactivity.",
        },
      ],
    },
    {
      title: "Patterns & Behaviors",
      icon: "cycle",
      items: [
        {
          title: "Compulsive Behaviors",
          icon: "cycle",
          blurb:
            "Understand the cycle between intrusive thoughts, anxiety, and compulsive responses, and practice new ways of responding without reinforcing the cycle.",
        },
        {
          title: "Tics / Repetitive Movements",
          icon: "hand",
          blurb:
            "Develop greater awareness of urges and patterns while learning evidence-based strategies for responding to repetitive movements or behaviors.",
        },
        {
          title: "Freezing / Avoidance",
          icon: "person",
          blurb:
            "Explore the situations you have begun avoiding and gradually build the confidence and flexibility to engage with them again.",
        },
        {
          title: "Impulsivity",
          icon: "arrows",
          blurb:
            "Learn to create more space between an urge and an action, recognize patterns and triggers, and make choices that better reflect your goals.",
        },
      ],
    },
  ];
  
  function Icon({ name, className = "" }) {
    switch (name) {
      case "brain":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M18 30c-2.5-1.5-4-4.2-4-7.1 0-4.6 3.6-8.4 8.1-8.8 1.3-2.2 3.8-3.6 6.4-3.6 4.1 0 7.5 3.3 7.5 7.5 0 .4 0 .7-.1 1 2 1.4 3.1 3.6 3.1 6 0 4-3.2 7.2-7.2 7.2H25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M24 15v18M19 18c1.5 1 2.6 2.4 3 4.1M29 17c-1.7 1.1-2.8 2.9-3 4.9M18 25h6M24 25h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "shield":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M24 12l10 4v8c0 6.5-4.2 11.4-10 13.9C18.2 35.4 14 30.5 14 24v-8l10-4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case "cycle":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 19a10 10 0 0 1 16-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M32 16v5h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 29a10 10 0 0 1-16 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 32v-5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "thoughts":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M19 29c-3.5-2-5.3-5.6-4.2-9.1 1.2-3.8 5.4-6.2 9.5-5.2 1.2-1.7 3.3-2.7 5.5-2.4 3.9.5 6.7 4 6.2 7.9 2.1 1.2 3.4 3.5 3.1 6-.5 3.8-4.2 6.6-8.2 6.1-1.2 1.5-3.2 2.4-5.3 2.1-2.3-.3-4.2-1.9-5-4.1z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="34" r="1.5" fill="currentColor" />
            <circle cx="13" cy="38" r="1.3" fill="currentColor" />
          </svg>
        );
      case "pulse":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M11 24h7l3-6 5 13 4-9 2 2h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "person":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="24" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M15.5 34c1.8-4.5 6-7 8.5-7s6.7 2.5 8.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "cloud":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M17 28h14a4.5 4.5 0 0 0 .2-9 6.5 6.5 0 0 0-12.4-1.4A5 5 0 0 0 17 28z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="18" cy="33" r="1.4" fill="currentColor" />
            <circle cx="24" cy="35" r="1.4" fill="currentColor" />
            <circle cx="30" cy="33" r="1.4" fill="currentColor" />
          </svg>
        );
      case "alert":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M24 14l11 19H13l11-19z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M24 21v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="24" cy="30.5" r="1.3" fill="currentColor" />
          </svg>
        );
      case "heartPulse":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M24 34s-8-4.8-11-9.3c-2.2-3.2-1.1-7.7 2.8-9.2 2.8-1 5.2.1 6.7 2.3 1.5-2.2 3.9-3.3 6.7-2.3 3.9 1.5 5 6 2.8 9.2C32 29.2 24 34 24 34z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16.5 24h4l2-3 3.2 6 2.1-3H31.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "hand":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M18 31V18a2 2 0 1 1 4 0v8-11a2 2 0 1 1 4 0v10-9a2 2 0 1 1 4 0v10-7a2 2 0 1 1 4 0v10c0 5-3.5 7-8 7-5.5 0-8-2.8-8-5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "arrows":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M14 19l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 19l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 19l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "leaf":
        return (
          <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M24 33V18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M23 22c-4-1-7-4.4-8-9 4.7 0 8.2 2.1 9.7 5.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M25 19.5c1.7-3.5 5.1-5.5 9.7-5.5-.8 4.4-3.7 7.7-8 8.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  }
  
  function GroupHeader({ title, icon }) {
    return (
      <div className="services-group-header">
        <Icon name={icon} className="services-group-icon" />
        <div>
          <h3>{title}</h3>
          <div className="services-group-divider">
            <span />
            <span className="leaf-dot">❦</span>
            <span />
          </div>
        </div>
      </div>
    );
  }
  
  function ConcernCard({ title, blurb, icon }) {
    return (
      <article className="concern-card">
        <div className="concern-card__iconWrap">
          <Icon name={icon} className="concern-card__icon" />
        </div>
        <div className="concern-card__content">
          <h4>{title}</h4>
          <p>{blurb}</p>
        </div>
      </article>
    );
  }
  
  export default function ServicesAnxietySection() {
    return (
      <section className="services-anxiety-section">
        <div className="container">
          <div className="services-anxiety-intro">
            <h2>Anxiety can show up in many different ways.</h2>
            <p>
              It can influence your thoughts, emotions, body sensations, and the
              behaviors you develop to cope or stay safe. Cognitive Behavioral
              Therapy (CBT), Exposure and Response Prevention (ERP), and
              Acceptance and Commitment Therapy (ACT) can help you understand
              these patterns and develop new ways of responding.
            </p>
          </div>
  
          <div className="services-groups-grid">
            {groups.map((group) => (
              <section className="services-group" key={group.title}>
                <GroupHeader title={group.title} icon={group.icon} />
                <div className="services-group-cards">
                  {group.items.map((item) => (
                    <ConcernCard
                      key={item.title}
                      title={item.title}
                      blurb={item.blurb}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
  
          <div className="coordination-callout">
            <div className="coordination-callout__icon">
              <Icon name="leaf" className="coordination-icon-svg" />
            </div>
            <p>
              At your request, I am happy to coordinate with other members of your
              treatment team, including other doctors or therapists who may be
              involved in your care.
            </p>
          </div>
        </div>
  
        <div className="services-cta-band">
          <div className="container services-cta-band__inner">
            <div className="services-cta-band__branch" aria-hidden="true">
              <span className="branch-stem" />
              <span className="branch-leaf leaf-1" />
              <span className="branch-leaf leaf-2" />
              <span className="branch-leaf leaf-3" />
              <span className="branch-leaf leaf-4" />
              <span className="branch-leaf leaf-5" />
            </div>
  
            <div className="services-cta-band__content">
              <h3>Everyone’s journey is unique.</h3>
              <p>Therapy is tailored to you—not a one-size-fits-all formula.</p>
            </div>
  
            <div className="services-cta-band__action">
              <a href="/contact" className="button button--sage">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }