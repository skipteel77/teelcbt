import PageHero from '../components/PageHero'
import CtaBranch from '../components/CtaBranch'
import ContactWidget from '../components/ContactWidget'
import { LocationIcon, PhoneIcon, EmailIcon } from '../components/Icons'

export default function Contact() {
  return <>
    <PageHero eyebrow="Contact" title="Get in Touch">Reach out to schedule a consultation or ask a practical question about the practice.</PageHero>
    <section className="section white"><div className="container contact-grid"><div><h2 className="h2">Let’s see if we’re a good fit.</h2><p className="lead">Reach out by phone or email, or use the secure form to share a bit about what you’re looking for. In-person and virtual options are available.</p><div className="contact-list"><div className="contact-line"><LocationIcon/><div><strong>Location</strong><span><a href="https://www.google.com/maps/search/?api=1&query=151+E.+80th+Street,+Suite+1B,+New+York,+NY+10075" target="_blank" rel="noopener noreferrer">151 E. 80th Street, Suite 1B<br/>New York, NY 10075</a></span></div></div><div className="contact-line"><PhoneIcon/><div><strong>Phone</strong><span>516-524-0822</span></div></div><div className="contact-line"><EmailIcon/><div><strong>Email</strong><span><a href="mailto:drteel@teelcbt.com">drteel@teelcbt.com</a></span></div></div></div></div>
      <div className="form contact-widget-card"><h3 className="h3">Send a message</h3><p>Access our secure contact form below to share a bit about what you’re looking for, and Dr. Teel will follow up with next steps.</p><ContactWidget /></div></div></section>
    <section className="cta"><CtaBranch /><div className="container"><h2 className="h2">Finding the right therapist matters.</h2><p>Once the scheduling workflow is finalized, this area can point directly to a secure consultation booking page.</p></div></section>
  </>
}
