// TaskNote.model.ts

import { TaskEnum } from '@/types/enum/task.enum';
import { User } from './User.model';

export class TaskNote {
  uniqueId?: number;
  content: string;
  createdAt: Date;
  status: TaskEnum;
  user: User;

  constructor(
    content: string,
    status: TaskEnum,
    user: User,
    createdAt?: Date,
    uniqueId?: number
  ) {
    this.uniqueId = uniqueId;
    this.content = content;
    this.status = status;
    this.user = user;
    this.createdAt = createdAt ?? new Date();
  }
}
