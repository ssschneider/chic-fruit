import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 34.8rem;
    height: 50rem;
    gap: 2.4rem;
    padding: 2.4rem;
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: .8rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    > img {
            max-width: 30rem;
            height: 32rem;
            border-radius: .4rem;
            object-fit: cover;
        }
    
    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2rem;

        h3 {
            font-size: 3.2rem;
            font-weight: 700;
        }

        p {
            font-size: 2.4rem;
            text-align: justify;
        }
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;