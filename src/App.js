/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Button from './Components/Button';
import Container from './Components/Container';
import InputBlock from './Components/InputBlock';
import GuestList from './GuestList';

function App() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameInputChange = ({ currentTarget }) => {
    const input = currentTarget.value;
    setFirstName(input);
  };

  const handleLastNameInputChange = ({ currentTarget }) => {
    const input = currentTarget.value;
    setLastName(input);
  };

  const handleSubmit = () => {
    setGuestList((prev) => {
      const updatedArray = [...prev];
      updatedArray.push({ firstName: firstName, lastName: lastName });
      setGuestList(updatedArray);
    });
  };

  const handleDeleteButton = ({ currentTarget }) => {
    const id = currentTarget.id;
    const updatedGuestList = [];
    for (let i = 0; i < guestList.length; i++) {
      if (guestList[i] === guestList[id]) {
        continue;
      }

      updatedGuestList.push(guestList[i]);
    }

    setGuestList(updatedGuestList);
  };

  useEffect(() => {
    setFirstName('');
    setLastName('');
  }, [guestList]);

  return (
    <Container
      id="mainContainer"
      maxWidth="1000px"
      padding="3%"
      border="2px solid #212529"
      flex
    >
      <Container id="inputContainer" maxWidth="400px">
        <InputBlock
          id="firstName"
          name="First Name"
          value={firstName}
          handleInputChange={handleFirstNameInputChange}
        />
        <InputBlock
          id="lastName"
          name="Last Name"
          value={lastName}
          handleInputChange={handleLastNameInputChange}
        />
        <Button width="100%" onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
      <Container id="guestListContainer" maxWidth="400px">
        <GuestList
          guestList={guestList}
          handleDeleteButton={handleDeleteButton}
        />
      </Container>
    </Container>
  );
}

export default App;
