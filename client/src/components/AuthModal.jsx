import { useState } from "react";
import {
  X,
  User,
  Mail,
  Lock,
  CreditCard,
  MapPin,
  Eye,
  EyeOff,
} from "lucide-react";

function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    correo: "",
    clave: "",
    usuario: "",
    cedula: "",
    nombre: "",
    direccion: "",
  });

  const update = (field, val) => setForm((prev) => ({ ...prev, [field]: val }));

  if (!open) return null;

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "12px 16px 12px 42px",
    fontSize: "14px",
    color: "#fffffe",
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.2s",
  };

  const Field = ({ icon, placeholder, field, type = "text" }) => (
    <div style={{ position: "relative", marginBottom: "12px" }}>
      <div
        style={{
          position: "absolute",
          left: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#534AB7",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={form[field]}
        onChange={(e) => update(field, e.target.value)}
        style={inputStyle}
        onFocus={(e) => {
          e.currentTarget.style.border = "0.5px solid rgba(83,74,183,0.7)";
          e.currentTarget.style.background = "rgba(83,74,183,0.08)";
          e.currentTarget.style.boxShadow = "0 0 16px rgba(83,74,183,0.1)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = "0.5px solid rgba(255,255,255,0.1)";
          e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(6px)",
          zIndex: 200,
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 201,
          width: "100%",
          maxWidth: "420px",
          background: "rgba(18,16,32,0.98)",
          border: "0.5px solid rgba(83,74,183,0.3)",
          borderRadius: "24px",
          padding: "2rem",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(83,74,183,0.1)",
          animation: "modalIn 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <style>{`
          @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
          @keyframes modalIn { from { opacity: 0; transform: translate(-50%, -48%) scale(0.96) } to { opacity: 1; transform: translate(-50%, -50%) scale(1) } }
        `}</style>

        {/* Línea de luz superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            right: "20%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(83,74,183,0.8), transparent)",
            borderRadius: "100px",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "#534AB7",
                textTransform: "uppercase",
                marginBottom: "6px",
                fontWeight: "500",
              }}
            >
              Centauri librería
            </p>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                background: "linear-gradient(135deg, #fffffe, #a8a4e6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {mode === "login" ? "Bienvenido de nuevo" : "Crear cuenta"}
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

        {/* Toggle login/registro */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.07)",
            borderRadius: "100px",
            padding: "4px",
            marginBottom: "1.5rem",
          }}
        >
          {["login", "registro"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontFamily: "inherit",
                fontWeight: mode === m ? "600" : "400",
                background: mode === m ? "rgba(83,74,183,0.45)" : "transparent",
                color: mode === m ? "#fffffe" : "#a7a9be",
                transition: "all 0.25s ease",
              }}
            >
              {m === "login" ? "Iniciar sesión" : "Registrarse"}
            </button>
          ))}
        </div>

        {/* Formulario login */}
        {mode === "login" && (
          <div>
            <Field
              icon={<Mail size={15} />}
              placeholder="Correo electrónico"
              field="correo"
              type="email"
            />
            <div style={{ position: "relative", marginBottom: "12px" }}>
              <div
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#534AB7",
                  display: "flex",
                  alignItems: "center",
                  pointerEvents: "none",
                }}
              >
                <Lock size={15} />
              </div>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Contraseña"
                value={form.clave}
                onChange={(e) => update("clave", e.target.value)}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.border =
                    "0.5px solid rgba(83,74,183,0.7)";
                  e.currentTarget.style.background = "rgba(83,74,183,0.08)";
                  e.currentTarget.style.boxShadow =
                    "0 0 16px rgba(83,74,183,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border =
                    "0.5px solid rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#6b6d80",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a8a4e6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6d80")}
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>
        )}

        {/* Formulario registro */}
        {mode === "registro" && (
          <div>
            <Field
              icon={<User size={15} />}
              placeholder="Nombre completo"
              field="nombre"
            />
            <Field
              icon={<User size={15} />}
              placeholder="Nombre de usuario"
              field="usuario"
            />
            <Field
              icon={<Mail size={15} />}
              placeholder="Correo electrónico"
              field="correo"
              type="email"
            />
            <Field
              icon={<CreditCard size={15} />}
              placeholder="Cédula"
              field="cedula"
            />
            <Field
              icon={<MapPin size={15} />}
              placeholder="Dirección"
              field="direccion"
            />
            <div style={{ position: "relative", marginBottom: "12px" }}>
              <div
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#534AB7",
                  display: "flex",
                  alignItems: "center",
                  pointerEvents: "none",
                }}
              >
                <Lock size={15} />
              </div>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Contraseña"
                value={form.clave}
                onChange={(e) => update("clave", e.target.value)}
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.border =
                    "0.5px solid rgba(83,74,183,0.7)";
                  e.currentTarget.style.background = "rgba(83,74,183,0.08)";
                  e.currentTarget.style.boxShadow =
                    "0 0 16px rgba(83,74,183,0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border =
                    "0.5px solid rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                onClick={() => setShowPass(!showPass)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#6b6d80",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a8a4e6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6d80")}
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>
        )}

        {/* Botón submit */}
        <button
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #534AB7, #7F77DD)",
            border: "none",
            borderRadius: "12px",
            padding: "13px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#fffffe",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
            marginTop: "4px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 0 24px rgba(83,74,183,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </button>
      </div>
    </>
  );
}

export default AuthModal;
