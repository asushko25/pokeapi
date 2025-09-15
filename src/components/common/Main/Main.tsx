import { getPokemonPage } from '@/lib/pokeapi'
import PokemonList from '@/components/common/PokemonList/PokemonList'
import Pagination from '@/components/common/Pagination/Pagination'
import './main.scss'

type Props = {
  searchParams?: Record<string, string | string[] | undefined>
}

export default async function Main({ searchParams }: Props) {
  const page = parseInt((searchParams?.page as string) || '1', 10)
  const limit = 12
  const search = ((searchParams?.search as string) || '').toLowerCase()

  const allPokemons = await getPokemonPage(page, limit)

  const filteredPokemons = allPokemons.filter((p) =>
    p.name.toLowerCase().includes(search)
  )

  const totalPages = 8

  if (filteredPokemons.length === 0) {
    return (
      <>
        <div className="main__cards">
          {Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="main__card skeleton-card"></div>
          ))}
        </div>
        <div className="not-found">Not found Pokemon</div>
      </>
    )
  }

  return (
    <>
      <PokemonList pokemons={filteredPokemons} />
      <Pagination totalPages={totalPages} />
    </>
  )
}
