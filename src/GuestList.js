import styled from '@emotion/styled';
import Button from './Button';
import Checkbox from './Checkbox';

const List = styled.ul``;

const ItemField = styled.div`
  display: flex;
`;

const ItemText = styled.li``;

function GuestList(props) {
  return (
    <div>
      {props.guestList.map((el) => {
        return (
          <List key={el.id}>
            <ItemField>
              <ItemText>
                {el.firstName} {el.lastName}
              </ItemText>
              <Checkbox id={`check${el.id}`} />
              <Button id={el.id} noBorder onClick={props.handleDeleteOneClick}>
                Delete
              </Button>
            </ItemField>
          </List>
        );
      })}
    </div>
  );
}

export default GuestList;
