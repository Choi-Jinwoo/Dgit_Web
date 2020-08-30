import React from 'react';
import { IWeekTopHistory } from '../../../types/weekTop';
import moment from 'moment';

import './HistoryUserItem.scss';

interface IHistoryUserItemProps {
  weekTop: IWeekTopHistory;
}

const moveToGithub = (userID: string) => {
  window.open()!.location.href = `https://github.com/${userID}`;
}

const HistoryUserItem = (props: IHistoryUserItemProps) => {
  return (
    <tr className='historyUserItem' onClick={(e) => props.weekTop.user && moveToGithub(props.weekTop.user?.userID)}>
      <td className='historyUserItem-time'>
        {moment(props.weekTop.createdAt).format('YYYY-MM-DD')}
      </td>
      <td className='historyUserItem-img'>
        <img src={props.weekTop.user === undefined ? '' : props.weekTop.user.userImage} alt="" />
      </td>
      <td className='historyUserItem-name'>
        {props.weekTop.user === undefined ? '삭제된 회원' : props.weekTop.user.name}
      </td >
      <td className='historyUserItem-userID'>{props.weekTop.user === undefined ? '삭제된 회원' : props.weekTop.user.userID}</td>
      <td className='historyUserItem-weekContributions'>
        {props.weekTop.weekContributions}
      </td>
      <td className='historyUserItem-bio'>{props.weekTop.user === undefined ? '-' : !props.weekTop.user.bio || !props.weekTop.user.bio.length ? '-' : props.weekTop.user.bio}</td>
    </tr >
  );
}

export default HistoryUserItem;
