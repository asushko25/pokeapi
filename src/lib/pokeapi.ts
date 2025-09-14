import type { Pokemon, PokemonListResponse } from "@/types/pokemon";

const API = process.env.NEXT_PUBLIC_API_URL as string;

async function fetchJson<T>(
  url: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    const msg = `Fetch failed ${res.status} ${res.statusText} for ${url}`;
    throw new Error(msg);
  }
  return res.json() as Promise<T>;
}

export async function getPokemonPage(
  page = 1,
  limit = 12
): Promise<{ id: number; name: string; image: string | null }[]> {
  const offset = (page - 1) * limit;
  const list = await fetchJson<PokemonListResponse>(
    `${API}/pokemon?limit=${limit}&offset=${offset}`,
    { next: { revalidate: 60 } }
  );

  const pokemons = await Promise.all(
    list.results.map(async ({ name }) => {
      const data = await fetchJson<Pokemon>(`${API}/pokemon/${name}`, {
        next: { revalidate: 60 },
      });
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default || null,
      };
    })
  );

  return pokemons;
}

export async function getPokemon(
  idOrName: number | string
): Promise<Pokemon> {
  return fetchJson<Pokemon>(`${API}/pokemon/${idOrName}`, {
    cache: "no-store",
  });
}
