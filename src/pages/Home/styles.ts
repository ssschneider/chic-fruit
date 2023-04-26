import styled from "styled-components";

import hero01 from "../../assets/hero01.svg"

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    .hero {
        background: fixed url(${hero01}) center center no-repeat;
        background-size: cover;
        height: 90vh;
    }
`;