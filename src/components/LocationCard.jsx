function LocationCard({ place, selected, isSaved, onSelect, onSave }) {
  return (
    <article className={selected ? "location-card selected" : "location-card"} onClick={() => onSelect(place.id)}>
      <span className="location-symbol">⌖</span>
      <div className="grow"><span className="tag">{place.category}</span><h3>{place.name}</h3><p>{place.description}</p><small>{place.area}</small></div>
      <button className="save-button" aria-label="Save location" onClick={(event) => { event.stopPropagation(); onSave(place.id); }}>{isSaved ? "★" : "☆"}</button>
    </article>
  );
}
export default LocationCard;
