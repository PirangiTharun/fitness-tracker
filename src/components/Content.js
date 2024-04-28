import { useState } from "react";

const Content = () => {
  const workouts = [
    {
      sessionName: "Rest Day",
      workout: [],
    },
    {
      sessionName: "Push Day 1",
      todaysWork: "Chest, Shoulders and Triceps",
      workout: [
        {
          name: "Flat Barbell Bench Press",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Incline Dumbbell Press	",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Standing Military Press",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Wide-Grip Upright Rows	",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Narrow Grip Dips",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Cable Pushdowns",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
      ],
    },
    {
      sessionName: "Pull Day 1",
      todaysWork: "Biceps, Back, Traps and Foreamrs",
      workout: [
        { name: "Deadlifts", sets: 3, reps: 12, idealWeight: "20kgs" },
        {
          name: "Close grip chin ups",
          sets: 3,
          reps: 10,
          idealWeight: "",
        },
        {
          name: "Bent over rows",
          sets: 3,
          reps: 15,
          idealWeight: "10kgs",
        },
        {
          name: "Wide grip cable row",
          sets: 3,
          reps: 15,
          idealWeight: "30kgs",
        },
        {
          name: "Barbell curls",
          sets: 3,
          reps: 15,
          idealWeight: "7.5Kgs",
        },
        {
          name: "Forearms",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
      ],
    },
    {
      sessionName: "Legs Day 1",
      todaysWork: "Legs, Glutes and ABS",
      workout: [
        {
          name: "Barbell Back Squat",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Leg Press",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Leg Extensions",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Leg reverse Extensions",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Lunges",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Calf raises",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
      ],
    },
    {
      sessionName: "Push Day 2",
      todaysWork: "Chest, Shoulders and Triceps",
      workout: [
        {
          name: "Decline Bench Press",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Incline Dumbbell Press",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Flat Machine Press",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Seated Smith Machine Shoulder Press",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Wide-Grip Upright Rows",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Overhead Rope Extensions",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
      ],
    },
    {
      sessionName: "Pull Day 2",
      todaysWork: "Biceps, Back, Traps and Foreamrs",
      workout: [
        {
          name: "Shrugs",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "T-Bar Row",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Bent Over Rows",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Close grip Chin-ups",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Bicep curls",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Hammer",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
      ],
    },
    {
      sessionName: "Legs Day 2",
      todaysWork: "Legs, Glutes and ABS",
      workout: [
        {
          name: "Barbell Front Squat",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Barbell Hip Thrust",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Kettlebell Swing",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Romanian Deadlifts",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Russian twists",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
        {
          name: "Leg raises",
          sets: 3,
          reps: 15,
          idealWeight: "",
        },
      ],
    },
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  let day = today.getDay();
  const [todayDay, setTodayDay] = useState(day);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
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
