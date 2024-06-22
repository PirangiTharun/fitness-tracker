import { useState } from "react";
import { days, workouts } from "../constants/appConstants";
import down from "../assets/down.png";
import up from "../assets/up.png";
import WorkoutList from "./WorkoutList";

const Content = () => {
  const today = new Date();
  const accordianStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "4px 16px",
  };

  let day = today.getDay();
  const [todayDay, setTodayDay] = useState(day);
  const [accordianState, setAccordianSate] = useState(1);

  const handleAccordianClick = (id) => {
    if (id === accordianState) setAccordianSate(-1);
    else setAccordianSate(id);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBlock: 0, padding: "1rem" }}>
        {days[todayDay]} - {workouts[todayDay].sessionName}
      </h1>
      <h2 style={{ textAlign: "center", marginBlockStart: 0 }}>
        {workouts[todayDay].todaysWork}
      </h2>
      {todayDay !== 0 ? (
        <>
          <div
            style={{
              border: "2px solid black",
              margin: "8px",
              fontWeight: "500",
            }}
            onClick={() => handleAccordianClick(0)}
          >
            <div style={accordianStyle}>
              <p style={{ fontSize: "32px", marginBlock: "16px" }}>Warm up</p>
              <img
                height={26}
                width={26}
                src={accordianState === 0 ? up : down}
                alt=""
              />
            </div>
            {accordianState === 0 && (
              <WorkoutList workoutList={workouts[todayDay].warmup} />
            )}
          </div>
          <div
            style={{
              border: "2px solid black",
              margin: "8px",
              fontWeight: "500",
            }}
            onClick={() => handleAccordianClick(1)}
          >
            <div style={accordianStyle}>
              <p style={{ fontSize: "32px", marginBlock: "16px" }}>Workout</p>
              <img
                height={26}
                width={26}
                src={accordianState === 1 ? up : down}
                alt=""
              />
            </div>
            {accordianState === 1 && (
              <WorkoutList workoutList={workouts[todayDay].workout} />
            )}
          </div>
          <div
            style={{
              border: "2px solid black",
              margin: "8px",
              fontWeight: "500",
            }}
            onClick={() => handleAccordianClick(2)}
          >
            <div style={accordianStyle}>
              <p style={{ fontSize: "32px", marginBlock: "16px" }}>Stretch</p>
              <img
                height={26}
                width={26}
                src={accordianState === 2 ? up : down}
                alt=""
              />
            </div>
            {accordianState === 2 && (
              <WorkoutList workoutList={workouts[todayDay].warmup} />
            )}
          </div>
        </>
      ) : (
        <div>
          <h2>Hey!! it's sunday yoo..</h2>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h3>Check workout for </h3>
        <select onChange={(e) => setTodayDay(e.target.value)}>
          <option value={0}>Sunday</option>
          <option value={1}>Monday</option>
          <option value={2}>Tuesday</option>
          <option value={3}>Wednesday</option>
          <option value={4}>Thursday</option>
          <option value={5}>Friday</option>
          <option value={6}>Saturday</option>
        </select>
      </div>
    </div>
  );
};

export default Content;
