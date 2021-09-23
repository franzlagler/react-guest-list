import styled from '@emotion/styled';
import Button from './Button';
import Checkbox from './Checkbox';
import Container from './Container';

const List = styled.ul`
  padding: 10px 20px;
  background-color: #fff;
  border: 2px solid #212529;
  border-radius: 15px;
`;

const ItemField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 20px;
`;

const ItemText = styled.li`
  display: inline-block;
  list-style-type: none;
  font-size: 20px;
`;

const Emoji = styled.span``;

function GuestList(props) {
  return (
    <div>
      {props.guestList.length === 0 ? (
        <p>List is loading...</p>
      ) : (
        props.guestList.map((el) => {
          return (
            <List key={el.id}>
              <ItemField>
                <Container id="checkboxNameContainer" display="flex" margin="0">
                  <Checkbox
                    id={el.id}
                    handleCheckboxChange={props.handleCheckboxChange}
                    checked={el.attending}
                  />
                  <ItemText>
                    {el.firstName} {el.lastName}
                  </ItemText>
                </Container>
                <Container margin="0">
                  <Button
                    id={el.id}
                    backgroundColor="#ffdd00"
                    margin="0 10px 0 0"
                    padding="5px 10px"
                    border="1px solid #212529"
                    borderRadius="5px"
                    fontSize="16px"
                    noBorder
                    onClick={props.handleFetchPersonData}
                  >
                    <Emoji aria-label="edit">✐</Emoji>
                  </Button>
                  <Button
                    id={el.id}
                    backgroundColor="#f26a4f"
                    padding="5px 10px"
                    border="1px solid #212529"
                    borderRadius="5px"
                    fontSize="16px"
                    noBorder
                    onClick={props.handleDeleteOneClick}
                  >
                    <Emoji aria-label="delete">⨉</Emoji>
                  </Button>
                </Container>
              </ItemField>
            </List>
          );
        })
      )}
      <Button
        margin="20px auto"
        backgroundColor="#f26a4f"
        border="2px solid #212529"
        color="#212529"
        onClick={props.handleDeleteAllClick}
      >
        Delete All
      </Button>
    </div>
  );
}

export default GuestList;
