import React from "react";
import * as S from "./SearchBar.style";

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchIcon size={16} />
      <S.StyledInput placeholder="Pesquise aqui" />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
