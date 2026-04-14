import { useState } from "react";
import { ShoppingCart } from "lucide-react";

function BookCard({ book }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fmt = (n) => "$" + n.toLocaleString("es-CO");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(83,74,183,0.08)" : "rgba(255,255,255,0.03)",
        border: hovered
          ? "0.5px solid rgba(83,74,183,0.4)"
          : "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "default",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        {!imgError ? (
          <img
            src={book.img}
            alt={book.nombre}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              aspectRatio: "2/3",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              aspectRatio: "2/3",
              background: "linear-gradient(135deg, #1a1830, #2e2d3d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              color: "#534AB7",
            }}
          >
            {book.nombre[0]}
          </div>
        )}

        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "rgba(15,14,23,0.75)",
            backdropFilter: "blur(8px)",
            border: "0.5px solid rgba(83,74,183,0.3)",
            borderRadius: "100px",
            padding: "3px 10px",
            fontSize: "10px",
            color: "#a8a4e6",
            letterSpacing: "0.05em",
          }}
        >
          {book.categoria}
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(15,14,23,0.8) 0%, transparent 50%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      </div>

      <div
        style={{
          padding: "16px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "4px",
            lineHeight: "1.4",
            color: "#fffffe",
          }}
        >
          {book.nombre}
        </div>
        <div
          style={{ fontSize: "12px", color: "#a7a9be", marginBottom: "2px" }}
        >
          {book.autor}
        </div>
        <div
          style={{ fontSize: "11px", color: "#6b6d80", marginBottom: "12px" }}
        >
          {book.editorial} · {book.año}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #fffffe, #a8a4e6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {fmt(book.precio)}
          </span>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(83,74,183,0.2)",
              border: "0.5px solid rgba(83,74,183,0.5)",
              borderRadius: "100px",
              padding: "7px 14px",
              fontSize: "12px",
              color: "#a8a4e6",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(83,74,183,0.4)";
              e.currentTarget.style.color = "#fffffe";
              e.currentTarget.style.boxShadow = "0 0 14px rgba(83,74,183,0.4)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(83,74,183,0.2)";
              e.currentTarget.style.color = "#a8a4e6";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <ShoppingCart size={13} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
