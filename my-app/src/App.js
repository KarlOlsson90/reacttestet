import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PostsItem from './components/PostsItem';

function App() {

  const [postsData, setPostsData] = useState([])
  const [expandedItem, setExpandedItem] = useState(null)
  const [likedItem, setLikedItem] = useState(null)
  
  function fetchPosts() {
    fetch("https://image-mock-data.firebaseio.com/images.json")
    .then(res => res.json())
    .then(data => {
      setPostsData(data)
    })
  }

  useEffect( () => {
    fetchPosts()
  }, [] )

  return (
    <div className="container">
      {postsData.map((postsItem, index) => {
        return <PostsItem 
              key={index} 
              index={index}
              expandedItem ={expandedItem} 
              setExpandedItem={setExpandedItem}
              postContent={postsItem}
              //likedItem={likedItem}
              //setLikedItem={setLikedItem}
              
              />
      })}
    </div>
  );
}

export default App;
