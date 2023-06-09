import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 400 62.5% 'Josefin Slab', serif;
        transition: .5s linear;
        text-decoration: none;
    }

    body {
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.black};
    }

    a, button {
        cursor: pointer;
    }
`;