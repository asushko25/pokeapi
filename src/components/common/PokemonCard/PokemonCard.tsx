'use client';

import Image from 'next/image';
import Link from 'next/link';
import './pokemonCard.scss';
import { Pokemon } from '@/types/pokemon';
import React from 'react';

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = React.memo(function PokemonCard({ pokemon }: Props) {
  return (
    <div className='pokemon-card'>
      <Link href='/' className='pokemon-card__back-button'>
        Back to Home
      </Link>

      <div className='pokemon-card__header'>
        {pokemon.sprites && (
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={120}
            height={120}
            className='pokemon-card__header-img'
          />
        )}

        <h2 className='pokemon-card__header-title'>{pokemon.name}</h2>
      </div>

      <div className='pokemon-card__section'>
        <div className='pokemon-card__section-title'>Types:</div>
        <div className='pokemon-card__section-list'>
          {pokemon.types.map((t) => (
            <div className='pokemon-card__section-list-item' key={t.slot}>
              {t.type.name}
            </div>
          ))}
        </div>
      </div>

      <div className='pokemon-card__section'>
        <div className='pokemon-card__section-title'>Abilities:</div>
        <div className='pokemon-card__section-list'>
          {pokemon.abilities.map((a) => (
            <div className='pokemon-card__section-list-item' key={a.ability.name}>
              {a.ability.name}
            </div>
          ))}
        </div>
      </div>

      <div className='pokemon-card__section'>
        <div className='pokemon-card__section-title'>Stats:</div>
        <div className='pokemon-card__stats'>
          {pokemon.stats.map((s) => (
            <div className='pokemon-card__stats-item' key={s.stat.name}>
              <span>{s.stat.name}</span>
              <span>{s.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default PokemonCard;
