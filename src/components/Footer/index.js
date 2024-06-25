//import logo from "./images/logo.svg";
import estilos from "./style-footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={estilos.containerFooter}>
        <div>
            <h1>Controle Suas Consultas</h1>
            <p>Selecione uma das consultas para cancelar ou remarca-la</p>
        </div>
        <div>
            <p>cancelar</p>
            <p>remarcar</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
