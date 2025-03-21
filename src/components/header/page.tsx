import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { HeaderContainer } from "@/styles/pages/app";


export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo" />
    </HeaderContainer>
  );
}
