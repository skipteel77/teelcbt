import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

export default function About() {
  return <>
    <PageHero eyebrow="About Dr. Teel" title="Meet Dr. Karen Teel">A collaborative, practical, and compassionate approach to helping people understand what’s keeping them stuck and move toward meaningful change.</PageHero>
    <section className="section white">
      <div className="container">
        <div className="split reverse">
          <div className="copy">
            <h2 className="h2">A space to feel <span className="sage-text">heard and understood.</span></h2>
            <p>Karen Teel, Ph.D. is a licensed clinical psychologist specializing in treating anxiety disorders in children, teens and adults. She takes a collaborative approach to treatment that is warm, empathic, and importantly, goal-oriented and developmentally sensitive so that the work is tailored to each individual’s unique need. Dr. Teel works using a style of therapy called Cognitive Behavior Therapy (CBT), a short term, evidence-based therapy shown to be effective in helping people with a wide range of challenges having to do with stress, anxiety and mood. She also works with people who are struggling through transitions in their lives, whether it’s changes in relationships or life circumstances, or difficulties stemming from social isolation. Her goal is to help people by forming a strong alliance and providing practical and reasonable advice and strategies.</p>
            <p>Dr. Teel earned her Ph.D. in clinical psychology from Teachers College, Columbia University, and completed her Postdoctoral Fellowship training at the New York State Psychiatric Institute (NYSPI) of Columbia University Medical Center. She is an Adjunct Assistant Professor of Psychology in Education at Teachers College, Columbia University, and continues to work on research protocols at NYSPI. Dr. Teel also holds a M.A. degree in Developmental Psychology with a concentration in Risk, Resilience and Development, from Teachers College, Columbia University. Dr. Teel has co-authored articles in journals including “Developmental Psychology”, and a chapter in “Treating Adolescent Depression.”</p>
          </div>
          <div className="image-card">
            <img src="/assets/hero-karen.png" alt="Portrait placeholder for Dr. Karen Teel"/>
          </div>
        </div>
        <div className="value-row">
          <div className="value">
            <div className="icon-badge text-icon">↔</div>
            <h3 className="h3">Collaborative</h3>
            <p>We work together as a team to achieve your goals.</p>
          </div>
          <div className="value">
            <div className="icon-badge text-icon">◒</div>
            <h3 className="h3">Evidence-Based</h3>
            <p>Approaches grounded in proven research and clinical practice.</p>
          </div>
          <div className="value">
            <div className="icon-badge text-icon">♡</div>
            <h3 className="h3">Compassionate</h3>
            <p>A supportive, nonjudgmental space to grow and heal.</p>
          </div>
        </div>
        <div className="two-col-lists">
          <div>
            <h2 className="h3">Education &amp; Training</h2>
            <ul className="list-clean">
              <li>Doctoral training — verify exact degree/program</li>
              <li>Specialized training in Cognitive Behavioral Therapy</li>
              <li>Ongoing continuing education in evidence-based treatment</li>
            </ul>
          </div>
          <div>
            <h2 className="h3">Licensure &amp; Professional Affiliations</h2>
            <ul className="list-clean">
              <li>New York licensure details — add before launch</li>
              <li>Professional memberships — add as appropriate</li>
              <li>Areas of specialty — confirm final list</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <CTA title="Ready to get started?">A brief consultation is a simple way to see whether we’re a good fit.</CTA>
  </>
}
