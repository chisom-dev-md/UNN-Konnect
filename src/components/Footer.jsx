import { navigation } from "../data/navigation";

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="brand footer-brand"><img
          src={`${import.meta.env.BASE_URL}unn-logo.png`}
          alt="UNN Logo"
          className="brand-icon"
        /><span>UNN-<b>Konnect</b><small>Your campus. Connected.</small></span></div>
        <p>A student project by 𝕮𝖍𝖎𝖘𝖔𝖒 designed to make campus life easier.</p>
        <div><b>Explore</b><div className="footer-links">{navigation.slice(1).map(([label, key]) => <button key={key} onClick={() => go(key)}>{label}</button>)}</div></div>
      </div>
      <div className="footer-bottom">© 2026 UNN-Konnect · Student project prototype <span>Made for campus life.</span></div>
    </footer>
  );
}
export default Footer;
