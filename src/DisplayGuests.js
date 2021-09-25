import styled from '@emotion/styled';
import BigButton from './BigButton';
import Checkbox from './Checkbox';
import LinkButton from './LinkButton';
import SearchBar from './SearchBar';
import SmallButton from './SmallButton';

const List = styled.div`
  margin: 20px 0;
  background-color: #fff;
  border: 2px solid #212529;
  border-radius: 15px;
`;

const ItemContent = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  &:first-of-type {
    margin-top: 10px;
  }
`;

const ItemLeftContent = styled.div`
  display: flex;
  align-items: center;
`;

const ItemRightContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ItemTextContent = styled.p`
  margin: 'auto';
  list-style-type: none;
  font-size: 16px;
`;

const DeleteAllButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterButtonContainer = styled.div`
  padding: 0 16px;
  background-color: #cce3de;
  border-bottom: 2px solid #212529;
`;

const NoResultsPara = styled.p`
  padding: 8px 16px;
`;

function DisplayGuests(props) {
  const currentGuestList = props.guestList.filter(props.filterMethod);

  if (props.disableAllFields) {
    return <p>Loading list ...</p>;
  } else if (props.guestList.length === 0) {
    return <p>No people added to the list.</p>;
  } else {
    return (
      <>
        <List>
          <SearchBar handleSearchBarChange={props.handleSearchBarChange} />
          <FilterButtonContainer>
            <LinkButton id="all" onClick={props.handleFilterMethodClick}>
              All
            </LinkButton>
            <LinkButton id="attending" onClick={props.handleFilterMethodClick}>
              Attending
            </LinkButton>
            <LinkButton
              id="nonAttending"
              onClick={props.handleFilterMethodClick}
            >
              Non-Attending
            </LinkButton>
          </FilterButtonContainer>
          {currentGuestList !== 0 &&
            currentGuestList.map((el) => {
              return (
                <ItemContent key={el.id}>
                  <ItemLeftContent id="checkboxNameContainer">
                    <Checkbox
                      id={el.id}
                      handleCheckboxChange={props.handleCheckboxChange}
                      checked={el.attending}
                    />
                    <ItemTextContent>
                      {el.firstName} {el.lastName}
                    </ItemTextContent>
                  </ItemLeftContent>
                  <ItemRightContent>
                    <SmallButton
                      id={el.id}
                      onClick={props.handleGetIndividualPersonData}
                      backgroundColor="#ffdd00"
                    >
                      <span aria-label="edit">✐</span>
                    </SmallButton>
                    <SmallButton
                      id={el.id}
                      onClick={props.handleDeleteOneClick}
                      backgroundColor="#f26a4f"
                    >
                      <span aria-label="delete">⨉</span>
                    </SmallButton>
                  </ItemRightContent>
                </ItemContent>
              );
            })}
          {currentGuestList.length === 0 && (
            <NoResultsPara>No results found.</NoResultsPara>
          )}
        </List>

        <DeleteAllButtonContainer>
          <BigButton
            backgroundColor="#f26a4f"
            onClick={props.handleDeleteAllClick}
            disabled={props.disableAllFields}
          >
            Delete All
          </BigButton>
        </DeleteAllButtonContainer>
      </>
    );
  }
}

export default DisplayGuests;
