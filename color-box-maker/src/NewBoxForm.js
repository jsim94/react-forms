import { useState } from "react";

function NewBoxform({ submit }) {
  const INIT_DATA = {
    color: "",
    height: "",
    width: "",
  };

  const [formData, setFormData] = useState(INIT_DATA);

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
    setFormData(INIT_DATA);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        type="text"
        onChange={handleChange}
      />
      <input type="submit"></input>
    </form>
  );
}

export default NewBoxform;
