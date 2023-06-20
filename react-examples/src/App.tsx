import { useEffect, useState } from "react";

function App() {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const a = 42;
    console.log("Component mounted!");

    return () => {
      console.log(a);
      console.log("Component was unmounted...");
    };
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <form onSubmit={() => {
        console.log(filter);
      }}>
        <input
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
        <button>GO</button>
      </form>
    </>
  );
}

export default App;
