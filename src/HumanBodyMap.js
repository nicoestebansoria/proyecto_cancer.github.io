// import React, { useState } from "react";
// // Importa la imagen del cuerpo humano
// import humanBodyImage from "./icon/cuerpo.jpg";

// function HumanBodyMap() {
//   const [selectedOrgan, setSelectedOrgan] = useState(null);
//   const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

//   const handleOrganClick = (organ) => {
//     setSelectedOrgan(organ);
//   };

//   const handleMouseOver = (event, organName) => {
//     setTooltip({
//       visible: true,
//       x: event.clientX,
//       y: event.clientY,
//       text: organName,
//     });
//   };

//   const handleMouseOut = () => {
//     setTooltip({ visible: false, x: 0, y: 0, text: "" });
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "1100px",
//         margin: "0 auto",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h1 style={{ fontSize: "26px", fontWeight: "bold" }}> Mapa Interactivo del Cuerpo Humano</h1>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           gap: "30px",
//           flexWrap: "wrap",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//             border: "1px solid #ddd",
//             borderRadius: "10px",
//             padding: "15px",
//             flex: "2",
//             minWidth: "500px",
//           }}
//         >
//           <img
//             src={humanBodyImage}
//             alt="Cuerpo humano con órganos"
//             style={{ width: "100%", display: "block", borderRadius: "10px" }}
//           />

//           <svg
//             viewBox="0 0 200 250"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             {/* CORAZÓN */}
//             <circle
//               cx="50"
//               cy="115"
//               r="8"
//               fill="red"
//               opacity="0.006"
//               stroke="darkred"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("corazon")}
//               onMouseOver={(e) => handleMouseOver(e, "🔴 Corazón")}
//               onMouseOut={handleMouseOut}
//             />

//             {/* HÍGADO */}
//             <circle
//               cx="40"
//               cy="140"
//               r="8"
//               fill="green"
//               opacity="0.006"
//               stroke="darkgreen"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("higado")}
//               onMouseOver={(e) => handleMouseOver(e, "🟢 Hígado")}
//               onMouseOut={handleMouseOut}
//             />

//             {/* PULMONES */}
//             <circle
//               cx="30"
//               cy="95"
//               r="10"
//               fill="blue"
//               opacity="0.006"
//               stroke="darkblue"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("pulmones")}
//               onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")}
//               onMouseOut={handleMouseOut}
//             />
//             <circle
//               cx="60"
//               cy="95"
//               r="10"
//               fill="blue"
//               opacity="0.006"
//               stroke="darkblue"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("pulmones")}
//               onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")}
//               onMouseOut={handleMouseOut}
//             />

//             {/* RIÑONES */}
//             <circle
//               cx="145"
//               cy="165"
//               r="12"
//               fill="purple"
//               opacity="0.006"
//               stroke="indigo"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("riñones")}
//               onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")}
//               onMouseOut={handleMouseOut}
//             />
//             <circle
//               cx="170"
//               cy="165"
//               r="12"
//               fill="purple"
//               opacity="0.006"
//               stroke="indigo"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("riñones")}
//               onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")}
//               onMouseOut={handleMouseOut}
//             />
//           </svg>
//         </div>

//         {/* Panel lateral de información */}
//         <div
//           style={{
//             flex: "1",
//             minWidth: "320px",
//             padding: "20px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             textAlign: "left",
//             backgroundColor: "#f9f9f9",
//             fontSize: "18px",
//           }}
//         >
//           {selectedOrgan ? (
//             <div>
//               <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>{selectedOrgan.toUpperCase()}</h2>
//               <p>
//                 <strong>Microambiente tumoral:</strong>{" "}
//                 {selectedOrgan === "corazon" ? "Caliente" : "Frío"}
//               </p>
//               <p>
//                 Información detallada: El microambiente tumoral en el{" "}
//                 {selectedOrgan} presenta características únicas...
//               </p>
//             </div>
//           ) : (
//             <p style={{ fontSize: "16px" }}>Haz clic en un órgano para ver la información.</p>
//           )}
//         </div>
//       </div>

