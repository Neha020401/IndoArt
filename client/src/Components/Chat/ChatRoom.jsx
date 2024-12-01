import React from 'react'
import './Chat.css'


const users = [{
  id:67895064,
  username:"Kashish_Cremic _art",
  profileName:"Kashish Jha ",
  profilePic:'https://img.freepik.com/free-vector/hand-drawn-kawaii-girl-illustration_23-2149659182.jpg?ga=GA1.1.1852846683.1689413396&semt=ais_hybrid'
},
{
  id:799685430293,
  username:"Ganesh_Fine_Art",
  profileName:"Ganesh More",
  profilePic:'https://img.freepik.com/free-photo/3d-render-cute-little-boy-wearing-cowboy-costume_1142-43675.jpg?ga=GA1.1.1852846683.1689413396&semt=ais_hybrid'
},
{
  id:6666403834,
  username:"gargi-fabric-art",
  profileName:'Gargi dubey',
  profilePic:'https://img.freepik.com/free-photo/cute-cartoon-kid-posing-portrait_23-2151870615.jpg?ga=GA1.1.1852846683.1689413396&semt=ais_hybrid'
}
]

const ChatRoom = () => {
  return (
    <div className='ChatRoom'>
        <div className='ChatRoom-head'>
Your chatRoom
        </div>
      <div className='chatbody'>
<div className='userArrayAppearance'>
  {
    users.map((user)=>{
      return(
<div key={user.id} className='UserArrayAppearance-list'>
  <div>
    <img src={user.profilePic} alt="user pf" />
  </div>
  <div>
    <p className='chat_pfName'>{user.profileName}</p>
    <p className='chat_userName'>{user.username}</p>
  </div>
</div>
      )
    })
  }
</div>
<div className='chat-apperance'>
<div className='chat-apperance-profile'>
   <img src="https://img.freepik.com/free-vector/hand-drawn-kawaii-girl-illustration_23-2149659182.jpg?ga=GA1.1.1852846683.1689413396&semt=ais_hybrid" alt="" className='chat-apperance-profileimg'/>
   <div >
   <div className='chat-apperance-profileName'>User Name</div>
   <div>active</div>
   </div>
   
  </div>
  <div className='theChats'>
  Chat  appreance
  </div> 
</div>
      </div>
    </div>
  )
}

export default ChatRoom
