import { autobind } from 'core-decorators';
import { observable } from 'mobx';
import UserRepository from './UserRepository';
import { IApplyUser } from '../../types/user';

@autobind
class UserStore {
  @observable totalTopStreak!: number;

  async applyUser(user: IApplyUser): Promise<void> {
    await UserRepository.applyUser(user);
  }
}

export default UserStore;
