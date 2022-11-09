import React from 'react'
import { Hello } from './Hello'
import { Info } from './Info'
import { Button } from 'shared-ui'

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <hr />
    <p>From shared ui:</p>
    <Button onClick={() => console.log('clicked')}>Click me</Button>
    <hr />
    <Hello />
    <Info />
  </div>
)
