import React, { useState } from 'react'

function UserForm() {
    // const [form, setForm] = useState('')
    const [enteredUser, setEnteredUser] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')

    const userChangeHandler = (event) => {
        setEnteredUser(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const logIT = (event) => {
        // // setForm(event.target.value)
        event.preventDefault();
        // // console.log(event.target.querySelector('input').value);
        // console.log("entered event", event.target.querySelector('input').value);
        // //const oldInput = event.target.querySelector('input').value
        // let newInput = event.target.querySelector('input').value
        // //console.log(oldInput)
        // console.log(newInput = '')
        const profile = {
            user: enteredUser,
            email: enteredEmail,

        }
        console.log(profile)
    }

    return (
        <form onSubmit={logIT}>
            <label>UserName</label>
            <input type="text" placeholder='User Name' onChange={userChangeHandler}></input>
            <label>Email</label>
            <input type="email" placeholder='Email' onChange={emailChangeHandler}></input>
            <button type='submit'>Insert User</button>
        </form>
    )
}

export default UserForm
