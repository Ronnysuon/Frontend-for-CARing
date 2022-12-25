import notesStore from "../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Update note</h2>
      <form onSubmit={store.updateNote}>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.date}
          name="date"
        />
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.mileage}
          name="mileage"
        />

          <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.year}
          name="year"
        />

          <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.part}
          name="part"
        />
        <button class="btn btn-primary" type="submit">Update Form</button>
      </form>
    </div>
  );
}