//       {/* Tooltip */}
//       {tooltip.visible && (
//         <div
//           style={{
//             position: "fixed",
//             top: tooltip.y + 10,
//             left: tooltip.x + 10,
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             padding: "8px 12px",
//             borderRadius: "5px",
//             fontSize: "16px",
//             pointerEvents: "none",
//             zIndex: 10,
//           }}
//         >
//           {tooltip.text}
//         </div>
//       )}
//     </div>
//   );
// }

// export default HumanBodyMap;
// ########################################################################################################################
// import React, { useState } from "react";
// // Importa la imagen del cuerpo humano
// import humanBodyImage from "./icon/cuerpo.jpg";

// function HumanBodyMap() {
//   const [selectedOrgan, setSelectedOrgan] = useState(null);
//   const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

//   const handleOrganClick = (organ) => {
//     setSelectedOrgan(organ);
//   };

//   const handleMouseOver = (event, organName) => {
//     setTooltip({
//       visible: true,
//       x: event.clientX,
//       y: event.clientY,
//       text: organName,
//     });
//   };

//   const handleMouseOut = () => {
//     setTooltip({ visible: false, x: 0, y: 0, text: "" });
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "1100px",
//         margin: "0 auto",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//         backgroundColor: "beige",
//         padding: "20px",
//         borderRadius: "10px",
//       }}
//     >
//       <h1 style={{ fontSize: "26px", fontWeight: "bold" }}> Mapa Interactivo del Cuerpo Humano</h1>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           gap: "30px",
//           flexWrap: "wrap",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//             border: "1px solid #ddd",
//             borderRadius: "10px",
//             padding: "15px",
//             flex: "2",
//             minWidth: "500px",
//           }}
//         >
//           <img
//             src={humanBodyImage}
//             alt="Cuerpo humano con órganos"
//             style={{ width: "100%", display: "block", borderRadius: "10px" }}
//           />

//           <svg
//             viewBox="0 0 200 250"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             {/* CORAZÓN */}
//             <circle
//               cx="50"
//               cy="115"
//               r="8"
//               fill="red"
//               opacity="0.006"
//               stroke="darkred"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("corazon")}
//               onMouseOver={(e) => handleMouseOver(e, "🔴 Corazón")}
//               onMouseOut={handleMouseOut}
//             />

//             {/* HÍGADO */}
//             <circle
//               cx="40"
//               cy="140"
//               r="8"
//               fill="green"
//               opacity="0.006"
//               stroke="darkgreen"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("higado")}
//               onMouseOver={(e) => handleMouseOver(e, "🟢 Hígado")}
//               onMouseOut={handleMouseOut}
//             />

//             {/* PULMONES */}
//             <circle
//               cx="30"
//               cy="95"
//               r="10"
//               fill="blue"
//               opacity="0.006"
//               stroke="darkblue"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("pulmones")}
//               onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")}
//               onMouseOut={handleMouseOut}
//             />
//             <circle
//               cx="60"
//               cy="95"
//               r="10"
//               fill="blue"
//               opacity="0.006"
//               stroke="darkblue"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("pulmones")}
//               onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")}
//               onMouseOut={handleMouseOut}
//             />

//             {/* RIÑONES */}
//             <circle
//               cx="145"
//               cy="165"
//               r="12"
//               fill="purple"
//               opacity="0.006"
//               stroke="indigo"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("riñones")}
//               onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")}
//               onMouseOut={handleMouseOut}
//             />
//             <circle
//               cx="170"
//               cy="165"
//               r="12"
//               fill="purple"
//               opacity="0.006"
//               stroke="indigo"
//               strokeWidth="2"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleOrganClick("riñones")}
//               onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")}
//               onMouseOut={handleMouseOut}
//             />
//           </svg>
//         </div>

