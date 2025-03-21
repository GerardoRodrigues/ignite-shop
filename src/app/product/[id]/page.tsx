import { Header } from "@/components/header/page";
import { Container } from "@/styles/pages/app";

export default async function ProductId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Container>
      <Header />
      <h1>Produc Id: {id}</h1>
    </Container>
  );
}
