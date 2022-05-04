import "./App.css";
import Header from "./components/header/Header"; /* 
import { Cards } from "./components/nav/cards/Cards"; */
import ControlledCarousel from "./components/nav/ControlledCarousel/ControlledCarousel";
import QuienesSomos from "./components/nav/QuienesSomos/QuienesSomos";
import Servicios from "./components/nav/Servicios/Servicios";
import Goal from "./components/footer/Goal"
import Contacto from "./components/footer/Contacto";
import Waves from "./components/footer/Waves"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  
  return (
    <>
      <div className="App">
        <Header />
        <div className="navigation" >
          <ControlledCarousel />
          <div class="cards col-lg-6 col-sm-12" id="quienesSomos">
            <QuienesSomos />
          </div>
          <br id="Cursos"/>
          <br/>
          <br/>
          <div class="cards col-9" id="">
            <Servicios />
          </div>
        </div>
        <div className="footer col-12" id="Contacto">
          <Goal/>
          <Waves/>
          <Contacto />
        </div>
        <a className="wApp" href="https://api.whatsapp.com/send?phone=541130073960" target="_blank" rel="noreferrer"/> 
      </div>
    </>
  );
}

export default App;
