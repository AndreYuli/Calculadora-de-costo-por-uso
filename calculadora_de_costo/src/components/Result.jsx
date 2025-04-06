import React from "react";
import '../styles/Result.css'; // Importa el CSS para el resultado

const Result = ({ costPerUse }) => {
    return (
        <div className="result">
            {costPerUse === 'Datos inválidos' ? (
                <p>{costPerUse}</p>
            ) : (
                <p>Costo por uso: ${costPerUse}</p>
            )}
        </div>
    );
}

export default Result;