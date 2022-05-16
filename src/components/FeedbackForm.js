import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";


import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = ()=>{
    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message, setMessage]= useState('');
    const [rating, setRating] = useState(10);
    
    const handleTextChange = (e)=>{
        // console.log(e.target.value);
        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text !=='' && text.trim().length<=10){
            setBtnDisabled(true);
            setMessage("Text must be atleast 10 characters");
        }
        else{
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value)
    }
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);
    
    useEffect(()=>{
        // console.log("Hello");
        if(feedbackEdit.edit === true){
            console.log(feedbackEdit);
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length >10){
            const newFeedback = {
                text,
                rating,
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            }
            else{
                addFeedback(newFeedback);
            }
            

            setText('');
        }
    }
    
    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select = {(rating)=>{setRating(rating)}}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;