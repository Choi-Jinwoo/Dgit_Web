export interface IUser {
  userID: string;
  name: string;
  totalContributions: number;
  userImage: string;
  bio: string | null;
  isAllowed: boolean;
  createdAt: Date;
}

export interface IWeekRankUser extends IUser {
  weekContributions: number;
}

export interface IApplyUser {
  userID: string;
  name: string | null;
}


