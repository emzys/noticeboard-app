import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id)
  }

  return <div className="note">
    <h3>{props.title}</h3>
    <p>{props.content}</p>
    <button onClick={handleClick}>
      <DeleteForeverIcon />
    </button>
  </div>

};

export default Note;

