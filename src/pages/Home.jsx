import ProductCard from "../components/ProductCard";
import products from "../data/productList";



function Home({ onAddToCart, searchQuery, selectedCategory }) {
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "" || p.category === selectedCategory)
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
      {filteredProducts.map(p => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default Home;
