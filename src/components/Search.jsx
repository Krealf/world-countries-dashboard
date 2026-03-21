import styled from 'styled-components';

import debounce from "lodash.debounce"

import {IoSearch} from 'react-icons/io5';

import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../store/controls/controls-actions";
import {useMemo, useState} from "react";
import {selectSearch} from "../store/controls/controls-selectors";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

export const Search = () => {
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

  return (
    <InputContainer>
      <IoSearch />
      <Input
        onChange={handleSearch}
        value={query}
      />
    </InputContainer>
  );
};
