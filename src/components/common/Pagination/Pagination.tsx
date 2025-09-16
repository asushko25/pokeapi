"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/UI/Loader/Loader";
import "./pagination.scss";

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const currentPage = Number(searchParams.get("page") || 1);

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    return `${pathname}?${params.toString()}`;
  };

  useEffect(() => {
    setLoading(false);
  }, [currentPage]);

  if (!totalPages || totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);
    if (currentPage > 4) pages.push("...");
    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 3) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <nav className="pagination">
      {loading ? (
        <div className="loader-wrapper inline">
          <Loader />
        </div>
      ) : (
        <>
          <Link
            href={createPageLink(Math.max(1, currentPage - 1))}
            className="pagination__arrow"
            aria-disabled={currentPage <= 1}
            onClick={() => currentPage > 1 && setLoading(true)}
          >
            ‹
          </Link>

          {getPages().map((p, i) =>
            typeof p === "number" ? (
              <Link
                key={i}
                href={createPageLink(p)}
                className={`pagination__page ${
                  p === currentPage ? "active" : ""
                }`}
                aria-current={p === currentPage ? "page" : undefined}
                onClick={() => setLoading(true)}
              >
                {p}
              </Link>
            ) : (
              <span key={i} className="pagination__dots">
                {p}
              </span>
            )
          )}

          <Link
            href={createPageLink(Math.min(totalPages, currentPage + 1))}
            className="pagination__arrow"
            onClick={() => currentPage < totalPages && setLoading(true)}
          >
            ›
          </Link>
        </>
      )}
    </nav>
  );
}
