import React from 'react'

export default function RoomComponent(props) {
    
  
  return (

    <div>
        {props.roomItem[1].name &&

        <div key={props.index}>
            <div className="alert alert-info">
                <h1>{props.roomItem[1].name && props.roomItem[1].name}</h1>
                <button className="btn btn-secondary" onClick={() => props.goToRoom(props.roomItem[0])}>Gå till rum</button>
            </div>
        </div>
        }
    </div>
  )
}
