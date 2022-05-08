import React, { useState } from 'react'

function UserForm(props) {
    // const [form, setForm] = useState('')
    const [enteredUser, setEnteredUser] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')

    const userChangeHandler = (event) => {
        setEnteredUser(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const sumbitHandler = (event) => {

        event.preventDefault();
        const profile = {
            user: enteredUser,
            email: enteredEmail,
            id: Math.random().toString(),


        }
        props.onSaveUserData(profile)
        setEnteredUser('');
        setEnteredEmail('');
    }

    return (
        <form onSubmit={sumbitHandler}>
            <label>UserName</label>
            <input type="text" placeholder='User Name' value={enteredUser} onChange={userChangeHandler}></input>
            <label>Email</label>
            <input type="email" placeholder='Email' value={enteredEmail} onChange={emailChangeHandler}></input>
            <button type='submit'>Insert User</button>
        </form>
    )
}

export default UserForm
