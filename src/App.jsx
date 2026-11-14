import { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CampusNavigator from "./pages/CampusNavigator";
import Marketplace from "./pages/Marketplace";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobile, setMobile] = useState(false);
  const [selected, setSelected] = useState(1);
  const [saved, setSaved] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review lecture notes", due: "2026-11-01", done: false },
    { id: 2, title: "Prepare for class", due: "2026-11-23", done: false }
  ]);

const page =
  location.pathname === "/UNN-Konnect/" || location.pathname === "/"
    ? "home"
    : location.pathname.replace("/UNN-Konnect/", "").replace("/", "");

  const go = (nextPage) => {
    const path = nextPage === "home" ? "/" : `/${nextPage}`;
    navigate(path);
    window.scrollTo(0, 0);
  };

  const toggleItem = (list, setList, item) => {
    setList((previous) =>
      previous.includes(item)
        ? previous.filter((value) => value !== item)
        : [...previous, item]
    );
  };

  const toggleSaved = (item) => toggleItem(saved, setSaved, item);
  const toggleFavorite = (item) => toggleItem(favorites, setFavorites, item);

  return (
    <div className="app">
      <Header page={page} go={go} mobile={mobile} setMobile={setMobile} />
      <main>
        <Routes>
          <Route path="/" element={<Home go={go} onSelectPlace={setSelected} />} />
          <Route path="/navigator" element={<CampusNavigator saved={saved} toggleSaved={toggleSaved} selected={selected} setSelected={setSelected} />} />
          <Route path="/marketplace" element={<Marketplace favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/events" element={<Events saved={saved} toggleSaved={toggleSaved} />} />
          <Route path="/dashboard" element={<Dashboard saved={saved} toggleSaved={toggleSaved} favorites={favorites} tasks={tasks} setTasks={setTasks} go={go} />} />
          <Route path="/admin" element={<Admin />} />
          
          <Route path="*" element={<h1>Oops, 404. Page not found</h1>} />
        </Routes>
      </main>
      <Footer go={go} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/UNN-Konnect">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;