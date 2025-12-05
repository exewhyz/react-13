import Form from "./components/form";
import Weather from "./components/weather";
import { ApiProvider } from "./context/apiContext";

function App() {
  return (
    <ApiProvider>
      <div className="main">
        <Form />
        <Weather />
      </div>
    </ApiProvider>
  );
}

export default App;
