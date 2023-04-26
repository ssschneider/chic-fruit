import { Wrapper } from "./styles";

import { CardLong } from "../../components/CardLong";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { GiShoppingCart, GiTruck } from "react-icons/gi";

export const Services = () => {
	return (
		<Wrapper>
			<div className="hero">
				<Header />
			</div>

			<Section title="Nossos Serviços">
				<div className="services">
					<CardLong
						title="Personal Shopper"
						description="Lorem ipsum dolor sit amet consectetur. Accumsan a felis at in praesent maecenas massa in. Sapien cursus varius morbi turpis vestibulum quis augue. Turpis ante senectus posuere habitasse senectus sagittis elit. Elementum egestas amet lobortis risus sit. Ut fringilla amet mauris faucibus."
						icon={GiShoppingCart}
					/>

					<CardLong
						title="Delivery Pessoal"
						description="Lorem ipsum dolor sit amet consectetur. Accumsan a felis at in praesent maecenas massa in. Sapien cursus varius morbi turpis vestibulum quis augue. Turpis ante senectus posuere habitasse senectus sagittis elit. Elementum egestas amet lobortis risus sit. Ut fringilla amet mauris faucibus."
						icon={GiTruck}
					/>
				</div>
			</Section>
		</Wrapper>
	);
};
