import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import products from "./data/productList"; // Certifique-se que este caminho está correto

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <Router>
      <Header
        cartItemCount={cart.length}
        onSearchChange={setSearchQuery}
        categories={categories}
        onFilterChange={setSelectedCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
