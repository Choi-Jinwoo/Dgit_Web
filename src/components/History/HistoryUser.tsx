import React from 'react';

import './HistoryUser.scss';

interface IHistoryUserProps {
  historyUserItems: JSX.Element[];
}

const HistoryUser = (props: IHistoryUserProps) => {
  return (
    <div className="historyUser">
      <table>
        <thead>
          <th>시간</th>
          <th>프로필</th>
          <th>이름</th>
          <th>아이디</th>
          <th>주간 기여도</th>
          <th>Bio</th>
        </thead>

        <tbody>
          {props.historyUserItems}
        </tbody>
      </table>
    </div >
  )
}

export default HistoryUser;
