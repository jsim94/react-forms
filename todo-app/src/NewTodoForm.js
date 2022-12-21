import { useState } from "react";

function NewTodoForm({ submit, init }) {
  const initData = init || {
    content: "",
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
    submit(formData);
    setFormData(initData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Todo</label>
      <input
        id="content"
        name="content"
        value={formData.content}
        type="text"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}

export default NewTodoForm;
