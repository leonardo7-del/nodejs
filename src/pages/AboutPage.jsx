import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre TechStore y nuestra misión</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2><i className="fas fa-history about-icon" /> Nuestra Historia</h2>
          <p>
            TechStore nació en 2023 con la misión de ofrecer los mejores productos tecnológicos
            a precios accesibles. Desde entonces, nos hemos convertido en líderes del mercado,
            ofreciendo una experiencia de compra única y personalizada.
          </p>
        </div>
        
        <div className="about-section">
          <h2><i className="fas fa-bullseye about-icon" /> Nuestra Misión</h2>
          <p>
            Nuestra misión es proporcionar tecnología de calidad y un servicio excepcional
            a nuestros clientes, manteniéndonos a la vanguardia de la innovación y ofreciendo
            soluciones que mejoren la vida cotidiana.
          </p>
        </div>
        
        <div className="about-section">
          <h2><i className="fas fa-users about-icon" /> Nuestro Equipo</h2>
          <p>
            Contamos con un equipo de expertos apasionados por la tecnología, comprometidos
            con ofrecer el mejor asesoramiento y servicio a nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;