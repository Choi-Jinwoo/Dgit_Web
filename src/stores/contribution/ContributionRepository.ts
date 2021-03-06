import axios from 'axios';
import { SERVER } from '../../config/config.json';

class ContributionRepository {
  getTotalRank = async () => {
    const data = await axios.get(`${SERVER}/contribution/total-rank`);
    return data;
  }

  getWeekRank = async () => {
    const data = await axios.get(`${SERVER}/contribution/week-rank`);
    return data;
  }
}

export default new ContributionRepository();
