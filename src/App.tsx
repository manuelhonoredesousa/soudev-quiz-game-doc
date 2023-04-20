import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [apiInformation, setApiInformation] = useState({
    url: "https://api.soudev.com",
  });
  return (
    <>
      <h1>SouDEV Quiz Game</h1>
      <h2>{apiInformation.url}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio qui
        fugiat consequatur accusantium amet odio laudantium odit quisquam quo
        quod facere fugit molestiae corrupti corporis excepturi aperiam ipsa,
        labore quasi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio qui
        fugiat consequatur accusantium amet odio laudantium odit quisquam quo
        quod facere fugit molestiae corrupti corporis excepturi aperiam ipsa,
        labore quasi.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio qui
        fugiat consequatur accusantium amet odio laudantium odit quisquam quo
        quod facere fugit molestiae corrupti corporis excepturi aperiam ipsa,
        labore quasi.
      </p>
    </>
  );
}

export default App;
