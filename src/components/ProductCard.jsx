function ProductCard({ product, index, isFavorite, onFavorite, onEnquire }) {
  const symbols = { Food: "♨", Printing: "▤", Laundry: "◌", Repairs: "⚙" };
  return <article className="product-card"><div className={`product-art art-${index % 4}`}><span>{symbols[product.category] || "◇"}</span><small>{product.category}</small></div><div className="product-body"><div className="product-top"><span className="tag">{product.category}</span><button className="save-button" onClick={onFavorite}>{isFavorite ? "♥" : "♡"}</button></div><h3>{product.name}</h3><p>{product.description}</p><b className="price">{product.price}</b><div className="product-meta"><b>{product.vendor}</b><small>⌖ {product.area}</small></div><button className="button outline full" onClick={() => onEnquire(product)} type="button">Enquire about service</button></div></article>;
}
export default ProductCard;
