//import logo from "./images/logo.svg";
import estilos from "./style-itemcard.module.css";

function ItemCard(props) {
    return (
        <div className={estilos.cardBox}>
            <ul>
                <li className={estilos.itemCard}>
                    <div>
                        <h2>{props.nome}</h2>
                        <p>Serviços Contratados: {props.servico}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ItemCard;
