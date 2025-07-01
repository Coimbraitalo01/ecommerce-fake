import { Link } from "react-router-dom";

function Header({ cartItemCount, onSearchChange, categories, onFilterChange }) {
  return (
    <header style={styles.header}>
      <h1>E-commerce Fake</h1>
      <input
        type="text"
        placeholder="Buscar produto..."
        onChange={e => onSearchChange(e.target.value)}
        style={styles.input}
      />
      <select onChange={e => onFilterChange(e.target.value)} style={styles.select}>
        <option value="">Todas Categorias</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <Link to="/cart">Carrinho ({cartItemCount})</Link>
    </header>
  );
}

const styles = {
  header: { display: "flex", gap: "1rem", alignItems: "center", padding: "1rem", background: "#eee" },
  input: { padding: "0.5rem" },
  select: { padding: "0.5rem" }
};

export default Header;
