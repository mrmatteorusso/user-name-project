import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const [enteredData, setEnteredData] = useState('')

  const saveEnteredData = savedEnteredData => {
    // const userData = [
    //   enteredData, ...savedEnteredData
    // ]

    setEnteredData((prevUserData) => {
      return [...prevUserData, savedEnteredData]
    })


    // console.log("userData", userData)
    // console.log("Entered data", enteredData)

  }
  console.log("enteredData from useState", enteredData)

  const firstUser = enteredData[0].user
  return (
    <div>
      <UserForm onSaveUserData={saveEnteredData} />
      <div>
      {/* <ul>{enteredData.map(item => console.log(item))} */}
{firstUser}
      {/* </ul> */}
      </div>

      ciao
    </div>
  );
}

export default App;
