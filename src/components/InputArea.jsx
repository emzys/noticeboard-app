import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function InputArea(props) {

  const [noteText, setNoteText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) { 
    const {name, value} = event.target;
    setNoteText(prevValue => {
      return {
        ...prevValue,
        [name]: value 
      };
    });
  };

  function submitNote(event) {
    props.onAdd(noteText)
    setNoteText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [isZoomed, setIsZoomed] = useState(false);

  function onZoomed() {
    setIsZoomed(true)
  };

  return (
  <div>
    <form className="input-area">
      {isZoomed && 
        <input 
        onChange={handleChange}
        name="title"
        value={noteText.title} 
        placeholder="Title" />
      }
      <textarea  
        onChange={handleChange}
        onClick={onZoomed}
        name="content" 
        value={noteText.content} 
        placeholder="Leave a message..." />
      <Zoom in={isZoomed}>
        <Fab className="button" onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
    
  </div>
  )
};

export default InputArea;