import React from 'react';
import InputForm from '../components/InputForm'; // Importa el componente InputForm
import '../styles/Home.css'; // Importa el CSS para la página de inicio
const Home = () => {
    return (
        <div className="home">
            <h1>Calculadora de Costo por Uso</h1>
            <p>
                Esta herramienta te ayuda a calcular el costo real de un producto dividiendo su precio entre el número de veces que planeas usarlo. 
                Es ideal para evaluar si una compra, como un gadget o una prenda, realmente vale la pena.
            </p>
            <p>
                Simplemente ingresa el precio del producto y el número de usos esperados, y obtendrás el costo por uso.
            </p>
            <InputForm /> {/* Renderiza el formulario */}
        </div>
    );
};

export default Home;