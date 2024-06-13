import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Form, Link, redirect } from 'react-router-dom';

function NewPost(){

    return (
        <Modal>
            <Form method='post' className={classes.form} >
                <p>
                    <label htmlFor="body">Test</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name"  name="author" required />
                </p>

                <p className={classes.actions}>
                    <Link  to=".."  type='button' >
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>    
            </Form>
        </Modal>
    );
}
  
export default NewPost;

export async function action({request}){
    console.log("request : " + request);
    const formData = await request.formData();
    console.log("formData : " + formData);
    const postData = Object.fromEntries(formData);
    postData.id= 5555;
    console.log("postData : " + postData);
    await fetch('http://localhost:7336/posts', {
        method : 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return redirect('/');
}