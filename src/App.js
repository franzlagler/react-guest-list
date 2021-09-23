/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import Button from './Button';
import Container from './Container';
import GuestList from './GuestList';
import InputBlock from './InputBlock';

function App() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Control variable for reloading guest list from server
  const [fetchList, setFetchList] = useState(['fetch']);

  const baseUrl = 'http://localhost:5000';

  // Keep track of input changes
  const handleFirstNameInputChange = ({ currentTarget }) => {
    const input = currentTarget.value;
    setFirstName(input);
  };
  const handleLastNameInputChange = ({ currentTarget }) => {
    const input = currentTarget.value;
    setLastName(input);
  };
  // Add a guest to the list
  const handleAddClick = () => {
    async function addGuest() {
      await fetch(`${baseUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: firstName, lastName: lastName }),
      });

      setFetchList((prev) => [...prev]);
      setFirstName('');
      setLastName('');
    }

    addGuest();
  };
  // Delete an individual Guest from the list
  const handleDeleteOneClick = ({ currentTarget }) => {
    const id = Number.parseInt(currentTarget.id);

    async function deleteGuest() {
      await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });

      setFetchList((prev) => [...prev]);
    }

    deleteGuest();
  };
  // Reload guest list whenever fetchList const is being changed
  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`${baseUrl}/`);
      const data = await rawData.json();
      setGuestList(data);
    }
    fetchData();
  }, [fetchList]);

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
        <Button width="100%" onClick={handleAddClick}>
          Submit
        </Button>
      </Container>
      <Container id="guestListContainer" maxWidth="400px">
        <GuestList
          guestList={guestList}
          handleDeleteOneClick={handleDeleteOneClick}
        />
      </Container>
    </Container>
  );
}

export default App;
