                                                        ++ Task Management System ++ 
# (1) Classes and OOP Programming 
## Overview
This TypeScript implementation defines a `Task` class, which allows you to create and manage tasks with essential functionalities such as marking a task as completed and updating the description. The class also provides a static method to track the total number of tasks created.

### Features:
1. **Properties:**
    - `title` (string): Title of the task.
    - `description` (string): Description of the task.
    - `completed` (boolean): Indicates whether the task is completed (defaults to `false`).

2. **Methods:**
    - `markCompleted()`: Marks the task as completed by setting `completed` to `true`.
    - `updateDescription(newDescription: string)`: Updates the task's description.

3. **Bonus:**
    - `totalTasks()`: A static method that returns the total number of `Task` instances created.

### Techniques Used:
- **TypeScript Classes**: Encapsulation of task-related properties and methods inside a class structure.
- **Static Property**: `taskCount` is used to track the total number of tasks created across all instances of the `Task` class.
- **Static Method**: `totalTasks()` is a static method, meaning it can be called without an instance of the class, directly from the class itself.

--------------------------------------------------------------------------------------------------------------------------------------------

# (2) PriorityTask Class
## Overview
The `PriorityTask` class extends the base `Task` class and introduces the concept of task priority. It also overrides the `markCompleted()` method to provide a more specific output when a priority task is completed.

### Features:
1. **Properties:**
    - Inherits all properties from the `Task` class.
    - Adds `priority` (string): Specifies the task priority level (`'low' | 'medium' | 'high'`).

2. **Methods:**
    - Inherits all methods from the `Task` class.
    - Overrides `markCompleted()` to print a message: `"Priority task [title] completed."` when the task is marked as complete.

#### Techniques Used:
- **Inheritance**: `PriorityTask` extends the `Task` class to reuse common task properties and methods.
- **Polymorphism**: The `markCompleted()` method is overridden to provide custom functionality, while still retaining the core functionality of the original `Task` class.
- **Type Safety**: TypeScript's union type (`'low' | 'medium' | 'high'`) ensures that only valid priority values can be assigned.

--------------------------------------------------------------------------------------------------------------------------------------------

# (3) TeamMember Interface and Task Assignment
## Overview
The `TeamMember` interface defines the structure of a team member who can be assigned multiple tasks. The `assignTask()` function allows tasks to be assigned to a team member by adding the task to their list of tasks.

### Features:
1. **Interface:**
    - `TeamMember`: Describes a team member with the following properties:
        - `name` (string): The name of the team member.
        - `role` (string): The role of the team member (e.g., Developer, Designer, etc.).
        - `tasks` (Task[]): An array of tasks assigned to the team member.

2. **Function:**
    - `assignTask(member: TeamMember, task: Task)`: This function takes a `TeamMember` and a `Task` as arguments and adds the task to the member's `tasks` array, effectively assigning the task to them.

### Techniques Used:
- **TypeScript Interfaces**: The `TeamMember` interface defines the structure of an object, ensuring that team members have the required properties (name, role, and tasks).
- **Type Annotations**: TypeScript enforces type safety by ensuring that the `assignTask()` function only accepts a valid `TeamMember` and `Task`.
- **Array Manipulation**: The `tasks` array within each `TeamMember` is modified by pushing new tasks onto it.

### Example Usage:
- A `TeamMember` named Alice is defined as a Developer, and a task is created and assigned to her using the `assignTask()` function.

--------------------------------------------------------------------------------------------------------------------------------------------

# (4) Generic Queue<T> Class
## Overview
The `Queue<T>` class is a generic implementation of a queue data structure that can hold any type of data, such as `Task` or `TeamMember`. It provides methods to add items to the queue and remove items in a first-in, first-out (FIFO) manner.

### Features:
1. **Properties:**
    - `items` (T[]): An array to hold the elements in the queue, where `T` is the type parameter.

2. **Methods:**
    - `enqueue(item: T)`: Adds an item of type `T` to the queue.
    - `dequeue(): T | undefined`: Removes and returns the first item from the queue. Returns `undefined` if the queue is empty.
    - Optional:
      - `isEmpty()`: Returns `true` if the queue is empty, otherwise `false`.
      - `peek()`: Returns the first item in the queue without removing it.

### Techniques Used:
- **Generics**: The `Queue<T>` class is generic, meaning it can store items of any type (`Task`, `TeamMember`, etc.) specified when creating an instance of the queue.
- **Type Safety**: TypeScript ensures that only items of the specified type are added to the queue, providing compile-time safety.

### Example Usage:
- The `taskQueue` holds instances of `Task`, allowing you to add and remove tasks in FIFO order.
- The `teamQueue` holds instances of `TeamMember`, demonstrating the flexibility of the generic queue to handle different data types.

--------------------------------------------------------------------------------------------------------------------------------------------

# (5) Higher-Order Functions
## Overview
This section demonstrates the use of higher-order functions in TypeScript to create flexible task update mechanisms. The `createTaskUpdater` function allows for the creation of specific task update functions, such as marking a task as urgent.

### Features:
1. **Higher-Order Function:**
    - `createTaskUpdater(updateFn: (task: Task) => void)`: A function that takes another function (`updateFn`) as an argument and returns a new function that applies `updateFn` to a `Task`. This allows for flexible and reusable task updates.

