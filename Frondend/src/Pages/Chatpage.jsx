import React from 'react'
import Chatbar from '../Components/Chatbar'
import '../../public/Chatpage.css'
import Message from '../Components/Message'
import Inbox from '../Components/Inbox'

const Chatpage = () => {
  return (
    <div className='chat'>
      <Chatbar/>
      <div className="chat-main">
        <Message/>
        <Inbox/>
      </div>
    </div>
  )
}

export default Chatpage
