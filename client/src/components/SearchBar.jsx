import { Search, X } from "lucide-react";

function SearchBar({ query, setQuery }) {
  return (
    <div style={{ padding: "0 2rem 3rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "rgba(255,255,255,0.04)",
          border: "0.5px solid rgba(255,255,255,0.1)",
          borderRadius: "100px",
          padding: "0 20px",
          maxWidth: "600px",
          transition: "all 0.3s",
        }}
        onFocus={(e) => {
          e.currentTarget.style.border = "0.5px solid rgba(83,74,183,0.6)";
          e.currentTarget.style.background = "rgba(83,74,183,0.08)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = "0.5px solid rgba(255,255,255,0.1)";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        }}
      >
        <Search size={16} color="#534AB7" />
        <input
          type="text"
          placeholder="Buscar título, autor, editorial..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "15px",
            padding: "16px 0",
            width: "100%",
            fontFamily: "inherit",
            color: "#fffffe",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#a7a9be",
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
