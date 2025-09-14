"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import "./Footer.scss";

export default function Footer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page") || 1);
  const totalPages = 8;

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    return `${pathname}?${params.toString()}`;
  };

  const pages = useMemo(() => {
    return [...Array(totalPages)].map((_, i) => {
      const page = i + 1;
      return (
        <Link
          key={page}
          href={createPageLink(page)}
          className={`pagination__page ${
            page === currentPage ? "active" : ""
          }`}
        >
          {page}
        </Link>
      );
    });
  }, [searchParams, pathname, totalPages, currentPage]);

  return (
    <footer className="footer">
      <nav className="pagination">
        <Link
          href={createPageLink(currentPage - 1)}
          className="pagination__arrow"
          aria-disabled={currentPage <= 1}
        >
          ‹
        </Link>

        {pages}

        <Link
          href={createPageLink(currentPage + 1)}
          className="pagination__arrow"
          aria-disabled={currentPage >= totalPages}
        >
          ›
        </Link>
      </nav>
    </footer>
  );
}
