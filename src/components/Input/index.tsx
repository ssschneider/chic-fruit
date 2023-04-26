import { Wrapper } from "./styles";

interface Props {
    label: string;
    placeholder: string;
    id: string;
    required: boolean;
}

export const Input = ({label, placeholder, id, required}: Props) => {
    return (
        <Wrapper>
            <label htmlFor={id}>{label}:</label>
            <input type="text" id={id} placeholder={placeholder} required={required}/>
        </Wrapper>
    )
}