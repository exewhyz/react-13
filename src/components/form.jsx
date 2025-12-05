import { useApi } from "../context/apiContext";

export default function Form() {
  const { city, setCity } = useApi();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">City Name</label>
      <input
        id="title"
        type="text"
        placeholder="Enter your city name"
        required
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    </form>
  );
}
