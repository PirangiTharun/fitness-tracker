import { useState } from "react";
import { days, workouts } from "../constants/appConstants";

const RecordWorkout = ({ setFlag }) => {
  const today = new Date();
  let day = today.getDay();
  const defaultData = {
    id: "INCREMENT",
    date: "DATETIME",
    workout1: "",
    workout2: "",
    workout3: "",
    workout4: "",
    workout5: "",
    workout6: "",
    weight: "",
  };
  const [data, setData] = useState(defaultData);

  const handleChange = (e, index) => {
    setData({ ...data, ["workout" + (index + 1)]: e.target.value });
  };

  const handleRecord = () => {
    fetch("https://sheetdb.io/api/v1/c45ffwzfjmh6m", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [data] }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert(`Created ${data.created} record(s) successfully`);
        setData(defaultData);
      });
  };

  return (
    <div>
      <h2>
        <span>
          <img
            style={{ marginLeft: "8px", marginRight: "8px" }}
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/chevron-left.png"
            alt="chevron-left"
            onClick={() => setFlag(false)}
          />
        </span>{" "}
        Record workout-{days[day]}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          fontSize: "24px",
        }}
      >
        <p>Today's weight</p>
        <input
          value={data["weight"]}
          onChange={(e) => setData({ ...data, weight: e.target.value })}
          type="text"
        />
      </div>
      {day !== 0 &&
        workouts[day].workout.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                fontSize: "24px",
              }}
            >
              <p style={{ marginBlock: 15 }}>
                {index + 1}) {item.name}
              </p>
              <input
                style={{ width: "60px" }}
                type={"text"}
                value={data["workout" + (index + 1)]}
                onChange={(e) => handleChange(e, index)}
              ></input>
            </div>
          );
        })}
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginBottom: "1rem",
          padding: "8px 12px",
          borderRadius: "50px",
          fontSize: "20px",
        }}
        onClick={handleRecord}
      >
        Record workout
      </button>
    </div>
  );
};

export default RecordWorkout;
