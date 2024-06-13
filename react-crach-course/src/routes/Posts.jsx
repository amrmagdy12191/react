
import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostsList  />
      </main>
    </>
  )
}

export default Posts;

export async function loader(){
  var postsData = null;
  try {
     const response = await fetch('http://localhost:7336/posts'); // Replace with your API URL
     if (!response.ok) {
       throw new Error(`Error fetching data: ${response.status}`);
     }
     const jsonData = await response.json();      
     postsData = jsonData.posts;
     console.log(postsData);

   } catch (error) {
     console.error('Error fetching data:', error);
   }
   return postsData;
}
