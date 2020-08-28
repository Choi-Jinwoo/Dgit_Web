import axios from 'axios';
import { SERVER } from '../../config/config.json';

class TotalTopRepository {
  getTotalTopStreak = async () => {
    const data = await axios.get(`${SERVER}/total-top/current-streak`);
    return data;
  }
}

export default new TotalTopRepository();
