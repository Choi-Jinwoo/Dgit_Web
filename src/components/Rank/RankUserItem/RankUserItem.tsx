import React from 'react';
import { IUser } from '../../../types/user';

import './RankUserItem.scss';

interface IRankUserItemProps {
  rank: number;
  user: IUser;
}

const RankUserItem = (props: IRankUserItemProps) => {
  return (
    <tr className='rankUserItem'>
      <td className='rankUserItem-rank'>{props.rank}</td>
      <td className='rankUserItem-img'>
        <img src={props.user.userImage} alt="" />
      </td>
      <td className='rankUserItem-name'>{props.user.name}</td>
      <td className='rankUserItem-userID'>{props.user.userID}</td>
      <td className='rankUserItem-toatlContributions'>{props.user.totalContributions}</td>
      <td className='rankUserItem-bio'>{!props.user.bio || !props.user.bio.length ? '-' : props.user.bio}</td>
    </tr>
  );
}

export default RankUserItem;
