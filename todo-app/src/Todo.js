function Todo({ content, funcs, id }) {
  const handleEdit = (evt) => {
    const idx = evt.currentTarget.dataset.target;

    funcs.startEdit(idx);
  };

  const handleDelete = (evt) => {
    const id = evt.currentTarget.dataset.target;
    funcs.delTodo(id);
  };

  return (
    <div className="Todo">
      <p>{content}</p>

      <button onClick={handleEdit} data-target={id}>
        Edit
      </button>
      <button onClick={funcs.handleDelete} data-target={id}>
        Remove
      </button>
    </div>
  );
}

export default Todo;
