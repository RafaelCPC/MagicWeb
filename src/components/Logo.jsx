import logo from '../assets/logo.png';

function Logo({height}) {
  const handleLogoClick = () => {
    // Lógica adicional que puedes agregar antes de ir arriba, si es necesario
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <a href="/" onClick={handleLogoClick}>
        <img className='logo' src={logo} alt="Logo de MTG Masters" height={height} />
      </a>
    </div>
  );
}

export default Logo