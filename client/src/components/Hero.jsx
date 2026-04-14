import { useEffect, useState } from "react";
import { books } from "../data/books";

const phrases = [
  "Tu próxima obsesión.",
  "Tu próximo viaje.",
  "Tu próxima vida.",
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        padding: "5rem 2rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(83,74,183,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,100,100,0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "0.5px solid rgba(83,74,183,0.2)",
          animation: "float 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "12%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "0.5px solid rgba(83,74,183,0.15)",
          animation: "float 8s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.2em",
          color: "#534AB7",
          textTransform: "uppercase",
          marginBottom: "1rem",
          fontWeight: "500",
        }}
      >
        Centauri librería
      </p>

      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: "700",
          lineHeight: "1.1",
          letterSpacing: "-2px",
          marginBottom: "1rem",
          background: "linear-gradient(135deg, #fffffe 0%, #a8a4e6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Los libros
        <br />
        que te cambian.
      </h1>

      <div
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          color: "#a7a9be",
          fontWeight: "300",
          height: "2.5rem",
          transition: "opacity 0.4s, transform 0.4s",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
        }}
      >
        {phrases[index]}
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "2px",
            background: "linear-gradient(90deg, #534AB7, transparent)",
          }}
        />
        <span
          style={{ fontSize: "12px", color: "#534AB7", letterSpacing: "0.1em" }}
        >
          {books.length} títulos disponibles
        </span>
      </div>
    </div>
  );
}

export default Hero;