2. **Function to Mark as Urgent:**
    - `markAsUrgent`: A specific function created using `createTaskUpdater` that sets a task's priority to `'high'`.

### Techniques Used:
- **Higher-Order Functions**: By accepting a function as an argument, `createTaskUpdater` enables the creation of custom update functions that can be reused for various task modifications.
- **Flexibility**: This approach allows for easy extension and modification of task properties without needing to rewrite the logic for each specific update.

### Example Usage:
- A `Task` is created with a default priority of `'low'`. Using `markAsUrgent`, the priority is updated to `'high'`, demonstrating the effectiveness of the higher-order function.

--------------------------------------------------------------------------------------------------------------------------------------------

# (6) Asynchronous Programming
## Overview
This section demonstrates how to use asynchronous programming in TypeScript to fetch a list of tasks from a simulated external API. The `fetchTasks()` function simulates an API call, returning an array of `Task` objects while handling errors appropriately.

### Features:
1. **Async Function:**
    - `fetchTasks()`: An asynchronous function that simulates fetching tasks from an external API. It returns a Promise that resolves to an array of `Task` objects.

2. **Error Handling:**
    - The function uses `try/catch` to handle both successful fetch cases and errors. In case of an error, it logs the error and throws a new error for the calling function to handle.

### Techniques Used:
- **Asynchronous Programming**: The `async/await` syntax is used to manage asynchronous operations, allowing for cleaner code that is easier to read and understand.
- **Promise**: A Promise is used to simulate the delay of an API call, which can be replaced with an actual HTTP request in a real application.

### Example Usage:
- The `loadTasks()` function demonstrates how to call `fetchTasks()` and handle the result or any potential errors.

--------------------------------------------------------------------------------------------------------------------------------------------

# (7) Array Methods
## Overview
This section demonstrates how to manipulate arrays of tasks using common array methods in TypeScript. The `loadTasks()` function retrieves tasks and applies the `map()`, `filter()`, and `reduce()` methods to perform specific operations on the tasks array.

### Features:
1. **map()**: Creates an array of task titles from the tasks array.
2. **filter()**: Filters the tasks array to return only those tasks that are marked as incomplete.
3. **reduce()**: Counts the total number of tasks marked as completed.

### Techniques Used:
- **Array Methods**:
    - **map()**: This method is used to transform an array by applying a function to each element, producing a new array of the results.
    - **filter()**: This method creates a new array with all elements that pass the test implemented by the provided function, allowing for easy exclusion of unwanted items.
    - **reduce()**: This method executes a reducer function on each element of the array, resulting in a single output value, such as a count or sum.

### Example Usage:
- The `loadTasks()` function demonstrates how to use these array methods to:
    - Extract the titles of tasks.
    - Identify incomplete tasks.
    - Count the number of completed tasks.

### Output:
When `loadTasks()` is executed, it outputs:
- An array of task titles.
- An array of incomplete tasks.
- A count of the total completed tasks.

--------------------------------------------------------------------------------------------------------------------------------------------

# (8) Error Handling
## Overview
This section demonstrates how to handle errors in JavaScript/TypeScript, specifically when parsing JSON data. The `parseTaskData(jsonData: string)` function attempts to parse a given JSON string and handles any errors that may arise during the parsing process.

### Features:
1. **Error Handling**:
    - Uses `try/catch` to handle any errors that occur during the JSON parsing process. If an error occurs, a custom error message is returned.

2. **Data Validation**:
    - Checks if the parsed data is an array before proceeding to create `Task` objects, throwing an error if the validation fails.

### Techniques Used:
- **JSON Parsing**: The function attempts to convert a JSON string into a JavaScript object using `JSON.parse()`.
- **Custom Error Messages**: In case of errors, a meaningful message is returned to inform the user of what went wrong.

### Example Usage:
- The function can be tested with both valid and invalid JSON data to demonstrate its error handling capabilities.

### Output:
When valid JSON data is parsed, it returns an array of `Task` objects. In case of an error, it returns a custom error message indicating the failure.

--------------------------------------------------------------------------------------------------------------------------------------------

# (9) Modules and Imports/Exports
## Overview
This section demonstrates the use of TypeScript modules to organize code into separate files. The `taskUtils.ts` file contains a utility function for calculating the total number of completed tasks, which is then imported and used in the `index.ts` file.

### Files Created:
1. **taskUtils.ts**:
    - Contains the function `calculateTotalCompletedTasks(tasks: Task[])`, which takes an array of `Task` objects and returns the number of tasks marked as completed.

2. **index.ts**:
    - Imports the utility function from `taskUtils.ts` and uses it to calculate the total completed tasks for the fetched tasks.

### Techniques Used:
- **Module Exports and Imports**: Utilizing TypeScript’s module system to separate concerns, making the codebase more modular and maintainable.
- **Utility Functions**: Creating a dedicated utility function for calculating completed tasks allows for code reuse and better organization.

### Example Usage:
- The `loadTasks()` function fetches tasks and then calculates the total completed tasks using the imported utility function, demonstrating the effective use of modules.