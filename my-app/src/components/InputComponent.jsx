import React from 'react'

export default function InputComponent(props) {
  return (
    
    <div>

      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">Name</span>
        </div>
        <input type="text" className="form-control" aria-label="Name" aria-describedby="inputGroup-sizing-sm" ref={props.nameRef}></input>
      </div>
      <br></br>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">Message</span>
        </div>
        <input type="text" className="form-control" aria-label="Message" aria-describedby="inputGroup-sizing-sm" ref={props.messageRef}></input>
      </div>
      <br></br>
      <button onClick={props.handleSendMessage} className="btn btn-primary">Skicka</button>
    </div>

  )};
