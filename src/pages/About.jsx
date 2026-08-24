import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

export default function About() {
  return <>
    <PageHero eyebrow="About Dr. Teel" title="Meet Dr. Karen Teel">A collaborative, practical, and compassionate approach to helping people understand what’s keeping them stuck and move toward meaningful change.</PageHero>
    <section className="section white"><div className="container">
      <div className="split reverse"><div className="copy"><h2 className="h2">A space to feel <span className="sage-text">heard and understood.</span></h2><p>I believe therapy works best when it feels collaborative, respectful, and grounded in evidence. I bring both clinical expertise and warmth to help you feel understood and empowered to make meaningful changes.</p><p>My goal is to create a space where you can be yourself, explore what matters most, and build the skills to live a life that feels more aligned with who you are.</p></div><div className="image-card"><img src="/assets/hero-karen.png" alt="Portrait placeholder for Dr. Karen Teel"/></div></div>
      <div className="value-row"><div className="value"><div className="icon-badge text-icon">↔</div><h3 className="h3">Collaborative</h3><p>We work together as a team to achieve your goals.</p></div><div className="value"><div className="icon-badge text-icon">◒</div><h3 className="h3">Evidence-Based</h3><p>Approaches grounded in proven research and clinical practice.</p></div><div className="value"><div className="icon-badge text-icon">♡</div><h3 className="h3">Compassionate</h3><p>A supportive, nonjudgmental space to grow and heal.</p></div></div>
      <div className="two-col-lists"><div><h2 className="h3">Education &amp; Training</h2><ul className="list-clean"><li>Doctoral training — verify exact degree/program</li><li>Specialized training in Cognitive Behavioral Therapy</li><li>Ongoing continuing education in evidence-based treatment</li></ul></div><div><h2 className="h3">Licensure &amp; Professional Affiliations</h2><ul className="list-clean"><li>New York licensure details — add before launch</li><li>Professional memberships — add as appropriate</li><li>Areas of specialty — confirm final list</li></ul></div></div>
    </div></section>
    <CTA title="Ready to get started?">A brief consultation is a simple way to see whether we’re a good fit.</CTA>
  </>
}
