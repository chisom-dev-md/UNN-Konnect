import { useState } from "react";
import { events } from "../data/events";
import PageIntro from "../components/PageIntro";
import EventCard from "../components/EventCard";
function Events({ saved, toggleSaved }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(events.map((event) => event.category))];
  const filteredEvents = events.filter((event) => (category === "All" || event.category === category) && `${event.title} ${event.description} ${event.venue}`.toLowerCase().includes(search.toLowerCase()));
  return <><PageIntro title="Events & Announcements" text="Discover upcoming activities and stay aware of important campus information."/><section className="section page-section"><div className="toolbar"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search events or venues..."/><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></div><div className="event-grid">{filteredEvents.map((event) => <EventCard key={event.title} event={event} isSaved={saved.includes(event.title)} onSave={() => toggleSaved(event.title)}/>)}</div><div className="notice-section"><span className="eyebrow green">CAMPUS NOTICES</span><h2>Stay informed.</h2><p>Official notices, deadlines and service updates can be added here once verified.</p><b><p>All returning students should resume on or before November 23</p></b><div className="notice"><p>Always confirm academic deadlines and official announcements through the University's recognised channels.</p></div></div></section></>;
}
export default Events;
