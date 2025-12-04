import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(title);
    setTitle("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter your Blog Title"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Create Blog</button>
    </form>
  );
}
