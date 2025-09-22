import React from 'react';

const Header = ({ filter, setFilter }) => {
  return (
    <header className="header" style={{ padding: '16px 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '1.4rem', color: 'var(--secondary-color)' }}>TechStore</h1>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
          style={{ maxWidth: 420 }}
        />
      </div>
    </header>
  );
};

export default Header;


