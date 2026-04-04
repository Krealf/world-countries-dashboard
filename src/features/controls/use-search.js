import {useDispatch, useSelector} from "react-redux";
import {useMemo, useState} from "react";
import {selectSearch, setSearch} from "./controls-slice";
import debounce from "lodash.debounce";

export const useSearch = () => {
  const dispatch = useDispatch()
  const searchValue = useSelector(selectSearch)
  const [query, setQuery] = useState(searchValue)

  const debouncedSearch = useMemo(
    () => debounce((value) => dispatch(setSearch(value)), 300), [dispatch]
  )

  const handleSearch = (event) => {
    setQuery(event.target.value)
    debouncedSearch(event.target.value)
  }

  return [query, handleSearch];
}