//         {/* Panel lateral de información */}
//         <div
//           style={{
//             flex: "1",
//             minWidth: "320px",
//             padding: "20px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             textAlign: "left",
//             backgroundColor: "#f9f9f9",
//             fontSize: "18px",
//           }}
//         >
//           {selectedOrgan ? (
//             <div>
//               <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>{selectedOrgan.toUpperCase()}</h2>
//               <p>
//                 Información detallada:{" "}
//                 {selectedOrgan === "corazon"
//                   ? "A"
//                   : selectedOrgan === "pulmones"
//                   ? "B"
//                   : selectedOrgan === "higado"
//                   ? "C"
//                   : selectedOrgan === "riñones"
//                   ? "D"
//                   : ""}
//               </p>
//             </div>
//           ) : (
//             <p style={{ fontSize: "16px" }}>Haz clic en un órgano para ver la información.</p>
//           )}
//         </div>
//       </div>

//       {/* Tooltip */}
//       {tooltip.visible && (
//         <div
//           style={{
//             position: "fixed",
//             top: tooltip.y + 10,
//             left: tooltip.x + 10,
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             padding: "8px 12px",
//             borderRadius: "5px",
//             fontSize: "16px",
//             pointerEvents: "none",
//             zIndex: 10,
//           }}
//         >
//           {tooltip.text}
//         </div>
//       )}
//     </div>
//   );
// }

// export default HumanBodyMap;


// ########################################################################################################################
import React, { useState } from "react";
import humanBodyImage from "./icon/cuerpo.jpg";

function HumanBodyMap() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: "" });

  const handleOrganClick = (organ) => {
    setSelectedOrgan(organ);
  };

  const handleMouseOver = (event, organName) => {
    setTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      text: organName,
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
      <h1 style={{ fontSize: "26px", fontWeight: "bold" }}> Mapa Interactivo del Cuerpo Humano</h1>

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
            {/* CORAZÓN */}
            <circle
              cx="50"
              cy="115"
              r="8"
              fill="red"
              opacity="0.006"
              stroke="darkred"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onClick={() => handleOrganClick("corazon")}
              onMouseOver={(e) => handleMouseOver(e, "🔴 Corazón")}
              onMouseOut={handleMouseOut}
            />

            {/* HÍGADO */}
            <circle
              cx="40"
              cy="140"
              r="8"
              fill="green"
              opacity="0.006"
              stroke="darkgreen"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onClick={() => handleOrganClick("higado")}
              onMouseOver={(e) => handleMouseOver(e, "🟢 Hígado")}
              onMouseOut={handleMouseOut}
            />

            {/* PULMONES */}
            <circle
              cx="30"
              cy="95"
              r="10"
              fill="blue"
              opacity="0.006"
              stroke="darkblue"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onClick={() => handleOrganClick("pulmones")}
              onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")}
              onMouseOut={handleMouseOut}
            />
            <circle
              cx="60"
              cy="95"
              r="10"
              fill="blue"
              opacity="0.006"
              stroke="darkblue"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onClick={() => handleOrganClick("pulmones")}
              onMouseOver={(e) => handleMouseOver(e, "🔵 Pulmones")}
              onMouseOut={handleMouseOut}
            />

            {/* RIÑONES */}
            <circle
              cx="145"
              cy="165"
              r="12"
              fill="purple"
              opacity="0.006"
              stroke="indigo"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onClick={() => handleOrganClick("riñones")}
              onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")}
              onMouseOut={handleMouseOut}
            />
            <circle
              cx="170"
              cy="165"
              r="12"
              fill="purple"
              opacity="0.006"
              stroke="indigo"
              strokeWidth="2"
              style={{ cursor: "pointer" }}
              onClick={() => handleOrganClick("riñones")}
              onMouseOver={(e) => handleMouseOver(e, "🟣 Riñones")}
              onMouseOut={handleMouseOut}
            />
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
                Información detallada: {" "}
                {selectedOrgan === "corazon"
                  ? "A"
                  : selectedOrgan === "pulmones"
                  ? "B"
                  : selectedOrgan === "higado"
                  ? "C"
                  : selectedOrgan === "riñones"
                  ? "D"
                  : ""}
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
