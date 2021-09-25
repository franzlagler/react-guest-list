import styled from '@emotion/styled';
import cross from '../public/images/cross.svg';
import search from '../public/images/search.svg';

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  background-color: inherit;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position-x: 16px;
  background-position-y: 44%;
  border: none;
  border-bottom: 2px solid #212529;
  border-radius: 15px 15px 0 0;
  text-indent: 30px;
  font-size: 20px;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: #212529;
    opacity: 0.6;
  }

  &::placeholder::before {
    content: 'x';
  }

  &::-webkit-search-cancel-button {
    appearance: none;
    background-image: url(${cross});
  }
`;

function SearchBar(props) {
  return (
    <Input
      type="search"
      placeholder="Search..."
      onChange={props.handleSearchBarChange}
    />
  );
}

export default SearchBar;
