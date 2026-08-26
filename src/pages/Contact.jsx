import PageHero from '../components/PageHero'
import CtaBranch from '../components/CtaBranch'
import ContactWidget from '../components/ContactWidget'
import { LocationIcon, PhoneIcon, EmailIcon } from '../components/Icons'

export default function Contact() {
  return <>
    <PageHero eyebrow="Contact" title="Get in Touch">Reach out to schedule a consultation or ask a practical question about the practice.</PageHero>
    <section className="section white"><div className="container contact-grid"><div><h2 className="h2">Let’s see if we’re a good fit.</h2><p className="lead">This draft uses placeholder contact information. Before launch, connect the primary CTA to Karen’s secure scheduling or practice-management system.</p><div className="contact-list"><div className="contact-line"><LocationIcon/><div><strong>Location</strong><span>New York • add final office location</span></div></div><div className="contact-line"><PhoneIcon/><div><strong>Phone</strong><span>(555) 555-0198</span></div></div><div className="contact-line"><EmailIcon/><div><strong>Email</strong><span>hello@drteelcbt.com</span></div></div></div></div>
      <div className="form contact-widget-card"><h3 className="h3">Send a message</h3><p>Access our secure contact form below to share a bit about what you’re looking for, and Dr. Teel will follow up with next steps.</p><ContactWidget /></div></div></section>
    <section className="cta"><CtaBranch /><div className="container"><h2 className="h2">Finding the right therapist matters.</h2><p>Once the scheduling workflow is finalized, this area can point directly to a secure consultation booking page.</p></div></section>
  </>
}
