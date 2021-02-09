import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header'

const HatsPage = () => (
  <div>
    <h1>HATs</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  )
}

export default App
