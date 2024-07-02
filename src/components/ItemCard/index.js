//import logo from "./images/logo.svg";
import estilos from "./style-itemcard.module.css";

function ItemCard(props) {
    return (
        <div className={estilos.cardBox}>
            <ul>
                <li className={estilos.itemCard}>
                    <div>
                        <h2>{props.dados.dataMarcada}<span className={estilos.dividerRound}></span>{props.dados.nome}<span className={estilos.dividerRound}></span>{props.dados.cor}<span className={estilos.dividerRound}></span>{props.dados.idade} anos</h2>
                        <p>Serviços Contratados: {props.dados.servico}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ItemCard;
