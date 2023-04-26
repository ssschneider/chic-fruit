import { Wrapper } from "./styles"

interface Props {
    link: string;
    name: string;
    description: string;
}

export const Card = ({ link, name, description }: Props) => {
    return (
        <Wrapper>
            <img src={link} alt={name} />

            <div className="content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Wrapper>
    )
}