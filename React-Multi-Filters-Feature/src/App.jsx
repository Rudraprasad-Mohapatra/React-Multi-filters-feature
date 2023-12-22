import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MultiFilters from "./components/MultiFilters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MultiFilters />
    </div>
  );
}

export default App;
