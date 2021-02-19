import React, { useState } from 'react'

import FormInput from '../form-input/form-input'
import CustomBotton from '../custom-button/custom-button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './signup.scss'

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { displayName, email, password, confirmPassword } = userCredentials
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )

      await createUserProfileDocument(user, { displayName })

      setCredentials({
        displayName: '',
        email: '',
        password: '',
        consfirmPassword: '',
      })
    } catch (err) {
      console.error('Oops', err.message)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setCredentials({ [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomBotton type="submit">SIGN ME UP !</CustomBotton>
      </form>
    </div>
  )
}
export default SignUp
