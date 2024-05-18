import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import RecordWorkout from "./components/RecordWorkout";


function App() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      {!flag ? <Content />: <RecordWorkout setFlag={setFlag} />}
      {!flag && <button onClick={()=>setFlag(!flag)} style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginBottom: "1rem",
          padding: '8px 12px',
          borderRadius: '50px',
          fontSize: '20px'
        }}>Record today's workout</button>}
    </>
  );
}

export default App;
