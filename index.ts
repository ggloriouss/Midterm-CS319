import { Task, parseTaskData, markAsUrgent, fetchTasks  } from './task';
import { PriorityTask } from './PriorityTask';
import { TeamMember } from './TeamMember';
import { assignTask } from './AssignTask.ts';
import { Queue } from './Queue';  
import { calculateTotalCompletedTasks } from './taskUtils';

//Usage
async function loadTasks() {
    try {
        const tasks: Task[] = await fetchTasks();  // Fetching tasks asynchronously
        
        // Calculate the total completed tasks using the utility function
        const completedCount = calculateTotalCompletedTasks(tasks);
        console.log('Total Completed Tasks:', completedCount);

    } catch (error) {
        console.error('Error loading tasks:', error);
    }
}

loadTasks();