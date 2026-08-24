import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const services = [
  ['⌁','Anxiety','Reduce worry and panic, manage physical symptoms, and build confidence in situations that feel difficult.'],
  ['☼','Stress & Burnout','Manage overwhelm, set boundaries, recover from chronic stress, and create healthier balance.'],
  ['◡','Depression','Improve mood, increase motivation, reconnect with what matters, and restore a sense of possibility.'],
  ['◇','Life Transitions','Navigate change, uncertainty, career shifts, relationships, and new stages of life.'],
  ['♡','Relationships','Strengthen communication, understand recurring patterns, and build healthier connections.'],
  ['✦','Self-Esteem','Challenge harsh self-talk, build self-compassion, and develop a steadier sense of confidence.'],
]
export default function Services() {
  return <>
    <PageHero eyebrow="Services" title="How I Can Help">Therapy tailored to the concerns, goals, and life circumstances that matter most to you.</PageHero>
    <section className="section white"><div className="container"><div className="cards">{services.map(([icon,title,text]) => <article className="card" key={title}><div className="icon-badge text-icon">{icon}</div><h2 className="h3">{title}</h2><p>{text}</p></article>)}</div></div></section>
    <CTA title="Everyone’s journey is unique.">Therapy is tailored to you—not a one-size-fits-all formula.</CTA>
  </>
}
