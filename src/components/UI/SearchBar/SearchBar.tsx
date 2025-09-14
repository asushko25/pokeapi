"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./searchBar.scss";

type Props = {
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  delay?: number;
};

export default function SearchBar({
  onChange,
  onSubmit,
  delay = 300,
}: Props) {
  const [value, setValue] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!onChange) return;
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      onChange(value.trim());
    }, delay);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [value, delay, onChange]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value.trim());
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="search__icon">
        <Image src="/search.svg" alt="search icon" width={18} height={18} />
      </span>

      <input
        className="search__input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search by name"
      />
    </form>
  );
}
