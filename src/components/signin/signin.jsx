import React, { useState } from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.scss'

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCredentials({ email: '', password: '' })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    e.preventDefault()

    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
