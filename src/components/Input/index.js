import React from 'react'
import './index.scss';

function Input(props) {
  props.setChangeCount(0);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");


  function OccNameValue(e) {
    setName(e.target.value);
  }

  function OccSurnameValue(e) {
    setSurname(e.target.value);
  }

  React.useMemo(() => {
    props.setPerson({ name, surname });
  }, [name, surname])


  function addNewPerson() {
    props.setChangeCount(props.changeCount + 1);
    postToAPI(props.person);
  }

  function postToAPI(obj) {
    fetch('https://636398d98a3337d9a2e1d68d.mockapi.io/jirono/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    });
  }

  return (
    <>
      <div className='inputs-area'>
        <input placeholder='Name' onChange={OccNameValue}></input>
        <input placeholder='Surname' onChange={OccSurnameValue}></input>
        <button onClick={addNewPerson}>Add</button>

      </div>
    </>
  )
}

export default Input;