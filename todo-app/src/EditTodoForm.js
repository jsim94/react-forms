import { useState } from "react";

function EditTodoForm({ submit, todo }) {
  const initData = {
    content: todo.content,
  };
  const [formData, setFormData] = useState(initData);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit(todo.id, formData.content);
    setFormData(initData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Edit</label>
      <input
        id="content"
        name="content"
        value={formData.content}
        type="text"
        onChange={handleChange}
      />
      <input type="submit" value="Submit Edit" />
    </form>
  );
}

export default EditTodoForm;
