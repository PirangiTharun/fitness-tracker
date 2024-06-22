export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const workouts = [
  {
    sessionName: "RestDay",
    todaysWork: "Nothing to do today!!",
    workout: [],
  },
  {
    sessionName: "Push day 1",
    todaysWork: "Chest, Shoulder & Triceps",
    workout: [
      {
        name: "Flat bench press",
        type: "comp",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Barbell overhead press",
        type: "comp",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Incline dumbell flyes",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Lateral raise (side)",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "V bar tricep push down",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      { name: "Plank", type: "Abs", helper: "12 Reps | 10 Reps | 8 Reps" },
    ],
    warmup: [
      { name: "Inch worm", helper: "15 Reps" },
      { name: "Cobra To Mountain", helper: "15 Reps" },
    ],
  },
  {
    sessionName: "Pull day 1",
    todaysWork: "Back, Biceps & Forearms",
    workout: [
      { name: "Pull ups", type: "comp", helper: "8 Reps | 8 Reps | 8 Reps" },
      {
        name: "Seated cable row",
        type: "comp",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Lat pulldown (wide grip)",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Barbell curls",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Hammer curls",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      { name: "Forearms", type: "musc", helper: "12 Reps | 10 Reps | 8 Reps" },
      {
        name: "Hanging leg raises",
        type: "Abs",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
    ],
    warmup: [
      { name: "Cat Camel", helper: "15 Reps" },
      { name: "Prone Walkout", helper: "45 Secs" },
    ],
  },
  {
    sessionName: "Legs day 1",
    todaysWork: "Legs & Core",
    workout: [
      {
        name: "Squats (barbell or bodyweight)",
        type: "comp",
        helper: "30 Reps | 30 Reps | 30 Reps",
      },
      { name: "Leg press", type: "comp", helper: "12 Reps | 10 Reps | 8 Reps" },
      {
        name: "Hamstring curls",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Calf raises (seated)",
        type: "musc",
        helper: "12 Reps | 12 Reps | 12 Reps",
      },
      {
        name: "Glute bridges",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Russian twists",
        type: "Abs",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
    ],
    warmup: [
      { name: "Hip Flexor Lunge Stretch", helper: "15 Reps" },
      { name: "Cobra To Mountain", helper: "15 Reps" },
    ],
  },
  {
    sessionName: "Push day 2",
    todaysWork: "Chest, Shoulder & Triceps",
    workout: [
      { name: "Dips", type: "comp", helper: "12 Reps | 10 Reps | 8 Reps" },
      {
        name: "Incline dumbell press",
        type: "comp",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Decline dumbell flyes",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Front raises",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Triceps overhead extensions",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      { name: "Crunches", type: "Abs", helper: "12 Reps | 10 Reps | 8 Reps" },
    ],
    warmup: [
      { name: "Inch worm", helper: "15 Reps" },
      { name: "Cobra To Mountain", helper: "15 Reps" },
    ],
  },
  {
    sessionName: "Pull day 2",
    todaysWork: "Back, Biceps & Forearms",
    workout: [
      { name: "Chin ups", type: "comp", helper: "12 Reps | 10 Reps | 8 Reps" },
      {
        name: "Bent over barbell row",
        type: "comp",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Lat pulldown (close grip)",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "ez barbell curls",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      { name: "forearms", type: "musc", helper: "12 Reps | 10 Reps | 8 Reps" },
      { name: "side plank", type: "Abs", helper: "12 Reps | 10 Reps | 8 Reps" },
    ],
    warmup: [
      { name: "Cat Camel", helper: "15 Reps" },
      { name: "Prone Walkout", helper: "45 Secs" },
    ],
  },
  {
    sessionName: "Legs day 2",
    todaysWork: "Legs & Core",
    workout: [
      {
        name: "Bulgarian split squats",
        type: "comp",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Sumo squats",
        type: "comp",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Single leg Calf raises",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Leg extensions",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Reverse leg extensions",
        type: "musc",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
      {
        name: "Hollow body hold",
        type: "Abs",
        helper: "12 Reps | 10 Reps | 8 Reps",
      },
    ],
    warmup: [
      { name: "Hip Flexor Lunge Stretch", helper: "15 Reps" },
      { name: "Cobra To Mountain", helper: "15 Reps" },
    ],
  },
];
