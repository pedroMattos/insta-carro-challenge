import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import getAllHeroes from "../services/getAllHeroes";
const PER_PAGE = 8
export default function useHeroesData() {
  const [heroes, setHeroes] = useState(null)
  const [totalItems, setTotalItems] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [pageOffset, setPageOffset] = useState(1)

  const handlePageChange = (page) => {
    const offset = (page - 1) * PER_PAGE
    reFetchAgents(offset)
    setIsLoading(true)
  }

  const handleSearch = (event) => {
    const searchTerm = event.target.value
    const isNoEmpty = !!searchTerm.trim()
    const startSearch = debounce(() => {
      if (isNoEmpty) {
        reFetchAgents(0, searchTerm, false)
        return
      }

      reFetchAgents(pageOffset, searchTerm)
    }, 1000)

    startSearch()
  }

  const reFetchAgents = async (offset, searchTerm, changeOffset = true) => {
    const { results, total } = await getAllHeroes(offset, searchTerm)
    changeOffset && setPageOffset(offset)
    setHeroes(results)
    setTotalItems(total)
    setIsLoading(false)
  }

  const fetchAgents = async () => {
    const { results, total } = await getAllHeroes()
    setHeroes(results)
    setTotalItems(total)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAgents()
  }, [])

  return { isLoading, heroes, totalItems, handlePageChange, handleSearch }
}