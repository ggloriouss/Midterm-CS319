import { Task } from './task'; 

// Function to calculate the total number of completed tasks
export function calculateTotalCompletedTasks(tasks: Task[]): number {
    return tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
}
