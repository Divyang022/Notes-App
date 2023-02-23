import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';
import axios from 'axios';

const backend_url=process.env.REACT_APP_BACKEND_URL;

function App(){

  const[notes,setNotes]=useState([]);
  useEffect(()=>{                                                     //useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect
    axios.get(`${backend_url}/get`).then(resp => {
    setNotes(resp.data);
    
})});
  // function addNote(newNote)
  // {
  //     setNotes(prevNotes => {
  //      return [...prevNotes,newNote];
       
  //     });
  // }
  
    return (
    <div>
      <Header />
      <CreateNote
      />
     { notes.map((noteItem,index) => {
        return (
         <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            
         />
        );
      })
     }
      
      <Footer />
    </div>
    );
}

export default App;