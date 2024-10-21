// Task 1 : Create a class Task with the following properties and methods:
class Task {
    private static taskCount = 0;  // static property to keep track of total tasks

    title: string;
    description: string;
    completed: boolean;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
        this.completed = false;  // defaults to false
        Task.taskCount++;  // increment total task count when a new task is created
    }

    // Method to mark the task as completed
    markCompleted(): void {
        this.completed = true;
    }

    // Method to update the task's description
    updateDescription(newDescription: string): void {
        this.description = newDescription;
    }

    // Static method to return total number of tasks created
    static totalTasks(): number {
        return Task.taskCount;
    }
}
export { Task };