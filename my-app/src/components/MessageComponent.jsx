import React from 'react'

export default function MessageComponent(props) {
    
  return (
      
    <div>
        <div key={props.index}>
            <div className="alert alert-info">
                <h2>{props.messageItem[1].name}</h2>
                <p>{props.messageItem[1].message}</p>
            </div>
        </div>
    </div>
  )
}
