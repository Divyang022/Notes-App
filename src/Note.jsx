import axios from "axios";
import React from "react";



function Note(props){
    
    function handledelete()
    {       
        axios.delete("http://localhost:5000/apiDelete",{data:{title:props.title,content:props.content}});
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