import { useState } from "react"

export default function usePagination(totalItems, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageLimit = 4

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handleClickPrevious = () => {
    setCurrentPage((currentPage) => currentPage - 1)
  }

  const handleClickNext = () => {
    setCurrentPage((currentPage) => currentPage + 1)
  }

  const handlePageClick = (page) => {
    setCurrentPage(page)
  }

  const getPageNumbers = () => {
    const pageNumbers = []
    let startPage
    let endPage

    if (totalPages <= pageLimit) {
      startPage = 1
      endPage = totalPages
    } else {
      const halfPagesToShow = Math.floor(pageLimit / 2)
      if (currentPage <= halfPagesToShow + 1) {
        startPage = 1
        endPage = pageLimit
      } else if (currentPage + halfPagesToShow >= totalPages) {
        startPage = totalPages - pageLimit + 1
        endPage = totalPages
      } else {
        startPage = currentPage - halfPagesToShow
        endPage = currentPage + halfPagesToShow
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    if (totalPages > pageLimit) {
      if (currentPage > pageLimit - Math.floor(pageLimit / 2)) {
        pageNumbers.unshift('...')
      }
      if (currentPage < totalPages - Math.floor(pageLimit / 2)) {
        pageNumbers.push('...')
      }
    }

    return pageNumbers
  }

  return {
    handleClickPrevious,
    handleClickNext,
    handlePageClick,
    getPageNumbers,
    currentPage,
    totalPages
  }
}