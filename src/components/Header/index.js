//import logo from "./images/logo.svg";
import estilos from "./style-header.module.css";

function Header() {
  return (
    <div>
      <header className={estilos.containerHeader}>
        <img src="./images/logo.svg" alt="logo stetika"/>
        <nav>
          <ul className={estilos.menu}>
            <li><a className={estilos.linkAtivo} href="#">Agenda</a></li>
            <li><a href="#">Financeiro</a></li>
            <li><a href="#">Consultas</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
