import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InputComponent from './components/InputComponent';
import MessagesBoxComponent from './components/MessagesBoxComponent';
import RoomsBoxComponent from './components/RoomsBoxComponent';

function App() {

  const [chatRooms, setChatRooms] = useState(null)
  
  const [currentRoom, setCurrentRoom] = useState(null)

  const [chatMessages, setChatMessages] = useState(null)

  function getChatRooms(input) {

    fetch('https://mock-data-api.firebaseio.com/chatrooms.json')
    .then(res => res.json())
    .then(
      data => {
        input(data)
      })

  }

  function getChatMessages(currentRoom) {
    fetch(`https://mock-data-api.firebaseio.com/chatrooms/${currentRoom}/messages.json`)
    .then(res => res.json())
    .then(
      data => {
        setChatMessages(data)
      })

  }

  function goToRoom(input){

    getChatMessages(input)
    setCurrentRoom(input)

  }

  const nameInputRef = useRef()
  const messageInputRef = useRef()

  function handleSendMessage(){
    
    const payload = {
      name: nameInputRef.current.value,
      message: messageInputRef.current.value
    }
    
    fetch(`https://mock-data-api.firebaseio.com/chatrooms/${currentRoom}/messages.json`, {
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(res => getChatMessages(currentRoom))

  }

  useEffect(() => {
    getChatMessages(currentRoom);
    getChatRooms(setChatRooms)
  }, [])
  return (
    
    <div className="container">
      <br></br>
      <InputComponent
        nameRef={nameInputRef}
        messageRef={messageInputRef}
        handleSendMessage={handleSendMessage}
      />
      <br></br>
      {<MessagesBoxComponent
        messages={chatMessages}
        
      /> }
      <RoomsBoxComponent
        rooms={chatRooms}
        goToRoom={goToRoom}
      />

    </div>
  );
}

export default App;
