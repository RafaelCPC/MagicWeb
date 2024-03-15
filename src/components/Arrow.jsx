import { useState } from 'react';
import '../index.css';

const Arrow = () => {
  const [mostrarClase, setMostrarClase] = useState(true);

  const toggleClase = () => {
    setMostrarClase(!mostrarClase);
  };

  return (
    <div>
      <div onClick={toggleClase} style={{ cursor: 'pointer' }}>
        {mostrarClase ? '▼' : '►'}
      </div>
      <div className={mostrarClase ? 'mi-clase-visible' : 'mi-clase-oculta'}>
        Contenido de tu componente
      </div>
    </div>
  );
};

export default Arrow;
