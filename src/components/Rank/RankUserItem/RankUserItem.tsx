import React from 'react';
import { IUser } from '../../../types/user';
import { RiMedalLine } from 'react-icons/ri';

import './RankUserItem.scss';

interface IRankUserItemProps {
  rank: number;
  user: IUser;
}

const getMedal = (rank: number): JSX.Element | null => {
  let color = null;
  switch (rank) {
    case 1:
      color = '#ffd700';
      break;
    case 2:
      color = '#c0c0c0';
      break;
    case 3:
      color = '#b87333';
      break;
    default:
      return null;
  }

  return (
    <RiMedalLine size='24px' color={color} />)
}

const RankUserItem = (props: IRankUserItemProps) => {


  return (
    <tr className='rankUserItem'>
      <td className='rankUserItem-rank'>
        {props.rank}
      </td>
      <td className='rankUserItem-img'>
        <img src={props.user.userImage} alt="" />
      </td>
      <td className='rankUserItem-name'>
        <div>
          <p>
            {props.user.name}
          </p>
          {getMedal(props.rank)}
        </div>
      </td>
      <td className='rankUserItem-userID'>{props.user.userID}</td>
      <td className='rankUserItem-toatlContributions'>{props.user.totalContributions}</td>
      <td className='rankUserItem-bio'>{!props.user.bio || !props.user.bio.length ? '-' : props.user.bio}</td>
    </tr>
  );
}

export default RankUserItem;
