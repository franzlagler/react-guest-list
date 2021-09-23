import styled from '@emotion/styled';
import Button from './Button';
import Checkbox from './Checkbox';

const List = styled.ul`
  padding: 10px 20px;
  background-color: #fff;
  border: 2px solid #212529;
  border-radius: 15px;
`;

const ItemField = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`;

const ItemText = styled.li`
  list-style-type: none;
  font-size: 20px;
`;

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
                <ItemText>
                  {el.firstName} {el.lastName}
                </ItemText>
                <Checkbox
                  id={el.id}
                  handleCheckboxChange={props.handleCheckboxChange}
                  checked={el.attending}
                />
                <Button
                  id={el.id}
                  backgroundColor="inherit"
                  noBorder
                  color="red"
                  onClick={props.handleDeleteOneClick}
                >
                  <span aria-label="delete">⨉</span>
                </Button>
              </ItemField>
            </List>
          );
        })
      )}
      <Button
        margin="20px auto"
        width="50%"
        backgroundColor="#f26a4f"
        border="0"
        color="#212529"
        onClick={props.handleDeleteAllClick}
      >
        Delete All
      </Button>
    </div>
  );
}

export default GuestList;
