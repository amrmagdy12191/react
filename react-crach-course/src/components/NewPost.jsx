import { useState } from 'react';
import classes from './NewPost.module.css';
function NewPost({onCancelNewPost, onAddPost}){
    const [enteredBody, setEnteredBody] = useState(''); 
    const [enteredAuthor, setEnteredAuthor] = useState(''); 

   
    function changeBodyHandler(event){
        setEnteredBody(event.target.value);
    }
  
    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            author: enteredAuthor,
            body: enteredBody
        };
        onAddPost(postData)
        onCancelNewPost();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <p>
                <label htmlFor="body">Test</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={changeAuthorHandler} />
            </p>

            <p className={classes.actions}>
                <button type='button' onClick={onCancelNewPost}>Cancel</button>
                <button>Submit</button>
            </p>    
        </form>
    );
}
export default NewPost;