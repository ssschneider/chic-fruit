import { Wrapper } from "./styles";

import { GiFruitBowl } from "react-icons/gi";
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <Wrapper>
            <h1>
                <GiFruitBowl size={64}/>
                Chic Fruit
            </h1>

            <nav>
                <Link to={"/"}>Início</Link>
                <Link to={"/products"}>Produtos</Link>
                <Link to={"/services"}>Serviços</Link>
                <Link to={"/contact"}>Contato</Link>
            </nav>
        </Wrapper>
    )
}