import styled from '@emotion/styled';
import BigButton from './BigButton';
import Checkbox from './Checkbox';
import SmallButton from './SmallButton';

const List = styled.div`
  padding: 5px 20px;
  background-color: #fff;
  border: 2px solid #212529;
  border-radius: 15px;
`;

const ItemField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ItemRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ItemText = styled.p`
  margin: 'auto';
  list-style-type: none;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function DisplayGuests(props) {
  if (props.disableAllFields) {
    return <p>Loading list ...</p>;
  } else {
    return (
      <>
        <List>
          {props.guestList.map((el) => {
            return (
              <ItemField key={el.id}>
                <ItemLeftContainer id="checkboxNameContainer">
                  <Checkbox
                    id={el.id}
                    handleCheckboxChange={props.handleCheckboxChange}
                    checked={el.attending}
                  />
                  <ItemText>
                    {el.firstName} {el.lastName}
                  </ItemText>
                </ItemLeftContainer>
                <ItemRightContainer>
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
                </ItemRightContainer>
              </ItemField>
            );
          })}
        </List>
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
