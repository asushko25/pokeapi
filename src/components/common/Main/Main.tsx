import { getPokemonPage } from "@/lib/pokeapi";
import PokemonList from "@/components/common/PokemonList/PokemonList";
import Pagination from "@/components/common/Pagination/Pagination";
import { TOTAL_PAGES, POKEMONS_PER_PAGE } from "@/config/constants";

import "./main.scss";

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Main({ searchParams }: Props) {
  const page = parseInt((searchParams?.page as string) || "1", 10);
  const search = ((searchParams?.search as string) || "").toLowerCase();

  const allPokemons = await getPokemonPage(page, POKEMONS_PER_PAGE);

  const filteredPokemons = allPokemons.filter((p) =>
    p.name.toLowerCase().includes(search)
  );

  if (filteredPokemons.length === 0) {
    return <div className="not-found">Not found Pokemon</div>;
  }

  return (
    <>
      <PokemonList pokemons={filteredPokemons} />
      <Pagination totalPages={TOTAL_PAGES} />
    </>
  );
}
