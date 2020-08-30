import axios from 'axios';
import { SERVER } from '../../config/config.json';

class WeekTopRepository {
  getWeekTopHistory = async () => {
    const data = await axios.get(`${SERVER}/week-top/history`);
    return data;
  }
}

export default new WeekTopRepository();
