

import React, { useState } from "react";
import humanBodyImage from "./icon/cuerpo.jpg";
import licenciaIcono from "./icon/icono_licencia.jpeg";


function HumanBodyMap() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  const handleOrganClick = (organCode) => {
    setSelectedOrgan(organCode);
  };

  const handleMouseOver = (event, label) => {
    setTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      text: label,
    });
  };

  const handleMouseOut = () => {
    setTooltip({ visible: false, x: 0, y: 0, text: "" });
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "beige",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ fontSize: "26px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
  Mapa Interactivo del Cuerpo Humano
  <img src={licenciaIcono} alt="Licencia CC" style={{ width: "80px", height: "80px", objectFit: "contain" }} />
</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            position: "relative",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            flex: "2",
            minWidth: "500px",
          }}
        >
          <img
            src={humanBodyImage}
            alt="Cuerpo humano con órganos"
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />

          <svg
            viewBox="0 0 200 250"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {/* HÍGADO */}
            <circle cx="40" cy="140" r="8" fill="green" opacity="0.1" stroke="darkgreen" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("higado")} onMouseOver={(e) => handleMouseOver(e, "🟢 Hígado")} onMouseOut={handleMouseOut} />

            {/* PULMONES */}
            <circle cx="30" cy="95" r="10" fill="blue" opacity="0.1" stroke="darkblue" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("pulmones")} onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")} onMouseOut={handleMouseOut} />
            <circle cx="60" cy="95" r="10" fill="blue" opacity="0.1" stroke="darkblue" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("pulmones")} onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")} onMouseOut={handleMouseOut} />

            {/* RIÑONES */}
            <circle cx="145" cy="165" r="12" fill="purple" opacity="0.1" stroke="indigo" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("riñones")} onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")} onMouseOut={handleMouseOut} />
            <circle cx="170" cy="165" r="12" fill="purple" opacity="0.1" stroke="indigo" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("riñones")} onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")} onMouseOut={handleMouseOut} />

            {/* NUEVOS TUMORES */}

            {/* A - Cabeza y cuello */}
            <circle cx="158" cy="55" r="8" fill="red" opacity="0.1" stroke="darkred" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Cabeza y cuello")} onMouseOver={(e) => handleMouseOver(e, "🔴 Cabeza y cuello")} onMouseOut={handleMouseOut} />

            {/* B - Cáncer de mama TN */}
            <circle cx="180" cy="110" r="8" fill="orange" opacity="0.1" stroke="darkorange" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Cáncer de mama triple negativo")} onMouseOver={(e) => handleMouseOver(e, "🟠 Cáncer de mama TN")} onMouseOut={handleMouseOut} />

            {/* C - Melanoma */}
            <circle cx="5" cy="120" r="8" fill="black" opacity="0.1" stroke="gray" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Melanoma")} onMouseOver={(e) => handleMouseOver(e, "⚫ Melanoma")} onMouseOut={handleMouseOut} />

            {/* D - Cerebro */}
            <circle cx="45" cy="25" r="8" fill="pink" opacity="0.1" stroke="deeppink" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Cerebro")} onMouseOver={(e) => handleMouseOver(e, "🔴 Cerebro")} onMouseOut={handleMouseOut} />

            {/* E - Próstata */}
            <circle cx="45" cy="210" r="8" fill="brown" opacity="0.1" stroke="saddlebrown" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Próstata")} onMouseOver={(e) => handleMouseOver(e, "🟤 Próstata")} onMouseOut={handleMouseOut} />

            {/* F - Ovario */}
            <circle cx="145" cy="205" r="8" fill="violet" opacity="0.1" stroke="darkviolet" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Ovario")} onMouseOver={(e) => handleMouseOver(e, "🟣 Ovario")} onMouseOut={handleMouseOut} />
            <circle cx="170" cy="205" r="8" fill="violet" opacity="0.1" stroke="darkviolet" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Ovario")} onMouseOver={(e) => handleMouseOver(e, "🟣 Ovario")} onMouseOut={handleMouseOut} />

            {/* G - Esófago */}
            <circle cx="45" cy="75" r="8" fill="cyan" opacity="0.1" stroke="darkcyan" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Esófago")} onMouseOver={(e) => handleMouseOver(e, "🔵 Esófago")} onMouseOut={handleMouseOut} />

            {/* H - Estómago */}
            <circle cx="170" cy="150" r="8" fill="yellow" opacity="0.1" stroke="goldenrod" strokeWidth="2" style={{ cursor: "pointer" }} onClick={() => handleOrganClick("Estómago")} onMouseOver={(e) => handleMouseOver(e, "🟡 Estómago")} onMouseOut={handleMouseOut} />
          </svg>
        </div>

        {/* Panel lateral de información */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            textAlign: "left",
            backgroundColor: "#f9f9f9",
            fontSize: "18px",
          }}
        >
          {selectedOrgan ? (
            <div>
              <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>{selectedOrgan.toUpperCase()}</h2>
              <p>
                {" "}
                {selectedOrgan === "pulmones"
                  ? " tumor caliente – Linfocitos T CD8+, células dendríticas activadas, macrófagos M1, neutrófilos proinflamatorios."
                  : selectedOrgan === "higado"
                  ? " tumor caliente – Linfocitos T CD8+, células NK, células dendríticas convencionales, macrófagos M1."
                  : selectedOrgan === "riñones"
                  ? " tumor caliente – Linfocitos T CD8+, células NK, macrófagos M1, células dendríticas plasmacitoides."
                  : selectedOrgan === "Cabeza y cuello"
                  ? " tumor caliente – Linfocitos T CD8+, células dendríticas activadas, macrófagos M1, células Th1."
                  : selectedOrgan === "Cáncer de mama triple negativo"
                  ? " tumor caliente – Linfocitos T CD8+, células NK, macrófagos M1, células dendríticas activadas."
                  : selectedOrgan === "Melanoma"
                  ? " tumor caliente – Linfocitos T CD8+, células dendríticas activadas, macrófagos M1, células Th1."
                  : selectedOrgan === "Cerebro"
                  ? " tumor frío – Macrófagos M2, células microgliales inmunosupresoras, Tregs, baja infiltración de linfocitos T CD8+."
                  : selectedOrgan === "Próstata"
                  ? " tumor frío – Tregs, macrófagos M2, MDSCs, células B inmunosupresoras."
                  : selectedOrgan === "Ovario"
                  ? " tumor frío – Tregs, macrófagos M2, células dendríticas tolerogénicas, MDSCs."
                  : selectedOrgan === "Esófago"
                  ? " tumor frío – MDSCs, macrófagos M2, Tregs, neutrófilos supresores."
                  : selectedOrgan === "Estómago"
                  ? " tumor variable – Tumores con inestabilidad microsatelital son calientes (linfocitos T CD8+, células NK, células dendríticas activadas), mientras que otros subtipos son fríos (MDSCs, Tregs, macrófagos M2)."
                  : `Letra asignada: ${selectedOrgan}`}
              </p>
            </div>
          ) : (
            <p style={{ fontSize: "16px" }}>Haz clic en un órgano para ver la información.</p>
          )}
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y + 10,
            left: tooltip.x + 10,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "5px",
            fontSize: "16px",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

export default HumanBodyMap;

