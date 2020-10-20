import React, { useState } from 'react'

export default function PostsItem(props) {

    const [Show, setShow] = useState(false)
    const [likes, changeLikes] = useState(props.postContent.likes)

    function toggleData(){
        setShow(!Show)

    }

    function expandCase(){
        props.setExpandedItem(props.index)
    }

    function like(){

        changeLikes(
            props.postContent.likes ++
            
        )
        
    }

    function unlike(){
        
    }

    return (
        <div className="container">
            
            <h1>{props.postContent.title}</h1>

            <h2 onClick={expandCase}>{props.postContent.title}</h2>
            {props.expandedItem === props.index && (
                <>
                    <img className="img-fluid" src={props.postContent.imageURL}></img>
                    <div className="likesContainer">
                        <button className="btn btn-primary likebutton">-</button>
                        <h2 className="likebutton">{props.postContent.likes}</h2>
                        <button className="btn btn-primary likebutton" onClick={like}>+</button>
                    </div>
                    <br></br><br></br>
                    { !Show ?
                        <button className="btn btn-primary" onClick={toggleData}>Show More</button>
                        :
                        <div>
                        <p>{props.postContent.description}</p>
                        <button className="btn btn-primary" onClick={toggleData}>Show less</button>
                        </div>
                    }

                    {console.log(props.postContent)}
                </>
            )}
           
        </div>

    )
}

