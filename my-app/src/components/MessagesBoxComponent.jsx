import React from 'react'
import MessageComponent from './MessageComponent';

export default function MessagesBoxComponent(props) {
  return (
    <>
        {props.messages && Object.entries(props.messages).reverse().map((messageItem, index) => {
          return (
              
            <MessageComponent 
            index={index}
            messageItem={messageItem}
            
            />
          )
        })}
    </>
  )
}
