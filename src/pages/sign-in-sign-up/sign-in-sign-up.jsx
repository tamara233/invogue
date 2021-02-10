import React from 'react'
import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/signup'

import './sign-in-sign-up.scss'

const SignInSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInSignUpPage
