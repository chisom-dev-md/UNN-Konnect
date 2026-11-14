import { useState } from "react";
import { products } from "../data/products";
import PageIntro from "../components/PageIntro";
import ProductCard from "../components/ProductCard";

function Marketplace({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  

  const [vendorName, setVendorName] = useState("");
  const [vendorPhone, setVendorPhone] = useState("");
  const [vendorMessage, setVendorMessage] = useState("");
  
  
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  
  const getRandomPhone = () => `+234 80${Math.floor(10000000 + Math.random() * 90000000)}`;
  const getRandomEmail = (name) => `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}@unnconnect.ng`;

  
  const [localProducts, setLocalProducts] = useState(
    products.map((p) => ({
      ...p,
      contact: {
        phone: getRandomPhone(),
        email: getRandomEmail(p.vendor),
      },
    }))
  );

  const categories = ["All", ...new Set(localProducts.map((product) => product.category))];
  
  const filteredProducts = localProducts.filter(
    (product) =>
      (category === "All" || product.category === category) &&
      `${product.name} ${product.vendor} ${product.category} ${product.area} ${product.description}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  
  const enquire = (product) => {
    setSelectedContact(product);
    setShowContactModal(true);
  };

  
  const submitVendor = (event) => {
    event.preventDefault();
    
    const newService = {
      name: vendorMessage || vendorName,
      vendor: vendorName,
      category: "Student Services",
      area: "UNN Main Campus",
      description: vendorMessage || "Newly added campus service",
      contact: {
        phone: vendorPhone,
        email: getRandomEmail(vendorName),
      },
    };

    // Add to local state so it renders immediately
    setLocalProducts((prev) => [...prev, newService]);
    
    alert("Application received! Your service has been added to the marketplace.");
    
    // Reset form
    setVendorName("");
    setVendorPhone("");
    setVendorMessage("");
  };

  return (
    <>
      <PageIntro 
        title="Vendors & Student Services" 
        text="Discover useful campus services, compare prices and learn where to find them." 
      />
      
      <section className="section page-section">
        <div className="toolbar">
          <input 
            value={search} 
            onChange={(event) => setSearch(event.target.value)} 
            placeholder="Search products, services or vendors..." 
          />
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={`${product.vendor}-${index}`} 
              product={product} 
              index={index} 
              isFavorite={favorites.includes(product.name)} 
              onFavorite={() => toggleFavorite(product.name)} 
              onEnquire={enquire}
            />
          ))}
        </div>

        <div className="vendor-form" id="vendor-form">
          <div>
            <span className="eyebrow green">ARE YOU A CAMPUS VENDOR?</span>
            <h2>List your service on UNN-Konnect.</h2>
            <p>Submit your details to add your service to the marketplace.</p>
          </div>
          <form onSubmit={submitVendor}>
            <label>
              Business name
              <input 
                required 
                value={vendorName} 
                onChange={(event) => setVendorName(event.target.value)} 
                placeholder="Your business name" 
              />
            </label>
            <label>
              Phone or WhatsApp
              <input 
                required 
                value={vendorPhone} 
                onChange={(event) => setVendorPhone(event.target.value)} 
                placeholder="Your contact number" 
              />
            </label>
            <label>
              Service / message
              <input 
                value={vendorMessage} 
                onChange={(event) => setVendorMessage(event.target.value)} 
                placeholder="What do you offer?" 
              />
            </label>
            <button className="button primary" type="submit">Submit & Add Service</button>
          </form>
        </div>
      </section>

      {/* Contact Details Modal */}
      {showContactModal && selectedContact && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', 
            alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            padding: '1rem'
          }}
          onClick={() => setShowContactModal(false)}
        >
          <div 
            style={{
              background: 'white', padding: '2rem', borderRadius: '12px', 
              maxWidth: '400px', width: '100%', position: 'relative',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowContactModal(false)} 
              style={{
                position: 'absolute', top: '10px', right: '15px', 
                background: 'none', border: 'none', fontSize: '1.8rem', 
                cursor: 'pointer', color: '#666', lineHeight: 1
              }}
            >
              &times;
            </button>
            
            <h3 style={{ marginTop: 0, color: '#2d6a4f' }}>Contact {selectedContact.vendor}</h3>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              {selectedContact.name}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <p>
                <strong>📞 Phone / WhatsApp:</strong>
                <br />
                <a href={`https://wa.me/${selectedContact.contact.phone.replace(/\s+/g, '')}`} style={{ color: '#25D366', textDecoration: 'none' }}>
                  {selectedContact.contact.phone}
                </a>
              </p>
              <p>
                <strong>✉️ Email:</strong>
                <br />
                <a href={`mailto:${selectedContact.contact.email}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
                  {selectedContact.contact.email}
                </a>
              </p>
              <p>
                <strong>📍 Location:</strong> {selectedContact.area}
              </p>
            </div>
            
            <button 
              onClick={() => setShowContactModal(false)} 
              className="button primary" 
              style={{ width: '100%', marginTop: '1.5rem' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Marketplace;