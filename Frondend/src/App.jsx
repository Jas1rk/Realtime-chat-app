import { useState } from 'react'
import './App.css'
import socketIO from 'socket.io-client'

const socket = socketIO.connect('http://localhost:4000');

function App() {
 

  return (
    <>
      <div>
        <p>hello world</p>
      </div>
     
    </>
  )
}

export default App
