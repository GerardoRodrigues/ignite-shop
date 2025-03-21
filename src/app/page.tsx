"use client";

import { Header } from "@/components/header/page";
import { Container } from "@/styles/pages/app";
import { HomeContainer, ProductContainer } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import camisa1 from "../assets/camisetas/camisa1.png";
import camisa2 from "../assets/camisetas/camisa2.png";
import camisa3 from "../assets/camisetas/camisa3.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <Container>
      <Header />
      <HomeContainer ref={sliderRef} className="keen-slider">
        <ProductContainer className="keen-slider__slide">
          <Image src={camisa1} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </ProductContainer>
        <ProductContainer className="keen-slider__slide">
          <Image src={camisa2} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 119,90</span>
          </footer>
        </ProductContainer>
        <ProductContainer className="keen-slider__slide">
          <Image src={camisa3} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 59,90</span>
          </footer>
        </ProductContainer>
        <ProductContainer className="keen-slider__slide">
          <Image src={camisa3} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 59,90</span>
          </footer>
        </ProductContainer>
      </HomeContainer>
    </Container>
  );
}
