import classes from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import { useEffect, useState } from 'react';
import Modal from './Modal';

function PostsList({modalIsVisible, onCancelNewPost}){
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try {
               setIsFetching(true); 
              const response = await fetch('http://localhost:7336/posts'); // Replace with your API URL
              if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
              }
              const jsonData = await response.json();
              setPosts(jsonData.posts);
              console.log(jsonData.posts);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
            setIsFetching(false);
          };
      
          fetchData(); // Call the function to fetch data
        
    },[]);

    function addNewPostHandler(NewPost){
        fetch('http://localhost:7336/posts', {
            method : 'POST',
            body: JSON.stringify(NewPost),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [NewPost, ...existingPosts]);
    }
    
    return(
    <>
        {modalIsVisible && <Modal hideModal={onCancelNewPost}>
            <NewPost 
            onCancelNewPost={onCancelNewPost} 
            onAddPost={addNewPostHandler} />
        </Modal>}

        
        {!isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.body} body={post.body} author={post.author} />

                ))}
            </ul>
        )}
        {!isFetching && posts.length === 0 && (
            <div style={{textAlign:'center', color:'white' }}>
                <h2>There are no posts yet</h2>
                <p>Add post to start</p>
            </div>
        )}
        {isFetching && (
            <div style={{textAlign:'center', color:'white' }}>
                <p>Loading.... </p>
            </div>
        )}

        
    </>
    
    );
}

export default PostsList;