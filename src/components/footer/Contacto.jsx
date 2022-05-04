import Ig from "./Socials/Ig";
const Contacto = () => {
  return (
    <div className="contactoContainer col-12" id="contacto">
      <div className="col-6" style={{ zIndex: 2 }}>
        <h2>Contacto</h2>
        <h4>Seguinos en Instagram</h4>
        <Ig />
        <h5>
          Created and designed by{" "}
          <a
            href="https://portfolio-agustinllados.000webhostapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Agustin LLados
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-llados-a39067200/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp;Linkedin
          </a>{" "}
        </h5>
      </div>
    </div>
  );
};
export default Contacto;
