import { places } from "../data/places";
import { events } from "../data/events";
import EventCard from "../components/EventCard";

const features = [
  { icon: "⌖", title: "Campus Navigator", text: "Find faculties, lecture halls, offices and useful facilities.", page: "navigator" },
  { icon: "▤", title: "Student Marketplace", text: "Discover food, printing, laundry and other local services.", page: "marketplace" },
  { icon: "▦", title: "Events & Notices", text: "Keep up with workshops, campus activities and notices.", page: "events" },
  { icon: "✓", title: "Student Dashboard", text: "Track tasks, deadlines and places you want to revisit.", page: "dashboard" }
];
function Home({ go, onSelectPlace }) {
  return <>
    <section className="hero"><div className="hero-shade"></div><div className="hero-content"><span className="eyebrow">THE STUDENT COMPANION</span><h1>Find your place.<br/><em>Find your people.</em></h1><p>Navigate campus, discover student services, keep up with events and organise your student life — all in one place.</p><div className="hero-actions"><button className="button light" onClick={() => go("navigator")}>Explore campus ↗</button><button className="button clear" onClick={() => go("marketplace")}>Discover services</button></div><div className="hero-note">📍 University of Nigeria, Nsukka <span>•</span> Built for students</div></div></section>
    <section className="section"><div className="section-heading"><div><span className="eyebrow green">ONE CAMPUS, MANY POSSIBILITIES</span><h2>Everything you need, in one place.</h2><p>Spend less time searching and more time making the most of campus life.</p></div></div><div className="feature-grid">{features.map((feature) => <button className="feature-card" key={feature.title} onClick={() => go(feature.page)}><span className="feature-icon">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p><span className="arrow">Explore →</span></button>)}</div></section>
    <section className="section tinted"><div className="section-heading row"><div><span className="eyebrow green">EXPLORE THE CAMPUS</span><h2>Where do you need to go?</h2><p>Browse popular locations and see directions.</p></div><button className="button outline" onClick={() => go("navigator")}>Open navigator →</button></div><div className="mini-grid">{places.slice(0, 4).map((place) => <button className="place-mini" key={place.id} onClick={() => { onSelectPlace(place.id); go("navigator"); }}><span>⌖</span><div><b>{place.name}</b><small>{place.category} · {place.area}</small></div><strong>→</strong></button>)}</div></section>
    <section className="section"><div className="section-heading row"><div><span className="eyebrow green">WHAT'S HAPPENING</span><h2>Campus life, at a glance.</h2><p>Keep an eye on upcoming student activities.</p></div><button className="button outline" onClick={() => go("events")}>All events →</button></div><div className="event-grid">{events.map((event) => <EventCard key={event.title} event={event} showSave={false} />)}</div></section>
  </>;
}
export default Home;
