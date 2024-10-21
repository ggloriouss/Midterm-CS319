// Task.ts

export class Task {
    private static taskCount = 0;

    title: string;
    description: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';  // Added priority property

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
        this.completed = false;
        this.priority = 'low';  // Defaults to 'low'
        Task.taskCount++;
    }

    markCompleted(): void {
        this.completed = true;
    }

    updateDescription(newDescription: string): void {
        this.description = newDescription;
    }

    static totalTasks(): number {
        return Task.taskCount;
    }
}

// Higher-order function that takes an update function as an argument
function createTaskUpdater(updateFn: (task: Task) => void) {
    return (task: Task) => {
        updateFn(task);  // Apply the update function to the provided task
    };
}

// Function to mark a task as urgent
export const markAsUrgent = createTaskUpdater((task: Task) => {
    task.priority = 'high';  // Set the task's priority to high
});

// Async function to simulate fetching tasks from an external API
export async function fetchTasks(): Promise<Task[]> {
    try {
        // Simulating a delay like a network request
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulating task data
        const tasksData = [
            { title: 'Write report', description: 'Complete the quarterly report' },
            { title: 'Design logo', description: 'Create a logo for the new project' },
            { title: 'Prepare presentation', description: 'Create slides for the meeting' },
        ];

        // Creating Task objects from the simulated data
        const tasks: Task[] = tasksData.map(data => new Task(data.title, data.description));
        return tasks;

    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw new Error('Failed to fetch tasks');
    }
}
