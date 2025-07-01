function ProductCard({ product, onAddToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #ccc", padding: "1rem", textAlign: "center" },
  img: { width: "100%", height: "auto" }
};

export default ProductCard;
