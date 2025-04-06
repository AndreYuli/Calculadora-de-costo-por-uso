import React, { useState } from 'react';
import Result from './Result'; // Importa el componente Result
import '../styles/InputForm.css'; // Importa el CSS para el formulario

const InputForm = () => {
    const [formData, setFormData] = useState({
        price: '',
        uses: '',
    });
    const [costPerUse, setCostPerUse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const price = parseFloat(formData.price);
        const uses = parseInt(formData.uses, 10);

        if (!isNaN(price) && !isNaN(uses) && uses > 0) {
            const cost = price / uses;
            setCostPerUse(cost.toFixed(2));
        } else {
            setCostPerUse('Datos inválidos');
        }
    };

    return (
        <form className ="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="price">Precio del producto:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    step="0.01"
                />
            </div>
            <div className="form-group">
                <label htmlFor="uses">Número de usos:</label>
                <input
                    type="number"
                    id="uses"
                    name="uses"
                    value={formData.uses}
                    onChange={handleChange}
                />
            </div>
            <button className="btn" type="submit">Calcular</button>
            {costPerUse !== null && <Result costPerUse={costPerUse} />} {/* Renderiza Result solo si costPerUse no es null */}
        </form>
    );
};

export default InputForm;