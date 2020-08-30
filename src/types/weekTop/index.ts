import { IUser } from '../user'

export interface IWeekTopHistory {
  idx: number;
  weekContributions: number;
  createdAt: Date;
  user?: IUser;
}