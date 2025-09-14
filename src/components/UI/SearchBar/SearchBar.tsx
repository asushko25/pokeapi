"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useDebounce } from "@/components/hooks/useDebounce";
import "./searchBar.scss";

export default function SearchBar({ delay = 3000 }) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value.trim().toLowerCase(), delay);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedValue) {
      params.set("search", debouncedValue);
      params.delete("page");
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clear = () => {
    setValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`${pathname}?${params.toString()}`);
  };

  const hasText = useMemo(() => value.length > 0, [value]);

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
