import { observable } from 'mobx';
import { autobind } from 'core-decorators';
import ContributionRepository from './ContributionRepository';
import { IUser } from '../../types/user';

@autobind
class ContributionStore {
  @observable totalRank: IUser[] = [];

  async getTotalRank(): Promise<void> {
    const response = await ContributionRepository.getTotalRank();
    this.totalRank = response.data.data.totalRank;
  }
}

export default ContributionStore;
