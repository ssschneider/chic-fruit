import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Wrapper } from "./styles"

export const Contact = () => {
    return (
        <Wrapper>
            <div className="hero">
                <Header />
            </div>

            <Section title="Faça a sua compra">
                <Input 
                    label="Nome completo"
                    id="fullName"
                    placeholder="Seu nome completo"
                    onChange={() => console.log("digitando")}
                />
            </Section>
        </Wrapper>
    )
}