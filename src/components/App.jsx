import React, {useState} from 'react';
import Header from './Header';
import InputArea from './InputArea';
import Note from './Note'
import Footer from './Footer'


function App() {

  const [notes, setNotes] = useState([]);
 
  function createNotes(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    }); 
  };
  
  function deleteNote (id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id
      });
    });
  };


  return (
  <div>
    <Header />
    <InputArea 
      onAdd={createNotes}
    />
    {notes.map((note, index) => {
      return <Note
        onDelete={deleteNote}
        key={index}
        id={index}
        title={note.title} 
        content={note.content}
      />
    })}
    <Footer />
  </div>
  );
};

export default App;