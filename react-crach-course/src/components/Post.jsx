import classes from './Post.module.css';

const names = ['Amr', 'Soad'];
function Post(props){
    const name = Math.random = 0.0?names[0]: names[1]; 
    return (
        <div className={classes.post}>
            <p className = {classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
      </div>
    );
}
export default Post;