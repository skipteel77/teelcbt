import { Link } from "react-router-dom";
import { LocationIcon, PhoneIcon, EmailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="footer-logo" to="/" aria-label="Teel CBT home">
              <img
                className="footer-logo-mark"
                src="/assets/logo-mark.png"
                alt=""
              />
              <img
                className="footer-logo-word"
                src="/assets/logo-wordmark.png"
                alt="Teel CBT"
              />
            </Link>
            <p>Dr. Karen Teel</p>
            <p>Evidence-based psychotherapy for anxiety</p>
          </div>
          <div>
            <div className="footer-title">Explore</div>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/approach">Approach</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">Contact</div>
            <div className="footer-contact">
              <div>
                <LocationIcon />
                <span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=151+E.+80th+Street,+Suite+1B,+New+York,+NY+10075"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    151 E. 80th Street, Suite 1B
                    <br />
                    New York, NY 10075
                  </a>
                  <br />
                  In-person &amp; virtual options
                </span>
              </div>
              <div>
                <PhoneIcon />
                <span>516-524-0822</span>
              </div>
              <div>
                <EmailIcon />
                <a href="mailto:drteel@teelcbt.com">drteel@teelcbt.com</a>
              </div>
            </div>
          </div>
          <div className="footer-note">
            Evidence-based care.
            <br />
            Compassionate support.
            <br />
            Lasting change.
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Teel CBT.</span>
          <span>
            <Link to="/privacy-policy">Privacy Policy</Link> &nbsp;&nbsp;{" "}
            <Link to="/notice-of-privacy-practices">
              Notice of Privacy Practices
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
