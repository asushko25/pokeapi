import { getPokemon } from "@/lib/pokeapi";
import PokemonCard from "@/components/common/PokemonCard/PokemonCard";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PokemonPage({ params }: PageProps) {
  const { id } = await params;
  const pokemonId = parseInt(id, 10);
  const pokemon = await getPokemon(pokemonId);

  return <PokemonCard pokemon={pokemon} />;
}
