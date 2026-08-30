import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/approach', 'Approach'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" to="/" aria-label="Teel CBT home">
          <img src="/assets/logo-horizontal.png" alt="Teel CBT" />
        </Link>
        <button className="menu-btn" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>☰</button>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => isActive ? 'active' : undefined}>{label}</NavLink>
          ))}
          <Link className="btn btn-primary" to="/contact">Schedule a Consultation</Link>
        </nav>
      </div>
    </header>
  )
}
