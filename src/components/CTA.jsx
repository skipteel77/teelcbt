import { Link } from "react-router-dom";
import CtaBranch from "./CtaBranch";

export default function CTA({
  title,
  children,
  buttonText = "Schedule a Consultation",
  to = "/contact",
}) {
  return (
    <section className="cta">
      <CtaBranch />
      <div className="container cta-grid">
        <div>
          <h2 className="h2">{title}</h2>
          {children && <p>{children}</p>}
        </div>
        <div className="cta-actions">
          <Link className="btn btn-primary" to={to}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
