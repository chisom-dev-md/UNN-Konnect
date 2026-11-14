import { navigation } from "../data/navigation";

function Header({ page, go, mobile, setMobile }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => go("home")}>
        <img src="/unn-logo.png" alt="UNN Logo" className="brand-icon" />
        <span>UNN-<b>Konnect</b><small>Your campus. Connected.</small></span>
      </button>
      <button className="menu-button" onClick={() => setMobile(!mobile)} aria-label="Toggle menu">☰</button>
      <nav className={mobile ? "nav open" : "nav"}>
        {navigation.map(([label, key]) => (
          <button key={key} className={page === key ? "nav-link active" : "nav-link"} onClick={() => go(key)}>{label}</button>
        ))}
        <button className="admin-link" onClick={() => go("admin")}>Admin</button>
      </nav>
    </header>
  );
}

export default Header;
