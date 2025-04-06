import React from 'react';
import InputForm from '../components/InputForm'; // Importa el componente InputForm
import '../styles/Home.css'; // Importa el CSS para la página de inicio

import iconSmile from '../assets/icon-smile.svg';
import iconPrecision from '../assets/icon-precision.svg';
import iconIntelligence from '../assets/icon-intelligence.svg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-header-content">
          <h1 className="home-title">
            <span className="gradient-text">Calculadora</span> de Costo por Uso
          </h1>
          <p className="home-subtitle">Descubre el valor real de tus compras analizando su costo por cada uso</p>
          <div className="home-features">
            <div className="feature">
              <div className="feature-icon">
                <img src={iconSmile} alt="Fácil de usar" />
              </div>
              <span>Fácil de usar</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src={iconPrecision} alt="Cálculos precisos" />
              </div>
              <span>Cálculos precisos</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <img src={iconIntelligence} alt="Decisiones inteligentes" />
              </div>
              <span>Decisiones inteligentes</span>
            </div>
          </div>
        </div>
        <div className="home-header-graphic">
          <div className="calculator-graphic">
            <div className="graphic-circle circle-1"></div>
            <div className="graphic-circle circle-2"></div>
            <div className="graphic-circle circle-3"></div>
            <div className="graphic-bar bar-1"></div>
            <div className="graphic-bar bar-2"></div>
            <div className="graphic-bar bar-3"></div>
            <div className="graphic-number">$</div>
          </div>
        </div>
      </div>

      <div className="home-content">
        <div className="home-description">
          <h2>¿Cómo funciona?</h2>
          <p>
            Esta herramienta te ayuda a calcular el costo real de un producto dividiendo su precio entre el número de
            veces que planeas usarlo. Es ideal para evaluar si una compra, como un gadget o una prenda, realmente vale
            la pena.
          </p>
          <p>Simplemente ingresa el precio del producto y el número de usos esperados, y obtendrás el costo por uso.</p>
          <div className="calculation-example">
            <div className="example-item">
              <span className="example-label">Ejemplo:</span>
              <span className="example-value">Zapatos de $100</span>
              <span className="example-divider">÷</span>
              <span className="example-value">50 usos</span>
              <span className="example-equals">=</span>
              <span className="example-result">$2 por uso</span>
            </div>
          </div>
        </div>

        <div className="calculator-container">
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default Home;