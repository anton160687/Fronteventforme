import Pagination from 'react-bootstrap/Pagination';
import { usePagination, DOTS } from '../../../hooks/usePagination';

type PaginationProps = {
    currentPage: number;
    totalCount: number;
    siblingCount: number;
    pageSize: number;
    query: string | null;
}

function PaginationBar({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    query,
}: PaginationProps) {

    console.log(query);

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (paginationRange && (currentPage === 0 || paginationRange.length < 2)) {
        return null;
    }

    let lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : undefined;

    function renderPaginationItems() {
        return paginationRange?.map((pageNumber: string | number, i) => (
            pageNumber === DOTS ?
                <Pagination.Ellipsis key={i} />
                : (
                    <Pagination.Item
                        active={pageNumber === currentPage}
                        key={i}
                        href={query === '?' ?
                            `/catalog/places?page=${pageNumber}`
                            :
                            `/catalog/places${query}&page=${pageNumber}`}
                    >
                        {pageNumber}
                    </Pagination.Item>
                )
        ))
    }

    return (
        <Pagination size="lg">
            {currentPage !== 1 &&
                <Pagination.Item href={query === '?' ?
                    `/catalog/places?page=${currentPage - 1}`
                    :
                    `/catalog/places${query}&page=${currentPage - 1}`
                }>
                    <i className="fi-chevron-left"></i>
                </Pagination.Item>
            }
            {renderPaginationItems()}
            {currentPage !== lastPage &&
                <Pagination.Item href={query === '?' ?
                    `/catalog/places?page=${currentPage + 1}`
                    :
                    `/catalog/places${query}&page=${currentPage + 1}`}>
                    <i className="fi-chevron-right"></i>
                </Pagination.Item>
            }

        </Pagination >
    );
};

export default PaginationBar;