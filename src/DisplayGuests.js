import styled from '@emotion/styled';
import BigButton from './BigButton';
import Checkbox from './Checkbox';
import SmallButton from './SmallButton';

const List = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border: 2px solid #212529;
  border-radius: 15px;
`;

const ItemContent = styled.div`
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
          {currentGuestList.map((el) => {
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
        </List>
        <ButtonContainer>
          <SmallButton id="all" onClick={props.handleFilterMethodClick}>
            All
          </SmallButton>
          <SmallButton id="attending" onClick={props.handleFilterMethodClick}>
            Attending
          </SmallButton>
          <SmallButton
            id="nonAttending"
            onClick={props.handleFilterMethodClick}
          >
            Non-Attending
          </SmallButton>
        </ButtonContainer>
        <ButtonContainer>
          <BigButton
            backgroundColor="#f26a4f"
            onClick={props.handleDeleteAllClick}
            disabled={props.disableAllFields}
          >
            Delete All
          </BigButton>
        </ButtonContainer>
      </>
    );
  }
}

export default DisplayGuests;
