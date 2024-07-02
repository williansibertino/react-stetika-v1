//import logo from "./images/logo.svg";
import ItemCard from "../ItemCard";
import estilos from "./style-listitens.module.css";

function ListagemItens() {
  return (
    <main className={estilos.containerMain}>
      <ItemCard nome={"Hellen Moraes"} servico={"Limpeza de Pele"} />
      <ItemCard nome={"Hellen Moraes"} servico={"Limpeza de Pele"} />
      <ItemCard nome={"Hellen Moraes"} servico={"Limpeza de Pele"} />
      <ItemCard nome={"Hellen Moraes"} servico={"Limpeza de Pele"} />
      <ItemCard nome={"Hellen Moraes"} servico={"Limpeza de Pele"} />
    </main>
  );
}

export default ListagemItens;
