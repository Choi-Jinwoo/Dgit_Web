import { autobind } from 'core-decorators';
import { observable } from 'mobx';
import WeekTopRepository from './WeekTopRepository';
import { IWeekTopHistory } from '../../types/weekTop';

@autobind
class WeekTopStore {
  @observable weekTopHistory: IWeekTopHistory[] = [];

  async getWeekTopHistory(): Promise<void> {
    const response = await WeekTopRepository.getWeekTopHistory();
    this.weekTopHistory = response.data.data.history;
  }
}

export default WeekTopStore;
