import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<>
			{tasks.map((task, index) => (
				<Task
					key={index}
					onToggle={onToggle}
					onDelete={onDelete}
					task={task}
				></Task>
			))}
		</>
	);
};

export default Tasks;
