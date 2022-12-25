import notesStore from "../stores/notesStore";


export default function Note({ note }) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div key={note._id}>
    <div class="card">
      <h5>Date:</h5>
      <h3>{note.date}</h3>

      <h5>Mileage:</h5>
      <h3>{note.mileage}</h3>
      
      <h5>Year:</h5>
      <h3>{note.year}</h3>

      <h5>Parts Changed:</h5>
      <h4>{note.part}</h4>

      <button class="btn btn-primary" onClick={() => store.deleteNote(note._id)}>Delete Form</button>
      <button class="btn btn-primary" onClick={() => store.toggleUpdate(note)}>Update Form</button>
      </div>
      
    </div>
  );
}