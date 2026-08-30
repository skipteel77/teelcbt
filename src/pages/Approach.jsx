import PageHero from '../components/PageHero'
import CTA from '../components/CTA'
import CbtLoop from '../components/CbtLoop'
import { SearchIcon, SproutIcon, SunIcon } from '../components/Icons'

export default function Approach() {
  return <>
    <PageHero eyebrow="My Approach" title="Practical tools. New perspectives. Lasting change.">A collaborative, evidence-based approach that helps you understand patterns, develop skills, and practice meaningful change in everyday life.</PageHero>
    <section className="section white"><div className="container cbt-top"><div><div className="eyebrow">Cognitive Behavioral Therapy</div><h2 className="h2">Thoughts, feelings, and behaviors are connected.</h2><p className="lead">CBT gives us a practical framework for noticing those connections and experimenting with new ways to respond. The work is active, transparent, and tailored to your goals.</p></div><CbtLoop /></div>
      <div className="container process approach-process"><div className="process-item"><div className="process-icon"><SearchIcon/></div><div><h3 className="h3">Understand</h3><p>Build a clearer picture of what’s happening and why.</p></div></div><div className="process-item"><div className="process-icon"><SproutIcon/></div><div><h3 className="h3">Practice</h3><p>Try concrete strategies in and between sessions.</p></div></div><div className="process-item"><div className="process-icon"><SunIcon/></div><div><h3 className="h3">Change</h3><p>Strengthen new patterns until they become more natural.</p></div></div></div>
    </section>
    <section className="path-banner"><blockquote>Small steps can create meaningful change.<em>Progress is something we practice.</em></blockquote></section>
    <section className="section sage"><div className="container split"><div className="copy"><div className="eyebrow">What sessions can feel like</div><h2 className="h2">Warm, focused, and <span className="sage-text">collaborative.</span></h2><p>You can expect curiosity, structure, and practical feedback without therapy feeling rigid or impersonal. We’ll regularly check that the work is useful and aligned with what you want to change.</p></div><div className="image-card"><img src="/assets/session-desk.jpg" alt="Dr. Teel working with a child at a desk"/></div></div></section>
    <CTA title="Want to see if this approach fits?">A consultation is a low-pressure place to start.</CTA>
  </>
}
