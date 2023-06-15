import Link from 'next/link';
import Pagination from 'react-bootstrap/Pagination';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import styles from '@/styles/catalog/Catalog.module.scss';

type PaginationProps = {
  currentPage: number;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  query: string;
  path: string;
};

function PaginationBar({ currentPage, totalCount, siblingCount, pageSize, query, path}: PaginationProps) {

  const paginationRange = usePagination({ currentPage, totalCount,  siblingCount,  pageSize });

  if (paginationRange && (currentPage === 0 || paginationRange.length < 2)) {
    return null;
  }

  let lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : undefined;

  function renderPaginationItems() {
    return paginationRange?.map((pageNumber: string | number, i) =>
      pageNumber === DOTS ? (
        <Pagination.Ellipsis key={i} />
      ) : (
        <Link
          key={i}
          className={
            pageNumber === currentPage
              ? styles.pagination__link_active
              : styles.pagination__link
          }
          href={
            query === ''
              ? `${path}?page=${pageNumber}`
              : `${path}${query}&page=${pageNumber}`
          }
        >
          {pageNumber}
        </Link>
      )
    );
  }

  return (
    <Pagination
      size="lg"
      className=" justify-content-center justify-content-lg-start"
    >
      {currentPage !== 1 && (
        <Link
          className={styles.pagination__arrow}
          href={
            query === ''
              ? `${path}?page=${currentPage - 1}`
              : `${path}${query}&page=${currentPage - 1}`
          }
        >
          <i className="fi-chevron-left"></i>
        </Link>
      )}
      {renderPaginationItems()}
      {currentPage !== lastPage && (
        <Link
          className={styles.pagination__arrow}
          href={
            query === ''
              ? `${path}?page=${currentPage + 1}`
              : `${path}${query}&page=${currentPage + 1}`
          }
        >
          <i className="fi-chevron-right"></i>
        </Link>
      )}
    </Pagination>
  );
}

export default PaginationBar;
