import styled from 'styled-components';

import debounce from "lodash.debounce"

import {IoSearch} from 'react-icons/io5';

import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../store/controls/controls-actions";
import {useMemo, useState} from "react";
import {selectSearch} from "../store/controls/controls-selectors";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 18px 32px;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    max-width: 480px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 24px;
  font-size: 14px;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
  width: 100%;
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
      <IoSearch size="17.5px"/>
      <Input
        onChange={handleSearch}
        value={query}
      />
    </InputContainer>
  );
};
