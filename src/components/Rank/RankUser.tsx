import React from 'react';

import './RankUser.scss';

interface IRankUserProps {
  rankUserItems: JSX.Element[];
}

const RankUser = (props: IRankUserProps) => {
  return (
    <div className="rankUser">
      <table>
        <thead>
          <th>순위</th>
          <th>프로필</th>
          <th>이름</th>
          <th>아이디</th>
          <th>기여도</th>
          <th>Bio</th>
        </thead>

        <tbody>
          {props.rankUserItems}
        </tbody>
      </table>
    </div >
  )
}

export default RankUser;
