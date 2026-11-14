import { places } from "../data/places";
import { products } from "../data/products";
import { events } from "../data/events";
import PageIntro from "../components/PageIntro";
function Admin() {
  const rows = [["Campus locations", places.length], ["Marketplace listings", products.length], ["Events", events.length]];
  return <><PageIntro title="Admin Dashboard" text="A simple preview of how campus content could be managed."/><section className="section page-section"><div className="stats-grid"><div className="stat-card"><span>LOCATIONS</span><b>{places.length}</b><small>Demo entries</small></div><div className="stat-card"><span>VENDORS / SERVICES</span><b>{products.length}</b><small>Demo listings</small></div><div className="stat-card"><span>EVENTS</span><b>{events.length}</b><small>Demo entries</small></div></div><div className="panel"><h2>Content overview</h2><p></p><div className="admin-list">{rows.map(([label, count]) => <div className="saved-row" key={label}><span>▤</span><b className="grow">{label}</b><small>{count}</small></div>)}</div></div></section></>;
}
export default Admin;
