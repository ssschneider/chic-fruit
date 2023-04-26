import styled from "styled-components";

import hero03 from "../../assets/hero03.svg"

export const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;

    .hero {
        background: fixed url(${hero03}) center center no-repeat;
        background-size: cover;
        height: 90vh;
    }
`;