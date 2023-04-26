import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    width: 100%;
    
    > label {
        font-size: 3.2rem;
        font-weight: 700;
    }

    > input {
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.colors.black};
        border-radius: .8rem;
        padding: 1.8rem;
        font-size: 3.2rem;
        outline: none;
        width: 100%;
    }
`;