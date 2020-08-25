export interface IUser {
  userID: string;
  name: string;
  totalContributions: number;
  userImage: string;
  isAllowed: boolean;
  createdAt: Date;
}
