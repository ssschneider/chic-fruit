import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8rem;

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.6rem;
        max-width: 75rem;

        h3 {
            font-size: 4.8rem;
            font-weight: 700;
        }

        p {
            font-size: 3.2rem;
            text-align: justify;
        }
    }

    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`;