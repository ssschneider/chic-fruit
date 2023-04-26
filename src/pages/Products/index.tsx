import { Wrapper } from "./styles";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import fruitsData from "../../db.json";

export const Products = () => {
    return (
        <Wrapper>
            <div className="hero">
                <Header />
            </div>

            <Section title="Nossas Frutas">
                <div className="products">
                    {fruitsData.fruits.map(fruit => {
                        return (
                            <Card 
                            key={fruit.id}
                            name={fruit.fruit}
                            link={fruit.image}
                            description={fruit.description}
                            />
                        )
                    })}
                </div>
            </Section>
        </Wrapper>
    )
}