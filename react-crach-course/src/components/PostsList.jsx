import classes from './PostsList.module.css';
import Post from './Post';
import { useLoaderData } from 'react-router-dom';

function PostsList(){
    const posts = useLoaderData();
    
    return(
    <>
        {posts != null && posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.id} id={post.id} body={post.body} author={post.author} />

                ))}
            </ul>
        )}
        {(posts == null || posts.length === 0) && (
            <div style={{textAlign:'center', color:'white' }}>
                <h2>There are no posts yet</h2>
                <p>Add post to start</p>
            </div>
        )}
        

        
    </>
    
    );
}

export default PostsList;

