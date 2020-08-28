import axios from 'axios';
import { SERVER } from '../../config/config.json';
import { IApplyUser } from '../../types/user';

class UserRepository {
  applyUser = async (user: IApplyUser) => {
    const data = await axios.post(`${SERVER}/user`, user);
    return data;
  }
}

export default new UserRepository();
