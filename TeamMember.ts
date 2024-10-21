import { Task } from './task.ts';

export interface TeamMember {
    name: string;
    role: string;
    tasks: Task[];
}