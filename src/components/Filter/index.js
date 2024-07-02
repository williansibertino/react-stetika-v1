//import logo from "./images/logo.svg";
import estilos from "./style-filter.module.css";

function Filter() {
  return (
    <div>
      <header className={estilos.barraFilter}>
        <div>
            <h1>Agenda de Consultas</h1>
            <p>Use-o o filtro para uma pesquisa mais avançada</p>
        </div>
        <div>
            <p>data</p>
            <p>período</p>
        </div>
      </header>
    </div>
  );
}

export default Filter;
