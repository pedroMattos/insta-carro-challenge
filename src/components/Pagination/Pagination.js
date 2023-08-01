import { useEffect, useState } from "react";
import { Ellipsis, NextPrevButton, PageButton, PaginationWrapper } from "./Pagination.styles";
import ChevronIcon from "../Icons/ChevronIcon/ChevronIcon";
import usePagination from "./hooks/usePagination";

export default function Pagination({ totalItems, itemsPerPage, onChangePage }) {
  const {
    handleClickNext,
    handleClickPrevious,
    handlePageClick,
    getPageNumbers,
    currentPage,
    totalPages
  } = usePagination(totalItems, itemsPerPage)

  useEffect(() => {
    onChangePage?.(currentPage)
  }, [currentPage])


  return (
    <PaginationWrapper>
      <NextPrevButton onClick={handleClickPrevious} disabled={currentPage === 1}>
          <ChevronIcon width={10} height={10} />
      </NextPrevButton>
      {getPageNumbers().map((page, index) => (
          <div key={index}>
            {index === 0 && page !== 1 && (
              <PageButton
                onClick={() => handlePageClick(1)}
              >
                1
              </PageButton>
            )}
            {page === '...' ? (
              <Ellipsis>{page}</Ellipsis>
            ) : (
              <PageButton
                onClick={() => handlePageClick(page)}
                $isCurrent={currentPage === page}
              >
                {page}
              </PageButton>
            )}
            {index === getPageNumbers().length - 1 && page !== totalPages && (
              <PageButton
                onClick={() => handlePageClick(totalPages)}
              >
                {totalPages}
              </PageButton>
            )}
          </div>
        ))}
      <NextPrevButton $isNext onClick={handleClickNext} disabled={currentPage === totalPages}>
        <ChevronIcon width={10} height={10} />
      </NextPrevButton>
    </PaginationWrapper>
  )
}