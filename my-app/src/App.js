import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const [chatMessages, setChatMessages] = useState(null)
  const nameInputRef = useRef()
  const messageInputRef = useRef()

  function getChatMessages(){

      fetch('https://mock-data-api.firebaseio.com/chatrooms/MF_cHwY2pj8e8zwu8eO/messages.json')
      .then(res => res.json())
      .then(
        data => {
          setChatMessages(data)
        })

  }

  function handleSendMessage(){
    console.log(nameInputRef.current.value)
    console.log(messageInputRef.current.value)
    const payload = {
      name: nameInputRef.current.value,
      message: messageInputRef.current.value
    }

    fetch('https://mock-data-api.firebaseio.com/chatrooms/MF_cHwY2pj8e8zwu8eO/messages.json', {
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(res => getChatMessages())

  }

  useEffect(() => {
    getChatMessages()

  }, [])
  return (
    
    <div className="container">

      <div className="form-group">
       <input placeholder="Namn" ref={nameInputRef}></input>
       <input placeholder="Meddelande" ref={messageInputRef}></input>
       <button onClick={handleSendMessage}>Skicka</button>
      </div>

      {chatMessages && Object.entries(chatMessages).reverse().map((messageItem, index) => {
          return (
            <div key={index} className="col-md-12">
              <div className="alert alert-info">
                {messageItem[1].message} - {messageItem[1].name}
              </div>
            </div>
          )
        })}

    </div>
  );
}

export default App;
