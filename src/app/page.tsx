import { ButtonContainer } from "@/styles/Button";
import { globalStyles } from "@/styles/global";

globalStyles();

export default function Home() {
  return (
    <>
      <ButtonContainer>Enviar</ButtonContainer>
      <h1>Product</h1>
      <p>Mesa</p>
    </>
  );
}
