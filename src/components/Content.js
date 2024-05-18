import { useState } from "react";
import { days, workouts } from "../constants/appConstants";


const Content = () => {
  const today = new Date();
  let day = today.getDay();
  const [todayDay, setTodayDay] = useState(day);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBlock: 0, padding: '1rem' }}>
        {days[todayDay]} - {workouts[todayDay].sessionName}
      </h1>
      <h2 style={{ textAlign: "center" }}>{workouts[todayDay].todaysWork}</h2>
      {todayDay !== 0 &&
        workouts[todayDay].workout.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 18px",
                fontSize: "24px",
              }}
            >
              <p>
                {index + 1}) {item.name}
              </p>
              <p>
                {item.sets}*{item.reps}
              </p>
            </div>
          );
        })}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px'}}>
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
