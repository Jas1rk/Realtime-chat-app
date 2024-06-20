import React from 'react'
import Chatbar from '../Components/Chatbar'
import '../../public/Chatpage.css'
import Message from '../Components/Message'

const Chatpage = () => {
  return (
    <div className='chat'>
      <Chatbar/>
      <div className="chat-main">
        <Message/>
      </div>
    </div>
  )
}

export default Chatpage
