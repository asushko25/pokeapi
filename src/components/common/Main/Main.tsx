import { getPokemonPage } from "@/lib/pokeapi";
import PokemonList from "@/components/common/PokemonList/PokemonList";
import "./main.scss";

type Props = {
  searchParams: { page?: string; search?: string };
};

export default async function Main({ searchParams }: Props) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 12;
  const search = (searchParams.search || "").toLowerCase();

  const allPokemons = await getPokemonPage(page, limit);

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search)
  );

  return <PokemonList pokemons={filteredPokemons} />;
}
