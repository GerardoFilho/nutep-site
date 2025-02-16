import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 2px solid #48af66;
  border-radius: 9999px;
  padding: 8px 16px;
  background-color: #fff;
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 8px;
  color: #999;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
  color: #333;
  background-color: transparent;

  &::placeholder {
    color: #999;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon size={16} />
      <StyledInput placeholder="Pesquise aqui" />
    </SearchBarContainer>
  );
};

export default SearchBar;
