import styled from "styled-components";
import bgImage from "../../assets/bg-footer.svg";

export const Wrapper = styled.footer`
    width: 100%;
    background: url(${bgImage}) center center no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
    padding: 5.5rem 7.2rem;

    > h2 {
        color: ${({theme}) => theme.colors.green};
    }

    > nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1.6rem;

        a {
            color: ${({theme}) => theme.colors.green};
        }

        a:hover {
            transform: scale(1.05);
        }
    }
`;