import styled from "styled-components";

import hero02 from "../../assets/hero02.svg"

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    .hero {
        background: fixed url(${hero02}) center center no-repeat;
        background-size: cover;
        height: 90vh;
    }
`;