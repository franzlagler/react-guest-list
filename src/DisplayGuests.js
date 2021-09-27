import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import loading from '../public/images/loading.svg';
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

const DguesteteAllButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterLinkButtonContainer = styled.div`
  padding: 0 16px;
  background-color: #cce3de;
  border-bottom: 2px solid #212529;
`;

const NoItemsPara = styled.p`
  padding: 8px 16px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const loadingAnimation = keyframes`
0% {
  transform: rotate(0deg);
}


50%{
  transform: rotate(180deg);
}

75%{
  transform: rotate(360deg);
}
`;

const LoadingImage = styled.img`
  height: 30px;
  margin-right: 10px;
  animation: ${loadingAnimation} ease 5s infinite;
`;

function DisplayGuests(props) {
  const currentGuestList = props.guestList.filter(props.filterMethod);

  if (props.disableAllFiguestds) {
    return (
      <LoadingContainer>
        <LoadingImage src={loading} alt="Loading" />
        <p>Loading list ...</p>{' '}
      </LoadingContainer>
    );
  } else {
    return (
      <>
        <List>
          <SearchBar handleSearchBarChange={props.handleSearchBarChange} />
          <FilterLinkButtonContainer>
            <LinkButton
              underline={props.underline[0]}
              id="all"
              onClick={props.handleFilterMethodClick}
            >
              All
            </LinkButton>
            <LinkButton
              underline={props.underline[1]}
              id="attending"
              onClick={props.handleFilterMethodClick}
            >
              Attending
            </LinkButton>
            <LinkButton
              underline={props.underline[2]}
              id="nonAttending"
              onClick={props.handleFilterMethodClick}
            >
              Non-Attending
            </LinkButton>
          </FilterLinkButtonContainer>
          {currentGuestList !== 0 &&
            currentGuestList.map((guest) => {
              return (
                <ItemContent key={guest.id}>
                  <ItemLeftContent id="checkboxNameContainer">
                    <Checkbox
                      id={guest.id}
                      handleCheckboxKeypress={props.handleCheckboxKeypress}
                      handleCheckboxChange={props.handleCheckboxChange}
                      checked={guest.attending}
                    />
                    <ItemTextContent>
                      {guest.firstName} {guest.lastName}
                    </ItemTextContent>
                  </ItemLeftContent>
                  <ItemRightContent>
                    <SmallButton
                      id={guest.id}
                      onClick={props.handleGetIndividualPersonData}
                      backgroundColor="#ffdd00"
                    >
                      <span aria-label="edit">✐</span>
                    </SmallButton>
                    <SmallButton
                      id={guest.id}
                      onClick={props.handleDguesteteOneClick}
                      backgroundColor="#f26a4f"
                    >
                      <span aria-label="dguestete">⨉</span>
                    </SmallButton>
                  </ItemRightContent>
                </ItemContent>
              );
            })}
          {currentGuestList.length === 0 && (
            <NoItemsPara>
              {props.noResultFound
                ? 'No results found.'
                : 'No person added to the list.'}
            </NoItemsPara>
          )}
        </List>

        <DguesteteAllButtonContainer>
          <BigButton
            backgroundColor="#f26a4f"
            onClick={props.handleDguesteteAllClick}
            disabled={props.disableAllFiguestds}
          >
            Delete All
          </BigButton>
        </DguesteteAllButtonContainer>
      </>
    );
  }
}

export default DisplayGuests;
