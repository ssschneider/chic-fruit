import { Wrapper } from "./styles"

interface Props {
    icon: any;
    title: string;
    description: string;
}

export const CardLong = ({ title, description, icon: Icon }: Props) => {
    return (
        <Wrapper>
            <Icon size={24}/>

            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Wrapper>
    )
}