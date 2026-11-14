import { useMemo, useState } from "react";
import { places } from "../data/places";
import PageIntro from "../components/PageIntro";
import LocationCard from "../components/LocationCard";
import CampusMap from "../components/CampusMap";


function CampusNavigator({ saved, toggleSaved, selected, setSelected }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [mapView, setMapView] = useState(true);
  const categories = ["All", ...new Set(places.map((place) => place.category))];
  const filteredPlaces = useMemo(() => places.filter((place) => (category === "All" || place.category === category) && `${place.name} ${place.category} ${place.area} ${place.description}`.toLowerCase().includes(search.toLowerCase())), [search, category]);
  const current = places.find((place) => place.id === selected) || places[0];
  return <><PageIntro title="Campus Navigator" 
  text="Search campus destinations, explore the illustrated map and get simple directions."/>
  <section className="section page-section">
  <div className="toolbar">
  <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search places, facilities or areas..."/>
  <select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select>
  <button className="button outline" onClick={() => setMapView(!mapView)}>{mapView ? "Hide map" : "Show map"}</button>
  </div><div className={mapView ? "navigator-grid" : "navigator-grid single"}>
  <div><p className="result-count">{filteredPlaces.length} location(s) found</p>
  {filteredPlaces.map((place) => <LocationCard key={place.id} place={place} selected={selected === place.id} isSaved={saved.includes(place.id)} onSelect={setSelected} onSave={toggleSaved} />)}{filteredPlaces.length === 0 && <p className="empty-state">No locations match your search.</p>}</div>{mapView && <CampusMap places={places} selected={selected} onSelect={setSelected} current={current} isSaved={saved.includes(current.id)} onSave={toggleSaved}/>}</div></section></>;
}
export default CampusNavigator;
