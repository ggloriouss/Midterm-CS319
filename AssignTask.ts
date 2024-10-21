import { TeamMember } from './TeamMember';
import { Task } from './task.ts';

export function assignTask(member: TeamMember, task: Task): void {
    member.tasks.push(task);
    console.log(`Task "${task.title}" assigned to ${member.name} (${member.role}).`);
}
