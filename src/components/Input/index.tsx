import { Wrapper } from "./styles";

interface Props {
    label: string;
    placeholder: string;
    id: string;
    onChange: () => void;
}

export const Input = ({label, placeholder, id, onChange}: Props) => {
    return (
        <Wrapper>
            <label htmlFor={id}>{label}:</label>
            <input type="text" id={id} placeholder={placeholder} onChange={onChange}/>
        </Wrapper>
    )
}