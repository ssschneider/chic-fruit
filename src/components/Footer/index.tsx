import { Wrapper } from "./styles";

import { GiFruitBowl } from "react-icons/gi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <Wrapper>
            <h2>
                <GiFruitBowl size={64}/>
            </h2>

            <nav>
                <a href="https://linkedin.com/in/sarahmurebs">
                    <FaLinkedin size={56}/>
                </a>

                <a href="https://linkedin.com/in/sarahmurebs">
                    <FaGithub size={56}/>
                </a>
            </nav>
        </Wrapper>
    )
}