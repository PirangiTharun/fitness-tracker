import abs from '../assets/abs.png';
import arm from '../assets/arm.png';
import comp from '../assets/multiple.png';

const WorkoutList = ({workoutList}) => {
    console.log(workoutList);
    const getSrc = (type) => {
        if (type === "comp") return comp;
        else if (type === "arm") return arm;
        else return abs;
    }
    return (
        <div>
            {workoutList.map((workout) => {
                return (
                    <>
                        {workout.type && <img width={28} height={28} src={getSrc(workout.type)} alt="" />}
                        <div>
                            <p>{workout.name}</p>
                            <p>{workout.helper}</p>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default WorkoutList;