'use client';

import { Pokemon } from '@/types/pokemon';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  const renderedPokemons = useMemo(
    () =>
      pokemons.map((pokemon) => (
        <Link
          key={pokemon.id}
          href={`/pokemon/${pokemon.id}`}
          className='main__card'
        >
          {pokemon.image && (
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={140}
              height={140}
              className='main__image'
            />
          )}
          <p className='main__name'>{pokemon.name}</p>
        </Link>
      )),
    [pokemons]
  );

  return (
    <div className='container'>
      <main className='main'>
        <div className='main__cards'>{renderedPokemons}</div>
      </main>
    </div>
  );
}
