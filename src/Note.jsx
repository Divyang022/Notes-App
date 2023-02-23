import axios from "axios";
import React from "react";

const backend_url=process.env.REACT_APP_BACKEND_URL;


function Note(props){
    
    function handledelete()
    {       
        axios.delete(`${backend_url}/apidelete`,{data:{title:props.title,content:props.content}});
        window.location.reload(); 
       
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <hr className="style"></hr>
            <p>{props.content}</p>
            <button onClick={handledelete}>Delete</button>
        </div>
        
        );

}

export default Note;