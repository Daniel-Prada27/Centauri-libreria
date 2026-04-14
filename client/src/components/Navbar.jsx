import { useState, useEffect } from "react";
import { ShoppingBag, User, BookOpen, LayoutGrid, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ onAuthClick, onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "/", label: "Inicio", icon: <BookOpen size={14} />, clickable: true },
    {
      id: "/catalogo",
      label: "Catálogo",
      icon: <LayoutGrid size={14} />,
      clickable: false,
    },
    {
      id: "/contacto",
      label: "Contacto",
      icon: <Mail size={14} />,
      clickable: false,
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "14px",
        left: "24px",
        right: "24px",
        zIndex: 50,
      }}
    >
      <nav
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          borderRadius: "100px",
          background: navHovered
            ? "rgba(83,74,183,0.18)"
            : scrolled
              ? "rgba(15,14,23,0.82)"
              : "rgba(15,14,23,0.55)",
          backdropFilter: "blur(16px)",
          border: navHovered
            ? "0.5px solid rgba(83,74,183,0.5)"
            : "0.5px solid rgba(255,255,255,0.08)",
          boxShadow: navHovered
            ? "0 0 30px rgba(83,74,183,0.15)"
            : "0 4px 24px rgba(0,0,0,0.3)",
          transition: "all 0.35s ease",
        }}
      >
        <div
          style={{
            fontSize: "17px",
            fontWeight: "600",
            letterSpacing: "-0.5px",
            background: "linear-gradient(135deg, #fffffe, #a8a4e6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            flexShrink: 0,
            minWidth: "100px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Centauri
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.07)",
            borderRadius: "100px",
            padding: "4px",
          }}
        >
          {links.map((link) => {
            const active = location.pathname === link.id;
            return (
              <button
                key={link.id}
                onClick={() => link.clickable && navigate(link.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "7px 20px",
                  borderRadius: "100px",
                  border: "none",
                  cursor: link.clickable ? "pointer" : "default",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  fontWeight: active ? "600" : "400",
                  background: active ? "rgba(83,74,183,0.45)" : "transparent",
                  color: link.clickable
                    ? active
                      ? "#fffffe"
                      : "#a7a9be"
                    : "#4a4a5a",
                  transition: "all 0.25s ease",
                  opacity: link.clickable ? 1 : 0.45,
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "rgba(83,74,183,0.2)";
                    e.currentTarget.style.color = "#fffffe";
                    e.currentTarget.style.transform = "scale(1.06)";
                    e.currentTarget.style.boxShadow =
                      "0 0 12px rgba(83,74,183,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = link.clickable
                      ? "#a7a9be"
                      : "#4a4a5a";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {link.icon}
                {link.label}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minWidth: "100px",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={onAuthClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              background: "transparent",
              border: "0.5px solid rgba(255,255,255,0.15)",
              borderRadius: "100px",
              padding: "7px 16px",
              cursor: "pointer",
              fontSize: "13px",
              color: "#a7a9be",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.color = "#fffffe";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 14px rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "#a7a9be";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <User size={13} /> Log in
          </button>

          <button
            onClick={onCartClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              background: "rgba(83,74,183,0.2)",
              border: "0.5px solid rgba(83,74,183,0.45)",
              borderRadius: "100px",
              padding: "7px 16px",
              cursor: "pointer",
              fontSize: "13px",
              color: "#fffffe",
              position: "relative",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(83,74,183,0.45)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(83,74,183,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(83,74,183,0.2)";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <ShoppingBag size={14} /> Carrito
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
