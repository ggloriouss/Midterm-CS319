import { Task, parseTaskData  } from './task';
import { PriorityTask } from './PriorityTask';
import { TeamMember } from './TeamMember';
import { assignTask } from './AssignTask.ts';
import { Queue } from './Queue';  

//Usage
const jsonData = `
[
    {"title": "Write report", "description": "Complete the quarterly report", "completed": false},
    {"title": "Design logo", "description": "Create a logo for the new project", "completed": true}
]
`;

const invalidJsonData = `
[
    {"title": "Prepare presentation", "description": "Create slides for the meeting", "completed": false},
    {"title": "Test task", "description": "This is a test task"
]
`; // Missing closing brace

// Test with valid JSON data
const tasks = parseTaskData(jsonData);
console.log('Parsed Tasks:', tasks);

// Test with invalid JSON data
const invalidTasks = parseTaskData(invalidJsonData);
console.log('Invalid Parse Result:', invalidTasks);
