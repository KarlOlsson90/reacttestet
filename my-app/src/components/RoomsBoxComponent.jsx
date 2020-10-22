import React from 'react'
import MessageComponent from './MessageComponent';
import RoomComponent from './RoomComponent';

export default function RoomsBoxComponent(props) {
  
  return (
    
    <>
        {props.rooms && Object.entries(props.rooms).reverse().map((roomItem, index) => {
          
          return (
            
            <RoomComponent 
            goToRoom={props.goToRoom}
            index={index}
            roomItem={roomItem}
            
            />
          )
        })
      
        }
    </>
  )
}
