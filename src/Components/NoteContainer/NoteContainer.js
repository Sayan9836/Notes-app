import React from 'react'
import Note from '../Note/Note';
import './NoteContainer.css'
function NoteContainer(props) {

    const array = [];
    const revArray = (arr) => {
        for (let index = arr.length - 1; index >= 0; index--) {
            array.push(arr[index])
        }
        return array;
    };

    const notes = revArray(props.notes);
    return (
        <div className='note_container'>
            <h1 className='note_container_heading'>Notes</h1>
            <div className="note_container_notes custom-scroll">
                {
                    notes.map((item) => {
                        return <Note
                            key={item.id}
                            note={item}
                            deleteNote={props.deleteNote}
                            updateText={props.updateText}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default NoteContainer
