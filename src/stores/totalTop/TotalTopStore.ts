import { autobind } from 'core-decorators';
import { observable } from 'mobx';
import TotalTopRepository from './TotalTopRepository';

@autobind
class TotalTopStore {
  @observable totalTopStreak!: number;

  async getTotalTopStreak(): Promise<void> {
    const response = await TotalTopRepository.getTotalTopStreak();
    this.totalTopStreak = response.data.data.currentStreak;
  }
}

export default TotalTopStore;
