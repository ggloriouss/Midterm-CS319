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
