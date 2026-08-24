export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="h1">{title}</h1>
        {children && <p className="lead">{children}</p>}
        <div className="leaf-rule">❧</div>
      </div>
    </section>
  )
}
