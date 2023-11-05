
import Rating from './Rating';
import ReviewForm from'./ReviewForm';
import Comment from './Comment'
import Button from './Button'
import Movies from './Movies'
import {useState} from 'react';
import './App.css';

function App() {

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler =() =>{
    setComments((comments) => [...comments, comment])
  }
  const onChangeHandler = (e) => {
      setComment(e.target.value);
  };

  return (
    <div className="App">
      <div className="main-container">
      <Movies/>
        {comments.map((text) => (
            <div className="comment-container">{text}</div>
        ))}
            <div className="comment">            
                <h3 className="comment-text">Leave a Review</h3>
                <Rating/>
                <textarea 
                    value={comment} 
                    onChange={onChangeHandler} 
                    className="input-box" 
                />
                <button onClick={onClickHandler} className="submitButton">Submit</button>
            </div>
        </div>
    </div>
  );
}

export default App;
