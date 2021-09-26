/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import DisplayGuests from './DisplayGuests';
import Heading2 from './Heading2';
import HorizontalRuler from './HorizontalRuler';
import MainContainer from './MainContainer';
import MainHeading from './MainHeading';
import ManageList from './ManageList';

// Styles

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

const ManageListContainer = styled.div`
  padding: 0 10%;
`;

const DisplayGuestContainer = styled.div`
  padding: 0 10%;
`;

function App() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [disableUpdateButton, setDisableUpdateButton] = useState(true);
  const [disableAddButton, setDisableAddButton] = useState('');
  const [disableAllFields, setDisableAllFields] = useState(true);
  const [idToUpdate, setIdToUpdate] = useState();
  // Control variable for reloading guest list from server
  const [fetchList, setFetchList] = useState(['fetch']);
  const [filterMethod, setFilterMethod] = useState(() => {
    return (el) => el;
  });
  const [noResultFound, setNoResultFound] = useState(false);

  const firstNameInputField = useRef(null);
  const firstUpdate = useRef(true);
  const baseUrl = 'https://expres-rest-guest-list-api.herokuapp.com';

  const changeNameInputs = (text1, text2) => {
    setFirstName(text1);
    setLastName(text2);
  };

  // Get guest list data from server
  async function fetchGuestListData() {
    const rawData = await fetch(`${baseUrl}/`);
    const data = await rawData.json();
    setGuestList(data);
  }

  // Add a guest to the list
  async function addGuest() {
    await fetch(`${baseUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });

    setFetchList((prev) => [...prev]);
    changeNameInputs('', '');
  }
  // Get the data of an inidividual guest
  async function getIndividualGuestData(id) {
    const rawData = await fetch(`${baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await rawData.json();
    changeNameInputs(data.firstName, data.lastName);
    setDisableUpdateButton(false);
    setDisableAddButton(true);
    setIdToUpdate(id);
  }
  // Update the data of an individual guest
  async function updateGuestData() {
    await fetch(`${baseUrl}/${idToUpdate}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    setFetchList((prev) => [...prev]);
    setDisableUpdateButton(true);
    setDisableAddButton('');
    changeNameInputs('', '');
  }
  // Update the attending status of an individual guest
  async function updateAttendingStatus(id, isChecked) {
    await fetch(`${baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: isChecked }),
    });

    setFetchList((prev) => [...prev]);
  }
  // Delete a guest from the guest list
  async function deleteGuest(id) {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });

    setFetchList((prev) => [...prev]);
  }

  // Delete all guest from the guest list
  async function deleteAllGuests() {
    for (let i = 0; i < guestList.length; i++) {
      const currentId = guestList[i].id;
      await fetch(`${baseUrl}/${currentId}`, {
        method: 'DELETE',
      });
    }

    setFetchList((prev) => [...prev]);
  }

  // Keep track of input changes
  const handleFirstNameInputChange = ({ currentTarget }) => {
    const input = currentTarget.value;
    setFirstName(input);
  };
  const handleLastNameInputChange = ({ currentTarget }) => {
    const input = currentTarget.value;
    setLastName(input);
  };

  const handleAddClick = () => {
    addGuest();
  };

  const handleCheckboxKeypress = ({ currentTarget, key }) => {
    if (key === 'Enter') {
      if (currentTarget.checked) {
        currentTarget.checked = false;
        return;
      }
      currentTarget.checked = true;
    }
  };

  const handleCheckboxChange = ({ currentTarget }) => {
    const id = currentTarget.id;
    const isChecked = currentTarget.checked;
    updateAttendingStatus(id, isChecked);
  };

  const handleGetIndividualPersonData = ({ currentTarget }) => {
    const id = currentTarget.id;
    getIndividualGuestData(id);
    firstNameInputField.current.focus();
  };

  const handleUpdateClick = () => {
    updateGuestData();
  };

  const handleDeleteOneClick = ({ currentTarget }) => {
    const id = currentTarget.id;
    deleteGuest(id);
    setNoResultFound(false);
  };

  const handleDeleteAllClick = () => {
    deleteAllGuests();
    setFilterMethod(() => {
      return (el) => el;
    });

    setNoResultFound(false);
  };

  const handleFilterMethodClick = ({ currentTarget }) => {
    const buttonId = currentTarget.id;

    if (buttonId === 'all') {
      setFilterMethod(() => {
        return (el) => el;
      });
      setNoResultFound(false);
      return;
    } else if (buttonId === 'attending') {
      setFilterMethod(() => {
        return (el) => el.attending;
      });
    } else {
      setFilterMethod(() => {
        return (el) => !el.attending;
      });
    }
    setFetchList((prev) => [...prev]);
    setNoResultFound(true);
  };

  const handleSearchBarChange = ({ currentTarget }) => {
    const input = currentTarget.value;

    if (input.length === 0) {
      setFilterMethod(() => {
        return (el) => el;
      });
      setNoResultFound(false);
      return;
    }
    setFilterMethod(() => {
      return (el) =>
        el.firstName.startsWith(input) || el.lastName.startsWith(input);
    });

    setNoResultFound(true);
  };

  // Fetch Guest List from Server
  useEffect(() => {
    if (firstUpdate.current === true) {
      firstUpdate.current = false;

      // Simulating the Server Load
      setTimeout(() => {
        setDisableAllFields(false);
        fetchGuestListData();
      }, 3000);
    } else {
      fetchGuestListData();
    }
    setDisableUpdateButton(true);
    setDisableAddButton('');
  }, [fetchList]);

  return (
    <>
      <Global styles={globalStyle} />
      <MainContainer>
        <MainHeading />
        <ManageListContainer>
          <ManageList
            firstName={firstName}
            lastName={lastName}
            handleFirstNameInputChange={handleFirstNameInputChange}
            handleLastNameInputChange={handleLastNameInputChange}
            handleAddClick={handleAddClick}
            handleUpdateClick={handleUpdateClick}
            disableAddButton={disableAddButton}
            disableUpdateButton={disableUpdateButton}
            disableAllFields={disableAllFields}
            firstNameInputField={firstNameInputField}
          />
        </ManageListContainer>
        <HorizontalRuler />
        <DisplayGuestContainer>
          <Heading2>Invited People</Heading2>
          <DisplayGuests
            guestList={guestList}
            noResultFound={noResultFound}
            filterMethod={filterMethod}
            disableAllFields={disableAllFields}
            handleCheckboxKeypress={handleCheckboxKeypress}
            handleCheckboxChange={handleCheckboxChange}
            handleGetIndividualPersonData={handleGetIndividualPersonData}
            handleDeleteOneClick={handleDeleteOneClick}
            handleDeleteAllClick={handleDeleteAllClick}
            handleFilterMethodClick={handleFilterMethodClick}
            handleSearchBarChange={handleSearchBarChange}
          />
        </DisplayGuestContainer>
      </MainContainer>
    </>
  );
}

export default App;
