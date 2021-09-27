import styled from '@emotion/styled';
import BigButton from './BigButton';
import Heading2 from './Heading2';
import InputBlock from './InputBlock';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

function ManageListContainer(props) {
  return (
    <div>
      <Heading2>Manage List</Heading2>
      <InputBlock
        id="firstName"
        name="First Name"
        value={props.firstName}
        handleNameChange={props.handleNameChange}
        disabled={props.disableAllFields}
        firstNameInputField={props.firstNameInputField}
      />
      <InputBlock
        id="lastName"
        name="Last Name"
        value={props.lastName}
        handleNameChange={props.handleNameChange}
        disabled={props.disableAllFields}
      />
      <ButtonGroup>
        <BigButton
          backgroundColor="#cce3de"
          onClick={props.handleAddClick}
          disabled={props.disableAllFields || props.disableAddButton}
        >
          Add
        </BigButton>
        <BigButton
          backgroundColor="#ffdd00"
          onClick={props.handleUpdateClick}
          disabled={props.disableAllFields || props.disableUpdateButton}
        >
          Update
        </BigButton>
      </ButtonGroup>
    </div>
  );
}

export default ManageListContainer;
