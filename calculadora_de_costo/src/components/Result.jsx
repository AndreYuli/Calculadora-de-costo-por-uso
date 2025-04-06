import React from "react";
import '../styles/Result.css'; // Importa el CSS para el resultado

// Importa los SVG desde la carpeta assets
import iconError from '../assets/icon-error.svg';
import iconSuccess from '../assets/icon-success.svg';

const Result = ({ costPerUse }) => {
  const isError = costPerUse === "Datos inválidos";

  return (
    <div className={`result ${isError ? "result-error" : "result-success"}`}>
      <div className="result-icon">
        <img
          src={isError ? iconError : iconSuccess}
          alt={isError ? "Error" : "Éxito"}
        />
      </div>

      <div className="result-content">
        <h3 className="result-title">{isError ? "Error" : "Resultado"}</h3>
        <p className="result-value">{isError ? "Datos inválidos" : `$${costPerUse}`}</p>
        {!isError && <p className="result-description">Costo por cada uso del producto</p>}
      </div>
    </div>
  );
};

export default Result;