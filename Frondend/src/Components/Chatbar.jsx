import React from 'react'
import '../../public/Chatbar.css'

const Chatbar = () => {
  return (
   <div className="chat-sidebar">
    <h2>Open chat</h2>
    <div>
        <h4 className='chat-headeres'>ACTIVE USERS</h4>
        <div className="chat-users">
            <p>User 1</p>
            <p>User 2</p>
            <p>User 3</p>
            <p>User 4</p>
            <p>User 5</p>
        </div>
    </div>
   </div>
  )
}

export default Chatbar
