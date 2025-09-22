import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos el envío del formulario
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item card">
            <div className="info-icon"><i className="fas fa-map-marker-alt" /></div>
            <div className="info-content">
              <h3>Dirección</h3>
              <p>Calle Tecnología 123, Ciudad Digital</p>
            </div>
          </div>
          
          <div className="info-item card">
            <div className="info-icon"><i className="fas fa-phone" /></div>
            <div className="info-content">
              <h3>Teléfono</h3>
              <p>+34 123 456 789</p>
            </div>
          </div>
          
          <div className="info-item card">
            <div className="info-icon"><i className="fas fa-envelope" /></div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@techstore.com</p>
            </div>
          </div>
          
          <div className="info-item card">
            <div className="info-icon"><i className="fas fa-clock" /></div>
            <div className="info-content">
              <h3>Horario</h3>
              <p>Lunes a Viernes: 9:00 - 20:00</p>
              <p>Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Envíanos un mensaje</h2>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            
            {formStatus === 'success' && (
              <div className="form-success">
                ¡Mensaje enviado con éxito! Te contactaremos pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;