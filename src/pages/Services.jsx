import PageHero from "../components/PageHero";
import ServicesAnxietySection from "../components/ServicesAnxietySection";
import CTA from "../components/CTA";

// const services = [
//   ['⌁','Anxiety','Reduce worry and panic, manage physical symptoms, and build confidence in situations that feel difficult.'],
//   ['☼','Stress & Burnout','Manage overwhelm, set boundaries, recover from chronic stress, and create healthier balance.'],
//   ['◡','Depression','Improve mood, increase motivation, reconnect with what matters, and restore a sense of possibility.'],
//   ['◇','Life Transitions','Navigate change, uncertainty, career shifts, relationships, and new stages of life.'],
//   ['♡','Relationships','Strengthen communication, understand recurring patterns, and build healthier connections.'],
//   ['✦','Self-Esteem','Challenge harsh self-talk, build self-compassion, and develop a steadier sense of confidence.'],
// ]

const services = [
  [
    "⌁",
    "Excessive Worry / Obsessional Thinking",
    "Reduce worry and panic, manage physical symptoms, and build confidence in situations that feel difficult.",
  ],
  [
    "☼",
    "Nervousness",
    "Manage overwhelm, set boundaries, recover from chronic stress, and create healthier balance.",
  ],
  [
    "◡",
    "High Self-Criticism / Perfectionism",
    "Improve mood, increase motivation, reconnect with what matters, and restore a sense of possibility.",
  ],
  [
    "◇",
    "Feeling Overwhelmed / Panic / Dread",
    "Navigate change, uncertainty, career shifts, relationships, and new stages of life.",
  ],
  [
    "♡",
    "Phobias / Fears",
    "Strengthen communication, understand recurring patterns, and build healthier connections.",
  ],
];

const services2 = [
  [
    "⌁",
    "Compulsive Behaviors",
    "Reduce worry and panic, manage physical symptoms, and build confidence in situations that feel difficult.",
  ],
  [
    "☼",
    "Tics / Repetitive Movements",
    "Manage overwhelm, set boundaries, recover from chronic stress, and create healthier balance.",
  ],
  [
    "◡",
    "Freezing / Avoidance",
    "Improve mood, increase motivation, reconnect with what matters, and restore a sense of possibility.",
  ],
  [
    "◇",
    "Impulsivity",
    "Navigate change, uncertainty, career shifts, relationships, and new stages of life.",
  ],
  [
    "♡",
    "Physical Panic Symptoms",
    "Strengthen communication, understand recurring patterns, and build healthier connections.",
  ],
];
export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="How I Can Help">
        Therapy tailored to your concerns, goals, and life circumstances
      </PageHero>
      <ServicesAnxietySection />
      {/* <section className="section white">
      <div className="container">
        <h2 class='h3' style={{paddingBottom: '40px'}}>Anxiety isn't a bad word. Some anxiety can be helpful, useful, even protective. When anxiety is too high, however, it becomes impairing and often times costly to your wellbeing. That's when it makes sense to seek treatment.<br /><br />Anxiety can show up in thoughts, emotions, physical sensations, and patterns of behavior. CBT and related approaches - including Exposure and Response Prevention (ERP) and Acceptance and Commitment Therapy (ACT) - can help you better understand these patterns and develop new ways of responding to them. </h2>
        <div className="cards">{services.map(([icon,title,text]) => <article className="card" key={title}><h2 className="h3">{title}</h2><p>{text}</p></article>)}</div>
        <div className="cards" style={{marginTop: '40px'}}>{services2.map(([icon,title,text]) => <article className="card" key={title}><h2 className="h3">{title}</h2><p>{text}</p></article>)}</div>
        <h2 class='h3' style={{paddingTop: '40px'}}>At your request I am happy to coordinate with other members of your treatment team, including other doctors or therapists who may be involved in your care.</h2>
      </div>
    </section> */}
    </>
  );
}
