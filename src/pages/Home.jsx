import { Link } from 'react-router-dom'
import { LeafIcon, CompassIcon, TargetIcon, SearchIcon, SproutIcon, SunIcon } from '../components/Icons'
import CbtLoop from '../components/CbtLoop'
import CtaBranch from '../components/CtaBranch'

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-media"><img src="/assets/hero-karen.jpg" alt="Dr. Karen Teel seated in her office" /></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="display">Helping you move<br/>forward with <span>clarity</span><br/>and <span>confidence</span>.</h1>
          <p>Evidence-based psychotherapy for children, teens, and adults navigating anxiety, stress, life transitions, and the patterns that keep them feeling stuck.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">Schedule a Consultation</Link>
            <Link className="btn btn-secondary" to="/approach">Learn About My Approach</Link>
          </div>
          <div className="hero-credential"><span className="leaf" aria-hidden="true"></span><div><strong>Karen Teel, PhD.</strong><small>Licensed Psychologist</small></div></div>
        </div>
      </div>
    </section>

    <section className="soft-strip">
      <div className="container">
        <h2 className="strip-title">We can learn and practice skills together.</h2>
        <div className="three-grid">
          <article className="feature"><div className="icon-badge"><LeafIcon/></div><div><h3 className="h3">Anxiety &amp; Stress</h3><p>Quiet the constant worry and develop practical ways to respond differently to stress.</p></div></article>
          <article className="feature"><div className="icon-badge"><CompassIcon/></div><div><h3 className="h3">Life Transitions</h3><p>Navigate change, uncertainty, relationships, career decisions, and new stages of life.</p></div></article>
          <article className="feature"><div className="icon-badge"><TargetIcon/></div><div><h3 className="h3">Patterns That Keep You Stuck</h3><p>Understand the connections between your thoughts, emotions, and behaviors - and learn how to change them.</p></div></article>
        </div>
      </div>
    </section>

    <section className="section white compact-about">
      <div className="container split">
        <div className="image-card"><img src="/assets/office.png" alt="Calm psychotherapy office" /></div>
        <div className="copy"><div className="eyebrow">About Dr. Teel</div><h2 className="h2">Therapy should be both <span className="sage-text">supportive and useful.</span></h2>
          <p>I’m Dr. Karen Teel, a Columbia University - trained psychologist specializing in Cognitive Behavioral Therapy. I provide a collaborative and compassionate environment where we can understand what’s getting in your way and develop practical strategies for meaningful change.</p>
          <p>My approach combines evidence-based treatment with therapy tailored to you as an individual - not simply a diagnosis or set of symptoms.</p>
          <Link className="text-link" to="/about">Meet Dr. Teel →</Link>
        </div>
      </div>
    </section>

    <section className="section white compact-top">
      <div className="container">
        <div className="cbt-top">
          <div><div className="eyebrow">Cognitive Behavioral Therapy</div><h2 className="h2">What is CBT?</h2><p className="lead">CBT helps us understand how thoughts, feelings, and behaviors influence one another. Together, we identify patterns that aren’t serving you and develop practical ways to respond differently.</p></div>
          <CbtLoop />
        </div>
        <div className="process">
          <div className="process-item"><div className="process-icon"><SearchIcon/></div><div><h3 className="h3">Understand</h3><p>Recognize the patterns contributing to how you’re feeling.</p></div></div>
          <div className="process-item"><div className="process-icon"><SproutIcon/></div><div><h3 className="h3">Practice</h3><p>Develop concrete skills and new ways of responding.</p></div></div>
          <div className="process-item"><div className="process-icon"><SunIcon/></div><div><h3 className="h3">Change</h3><p>Apply those skills outside of therapy to create lasting change.</p></div></div>
        </div>
      </div>
    </section>

    <section className="path-banner">
      <div><blockquote>Change doesn’t happen all at once.<em>It happens one step at a time.</em></blockquote><div className="divider"><img src="/assets/leaf-divider.png" alt="" /></div></div>
    </section>

    <section className="white"><div className="container steps">
      <article className="step"><div className="step-number">1</div><div><h3 className="h3">We’ll understand what’s happening</h3><p>We’ll talk about what brought you to therapy and identify the patterns affecting your life.</p></div></article>
      <article className="step"><div className="step-number">2</div><div><h3 className="h3">We’ll identify where you want to go</h3><p>Together, we’ll develop meaningful and achievable goals for therapy.</p></div></article>
      <article className="step"><div className="step-number">3</div><div><h3 className="h3">We’ll work toward change</h3><p>You’ll develop strategies you can use both inside and outside of our sessions.</p></div></article>
    </div></section>

    <section className="quote-section">
      <div className="container quote-grid">
        <div className="quote"><div className="quote-mark">“</div><div><blockquote>My goal isn’t simply to help you feel better during our sessions. It’s to help you develop the understanding and skills that allow you to create meaningful change in your life.</blockquote><cite>— Dr. Karen Teel</cite></div></div>
        <div className="quote-image"><img src="/assets/plant-books.png" alt="Eucalyptus branches beside a stack of books" /></div>
      </div>
    </section>

    <section className="cta">
      <CtaBranch />
      <div className="container cta-grid"><div><h2 className="h2">Ready to take the next step?</h2><p>Finding the right therapist matters. A brief consultation gives us an opportunity to talk about what you’re looking for and determine whether working together feels like a good fit.</p></div><div className="cta-actions"><Link className="btn btn-primary" to="/contact">Schedule a Consultation</Link><small>Have a question first? <Link to="/contact">Contact Dr. Teel →</Link></small></div></div>
    </section>
  </>
}
