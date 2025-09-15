'use client';

import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loader from '@/components/UI/Loader/Loader.tsx';

type PaginationProps = {
  totalPages: number;
};

export default function Pagination({ totalPages }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  const currentPage = Number(searchParams.get('page') || 1);

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    return `${pathname}?${params.toString()}`;
  };

  useEffect(() => {
    setLoading(false);
  }, [currentPage]);

  if (loading) {
    return <Loader />;
  }

  return (
    <nav className='pagination'>
      <Link
        href={createPageLink(currentPage - 1)}
        className='pagination__arrow'
        aria-disabled={currentPage <= 1}
        onClick={() => setLoading(true)}
      >
        ‹
      </Link>

      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return (
          <Link
            key={page}
            href={createPageLink(page)}
            className={`pagination__page ${page === currentPage ? 'active' : ''}`}
            onClick={() => setLoading(true)}
          >
            {page}
          </Link>
        );
      })}

      <Link
        href={createPageLink(currentPage + 1)}
        className='pagination__arrow'
        aria-disabled={currentPage >= totalPages}
        onClick={() => setLoading(true)}
      >
        ›
      </Link>
    </nav>
  );
}
