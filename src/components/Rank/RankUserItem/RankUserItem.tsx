import React from 'react';
import { IUser } from '../../../types/user';
import { RiMedalLine } from 'react-icons/ri';

import './RankUserItem.scss';

interface IRankUserItemProps {
  rank: number;
  user: IUser;
  streak?: number;
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

const getStreak = (streak: number | undefined): JSX.Element | null => {
  if (streak === undefined) {
    return null;
  }

  return (
    <span className="streakText">
      {streak}일 유지 중 🔥
    </span>
  )
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
        <div className='rankUserItem-name-wrapper'>
          <div>
            <p>
              {props.user.name}
            </p>
            {getMedal(props.rank)}
          </div>
          {getStreak(props.streak)}
        </div>
      </td>
      <td className='rankUserItem-userID'>{props.user.userID}</td>
      <td className='rankUserItem-toatlContributions'>{props.user.totalContributions}</td>
      <td className='rankUserItem-bio'>{!props.user.bio || !props.user.bio.length ? '-' : props.user.bio}</td>
    </tr>
  );
}

export default RankUserItem;
