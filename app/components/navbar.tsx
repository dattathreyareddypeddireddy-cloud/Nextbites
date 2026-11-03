





import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="brand-icon">🍴</span>
          <span>Next<span className="brand-highlight">Bites</span></span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <a href="/#recipes">Explore</a>
          <a href="https://github.com/kalviumcommunity/nextbites"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>

        <Link href="/#recipes" className="nav-cta">
          Find Recipes →
        </Link>
      </div>
    </header>
  );
}