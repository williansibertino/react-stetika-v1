//import logo from "./images/logo.svg";
import ItemCard from "../ItemCard";
import estilos from "./style-listitens.module.css";

function ListagemItens() {

const clientes = [
    {
        "dataMarcada": "(01/07) 08:00h",
        "nome": "Hellen Moraes",
        "cor": "Morena",
        "idade": 24,
        "servico": "Limpeza de Pele",
        "id": 1
    },
    {
        "dataMarcada": "(02/07) 10:00h",
        "nome": "Aylla Silva",
        "cor": "Parda",
        "idade": 16,
        "servico": "Sobrançelha de Henna",
        "id": 2
    },
    {
        "dataMarcada": "(03/07) 13:00h",
        "nome": "Rosa Pereira",
        "cor": "Branca",
        "idade": 20,
        "servico": "Dermaplaining",
        "id": 3
    },
    {
        "dataMarcada": "(04/07) 09:00h",
        "nome": "Clara Souza",
        "cor": "Branca",
        "idade": 28,
        "servico": "Massagem Relaxante",
        "id": 4
    },
    {
        "dataMarcada": "(05/07) 11:00h",
        "nome": "Mariana Lima",
        "cor": "Morena",
        "idade": 32,
        "servico": "Hidratação Facial",
        "id": 5
    }
];

  return (
    <main className={estilos.containerMain}>
      {/* Implementação Manual de Dados
      <ItemCard dataMarcada={"(01/07) 08:00h"} nome={"Hellen Moraes"} servico={"Limpeza de Pele"} cor={"Morena"} idade={24} />
      */}

      {/* Implementação via Estrutura de Dados Json
      <ItemCard dados={clientes[0]} />
      <ItemCard dados={clientes[1]} />
      <ItemCard dados={clientes[2]} />
      */}

      {/* Uso de Callback Function com o Map*/}
      {
        clientes.map((elemento) => 
          (<ItemCard dados={elemento} />)
        )
      }

    </main>
  );
}

export default ListagemItens;
