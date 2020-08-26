export interface IUser {
  userID: string;
  name: string;
  totalContributions: number;
  userImage: string;
  bio: string | null;
  isAllowed: boolean;
  createdAt: Date;
}
