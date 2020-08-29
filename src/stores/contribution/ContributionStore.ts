import { observable } from 'mobx';
import { autobind } from 'core-decorators';
import ContributionRepository from './ContributionRepository';
import { IUser, IWeekRankUser } from '../../types/user';

@autobind
class ContributionStore {
  @observable totalRank: IUser[] = [];
  @observable weekRank: IWeekRankUser[] = [];

  async getTotalRank(): Promise<void> {
    const response = await ContributionRepository.getTotalRank();
    this.totalRank = response.data.data.totalRank;
  }

  async getWeekRank(): Promise<void> {
    const response = await ContributionRepository.getWeekRank();
    this.totalRank = response.data.data.weekRank;
  }
}

export default ContributionStore;
