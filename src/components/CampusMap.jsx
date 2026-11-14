function CampusMap({ places, selected, onSelect, current, isSaved, onSave }) {
  return (
    <aside className="map-panel">
      <div className="map-title"><div><h3>Illustrated campus map</h3><p>Select a marker to view a location.</p></div><span>⌖</span></div>
      <svg className="campus-map" viewBox="0 0 100 90" role="img" aria-label="Illustrated campus map">
        <rect width="100" height="90" fill="#eaf2e5" />
        <path d="M0 45 Q25 42 42 48 T100 39 M18 0 Q23 25 42 48 T60 90 M0 75 Q42 70 100 80" fill="none" stroke="#c6d9bd" strokeWidth="4" />
        <path d="M4 8 L95 83 M8 86 L90 10" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        {places.map((place) => <g key={place.id} onClick={() => onSelect(place.id)} style={{ cursor: "pointer" }}><circle cx={place.x} cy={place.y} r={selected === place.id ? 3.3 : 2.3} fill={selected === place.id ? "#17663d" : "white"} stroke="#17663d" strokeWidth="1" />{selected === place.id && <text x={place.x} y={place.y - 4} textAnchor="middle" fontSize="2.7" fontWeight="bold" fill="#173c2b">{place.name}</text>}</g>)}
        <rect x="4" y="80" width="12" height="5" rx="1" fill="#173c2b" /><text x="10" y="83.5" fontSize="2.5" textAnchor="middle" fill="white">Gate</text>
      </svg>
      <div className="selected-place"><span className="eyebrow green">SELECTED LOCATION</span><h3>{current.name}</h3><p>{current.description}</p><p><b>Area:</b> {current.area}</p><p><b>Directions:</b> {current.directions}</p><button className="button outline full" onClick={() => onSave(current.id)}>{isSaved ? "★ Saved location" : "☆ Save location"}</button></div>
    </aside>
  );
}
export default CampusMap;
