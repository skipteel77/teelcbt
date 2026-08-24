import { useState } from 'react'
import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const faqs = [
  ['Do you offer in-person or virtual sessions?', 'Draft answer: add Karen’s actual in-person location and the states in which she can provide telehealth.'],
  ['Where are you located?', 'Draft answer: add the office location and parking/transit details if useful.'],
  ['What are your fees?', 'Draft answer: add session fee, accepted payment methods, and any sliding-scale policy.'],
  ['Do you accept insurance?', 'Draft answer: explain in-network/out-of-network status and whether superbills are available.'],
  ['How long are sessions?', 'Draft answer: specify standard session length and any extended-session options.'],
  ['How often will we meet?', 'Many clients begin weekly, but frequency should be based on clinical needs and goals.'],
  ['What happens during the first session?', 'The first session is typically focused on what brings you in, relevant history, priorities, and what you hope to get from therapy.'],
  ['How do I schedule an appointment?', 'Use the consultation button to connect this site to Karen’s final secure scheduling workflow.'],
]
export default function FAQ() {
  const [open, setOpen] = useState(null)
  return <>
    <PageHero eyebrow="FAQ" title="Frequently Asked Questions">A few practical details to help you know what to expect.</PageHero>
    <section className="section white"><div className="container"><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${open===i?'open':''}`} key={q}><button className="faq-q" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}><span>{q}</span><span>+</span></button><div className="faq-a">{a}</div></div>)}</div></div></section>
    <CTA title="Still have questions?" buttonText="Contact Dr. Teel">I’m happy to help clarify the practical details before you schedule.</CTA>
  </>
}
