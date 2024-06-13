import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
  const response = await fetch('http://localhost:7336/posts/' + params.id);
  const resData = await response.json();
  console.log(resData);
  return resData.post;
}

// export async function loader(params){
//     var post = null;
//     try{
//     const response = await fetch('http://localhost:7336/posts/' + params.id);
//     if (!response.ok) {
//         throw new Error(`Error fetching data: ${response.status}`);
//       }
//     const responseData = await response.json();
//     console.log(responseData.post);
//     post = responseData.post;
// } catch (error) {
//     console.error('Error fetching data:', error);
//   }
//     return post;
// }