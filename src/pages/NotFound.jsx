import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="container">
        <div className="eyebrow">404</div>
        <h1 className="h1">Page not found</h1>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <Link className="btn btn-primary" to="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
