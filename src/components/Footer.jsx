import { Link } from 'react-router-dom'
import { LocationIcon, PhoneIcon, EmailIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="footer-logo" to="/" aria-label="Teel CBT home">
              <img className="footer-logo-mark" src="/assets/logo-mark.png" alt="" />
              <img className="footer-logo-word" src="/assets/logo-wordmark.png" alt="Teel CBT" />
            </Link>
            <p>Dr. Karen Teel</p>
            <p>Evidence-based psychotherapy</p>
          </div>
          <div>
            <div className="footer-title">Explore</div>
            <div className="footer-links">
              <Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/approach">Approach</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">Contact</div>
            <div className="footer-contact">
              <div><LocationIcon/><span>New York<br/>In-person &amp; virtual options</span></div>
              <div><PhoneIcon/><span>(555) 555-0198</span></div>
              <div><EmailIcon/><span>hello@drteelcbt.com</span></div>
            </div>
          </div>
          <div className="footer-note">Evidence-based care.<br/>Compassionate support.<br/>Lasting change.</div>
        </div>
        <div className="footer-bottom"><span>© 2026 Teel CBT. Draft site.</span><span>Privacy Policy &nbsp;&nbsp; Notice of Privacy Practices</span></div>
      </div>
    </footer>
  )
}
