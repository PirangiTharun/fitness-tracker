import abs from "../assets/abs.png";
import arm from "../assets/arm.png";
import comp from "../assets/multiple.png";
import warmup from "../assets/warmup.png";

const WorkoutList = ({ workoutList }) => {
  const getSrc = (type) => {
    if (type === "comp") return comp;
    else if (type === "musc") return arm;
    else return abs;
  };
  return (
    <div>
      {workoutList?.map((workout) => {
        return (
          <div style={{ display: "flex", gap: 16, margin: "16px 24px" }}>
            {workout.type ? (
              <img width={28} height={28} src={getSrc(workout.type)} alt="" />
            ) : (
              <img width={28} height={28} src={warmup} alt="" />
            )}
            <div>
              <p style={{ fontSize: "22px", marginBlock: 0 }}>{workout.name}</p>
              <p style={{ marginBlockStart: 0 }}>{workout.helper}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutList;
