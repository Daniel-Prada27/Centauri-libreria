import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPanel from "./components/CartPanel";
import StarField from "./components/StarField";
import AuthModal from "./components/AuthModal";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import BookGrid from "./components/BookGrid";
import { books } from "./data/books";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => setMounted(true), []);

  const filtered = books.filter(
    (b) =>
      b.nombre.toLowerCase().includes(query.toLowerCase()) ||
      b.autor.toLowerCase().includes(query.toLowerCase()) ||
      b.editorial.toLowerCase().includes(query.toLowerCase()),
  );

  const addToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === book.id);
      if (existing)
        return prev.map((c) =>
          c.id === book.id ? { ...c, qty: c.qty + 1 } : c,
        );
      return [...prev, { ...book, qty: 1 }];
    });
  };

  const removeOne = (id) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (existing.qty === 1) return prev.filter((c) => c.id !== id);
      return prev.map((c) => (c.id === id ? { ...c, qty: c.qty - 1 } : c));
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((c) => c.id !== id));
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#0f0e17",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.5s",
      }}
    >
      <StarField />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar
          totalItems={totalItems}
          onCartClick={() => setCartOpen(true)}
          onAuthClick={() => setAuthOpen(true)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SearchBar query={query} setQuery={setQuery} />
                <BookGrid
                  books={filtered}
                  onAdd={addToCart}
                  onRemove={removeOne}
                  cart={cart}
                />
              </>
            }
          />
        </Routes>
        <CartPanel
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          onRemove={removeFromCart}
        />
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </div>
    </div>
  );
}

export default App;
