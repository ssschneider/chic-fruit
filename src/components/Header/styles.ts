import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: transparent;
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    padding: 3.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;

    > h1 {
        display: flex;
        align-items: center;
        gap: 3.2rem;
        font-size: 6.4rem;
        font-family: 'Italiana', sans-serif;
    }

    > nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2.4rem;

        a {
            font-size: 3.2rem;
            font-weight: 700;
            border-bottom: 1px solid transparent;
            color: ${({theme}) => theme.colors.black};
        }

        a:hover {
            border-bottom-color: ${({theme}) => theme.colors.black};
        }
    }
`;