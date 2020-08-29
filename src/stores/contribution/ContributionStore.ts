import { observable } from 'mobx';
import { autobind } from 'core-decorators';
import ContributionRepository from './ContributionRepository';
import { IUser } from '../../types/user';

@autobind
class ContributionStore {
  @observable userRank: IUser[] = [];

  async getTotalRank(): Promise<void> {
    const response = await ContributionRepository.getTotalRank();
    this.userRank = response.data.data.totalRank;
  }

  async getWeekRank(): Promise<void> {
    const response = await ContributionRepository.getWeekRank();
    this.userRank = response.data.data.weekRank;
  }
}

export default ContributionStore;
