import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: 90%;
    margin: 9.2rem auto 12rem;

    > h2 {
        font-size: 6.4rem;
        font-family: 'Italiana', sans-serif;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid ${({theme}) => theme.colors.black};
        margin-bottom: 4rem;
    }

    > p {
        font-size: 3.2rem;
        text-align: justify;
        margin: 2rem 0;
    }
`;