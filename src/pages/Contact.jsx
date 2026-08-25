import { useState } from 'react'
import PageHero from '../components/PageHero'
import CtaBranch from '../components/CtaBranch'
import { LocationIcon, PhoneIcon, EmailIcon } from '../components/Icons'

export default function Contact() {
  const [status,setStatus] = useState('')
  function submit(e) { e.preventDefault(); setStatus('Thanks — this demo form is not connected yet. Replace it with the practice’s approved secure workflow before launch.') }
  return <>
    <PageHero eyebrow="Contact" title="Get in Touch">Reach out to schedule a consultation or ask a practical question about the practice.</PageHero>
    <section className="section white"><div className="container contact-grid"><div><h2 className="h2">Let’s see if we’re a good fit.</h2><p className="lead">This draft uses placeholder contact information. Before launch, connect the primary CTA to Karen’s secure scheduling or practice-management system.</p><div className="contact-list"><div className="contact-line"><LocationIcon/><div><strong>Location</strong><span>New York • add final office location</span></div></div><div className="contact-line"><PhoneIcon/><div><strong>Phone</strong><span>(555) 555-0198</span></div></div><div className="contact-line"><EmailIcon/><div><strong>Email</strong><span>hello@drteelcbt.com</span></div></div></div></div>
      <form className="form" onSubmit={submit}><div className="form-grid"><div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required/></div><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required/></div><div className="field full"><label htmlFor="phone">Phone (optional)</label><input id="phone" name="phone" type="tel"/></div><div className="field full"><label htmlFor="message">How can I help?</label><textarea id="message" name="message"></textarea></div></div><p className="form-note">Please don’t include sensitive clinical, medical, or emergency information in this website form. Connect the final site to the practice’s approved secure workflow.</p><button className="btn btn-primary" type="submit">Send Message</button><div className="form-status" aria-live="polite">{status}</div></form></div></section>
    <section className="cta"><CtaBranch /><div className="container"><h2 className="h2">Finding the right therapist matters.</h2><p>Once the scheduling workflow is finalized, this area can point directly to a secure consultation booking page.</p></div></section>
  </>
}
