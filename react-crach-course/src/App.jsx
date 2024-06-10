import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';
import Modal from './components/Modal';
import NewPost from './components/NewPost';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); 
 
  function showModalHandler(event){
    setModalIsVisible(true);
  }

  function hideModalHandler(event){
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader displayModal={showModalHandler}/>
      <main>
        <PostsList modalIsVisible={modalIsVisible} onCancelNewPost={hideModalHandler} />
      </main>
    </>
  )
}

export default App
