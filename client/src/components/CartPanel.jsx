import { X, ShoppingBag, Trash2 } from "lucide-react";

function CartPanel({ open, onClose, cart, onRemove }) {
  const fmt = (n) => "$" + n.toLocaleString("es-CO");
  const total = cart.reduce((s, c) => s + c.precio * c.qty, 0);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 99,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.3s",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "360px",
          height: "100%",
          background: "#13121f",
          borderLeft: "0.5px solid rgba(83,74,183,0.2)",
          zIndex: 100,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "1.5rem",
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBag size={18} color="#a8a4e6" />
            <h2
              style={{ fontSize: "16px", fontWeight: "600", color: "#fffffe" }}
            >
              Tu carrito
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#a7a9be",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            <X size={14} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.5rem" }}>
          {cart.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "#6b6d80",
              }}
            >
              <ShoppingBag
                size={40}
                style={{ margin: "0 auto 1rem", opacity: 0.3 }}
              />
              <p style={{ fontSize: "14px" }}>Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map((c) => (
              <div
                key={c.id}
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "14px 0",
                  borderBottom: "0.5px solid rgba(255,255,255,0.05)",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={c.img}
                  alt={c.nombre}
                  style={{
                    width: "44px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    flexShrink: 0,
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "500",
                      color: "#fffffe",
                      marginBottom: "3px",
                      lineHeight: "1.4",
                    }}
                  >
                    {c.nombre}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b6d80",
                      marginBottom: "6px",
                    }}
                  >
                    {c.autor}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#a8a4e6",
                      fontWeight: "600",
                    }}
                  >
                    {c.qty} × {fmt(c.precio)}
                  </div>
                </div>
                <button
                  onClick={() => onRemove(c.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6b6d80",
                    display: "flex",
                    alignItems: "center",
                    padding: "4px",
                    borderRadius: "4px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f87171")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6b6d80")
                  }
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div
            style={{
              padding: "1.5rem",
              borderTop: "0.5px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontSize: "13px", color: "#a7a9be" }}>Total</span>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #fffffe, #a8a4e6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {fmt(total)}
              </span>
            </div>
            <button
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #534AB7, #7F77DD)",
                border: "none",
                borderRadius: "100px",
                padding: "14px",
                fontSize: "14px",
                fontWeight: "600",
                color: "#fffffe",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Proceder al pago
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPanel;
