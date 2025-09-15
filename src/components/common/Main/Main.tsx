import { getPokemonPage } from "@/lib/pokeapi";
import PokemonList from "@/components/common/PokemonList/PokemonList";
import "./main.scss";

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Main({ searchParams }: Props) {
  const page = parseInt((searchParams?.page as string) || "1", 10);
  const limit = 12;
  const search = ((searchParams?.search as string) || "").toLowerCase();

  const allPokemons = await getPokemonPage(page, limit);

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search)
  );

  if (filteredPokemons.length === 0) {
    return <div className="not-found">Not found Pokemon</div>;
  }

  return <PokemonList pokemons={filteredPokemons} />;
}
