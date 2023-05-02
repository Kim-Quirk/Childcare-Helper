import "./App.css";
import { useQuery } from "../convex/_generated/react";

function App() {
  const tasks = useQuery("getTasks");
  return (
    <div className="App">
      {tasks?.map(({ _id, text }) => (
        <div key={_id.toString()}>{text}</div>
      ))}
    </div>
  );
}

export default App;