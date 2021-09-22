import Button from './Components/Button';
import Checkbox from './Components/Checkbox';

function GuestList(props) {
  return (
    <div>
      {props.guestList.map((el, index) => {
        return (
          <ul key={Math.random() * 1000}>
            <div>
              <li>
                {el.firstName} {el.lastName}
              </li>
              <Checkbox />
              <Button id={index} onClick={props.handleDeleteButton}>
                Delete
              </Button>
            </div>
          </ul>
        );
      })}
    </div>
  );
}

export default GuestList;
