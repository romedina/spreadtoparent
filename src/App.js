import { useEffect, useState } from "react";

const Children = ({ onUseChildrenState }) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    if (onUseChildrenState) {
      onUseChildrenState(data);
      console.warn("Try not to use this event");
    }
  }, [data, onUseChildrenState]);

  return (
    <>
      <p>Send counter {data} to Parent</p>
      <button onClick={() => setData((prev) => prev + 1)}>Increase</button>
    </>
  );
};

function Parent() {
  const [childData, setChildData] = useState(0);

  return (
    <>
      <h1> I am a Parent</h1>
      <Children onUseChildrenState={setChildData} />
      <p>{childData}</p>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Parent />
    </div>
  );
}
