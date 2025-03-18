export default async function ProductId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <h1>Produc Id: {id}</h1>;
}
