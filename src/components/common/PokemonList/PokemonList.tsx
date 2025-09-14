"use client";

import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import Link from "next/link";


export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div className="container">
      <main className="main">
        <div className="main__cards">
          {pokemons.map((pokemon) => (
            <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`} className="main__card">
              <Image
                src={pokemon.image!}
                alt={pokemon.name}
                width={140}
                height={140}
                className="main__image"
              />
              <p className="main__name">{pokemon.name}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
