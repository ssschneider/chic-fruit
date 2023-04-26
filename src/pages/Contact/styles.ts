import styled from "styled-components";

import hero04 from "../../assets/hero04.svg"

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    .hero {
        background: fixed url(${hero04}) center center no-repeat;
        background-size: cover;
        height: 90vh;
    }
`;

export const SelectFruit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    width: 100%;
    
    > label {
        font-size: 3.2rem;
        font-weight: 700;
    }

    > select {
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.colors.black};
        border-radius: .8rem;
        padding: 1.8rem;
        font-size: 3.2rem;
        outline: none;
        width: 100%;

        option {
            background-color: ${({theme}) => theme.colors.white};
            font-size: 3.2rem;
        }
    }
`;

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    width: 100%;
    
    > label {
        font-size: 3.2rem;
        font-weight: 700;
    }

    .payment-form {
        display: flex;
        width: 100%;
        justify-content: space-between;
    
        > .payment-type {
            display: flex;
            gap: 1.6rem;

            > label {
                font-size: 3.2rem;
            }

            > input[radio] {
                background-color: ${({theme}) => theme.colors.white};
            }
        }
    }
`;

export const Observations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    width: 100%;
    
    > label {
        font-size: 3.2rem;
        font-weight: 700;
    }

    > textarea {
        resize: none;
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.colors.black};
        border-radius: .8rem;
        padding: 1.8rem;
        font-size: 3.2rem;
        outline: none;
        width: 100%;
        height: 21rem;
    }
`;

export const Button = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    border-radius: .4rem;
    font-size: 4rem;
    outline: none;
    border: none;
    padding: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`;