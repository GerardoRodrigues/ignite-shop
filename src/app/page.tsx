import { Header } from "@/components/header/page";
import { Container } from "@/styles/pages/app";
import { HomeContainer, ProductContainer } from "@/styles/pages/home";
import Image from "next/image";

import camisa1 from "../assets/camisetas/camisa1.png";
import camisa2 from "../assets/camisetas/camisa2.png";
import camisa3 from "../assets/camisetas/camisa3.png";

export default function Home() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <ProductContainer>
          <Image src={camisa1} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </ProductContainer>
        <ProductContainer>
          <Image src={camisa2} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 119,90</span>
          </footer>
        </ProductContainer>
      </HomeContainer>
    </Container>
  );
}
