import type { Pokemon, PokemonListResponse } from "@/types/pokemon";

const API = process.env.API_URL as string;

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
): Promise<PokemonListResponse> {
  const offset = (page - 1) * limit;
  return fetchJson<PokemonListResponse>(
    `${API}/pokemon?limit=${limit}&offset=${offset}`,
    { next: { revalidate: 60 } }
  );
}

export async function getPokemon(
  idOrName: number | string
): Promise<Pokemon> {
  return fetchJson<Pokemon>(`${API}/pokemon/${idOrName}`, {
    cache: "no-store",
  });
}
