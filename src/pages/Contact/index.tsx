import { Button, Observations, Payment, SelectFruit, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import fruitsData from "../../db.json";

export const Contact = () => {
    return (
		<Wrapper>
			<div className="hero">
				<Header />
			</div>

			<Section title="Faça a sua compra">
				<form>
					<fieldset>
						<legend>Dados Pessoais</legend>

						<Input
							label="Nome completo"
							id="fullName"
							placeholder="Seu nome completo"
							required
						/>

						<Input
							label="Telefone para Contato"
							id="telephone"
							placeholder="+55 11 99999-9999"
							required
						/>

						<Input
							label="Endereço de Entrega"
							id="address"
							placeholder="Av. Nossa Senhora de Copacabana, 1000, apto 101 - Copacabana"
							required
						/>
					</fieldset>

					<fieldset>
						<legend>Pedido</legend>

						<SelectFruit>
							<label htmlFor="fruits">Frutas Desejadas:</label>
							<select name="fruits" id="fruits">
                                <option value="">Selecione</option>
								{fruitsData.fruits.map((fruit) => {
									return (
										<option value={fruit.fruit} id={fruit.fruit}>
											{fruit.fruit}
										</option>
									);
								})}
							</select>
						</SelectFruit>

                        <Payment>
                            <label htmlFor="payment">Forma de Pagamento:</label>

                            <div className="payment-form">
                            
                            <div className="payment-type">
                                <input type="radio" name="payment" id="credit"/>
                                <label htmlFor="credit">Cartão de Crédito</label>
                            </div>

                            <div className="payment-type">
                                <input type="radio" name="payment" id="pix"/>
                                <label htmlFor="pix">Pix</label>
                            </div>

                            <div className="payment-type">
                                <input type="radio" name="payment" id="debit"/>
                                <label htmlFor="debit">Cartão de Débito</label>
                            </div>
                            </div>
                        </Payment>

                        <Observations>
                            <label htmlFor="observations">Observações:</label>

                            <textarea name="observations" id="observations" placeholder="Qualquer detalhe, favor adicionar aqui."></textarea>
                        </Observations>
					</fieldset>

                    <Button 
                        onClick={() => alert("Seu pedido foi concluído!")}
                    >
                        Realizar Pedido
                    </Button>
				</form>
			</Section>
		</Wrapper>
	);
};
