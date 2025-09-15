import { getPokemon } from '@/lib/pokeapi'
import PokemonCard from '@/components/common/PokemonCard/PokemonCard'

type PageProps = {
  params: { id: string }
}

export default async function PokemonPage({ params }: PageProps) {
  const pokemonId = parseInt(params.id, 10)

  const pokemon = await getPokemon(pokemonId)

  return <PokemonCard pokemon={pokemon} />
}
