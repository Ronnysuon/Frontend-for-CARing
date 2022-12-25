import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <div class="card">
      <h2>Create Car Form</h2>
      <form onSubmit={store.createNote}>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.date}
          name="date"
          placeholder="Enter date..."
        />
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.mileage}
          name="mileage"
          placeholder="Enter mileage..."
        />

        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.year}
          name="year"
          placeholder="Enter year..."
        />

        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.part}
          name="part"
          placeholder="Enter Part Changed..."
        />
        
        <button 
        class="btn btn-primary" 
        type="submit">Create Car Form
        </button>

      </form>
        </div>
    </div>
  );
}