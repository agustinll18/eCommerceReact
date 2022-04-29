import "./App.css";
import Header from "./components/header/Header";
import Cards from './components/nav/cards/Cards'

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="nav">
        <Cards/>
      </div>
    </>
  );
}

export default App;
