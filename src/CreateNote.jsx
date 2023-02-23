import React,{useState} from "react";
import axios from "axios";

const backend_url=process.env.REACT_APP_BACKEND_URL;

function CreateNote(props){

   const[note,setNote]=useState({
        title:"",
        content:""
   });
   
   function handleChange(event){

    const{name,value}=event.target;  //The target event property returns the element that triggered the event.
                                     //This method is called destructuring

    setNote(prevNote => {
        return {
            ...prevNote,
           [name]:value    //[] dynamically set the key (actual value) 
        };
    });
   }

   function submitNote(event){
      
      
     
     const title=note.title;
     const content=note.content;
      
      axios.post(`${backend_url}/api`,{title,content});
     
     
     setNote({
        title:"",
        content:""
       });
   }
   function deleteAll(){

    axios.delete(`${backend_url}/deleteAll`);
    window.location.reload(); 
   }
    return (
    <div>
    <br></br>
     <div><button className="button-77" onClick={deleteAll}>Delete All</button></div>
      <div>
        <form>
            <input
               name="title"
               maxLength={20}
               onChange={handleChange}
               value={note.title}
               placeholder="title"
            />
             <hr className="style"></hr>
            <textarea
                name="content"
                maxLength={250}
                onChange={handleChange}
                value={note.content}
                placeholder="content"
                row="3"
            />

            <button onClick={submitNote}>Add</button>
        </form>
        </div>
       
      
        
    </div>
    );
}
export default CreateNote;