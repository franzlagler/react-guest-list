/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Container from './Container';
import GuestList from './GuestList';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import HorizontalRuler from './HorizontalRuler';
import InputBlock from './InputBlock';

const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #cce3de;
    color: #212529;
  }
`;

function App() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const firstUpdate = useRef(true);

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

  // Track if checkbox is checked

  const handleCheckboxChange = ({ currentTarget }) => {
    const id = currentTarget.id;
    const isChecked = currentTarget.checked;

    console.log(isChecked);

    async function updateGuest() {
      await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: isChecked }),
      });

      setFetchList((prev) => [...prev]);
    }

    updateGuest();
  };
  // Delete an individual Guest from the list
  const handleDeleteOneClick = ({ currentTarget }) => {
    const id = currentTarget.id;

    async function deleteGuest() {
      await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });

      setFetchList((prev) => [...prev]);
    }

    deleteGuest();
  };

  const handleDeleteAllClick = () => {
    async function deleteGuest() {
      for (let i = 0; i < guestList.length; i++) {
        const currentId = guestList[i].id;
        await fetch(`${baseUrl}/${currentId}`, {
          method: 'DELETE',
        });
      }

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
    if (firstUpdate.current === true) {
      firstUpdate.current = false;

      // Simulating the Server Load
      setTimeout(fetchData, 3000);
    } else {
      fetchData();
    }
  }, [fetchList]);

  return (
    <>
      <Global styles={globalStyle} />
      <Container
        id="mainContainer"
        maxWidth="800px"
        padding="2%"
        backgroundColor="#f8f9fa"
        border="2px solid #212529"
      >
        <Heading1>Guest List App</Heading1>
        <Container id="inputContainer" width="400px" margin="0 auto">
          <Heading2>Manage List</Heading2>
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
          <Button
            margin="20px auto 0 auto"
            width="50%"
            onClick={handleAddClick}
          >
            Submit
          </Button>
          <HorizontalRuler />
        </Container>
        <Container id="guestListContainer" width="400px" margin="0 auto">
          <Heading2>Preview</Heading2>
          <GuestList
            guestList={guestList}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteOneClick={handleDeleteOneClick}
            handleDeleteAllClick={handleDeleteAllClick}
          />
        </Container>
      </Container>
    </>
  );
}

export default App;
