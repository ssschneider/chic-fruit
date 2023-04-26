import { Wrapper } from "./styles"

interface Props {
    title: string;
    children: any
}

export const Section = ({title, children}: Props) => {
    return (
        <Wrapper>
            <h2>{title}</h2>
            {children}
        </Wrapper>
    )
}