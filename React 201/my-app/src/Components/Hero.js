const Hero = ({ title, text ,backdrop}) => {
  return (
    <header className="bg-dark text-white p-4 hero-container">
      <h1  className="hero-text" style={{ textAlign: "center" }}>{title}</h1>
      <p  className="hero-text" style={{ textAlign: "center", marginTop: "1rem" }}>{text}</p>
     {backdrop &&
        <div className="hero-backdrop" style={{backgroundImage:`url(${backdrop})`}}>
        </div>
      }
    
    </header>
  );
};
export default Hero;
