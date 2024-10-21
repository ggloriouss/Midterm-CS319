import { Task, markAsUrgent, fetchTasks } from './task';
import { PriorityTask } from './PriorityTask';
import { TeamMember } from './TeamMember';
import { assignTask } from './AssignTask.ts';
import { Queue } from './Queue';  


// Usage
async function loadTasks() {
    try {
        const tasks: Task[] = await fetchTasks();  // Fetching tasks asynchronously
        
        // 1. Use map() to create an array of task titles
        const taskTitles = tasks.map(task => task.title);
        console.log('Task Titles:', taskTitles);

        // 2. Use filter() to return only the tasks that are marked as incomplete
        const incompleteTasks = tasks.filter(task => !task.completed);
        console.log('Incomplete Tasks:', incompleteTasks);

        // 3. Use reduce() to count the total number of tasks marked as completed
        const completedCount = tasks.reduce((count, task) => {
            return task.completed ? count + 1 : count;
        }, 0);
        console.log('Total Completed Tasks:', completedCount);

    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

loadTasks();  // Call the function to load tasks
