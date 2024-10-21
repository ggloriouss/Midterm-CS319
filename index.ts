import { Task } from './task.ts';
import { PriorityTask } from './PriorityTask';
import { TeamMember } from './TeamMember';
import { assignTask } from './AssignTask.ts';
import { Queue } from './Queue';  

// Usage
const task1 = new Task('Build feature', 'Develop the new user login feature');
const priorityTask1 = new PriorityTask('Fix bug', 'Resolve the security bug', 'high');

const member1: TeamMember = {
    name: 'Nipaprn',
    role: 'Developer',
    tasks: []
};

assignTask(member1, task1);
assignTask(member1, priorityTask1);

priorityTask1.markCompleted();