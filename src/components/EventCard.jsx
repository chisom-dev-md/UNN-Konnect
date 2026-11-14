function EventCard({ event, onSave, isSaved, showSave = true }) {
  const month = new Date(event.date + "T12:00:00").toLocaleString("en", { month: "short" });
  return <article className="event-card"><div className="event-date"><b>{event.date.slice(8)}</b><span>{month}</span></div><span className="tag">{event.category}</span><h3>{event.title}</h3><p>{event.description}</p><small>◷ {event.time}　⌖ {event.venue}</small>{showSave && <button className="button outline full event-save" onClick={onSave}>{isSaved ? "★ Saved" : "☆ Save event"}</button>}</article>;
}
export default EventCard;
