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